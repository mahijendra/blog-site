
import Image from "next/image"
import Link from "next/link"

function Main() {

    return (
        <>
            <div className=" min-h-screen w-screen flex justify-center items-center flex-col lg:flex-row lg:justify-around">
                <div className="mt-0 text-center lg:text-left sm:mb-16">
                    <h1 className="text-customGreen font-nunito font-bold text-4xl lg:text-4xl sm:pt-24">
                        Hello there!
                        <br></br>
                        <span className="font-nunito text-customGreen font-light lg:text-4xl">Take a look around plis.</span>
                    </h1>
                    <p className="text-base font-nunito">Professional Web developer </p>
                    <Link href="/about" className="inline-block bg-indigo-500 px-10 py-5 rounded-full shadow-lg uppercase text-lg tracking-wide mt-5 cursor-pointer">Lezz go!</Link>
                </div>

                <Image src= "food.svg"
                     alt="photo"
                     className="w-screen lg:max-w-2xl sm:w-7/12 flex"
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
