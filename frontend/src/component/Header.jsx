import React from "react";
import userIcon from "../images/User_icon.png";
import "./styles/header.css";
// import down from "../images/down.png";
import { useNavigate } from "react-router-dom";



const Header = ({ user }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/Signin");
  };

  return (
    <div className="header-container">
      <div className="header-id">Well come  </div>
      <div className="logout">
        <img className="user" src={userIcon} alt="user" />

        {/* <div className="username">{"   " + user.UserName}</div> */}
        <button class="logout-btn" onClick={() => {if (window.confirm("Do you want to logout.!?")) {
              handleLogout();
            }
          }}>Log out</button>

        
        
      </div>
    </div>
  );
};

export default Header;
