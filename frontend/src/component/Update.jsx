import React from 'react'
import {useNavigate}  from "react-router-dom"
import { useState } from "react"
import axios from "axios";
import "./styles/styles.css";


const Update = ({update}) => {
  const [name,setName]=useState("")
  const [type,setType]=useState("")
  const [price,setPrice]=useState(0)
  const [discount,setDiscount]=useState("")

    const navigate = useNavigate();


    const handleSubmit= async (e)=>{
      e.preventDefault();
      console.log("data",update);
    const data={
      productId:update,
      productName:name,
		  productPrice:parseInt(price),
      productType:type,
		  productDiscount:discount
      
    }
    try {
      
      const res = await axios.put(`https://borderf.herokuapp.com/api/products`, data, {
        withCredentials: false,
        headers: {
          //     "Content-Type": "application/json",
       Authorization: "Bearer "+ localStorage.getItem("token"),
            },
        // token: localStorage.getItem("token"),
      });
  
      console.log(res);
      
      
  
      if (res.data.success === true) {
        alert("Data Get updated")
      navigate("/Product")

      } else {
        alert(res.data.payload);
      }
    } catch (error) {
      console.log(error)
      alert(error);
    }
  
     
    };
        // navigate("/Product")
    
  return (
    <div className='update container'>
       <h2 className="edit-head">Edit</h2>
        <form className="form-basic" onSubmit={handleSubmit}>
        <label>Name</label>
           <input className="datas" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
           <label >Type</label>
           <input className="datas" placeholder="Type" onChange={(e)=>setType(e.target.value)}/>
           <label >price</label>
           <input className="datas" placeholder="price" type="number" onChange={(e)=>setPrice(e.target.value)}/>
           <label >Discount</label>
           <input className="datas" placeholder="Discount" onChange={(e)=>setDiscount(e.target.value)}/>
        <button className="edit-submit-btn" >submit</button>
        </form>
    </div>
  )
}

export default Update