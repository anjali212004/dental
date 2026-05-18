import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./DentalServiceSection.css"; 
import Service from "../../images/v1.jpg";
import '../email.css'
import '../global.css'
import { Link } from 'react-router-dom';

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"></link>
const VideographyHome = () => {
    return (
        <div className="wrapper">
            <div className="row align-items-center">
                {/* Left Content */}
                <div className="col-md-6">
                    <h1
                        className="text-center text-md-start title"
                    >
                        Videography
                    </h1>
                    <p className="mt-3 text-start element" style={{ marginTop: "0px" }}>
                    Videography is the art and process of capturing moving images using a video camera. It involves planning, shooting, and editing videos to create visually engaging content for various purposes, such as films, advertisements, documentaries, and social media. A videographer uses techniques like lighting, composition, and camera movements to tell a story or convey a message effectively. With advancements in technology, videography has evolved from traditional camcorders to high-definition digital cameras and drones, making it more accessible and versatile. 
                    </p>

                    {/* Button aligned to the left */}
                  
                    <div className="mt-3 text-md-start text-center">
                    <Link to="/contact" className="btn btn-success btn-lg text-centert"> Get Started</Link>
                    </div>
                </div>

                {/* Right Image */}
                <div className="col-md-6 text-center">
                    <img
                        src={Service}
                        alt="Dental Website"
                        className="img-fluid rounded shadow animated-image"
                    />
                </div>

            </div>
        </div>
    );
};

export default VideographyHome;
