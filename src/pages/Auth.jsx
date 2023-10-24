import React, { useEffect, useState } from "react";
import "./Auth.css";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [login, setlogin] = useState(false);
  const [register, setregister] = useState(true);
  return (
    <div className="auth">
      {login ? <Login /> : null}
      {register ? (
        <Register setregister={setregister} setlogin={setlogin} />
      ) : null}
    </div>
  );
};
const Login = () => {
  const name = "Login";
  const [form, setform] = useState({ username: "", password: "" });

  const [_, setCookies] = useCookies("access_token");

  const navigate = useNavigate();

  function onchange(e) {
    setform((form) => ({ ...form, [e.target.id]: e.target.value }));
  }
  async function submit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/login",
        form
      );
      setCookies("access_token", response.data.token);
      window.localStorage.setItem("userId", response.data.user);
      navigate("/")
    } catch (err) {
      setlogin(true);
    }
  }
  return (
    <>
      <div className="auth-container">
        <Form_Data
          form={form}
          onchange={onchange}
          submit={submit}
          name={name}
          btn_name={name}
        />
      </div>
    </>
  );
};

const Register = ({ setlogin, setregister }) => {
  const name = "Register";
  const [form, setform] = useState({ username: "", password: "" });
  function onchange(e) {
    setform((form) => ({ ...form, [e.target.id]: e.target.value }));
  }
  async function submit(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/v1/auth/register", form);
      setlogin(true);
      setregister(false);
      alert("Registeration successful!");
    } catch (err) {
      setregister(true);
      setlogin(false);
    }
  }
  return (
    <>
      <div className="auth-container">
        <Form_Data
          form={form}
          onchange={onchange}
          submit={submit}
          name={name}
          btn_name={name}
        />
      </div>
    </>
  );
};

const Form_Data = ({ form, onchange, submit, name, btn_name }) => {
  return (
    <form>
      <div className="form-group">
        <h2>{name}</h2>
        <input
          type="text"
          id="username"
          placeholder="Username"
          value={form.username}
          onChange={(e) => onchange(e)}
        />

        <input
          type="password"
          id="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => onchange(e)}
        />
        <button className="btn" onClick={submit}>
          {btn_name}
        </button>
      </div>
    </form>
  );
};
export default Auth;
