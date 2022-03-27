import React from "react";
import Navbar from "./Navbar";
import CallActionImage from "../../src/Email-campaign-bro.svg"
function Aboutproject() {
    return (
        <div>
            <Navbar />
            <div class="container px-6 py-16 mx-auto">

                <div class="items-center lg:flex">
                    <div class="w-full lg:w-1/2">
                        <div class="lg:max-w-lg">
                            <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">Subscribe To The <span class="text-blue-500">Newsletter</span></h1>

                            <p class="mt-4 text-gray-600 dark:text-gray-400">be the first to knows when our <span class="font-medium text-blue-500">Brand</span> is live</p>

                            <div class="flex flex-col mt-8 space-y-3 lg:space-y-0 lg:flex-row">
                                <input id="email" type="text" class="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address" />

                                <button class="w-full px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <img class="w-full h-full max-w-md" src={CallActionImage} alt="#" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Aboutproject;