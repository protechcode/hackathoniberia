import React from "react";
import Navbar from "./Navbar";
import axios from "axios";
function Dondeducharse(){
    async function getDuchas(){
        await axios.get("http://localhost:5000/api/lavatorios").then(res=>{console.log(res.data)})
    } 
    return(
       <div>
           <Navbar/>
            <h1>Donde Ducharse</h1>
            <button onClick={()=>{getDuchas()}}>Get</button>
       </div>
    )
}
export default Dondeducharse;