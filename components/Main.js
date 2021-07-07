/*
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navbar from "../components/Navbar"


const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #131313;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;
  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }
  p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
  }
`;

const Button = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: #fff;
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

  }
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;

  ${Image}:nth-child(1) {
    top: 10px;
    left: 10px;

    @media screen and (max-width: 768px){
      width: 50px;
      height:50px;

    }
  }
  ${Image}:nth-child(2) {
    top: 170px;
    right: 10px;

    @media screen and (max-width: 768px){
      width: 50px;
      height:50px;

    }
  ${Image}:nth-child(3) {
    top: 350px;
    left: 50px;

    @media screen and (max-width: 768px){
      width: 50px;
      height:50px;
    }
`;

const Hero = () => {
    const fadeLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <>
            <Navbar />
        <Section>
            <Container>
                <ColumnLeft>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Welcome to Space
                    </motion.h1>
                    <motion.p
                        variants={fadeLeft}
                        initial='hidden'
                        animate='visible'
                        transition={{ duration: 1 }}
                    >
                        Journey to the unknown
                    </motion.p>
                    <Button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{
                            scale: 0.95,
                            backgroundColor: '#67F6E7',
                            border: 'none',
                            color: '#000'
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1.5 } }}
                    >
                        Get Started
                    </Button>
                </ColumnLeft>

                <ColumnRight>
                    <Image
                        src="planet.svg"
                        alt='planet'
                        whileTap={{ scale: 0.9 }}
                        drag={true}
                        dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    />
                    <Image
                        src="planet-2.svg"
                        alt='planet'
                        whileTap={{ scale: 0.6 }}
                        drag={true}
                        dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                    />
                    <Image
                        src="planet-3.svg"
                        alt='planet'
                        whileTap={{ scale: 0.8 }}
                        drag={true}
                        dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                    />
                    <Image
                        src="planet-4.svg"
                        alt='planet'
                        whileTap={{ scale: 0.9 }}
                        drag={true}
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    />
                </ColumnRight>
            </Container>
        </Section>
        </>
    );
};

export default Hero;*/
import Navbar from "../components/Navbar"

import React, {useEffect, useState} from 'react';

function Main() {

    /* const [isAnimated, setIsAnimated] = useState(false)

     useEffect(() => {
         setIsAnimated(true)
     },[])
 */
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
                    <a href="/about" className="inline-block bg-indigo-500 px-10 py-5 rounded-full shadow-lg uppercase text-lg tracking-wide mt-5 cursor-pointer">Lezz go!</a>
                </div>

                <img src= "food.svg"
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
