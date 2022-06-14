import React, { useState } from "react";
import {useNavigate}  from "react-router-dom"
import axios from "axios";

const Toggle = ({ obj, getData,setUpdate }) => {
  // const [data,setData]=useState()
  // const [id,setID]=useState()

  const navigate = useNavigate();
  // data=obj   setID(parseInt(Math.random()*10000) )

  const handledit= async()=>{
    setUpdate(obj._id)
      navigate("/Edit")
  }
  const handledelete = async () => {
    try {
      // const res = await axios.get(`http://localhost:5000/property`, obj, {
      //   withCredentials: true,
      // });
      const data = {
        productId: obj._id
      }
      console.log(data);
      console.log("token is",localStorage.getItem("token")); 

      const res = await axios.delete(`https://borderf.herokuapp.com/api/products`, data, {
        withCredentials: false,
        headers: {
          //     "Content-Type": "application/json",
          
       Authorization: "Bearer "+ localStorage.getItem("token"),
            },
        // token: localStorage.getItem("token"),
      });
  
      console.log(res);
      
      alert(res)
      
  
      // if (res.data.success === true) {
      //   alert("Data Get updated")
      // navigate("/Product")

      // getData();
    } catch (error) {
      alert("Delete part under process");
    console.log(error);
    }
  };

  // const [state, setState] = useState(false);
  return (
    
    <div className="tabledats">
      <div className="ppid-row"> ID{parseInt(Math.random()*10000)}</div>
      <div className="property-row">{obj.productName}</div>
      <div className="contact-row">{obj.productPrice}</div>
      <div className="area-row">{obj.productType}</div>
      <div className="views-row">{obj.productDiscount}%</div>
      <button className="edit-btn" onClick={(e)=>handledit(obj)}>Edit</button>
      <button className="delete-btn" onClick={(e)=>handledelete(obj)}>Delete</button>
     

    </div>
   
  );
};


export default Toggle;
