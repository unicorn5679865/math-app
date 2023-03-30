import React from "react"
import Header from "./header"
import Footer from "./footer"

export default function MenuContainers() {
    return (
    <>
        <div class="bg-gradient-to-br from-black via-transparent to-black bg-fixed flex flex-row flex-wrap justify-center items-center ">
            {/* first card */}
            <div className=" relative sm:m-12 m-5 max-w-sm rounded-lg bg-white shadow-lg  ">
                    <a href="#!" className="">
                        <img
                        className="rounded-lg opacity-50"
                        src="img/функция2.jpg"
                        alt="" />
                    </a>
                    <div className="absolute flex flex-column flex-wrap  justify-center items-center p-[5%_10%] top-2 text-center  ">
                        <h5
                            className=" sm:mb-6 text-xl font-medium leading-tight text-center ">
                            Функция
                        </h5>
                        <p className=" mb-4 text-base text-neutral-600 hidden sm:inline">
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </p>
                        <button 
                            type="button" 
                            className="bg-primary-orange text-xs font-medium uppercase shadow-[0_4px_9px_-4px_#ff951c] transition duration-150 ease-in-out hover:bg-primary-green hover:shadow-[0_8px_9px_-4px_#10B582] focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 px-5 py-2 text-sm leading-5 rounded font-semibold text-white">
                            Учить 
                        </button>
                    </div>
            </div>
            {/* second card */}
            <div
                className="relative m-12 max-w-sm rounded-lg bg-white shadow-lg  ">
                    <a href="#!" className="">
                        <img
                        className="rounded-lg opacity-50 sm:h-[230px] "
                        src="img/тригонометрия.jpg"
                        alt="" />
                    </a>
                    <div className="flex flex-column flex-wrap justify-center items-center p-6 absolute top-2 text-center ">
                        <h5
                            className="mb-6 text-xl font-medium leading-tight ">
                            Тригонометрия
                        </h5>
                        <p className="mb-6 text-base text-neutral-600 ">
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </p>
                        <button 
                            type="button" 
                            className="bg-primary-orange text-xs font-medium uppercase shadow-[0_4px_9px_-4px_#ff951c] transition duration-150 ease-in-out hover:bg-primary-green hover:shadow-[0_8px_9px_-4px_#10B582] focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 px-5 py-2 text-sm leading-5 rounded font-semibold text-white">
                            Учить
                        </button>
                    </div>
            </div>
            {/* third card */}
            <div
                className="relative m-12 max-w-sm rounded-lg bg-white shadow-lg  ">
                    <a href="#!" className="">
                        <img
                        className="rounded-lg opacity-50"
                        src="img/степенная.jpg"
                        alt="" />
                    </a>
                    <div className="flex flex-column flex-wrap justify-center items-center p-6 absolute top-2 text-center">
                        <h5
                            className="mb-4 text-xl font-medium leading-tight ">
                            Степень с рациональным показателем. Степенная функция
                        </h5>
                        <p className="mb-4 text-base text-neutral-600 ">
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </p>
                        <button 
                            type="button" 
                            className="bg-primary-orange text-xs font-medium uppercase shadow-[0_4px_9px_-4px_#ff951c] transition duration-150 ease-in-out hover:bg-primary-green hover:shadow-[0_8px_9px_-4px_#10B582] focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 px-5 py-2 text-sm leading-5 rounded font-semibold text-white">
                            Учить
                        </button>
                    </div>
            </div>
            {/* forth card  */}
            <div
                className="relative m-12 max-w-sm rounded-lg bg-white shadow-lg  ">
                    <a href="#!" className="">
                        <img
                        className="rounded-lg opacity-50 sm:h-[230px]"
                        src="img/стереометрия.jpg"
                        alt="" />
                    </a>
                    <div className="flex flex-column flex-wrap justify-center items-center p-6 absolute top-2 text-center">
                        <h5
                            className="mb-4 text-xl font-medium leading-tight ">
                            Введение в стереометрию
                        </h5>
                        <p className="mb-4 text-base text-neutral-600 ">
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </p>
                        <button 
                            type="button" 
                            className="bg-primary-orange text-xs font-medium uppercase shadow-[0_4px_9px_-4px_#ff951c] transition duration-150 ease-in-out hover:bg-primary-green hover:shadow-[0_8px_9px_-4px_#10B582] focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 px-5 py-2 text-sm leading-5 rounded font-semibold text-white">
                            Учить
                        </button>
                    </div>
            </div>
            {/* fifth card */}
            <div
                className="relative m-12 max-w-sm rounded-lg bg-white shadow-lg  ">
                    <a href="#!" className="">
                        <img
                        className="rounded-lg opacity-50"
                        src="img/перпендикулярность.jpg"
                        alt="" />
                    </a>
                    <div className="flex flex-column flex-wrap justify-center items-center p-6 absolute top-2 text-center">
                        <h5
                            className="mb-4 text-xl font-medium leading-tight ">
                            Перпендикулярность прямых и плоскостей
                        </h5>
                        <p className="mb-4 text-base text-neutral-600 ">
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </p>
                        <button 
                            type="button" 
                            className="bg-primary-orange text-xs font-medium uppercase shadow-[0_4px_9px_-4px_#ff951c] transition duration-150 ease-in-out hover:bg-primary-green hover:shadow-[0_8px_9px_-4px_#10B582] focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 px-5 py-2 text-sm leading-5 rounded font-semibold text-white">
                            Кнопка
                        </button>
                    </div>
            </div>
            {/* sixth card */}
            <div
                className="relative m-12 max-w-sm rounded-lg bg-white shadow-lg  ">
                    <a href="#!" className="">
                        <img
                        className="rounded-lg opacity-50"
                        src="img/параллельность.jpg"
                        alt="" />
                    </a>
                    <div className="flex flex-column flex-wrap justify-center items-center p-6 absolute top-2 text-center ">
                        <h5
                            className="mb-4 text-xl font-medium leading-tight ">
                            Параллельность прямых и плоскостей
                        </h5>
                        <p className="mb-4 text-base text-neutral-600 ">
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </p>
                        <button 
                            type="button" 
                            className="bg-primary-orange text-xs font-medium uppercase shadow-[0_4px_9px_-4px_#ff951c] transition duration-150 ease-in-out hover:bg-primary-green hover:shadow-[0_8px_9px_-4px_#10B582] focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 px-5 py-2 text-sm leading-5 rounded font-semibold text-white">
                            Учить
                        </button>
                    </div>
            </div>

        </div>
       
    </>
    )
}





// проверить цвета,  что такое data-te-ripple-color and data-te-ripple-init
