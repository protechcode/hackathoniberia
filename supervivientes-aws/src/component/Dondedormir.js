import { React, useState } from 'react';
import Navbar from "./Navbar";
import axios from "axios";
function Dondecomer() {
    const [ComedoresArray, setComedoresArray] = useState([]);
    async function getAlbergues() {
        await axios.get("http://localhost:5000/api/albergues").then(res => {
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
            <div class="container px-6 py-16 mx-auto">

                <div class="items-center lg:flex">
                    <div class="w-full lg:w-1/2">
                        <div class="lg:max-w-lg">


                            <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">Dónde Dormir</h1>
                            <button class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu" onClick={() => { getAlbergues() }}>Buscar lugares
                            </button>
                            {ComedoresArray.map(({ name, addr, tel }) => {
                                return (
                                    <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl" >


                                        <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">{name}</h1>

                                        <p class="text-gray-500 dark:text-gray-300">
                                            {addr}
                                        </p>
                                        <p class="text-gray-500 dark:text-gray-300">
                                            {tel}
                                        </p>


                                    </div>)
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dondecomer;