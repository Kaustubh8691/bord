// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./styles/userData.css";
import Toggle from "./Toggle";

// const url = process.env.REACT_APP_API + "api/products";

const DataTable = ({ setUpdate}) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  var dataone = 0;

  // const [status,setStatus]=useState("")

  async function getData() {
    try {
      const res = await axios.get(`https://borderf.herokuapp.com/api/products`,  {
      withCredentials: false,
      headers: {
        //     "Content-Type": "application/json",
     Authorization: "Bearer "+ localStorage.getItem("token"),
          },
      // token: localStorage.getItem("token"),
    });

    console.log(res.data.payload);
    if(res.data.payload){
      setData(res.data.payload)
    }
    
    

      // const res = await jsonRes.json();
      // if (res.status === "sucess") {
      //   setData(res.data);
      // } else {
      //   console.log("hhggg");
      //   // navigate("/Signin");
      // }

      // console.log(res);
    } catch (error) {
      console.log("hh");
      // navigate("/Signin");
    }
  }

  useEffect(() => {
    getData();
  }, []);
if (data){
   dataone = data;
}
  

  return (
    <>
      <div className="datatable-container">
        <div className="heading"  >
          <div className="table-heading ppid">ProductID</div>
          <div className="table-heading iamges">Name</div>
          <div className="table-heading property">Price</div>
          <div className="table-heading contact">Type</div>
          <div className="table-heading area">Discount</div>
          <div className="table-heading">Edit</div>
          <div className="table-heading">Delete</div>
          
        </div>
        <div className="rowdata">
        {dataone.map((obj, idx) => (
              <Toggle key={idx} obj={obj} getData={getData} setUpdate={setUpdate} />
            ))}
        </div>
        
      </div>
      
    </>
  );
};

export default DataTable;
