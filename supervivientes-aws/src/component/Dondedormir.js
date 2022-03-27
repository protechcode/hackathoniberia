import React from "react";
import Navbar from "./Navbar";
import axios from "axios";
function Dondedormir(){
    async function getAlbergues(){
        await axios.get("http://localhost:5000/api/albergues").then(res=>{console.log(res.data)})
    } 
    return(
        <div>
            <Navbar/>
            <h1>Donde Dormir</h1>
            <button onClick={()=>{getAlbergues()}}>Get</button>
        </div>
    )
}
export default Dondedormir;