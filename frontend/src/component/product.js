

import React, { useState } from "react";
// import SearchBAr from "./SearchBAr";

import Header from "./Header";
import DataTable from "./DataTable";
import "./styles/userData.css";
import {Link}  from "react-router-dom"
import add from '../images/Add_plus.png'


const Property = ({user,setUpdate}) => {
  // const [searchkey, setSearchKey] = useState("");
  
  return (
    <div className="userData-container">
      
      <div className="right-side">
        <Header user={user} />
        <Link to="/Create">
        <button id='search-btn'>
          <img className='plus' src={add} alt='data'/> 
          Add Product
          </button>
        </Link>
        <div className="rectangle"></div>
      
        <DataTable setUpdate={setUpdate} />
      </div>
    </div>
  );
};

export default Property;
