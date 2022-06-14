// import React from 'react'

// const Signin = () => {
//   return (
//     <div>Signin</div>
//   )
// }

// export default Signin
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./styles/SignIn.css";
import eye from "../images/eye.png";
import axios from "axios";

function Signin({setUser}) {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: e.target.elements.username.value,
      password: e.target.elements.password.value,
    };
    try {
      const res = await axios.post(`https://borderf.herokuapp.com/auth/login`, data, {
        withCredentials: false,
       
      });

      console.log(res);
    //   console.log("stri",res.data.success)
    //   console.log("token",res.data.token);
      if (res.data.payload==="Logged in." && res.data.success === true) {
        localStorage.setItem("token", res.data.token);
      setUser(data.username)
      alert(res.data.payload)
        navigate("/Product");
      }else {
        alert(res.data.payload)
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="sign-in-parent">
      <div className="sign-in-form-container">
        <h1 style={{ color: "#4c57b6" }}>Newwst</h1>
        <p className="description">
          Enter your credentials to access your Account
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="username"
            id="usename"
            placeholder="usename"
            name="username"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            id="password"
            name="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="eye"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            <img src={eye} alt="no data" />
          </span>
          <button type="submit" className="submit-button">
            Sign in
          </button>
          <Link to="/Signup" style={{ fontWeight: "bold" }}>
            {" "}
            <p className="signup">SignUp</p>
          </Link>
        </form>
      </div>
      <div>
        <p className="para">
          Don't have an account?
          <Link to="/Signup" style={{ fontWeight: "bold" }}>
            {" "}
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Signin;
