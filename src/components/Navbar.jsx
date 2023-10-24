import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import "./Navbar.css";
import { useCookies } from 'react-cookie';
const Navbar = () => {
  const navigate = useNavigate();
  const [cookies,setcookies]= useCookies(["access_token"])
  const logout = ()=>{
    setcookies("access_token","");
    navigate("/auth");
  }
  return (
    <div className="navbar">
        
        <img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png" alt="" />
        <div className='search'>
            <input type="text" placeholder='Search' />
      
        </div>
        <div className='navbar_items'>
        <Link to="/" >Home</Link>
        <Link to="/cart">Cart</Link>
        {
          !cookies.access_token?(<Link to="/auth">Login</Link>):<button className='navbtn' onClick={logout}>Logout</button>
        }
        
        </div>
    </div>
  )
}

export default Navbar