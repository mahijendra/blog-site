import React from 'react'
import Navbar from "../components/Navbar"
import {FaGithub, FaLinkedin, FaTwitch, FaTwitter} from "react-icons/fa";
import {motion}  from "framer-motion"

const Header = () => {
    return (
        <>
            <Navbar />
        <header>
            <div className="intro-logo">
                <h1>Hello there!</h1>
                <h3>Elegant Bootstrap Template for Startups, Apps & more...</h3>
                <img
                    className="img-main"
                    src="1.jpg"
                />

                <div className="company-icons">

                    <span className="company-icons__item">
                        <FaGithub className="social-icons" />
                    </span>

                    <span className="company-icons__item">
                        <FaLinkedin className="social-icons" />
                    </span>

                    <span className="company-icons__item">
                        <FaTwitter className="social-icons" />
                    </span>

                </div>
            </div>

            <style jsx>{`
        header {
          margin-bottom: 1rem;
          height: 90vh;
        }
        .intro-logo {
          display: flex;
          position: absolute;
          top: 1em;
          bottom: 0;
          left: 0;
          right: 0;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          text-align: center;
        }

        .intro-logo h1 {
         font-size:50px;
          font-weight: 900;
          font-family: 'Philosopher', sans-serif;
          color: var(--brand-color);
        }
        
        .company-icons{
        display: flex;
        flex-direction: row;
        gap: 20px;
        }
        
        .social-icons{
        
        }
        
        
        @media (min-width: 768px) {
          .intro-logo h1 {
            font-size: 3.5em;
          }
        }
        .intro-logo h3 {
          font-size: 1rem;
          font-weight: 300;
          color: var(--gray-color-1);
          margin-bottom: 3em;
        }

        .intro-logo img {
          max-width: 95%;
          height: auto;
        }
        .company-icons__item + .company-icons__item {
          margin-left: 1rem;
        }
        @media (min-width: 575px) {
          .company-icons__item + .company-icons__item {
            margin-left: 2rem;
          }
        }
        .company-icons__item i {
          margin-right: 5px;
        }
        .intro-button {
          margin-top: 2.3em;
          margin-bottom: 3em;
        }
        .intro-button a {
          padding: 0.65em 2.6em;
          border-radius: 20px;
          color: var(--brand-color);
          border: 1.8px solid var(--brand-color);
          background: white;
          transition: all 0.5s;
        }
        .intro-button a:hover {
          background-color: var(--brand-color);
          color: white;
        }
        
        .img-main{
        width: 300px;
        height: 300px;
        }

        .company-icons {
          color: var(--gray-color-2);
          font-size: 0.95em;
        }
        .company-icons__item {
          transition: all 0.5s;
        }
        .company-icons__item:hover {
          color: var(--brand-color);
          cursor: pointer;
        }
      `}</style>
        </header>
        </>
    )
}

export default Header
