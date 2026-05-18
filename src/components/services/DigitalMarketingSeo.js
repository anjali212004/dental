import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./DentalServiceSection.css"; 
import Service from "../../images/dm2.jpg";
import '../global.css'
import { Link } from "react-router-dom";

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"></link>
const DigitalMarketingSeo = () => {
    return (
        <div className="wrapper">
            <div className="row align-items-center">

                {/* Right Image */}
                <div className="col-md-6 text-center">
                    <img
                        src={Service}
                        alt="Dental Website"
                        className="img-fluid rounded shadow animated-image"
                    />
                </div>

                {/* Left Content */}
                <div className="col-md-6">
                    <h1
                        className="text-start title"
                        
                    >

                        Why SEO <span className="subTitle">Matters </span>
                    </h1>
                    <p className="mt-3 text-start element" style={{ marginTop: "0px" }}>
                        We recognize that every clinician and practice has unique needs. That's why we focus on a personalized analysis of your practice's objectives to drive the specific traffic you're aiming for. Search engines rely on various factors to rank your website, starting with thorough keyword research. This research enables us to craft tailored content based on search trends in your local area. Custom content is key to establishing your authority in your field, helping search engines recognize your content as highly relevant to the keywords being searched.
                    </p>

                    {/* Button aligned to the left */}
                   
                     <div className=" mt-3">
                    <Link to="/contact" className="btn btn-success btn-lg">Get Started <i className="bi bi-arrow-right ms-2"></i></Link>
                </div>
                </div>

            </div>
        </div>
    );
};

export default DigitalMarketingSeo;
