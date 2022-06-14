// import React from 'react'

// const Signup = () => {
//   return (
//     <div>Signup</div>
//   )
// }

// export default Signup

import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./styles/SignUp.css";
import axios from "axios";
import eye from "../images/eye.png";

function Signup() {
    const [username,setUsername]=useState("")
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Password !== confirmPassword) return alert("Password doesn't match");

    const user = {

      username:e.target.elements.username.value,
      password:e.target.elements.password.value,
     
    };

    try {
      
      const res = await axios.post(`https://borderf.herokuapp.com/auth/register`, user, {
        withCredentials: false,
      });
      console.log(res);
    //   console.log("stri",res.data.success)
    //   console.log("token",res.data.token);
      if (res.data.payload==="User registered successfully." && res.data.success === true) {
        localStorage.setItem("token", res.data.token);
    //   setUser(data.username)
    alert(res.data.payload)
    console.log(username);
        navigate("/Signin");
      }else{
        alert(res.data.payload)
      }
      
    } catch (error) {
      alert(error);
    }

   
  };
  return (
    <div className="sign-up-parent">
      <div className="sign-up-form-container">
        <h1 style={{ color: "#4c57b6" }}>Details</h1>
        <p>Create New Account</p>
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
            value={Password}
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

          <input
            className="confirm-password"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit" className="submit-button">
            Sign Up
          </button>
        </form>
      </div>
      
    </div>
  );
}
export default Signup;
