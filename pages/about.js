import React from "react";
import Nav from "../components/Nav"
import Image from "next/image"

const About = () => {
    const [header] = React.useState({
        Header: "My, Myself & I",
        text:
            "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    });
    const [state] = React.useState([
        { id: 1, title: "Name:", text: "B V K Mahijendra " },
        { id: 2, title: "Email: ", text: "bvkmahijendra@gmail.com" },
        { id: 3, title: "Phone: ", text: "+(91)-7330760052" },
        { id: 4, title: "Linkedin: ", text: "Mahijendra" },
    ])
    return (
        <>
            <Nav />
            <div className="about">
                <div className="container">
                    <div className="common">
                        <h1 className="heading_about">{header.Header}</h1>
                        <p className="mainContent font-quicksand">{header.text}</p>
                        <div className="commonBorder"></div>
                    </div>
                    <div className="row h-650 alignCenter ">
                        <div className="col-6">
                            <div className="main_img">
                                <Image className="img_dimensions max-w-2xl" src="food.svg"/>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="about__info">
                                <h1 className="mainHeader font-nunito text-customGreen">Hello There!</h1>
                                <div className="about__info-p1 font-nunito text-customGreen ">
                                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                                </div>
                                <div className="about__info-p1 font-quicksand">
                                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </div>
                                <div className="info__contacts">
                                    <div className="row">
                                        {state.map((info) => (
                                            <div className="col-6">
                                                <strong>{info.title}</strong>
                                                <p>{info.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
