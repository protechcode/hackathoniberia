import React from "react";
import colectivosdesfavorecidos from "../../src/colectivosdesfavorecidos.png"


function Cardintel() {
    return (

        <a href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://imgs.search.brave.com/xQ2hQs8xNlklIGR092DEI9oM6IoXKXsaAF8S4gDMDr0/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5n/YW1pbmdwY2J1aWxk/ZXIuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9pbnRlbC1sb2dv/LnBuZw" alt="logo intel"/>
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Porqué intel</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Utilizamos la capa gratuita debido a que es suficiente para levantar este Hackathon for Good, pero hemos probado el procesador M6i con un coste de 7€ aproximadamente, a valorar para proyectos de mayor envergadura y petición de datos.</p>
                </div>
        </a>

    )
}
export default Cardintel