import Nav from "../components/Nav"
import React, {useEffect, useState} from 'react';
import Image from "next/image";
import Link from "next/link"

function Main() {

   /* const [isAnimated, setIsAnimated] = useState(false)

    useEffect(() => {
        setIsAnimated(true)
    },[])
*/
    return (
        <>
            <Nav />
            <div className="min-h-screen w-screen flex justify-center items-center flex-col-reverse lg:flex-row lg:justify-around lg:pt-10:absolute sm:inset-0 lg:px-32 lg:ml-12">

                <div className="mt-0 text-center lg:text-left">
                    <h1 className="font-nunito text-customGreen font-bold lg:text-4xl text-5xl lg:text-5xl">
                        Hello there!
                        <br></br>
                        <span className="font-quicksand font-light lg:text-3xl mt-0">Take a look around plis.</span>
                    </h1>
                    <p className="text-base text-gray-700">Web developer </p>
                    <Link href="/about" className="inline-block bg-lightGreen font-nunito text-white tracking-wider px-10 py-5 rounded-full shadow-lg uppercase text-lg tracking-wide mt-5 cursor-pointer">Lezz go!</Link>
                </div>

                <Image src= "food.svg"
                     alt="photo"
                     className="w-screen lg:max-w-2xl sm:w-7/12 lg:pl-12"
                />
            </div>
        </>
    );
}

export default Main;

/*

className={`${isAnimated ? 'scale-y-100' : "scale-y-0"}
                       mt-10 text-center lg:text-left transform transition duration-1000 ease-in-out  `}


className={`${
    isAnimated ? 'scale-150' : 'translate-x-full translate-y-full'
}  w-screen lg:max-w-xl  transform transition duration-1000 ease-in-out`}*/
