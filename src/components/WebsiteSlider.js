import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WebsiteSlider.css";
import dental1 from "../images/dental1.png";
import dental2 from "../images/dental2.webp";
import dental3 from "../images/dental6.webp";
import dental4 from "../images/dental4.webp";

const WebsiteSlider = () => {
    const images = [dental1, dental2, dental3, dental4, dental2, dental3];
    const [currentIndex, setCurrentIndex] = useState(1);
    const [itemsToShow, setItemsToShow] = useState(getItemsToShow());
    const sliderRef = useRef(null);

    // Function to determine number of items to show based on screen width
    function getItemsToShow() {
        const width = window.innerWidth;
        if (width >= 1200) return 4;      // Large screens
        if (width >= 768) return 3;       // Medium screens
        if (width >= 576) return 2;       // Small screens
        return 1;                         // Mobile screens
    }

    // Update items to show on window resize
    useEffect(() => {
        const handleResize = () => {
            setItemsToShow(getItemsToShow());
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalImages = [
        images[images.length - 1],
        ...images,
        images[0],
    ];

    useEffect(() => {
        if (!sliderRef.current) return; // Wait until ref is assigned

        const interval = setInterval(() => {
            handleNext();
        }, 3000);

        return () => clearInterval(interval);
    }, [sliderRef.current]);


    const handleNext = () => {
        if (!sliderRef.current) return; // Ensure the ref is valid
    
        if (currentIndex < images.length - itemsToShow + 1) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        } else {
            setCurrentIndex(1);
        }
    };
    
    useEffect(() => {
        if (!sliderRef.current) return; // Ensure the ref is assigned

        if (currentIndex >= images.length - itemsToShow + 1) {
            setTimeout(() => {
                if (!sliderRef.current) return; // Ensure it still exists
                sliderRef.current.style.transition = "none";
                setCurrentIndex(1);
            }, 500);
        } else {
            sliderRef.current.style.transition = "transform 0.5s ease-in-out";
        }
    }, [currentIndex, images.length, itemsToShow]);


    const goToSlide = (index) => {
        if (index < images.length - itemsToShow + 1) {
            setCurrentIndex(index + 1);
        }
    };

    return (
        <div className="wrapper">
            <div className="heading-container">
                {/* <div className=""> */}
                    <h1 className="heading mb-4" style={{ marginBottom: "0px" }}>
                        <span className="circle title">
                            We Make Websites that attract &nbsp;
                            <span className="subTitle">new patients</span>
                        </span>
                    </h1>
                {/* </div> */}
            </div>
            <div className="slider-container" style={{width:"100%"}}>
                <div
                    ref={sliderRef}
                    className="slider-track"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
                    }}
                >
                    {totalImages.map((image, index) => (
                        <div
                            key={index}
                            className="slider-item"
                            style={{ flex: `0 0 ${100 / itemsToShow}%` }}
                        >
                            <img
                                src={image}
                                alt={`Website ${index + 1}`}
                                className="responsive-image"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="slider-dots text-center mb-2">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentIndex === index + 1 ? "active" : ""}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default WebsiteSlider;