import React from "react";
import colectivosdesfavorecidos from "../../src/colectivosdesfavorecidos.png"


function Cardaws() {
    return (

        <a href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://imgs.search.brave.com/KwugbMmxEh3nxAruOAmmu42yWBsJozn31yqBZO32oMg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzExL2FtYXpvbi13/ZWItc2VydmljZXMt/bG9nby5wbmc" alt="logo aws"/>
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Porqué AWS</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Una de las problemáticas sociales mas cruda y al parecer de más difícil resolución para las Administraciones y la sociedad.</p>
                </div>
        </a>

    )
}
export default Cardaws