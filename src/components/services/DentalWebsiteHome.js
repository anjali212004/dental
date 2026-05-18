import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./DentalServiceSection.css"; 
// import Service from "../../images/dw1.jpg";
import Service from "../../images/scd3.jpg";
import '../email.css'
import '../global.css'
import { Link } from "react-router-dom";

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"></link>
const DentalWebsiteHome = () => {
    return (
        <div className="wrapper">
            <div className="row align-items-center">
                {/* Left Content */}
                <div className="col-md-6">
                    <h1
                        className="text-center text-md-start title"
                        style={{ fontSize: "50px", fontWeight: "600" }}
                    >
                        Dental Website <span className="subTitle"> Design</span>
                    </h1>
                    <p className="mt-3 text-start element" style={{ marginTop: "0px" }}>
                        A well-designed dental website is essential for attracting new patients and building trust with your audience. Our approach focuses on creating a user-friendly, visually appealing, and highly functional website that showcases your services, expertise, and patient care philosophy. With intuitive navigation, engaging content, and seamless appointment booking, we ensure your website not only looks great but also helps grow your practice.
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

export default DentalWebsiteHome;
