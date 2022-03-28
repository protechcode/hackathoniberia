import React from "react";
import colectivosdesfavorecidos from "../../src/colectivosdesfavorecidos.png"


function Cardaws() {
    return (

        <a class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://imgs.search.brave.com/KwugbMmxEh3nxAruOAmmu42yWBsJozn31yqBZO32oMg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzExL2FtYXpvbi13/ZWItc2VydmljZXMt/bG9nby5wbmc" alt="logo aws"/>
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Porqué AWS</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Nos enfrentamos varias horas al ordenador y a la consola de AWS, en la sección Resumen de la Instancia, hemos detectado, en nuestro caso,
                    que no podíamos lanzar nuestra pagina desde el enlace <a href="https://ec2-52-1-91-108.compute-1.amazonaws.com/" target="_blank" class="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2">open adress</a>
                    de la Public IPv4 y debíamos Copiar/Pegar la dirección de la pagina en el <a href="http://ec2-52-1-91-108.compute-1.amazonaws.com/login" target="_blank"> navegador. Siendo la diferencia que nos lleva directamente a la pagina de Login.<br /></a>
                    Hemos investigado sobre Lambda y el uso de las funciones que hace, pero ha sido inviable implementarlo para este Hachathon, tampoco era el objetivo.
                    </p>
                </div>
        </a>

    )
}
export default Cardaws