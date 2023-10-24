import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/auth" element={<Auth />} />

            <Route path="/cart" element={<Cart />} />

          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
