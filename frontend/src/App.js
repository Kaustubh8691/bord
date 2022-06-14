import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Signin from './component/Signin';
import Signup from './component/Signup';
import Product from './component/product';
import Create from './component/Create';
import Update from './component/Update';
import { useState } from "react";


function App() {
  const [user, setUser] = useState({
    User: localStorage.getItem("user"),
  });
  const [update,setUpdate]=useState("")

  return (
  
     <BrowserRouter>
     <Routes>
       <Route path="/*" element={<Signin setUser={setUser} />} />
       {/* login page */}
       <Route path="/SignUp" element={<Signup />} />
       {/* registration page */}
       <Route path="/Product" element={<Product user={user} setUpdate={setUpdate}/>} />
       {/* property page */}
       <Route path="/Create" element={<Create  />}
       />
       <Route path="/Edit" element={<Update update={update}/>}/>
     </Routes>
   </BrowserRouter>
  );
}

export default App;
