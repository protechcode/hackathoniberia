import { React, useState } from 'react';
import Navbar from "./Navbar";

import axios from "axios";

function Dondecomer() {
    const [ComedoresArray, setComedoresArray] = useState([]);
    async function getComedores() {
        await axios.get("http://localhost:5000/api/comedores").then(res => {
            const data = res.data;
            if (data) {
                setComedoresArray(data);
                console.log(data)
            } else {
                console.log("No Data")
            }
        }).catch(e => { throw new Error })

    }
    return (
        <div>
            <Navbar />
            {ComedoresArray.map(({name, addr, tel})=>{
                return(<div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl" >
             

                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">{name}</h1>

                <p class="text-gray-500 dark:text-gray-300">
                   {addr} 
                </p>
                <p class="text-gray-500 dark:text-gray-300">
                   {tel} 
                </p>


            </div>)
            })}
            
            <h1>Donde Comer</h1>
            <button onClick={() => { getComedores() }}>Get</button>
        </div>

    )
}
export default Dondecomer;