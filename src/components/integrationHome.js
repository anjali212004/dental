import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./DentalServiceSection.css"; 
import Service from "../images/servcie3.webp";
import './email.css'
import { Link } from 'react-router-dom'

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"></link>
const IntegrationHome = () => {
    return (
        <div className="wrapper">
            <div className="row align-items-center">

                {/* Right Image */}
                
                {/* Left Content */}
                <div className="col-md-6">
                    <h1
                        className="text-center text-md-start title"
                        style={{ fontSize: "50px", fontWeight: "600" }}
                    >
                        Transform Your Website into a Full-Service  <span className="subTitle"> Patient Hub</span>
                    </h1>
                    <p className="mt-3 text-start element">
                    
                    Seamlessly integrate your dental website with essential patient engagement tools—such as appointment reminders, online payment options, new patient forms, and more! We make it easy to connect your website with whatever tools your practice uses. If you don't see your preferred tools listed, we'll set up the connection for you at no extra cost.
                    </p>
                    
                    {/* Button aligned to the left */}
                    <div className="mt-3 text-md-start text-center">
                    <Link to="/contact" className="btn btn-success btn-lg text-centert"> Get Started</Link>
                    </div>
                </div>
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

export default IntegrationHome;
