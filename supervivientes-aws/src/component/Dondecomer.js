import React from "react";
import Navbar from "./Navbar";

import axios from "axios";

function Dondecomer() {
   async function getComedores(){
        await axios.get("http://localhost:5000/api/comedores").then(res=>{console.log(res.data)})
    }
    return (
        <div>
            <Navbar/>
            <h1>Donde Comer</h1>
            <button onClick={()=>{getComedores()}}>Get</button>
        </div>

    )
}
export default Dondecomer;