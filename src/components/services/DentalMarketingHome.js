import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./DentalServiceSection.css"; 
import Service from "../../images/dw1.jpg";
import '../email.css'
import '../global.css'
import { Link } from "react-router-dom";

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"></link>
const DentalMarketingHome = () => {
    return (
        <div className="wrapper">
            <div className="row align-items-center">
                {/* Left Content */}
                <div className="col-md-6">
                    <h1
                        className="text-center text-md-start title"
                        style={{ fontSize: "50px", fontWeight: "600" }}
                    >
                        Dental <span className="subTitle">Marketing</span>
                    </h1>
                    <p className="mt-3 text-start element" style={{ marginTop: "0px" }}>
                    Dental marketing refers to the strategies used to attract new patients and retain existing ones for a dental practice. It includes both online and offline efforts to promote services, build brand awareness, and increase patient engagement. Key components include website optimization and SEO to improve search rankings, social media marketing to engage with potential patients, and pay-per-click (PPC) advertising for immediate visibility. Content marketing through blogs and videos educates and attracts patients, while online reviews and reputation management enhance credibility.
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

export default DentalMarketingHome;
