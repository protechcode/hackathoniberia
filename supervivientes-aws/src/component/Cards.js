import React from "react";
import axios from "axios";
import Dondecomer from "./Dondecomer";
import Dondedormir from "./Dondedormir";
import Dondeducharse from "./Dondeducharse";

import { Routes, Link, Route, useParams, useNavigate } from "react-router-dom"
import { useState } from "react";




function Card() {

    
    const navigate = useNavigate()
    const dormir = () => {
        console.log("ClickDormir")
       
      
      
        navigate("/dormir")
        
    }
    const comer = () => {
        console.log("ClickDormir")
       
      
      
        navigate("/comer")
        
    }
    const duchas = () => {
        console.log("ClickDormir")
       
      
      
        navigate("/duchas")
        
    }

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
        <section class="bg-white dark:bg-gray-900">
            <div class="container px-6 py-10 mx-auto">
                <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Explore los <span class="underline decoration-blue-500"> servicios disponibles</span></h1>

                <p class="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
                    Accede a cada sección para ver dónde está cada lugar y reserva tu plaza.
                </p>

                <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                    <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl" onClick={dormir}>
                        <span class="inline-block text-blue-500 dark:text-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                            </svg>
                        </span>

                        <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Dormir</h1>
                        <p class="text-gray-500 dark:text-gray-300">
                            Albergues nocturnos de la ciudad, necesaria derivación desde Trabajo Social de Servicios Sociales. También servicios temporales de acogida y su disponibilidad.    
                        </p>

                        <a href="#" class="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                    </div>

                    <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl" onClick={duchas}>
                        <span class="inline-block text-blue-500 dark:text-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                            </svg>
                        </span>

                        <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white" button onClick={() => { getDuchas() }}>Ducharse</h1>

                        <p class="text-gray-500 dark:text-gray-300">
                            Espacios con servicio de ducha y ropero, de acceso directo. <br /><br />Con horario de 8:00 a 20:00h
                        </p>

                        <a href="#" class="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                    </div>

                    <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl" onClick={comer}>
                        <span class="inline-block text-blue-500 dark:text-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                        </span>

                        <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Comer</h1>

                        <p class="text-gray-500 dark:text-gray-300">
                            Comedores sociales de la ciudad, acceso con derivación. No es necesario reservar plaza
                            <br />Con horario de 12:00 a 15:00h
                        </p>

                        <a href="#" class="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>)
}

export default Card