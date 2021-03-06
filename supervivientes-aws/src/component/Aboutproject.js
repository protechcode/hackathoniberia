import React from "react";
import Navbar from "./Navbar";
import CallActionImage from "../../src/Email-campaign-bro.svg";
import Cardcolectivos from "./Cardcolectivos";
import Cardaws from "./Cardaws";
import Cardintel from "./Cardintel";
import Cardproceso from "./Cardproceso";

import axios from 'axios';


function Aboutproject() {
    async function register(param) {

        await axios.post("http://localhost:5000/api/register",{
            email: param
        }).then(res=>{console.log(res.data)})
    }
    function handleSubmit(e) {
        e.preventDefault();
        const email = e.target.email.value;
        console.log(email);
        register(email);
        


    }
    return (
        <div>
            <Navbar />
            <div class="container px-6 py-16 mx-auto">

                <div class="items-center lg:flex">
                    <div class="w-full lg:w-1/2">
                        <div class="lg:max-w-lg">
                            <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">En esta competición, buscamos generar un impacto social concreto sobre la temática de Colectivos Desfavorecios y así mismo dar visibilidad a la importancia de la tecnología, la innovación y profesionales IT como parte de la solución de muchos de los <span class="text-blue-500">desafíos que enfrentamos como sociedad.</span></h1>

                            <p class="mt-4 text-gray-600 dark:text-gray-400">Apúntante para enterarte de nuevas características <span class="font-medium text-blue-500">de la APP</span></p>

                            
                                <form onSubmit={(e)=>handleSubmit(e)}>
                                    <input required id="email" type="email" name="email" class="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Dirección Email" />

                                    <button type="submit" class="w-full px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
                                        Suscribete
                                    </button>
                                </form>
                           



                        </div>
                    </div>

                    <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <img class="w-full h-full max-w-md" src={CallActionImage} alt="#" />
                    </div>
                </div>
            </div>
            <div class="container px-2 py-16 mx-auto">

                <div class="items-center lg:flex">
                    <div class="w-full lg:w-1/2">
                        <div class="lg:max-w-lg">
                            <Cardcolectivos />
                            <Cardaws />
                            
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2">
                        <div class="lg:max-w-lg">
                        <Cardproceso /> <br />
                            <Cardintel />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Aboutproject;