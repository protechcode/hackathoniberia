import { React, useState } from 'react';
import Navbar from "./Navbar";
import axios from "axios";
function Dondeducharse() {
    const [DuchasArray, setDuchasArray] = useState([]);
    async function getDuchas() {
        await axios.get("http://localhost:5000/api/lavatorios").then(res => {
            const data = res.data;
            if (data) {
                setDuchasArray(data);
                console.log(data)
            } else {
                console.log("No Data")
            }
        }).catch(e => { throw new Error })
    }
    return (
        <div>
            <Navbar />
            {DuchasArray.map(({ name, addr, tel }) => {
                return (
                <div class="p-3 space-y-3 border-2  dark:border-blue-300 rounded-xl" >
                    <a class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://cdn-icons-png.flaticon.com/512/760/760586.png" alt="dibujo persona duchándose" />
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                            <p class="text-gray-500 dark:text-gray-300">
                                {addr}
                            </p>
                            <p class="text-gray-500 dark:text-gray-300">
                                {tel}
                            </p>
                        </div>
                    </a>

                </div>)
            })}
            <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white"v>Donde Ducharse</h1>
            <button onClick={() => { getDuchas() }}>Get</button>
            
        </div>
    )
}
export default Dondeducharse;