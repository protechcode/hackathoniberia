import React from "react";
import colectivosdesfavorecidos from "../../src/colectivosdesfavorecidos.png"


function Cardcolectivos() {
    return (

        <a class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={colectivosdesfavorecidos} alt=""/>
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Colectivo de Personas sin Hogar</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Una de las problemáticas sociales mas cruda y al parecer más difícil de resolver para las Administraciones y la sociedad.<br /> Una problematica social y personal de quizás, uno de los colectivos,
                    por no decir el colectivo más invisibilizado. <br />Sin darnos cuenta, la mayoría de las personas, la facilidad con la que el sistema en el que vivimos te puede devorar y expulsar.
                    <br /> Siendo conscientes de dificuldad que supone para las personas sin hogar hacer su día a día, este proyecto pretende facilitar, en la medida de lo posible, el conocimiento y acceso a los servicios existentes en la Ciudad. 
                    <br />Tales cómo: 
                    <li>¿Dónde dormir?</li>
                    <li>¿Dónde comer?</li>
                    <li>¿Dónde ducharse?</li>
                    
                    </p>
                </div>
        </a>
        
    )
}
export default Cardcolectivos