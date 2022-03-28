import React from "react";

function Proceso(){
    return(
        <a class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="logo aws"/>
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cómo hemos desarrollado</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                El proceso ha sido el habitual, tocar, buscar información, leer documentación y ver tutoriales, Youtube, AWS, Stackoverflow... <br />
                Nuestro canal de comunicación y herramienta de Pair Programming es Discord, imaginamos que Slack tiene las mismas posibilidades pero sólo ha sido utilizado para seguir los temas del Hackathon Iberia 2022. <br />
                El proyecto está hecho con React para el Frontend, Node.js para el Backend. Alojado en Github para el desarrollo y el  posterior despliegue.<br /><br />
                Los datasets seleccionados han sido los del Ayuntamiento de Barcelona, ya que es aquí dónde vivimos.
                </p>
            </div>
    </a>
    )
}
export default Proceso;