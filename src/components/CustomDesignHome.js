import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./DentalServiceSection.css"; 
import Service from "../images/service2.webp";
import './email.css'
import { Link } from 'react-router-dom';

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"></link>
const CustomDesignHome = () => {
    return (
        <div className="wrapper">
            <div className="row align-items-center">

                
                {/* Left Content */}
                <div className="col-md-6">
                    <h1
                        className="text-center text-md-start title"
                        style={{ fontSize: "50px", fontWeight: "600" }}
                    >
                        Custom Dental Website <span className="subTitle"> Design</span>
                    </h1>
                    <p className="mt-3 text-start element" style={{marginTop:"0px"}}>
                        If you have a specific vision for your website, our custom design option can bring it to life. Our custom option enables you to share your ideas, give feedback, and combine or eliminate certain elements to create the exact website you’re looking for.
                    </p>
                    
                    <p className="mt-3 text-start" style={{ fontSize: "16px",lineHeight:"1.5rem" }}>
                        <ul className="mt-3 text-start element" style={{ listStyle: "none", paddingLeft: "0",marginTop:"0px" }}>
                            <li><i className="fa fa-check" style={{ color: "green" }}></i> Unique Design</li>
                            <li><i className="fa fa-check" style={{ color: "green" }}></i> Combine Elements</li>
                            <li><i className="fa fa-check" style={{ color: "green" }}></i> Play Up Your Strengths</li>
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

export default CustomDesignHome;
