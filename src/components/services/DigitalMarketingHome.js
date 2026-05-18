import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./DentalServiceSection.css"; 
import Service from "../../images/dm1.jpg";
import '../global.css'
import { Link } from "react-router-dom";

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"></link>
const DigitalMarketingHome = () => {
    return (
        <div className="wrapper">
            <div className="row align-items-center">
                {/* Left Content */}
                <div className="col-md-6">
                    <h1
                         className="text-center text-md-start title"
                         style={{ fontSize: "50px", fontWeight: "600" }}
                    >
                        Digital <span className="subTitle">Marketing</span>
                    </h1>
                    <p className="mt-3 text-start element" style={{ marginTop: "0px" }}>
                        Digital marketing is the key to expanding your reach, increasing brand awareness, and maximizing conversions. Our approach begins with a data-driven strategy, analyzing market trends, audience behavior, and competitors to develop a customized plan that aligns with your business goals.
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

export default DigitalMarketingHome;
