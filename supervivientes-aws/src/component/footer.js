import React from "react";

function Footer() {
    return (

        <footer class="flex justify-center px-4 text-gray-800 bg-white dark:text-white dark:bg-gray-800">
            <div class="container py-6">
                <h1 class="text-lg font-bold text-center lg:text-2xl">
                    Únete a más de 11.000 usuarios <br /> y no te pierdas consejos, tutoriales y más.
                </h1>

                <div class="flex justify-center mt-6">
                    <div class="bg-white border rounded-md focus-within:ring dark:bg-gray-800 dark:border-gray-600 focus-within:border-blue-400 focus-within:ring-blue-300 focus-within:ring-opacity-40 dark:focus-within:border-blue-300">
                        <div class="flex flex-wrap justify-between md:flex-row">
                            <input type="email" class="p-2 m-1 text-sm text-gray-700 bg-transparent appearance-none focus:outline-none focus:placeholder-transparent" placeholder="Introduce tu email" aria-label="Introduce tu email" />
                            <button class="w-full px-3 py-2 m-1 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded-md dark:hover:bg-gray-600 dark:bg-gray-700 lg:w-auto hover:bg-gray-700">suscríbete</button>
                        </div>
                    </div>
                </div>

                <hr class="h-px mt-6 border-gray-300 border-none dark:bg-gray-700" />

                <div class="flex flex-col items-center justify-between mt-6 md:flex-row">
                    <div>
                        <a href="https://www.hackathoniberia.com/" target="_blank" class="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Hackathon For Good</a>
                    </div>

                    <div class="flex mt-3 md:m-0">
                        <div class="-mx-4">
                            <a href="/Home" class="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2">Portal</a>
                            <a href="/About" class="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2">Sobre el Proyecto</a>
                            <a href="/Contact" class="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2">Contacto</a>
                            </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;