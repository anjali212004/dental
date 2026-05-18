import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./DentalServiceSection.css"; 
import Service from "../../images/tm1.jpg";
import '../global.css'
import { Link } from 'react-router-dom';

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"></link>
const TraditionalMarketingHome = () => {
    return (
        <div className="wrapper">
            <div className="row align-items-center">
                {/* Left Content */}
                <div className="col-md-6">
                    <h1
                        className="text-center text-md-start title"
                        style={{ fontSize: "50px", fontWeight: "600" }}
                        
                    >
                        Traditional  <span className="subTitle">Marketing</span>
                    </h1>
                    <p className="mt-3 text-start element" style={{ marginTop: "0px" }}>
                    Traditional marketing refers to conventional methods of promoting products and services through offline channels such as print media, television, radio, billboards, and direct mail. It relies on reaching a broad audience through advertisements in newspapers, magazines, flyers, and brochures, as well as TV and radio commercials. Traditional marketing has been used for decades and is effective in building brand awareness, especially for local businesses. Although digital marketing has gained popularity, traditional marketing remains relevant, particularly for businesses targeting audiences who prefer offline media.
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

export default TraditionalMarketingHome;
