
import axios from "axios";

import React, { useState } from "react";
import "./styles/styles.css";
import "./styles/crete.css";
import { Link, useNavigate } from "react-router-dom";



const Create = () => {
  const [name,setName]=useState("")
  const [type,setType]=useState("")
  const [price,setPrice]=useState(0)
  const [discount,setDiscount]=useState("")

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data={
      productName:name,
		  productPrice:parseInt(price),
      productType:type,
		  productDiscount:discount
      
    }
    // console.log(data);
    // console.log(parseInt(data.productPrice));
    try {
    //   const res = await fetch("https://borderf.herokuapp.com/api/products", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     token: localStorage.getItem("token"),http://127.0.0.1:5050/api/products
    //   },
    //   body: JSON.stringify(data),
    // });
    const res = await axios.post(`https://borderf.herokuapp.com/api/products/`, data, {
      withCredentials: false,
      headers: {
        //     "Content-Type": "application/json",
     Authorization: "Bearer "+ localStorage.getItem("token"),
          },
      // token: localStorage.getItem("token"),
    });

    console.log(res);
    
   
   

    if (res.data.payload === "Product added successfully." && res.data.success=== true) {
      alert(res.data.payload);
       navigate("/Product")
    } else {
      alert(res.data.payload);
    }
  } catch (error) {
    console.log(error)
    alert(error);
  }   
  };

  return (
    <div className="data-container">
       <div className="basic">
     
     <div className="heading-cretat">
      <div className="create-data-div">
      <h2 className="create-data">Product Data</h2></div>
      <Link to="/Product">
               <button className="btn1 ">Previous</button>
             </Link>
             </div>
      
      
      
       <div className="main">
         <form className="form-basic" onSubmit={handleSubmit}>
           <label>Name</label>
           <input className="data" placeholder="product Name" onChange={(e)=>setName(e.target.value)}/>
           <label >Type</label>
           <input className="data" placeholder="e.g. saler,dealer,provider" onChange={(e)=>setType(e.target.value)}/>
           <label >price</label>
           <input className="data" placeholder="price" type="number" onChange={(e)=>setPrice(e.target.value)}/>
           <label >Discount</label>
           <input className="data" placeholder="Discount" onChange={(e)=>setDiscount(e.target.value)}/>

             <button className="btn2">Add property</button>
         
         </form>
       </div>
     </div>
    </div>
   
  
  );
};

export default Create;
