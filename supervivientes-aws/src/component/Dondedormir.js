import { React, useState } from 'react';
import Navbar from "./Navbar";
import axios from "axios";
function Dondedormir(){
    const [DormirArray, setDormirArray] = useState([]);
    async function getAlbergues(){
        await axios.get("http://localhost:5000/api/albergues").then(res => {
            const data = res.data;
            if (data) {
                setDormirArray(data);
                console.log(data)
            } else {
                console.log("No Data")
            }
        }).catch(e => { throw new Error })
    } 
  
    return(
        <div>
            <Navbar/>
            {DormirArray.map(({name, addr, tel})=>{
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
            <h1>Donde Dormir</h1>
            <button onClick={()=>{getAlbergues()}}>Get</button>
        </div>
    )
}
export default Dondedormir;