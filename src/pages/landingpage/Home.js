import React, { useEffect, useState } from "react";
import "./Home.scss";

const Home = () => {
    const [currentPoint, setCurrentPoint] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);

    const points = [
        "AZEE SOLUTIONS is a group of professional traders and financial advisors, well versed with the alpha and omega of various assets in the International Financial Market.",
        "Dedicated in Money Management and Risk Management services for our clients.",
        "Apart from the bookish knowledge that most traders rely on, our team of experts have been there and done that while playing around with the sentiment of the markets involved.",
        "What makes us different is simplicity. The market has only two directions either BUY or SELL. It is the human mind that over complicates and leads to confusion.",
        "Use of Robotic softwares and Algo Trading to bypass any human emotion whilst trading.",
    ];

    // useEffect(() => {
    //     // Handle GSAP animations for the string path
    //     const string = document.querySelector(".string");
    //     const pathElement = string.querySelector("svg path");
    //     const defaultPath = "M 0 50 Q 300 50 600 50";

    //     const onMouseEnter = (dets) => {
    //         const newPath = `M 0 50 Q ${dets.x} ${dets.y} 600 50`;
    //         gsap.to(pathElement, {
    //             duration: 0.5,
    //             ease: "power3.out",
    //             attr: { d: newPath },
    //         });
    //         // console.log(e.offsetX, e.offsetY);
    //     };

    //     const onMouseLeave = () => {
    //         gsap.to(pathElement, {
    //             duration: 1.5,
    //             ease: "elastic.out(1,0.2)",
    //             attr: { d: defaultPath },
    //         });
    //     };

    //     string.addEventListener("mousemove", onMouseEnter);
    //     string.addEventListener("mouseleave", onMouseLeave);

    //     return () => {
    //         string.removeEventListener("mouseenter", onMouseEnter);
    //         string.removeEventListener("mouseleave", onMouseLeave);
    //     };
    // }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeIn(false); // Start fade-out
            setTimeout(() => {
                setCurrentPoint((prevPoint) => (prevPoint + 1) % points.length); // Update point
                setFadeIn(true); // Start fade-in
            }, 500); // Match the fade-out duration
        }, 2500); // Change point every 2.5 seconds (including fade duration)
        return () => clearInterval(interval);
    }, [points.length]);

    return (
        <section
            className="home main-font"
            style={{
                display: "block",
                height: "100vh",
                textAlign: "center",
                padding: "40vh 0",
                width: "100%",
            }}
        >
            <h1 className="heading">
                Global <span>Edge</span>
            </h1>
            {/* <div className="string">
                <svg width="600" height="100">
                    <path d="M 200 50 Q 300 50 590 50" stroke="black" fill="transparent" />
                </svg>
            </div> */}
            <p
                className="para-font home-description"
                style={{
                    width: "80%",
                    margin: "0 auto",
                    fontSize: "20px",
                    opacity: fadeIn ? 1 : 0,
                    transition: "opacity 0.5s ease",
                    color: "white",
                }}
            >
                {points[currentPoint]}
            </p>
        </section>
    );
};

export default Home;
