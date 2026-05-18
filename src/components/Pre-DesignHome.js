import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./DentalServiceSection.css"; 
import Service from "../images/service4.jpg";
import './email.css'
import "./global.css"
import { Link } from "react-router-dom";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"></link>
const PreDesignHome = () => {
    return (
        <div className="wrapper">
            <div className="row align-items-center">


                {/* Left Content */}
                <div className="col-md-6">
                    <h1
                        className="text-center text-md-start title"
                        style={{ fontSize: "50px", fontWeight: "600" }}
                    >
                        Ready-to-Use Dental Website<span className="subTitle"> Templates</span>
                    </h1>
                    <p className="mt-5 text-start element" style={{ fontSize: "18px",marginTop:"0px" }}>
                        Our pre-designed dental website templates are ideal for practices looking for a cost-effective and time-efficient solution. Choose from a wide range of professionally crafted designs that align with your brand no extra investment needed.
                    </p>
                    <p className="mt-3 text-start" style={{ fontSize: "18px" }}>
                        <ul className="mt-3 text-start element" style={{ listStyle: "none", paddingLeft: "0",marginTop:"0px" }}>
                            <li><i className="fa fa-check" style={{ color: "green" }}></i> Budget-Friendly Solution</li>
                            <li><i className="fa fa-check" style={{ color: "green" }}></i> Fast Deployment</li>
                            <li><i className="fa fa-check" style={{ color: "green" }}></i> Variety of Designs</li>
                            <li><i className="fa fa-check" style={{ color: "green" }}></i> Dedicated Project Manager</li>
                        </ul>

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

export default PreDesignHome;
