import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./DentalServiceSection.css"; 
import Service from "../../images/sm1.jpg";
import '../email.css'
import '../global.css'
import { Link } from 'react-router-dom';

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"></link>
const SocialMediaHome = () => {
    return (
        <div className="wrapper">
            <div className="row align-items-center">
                {/* Left Content */}
                <div className="col-md-6">
                    <h1
                         className="text-center text-md-start title"
                         style={{ fontSize: "50px", fontWeight: "600" }}

                    >
                        Social <span className="subTitle">Media</span>
                    </h1>
                    <p className="mt-3 text-start element" style={{ marginTop: "0px" }}>
                        Social media refers to online platforms and applications that allow users to create, share, and engage with content in various forms, such as text, images, videos, and audio. It serves as a space for individuals, businesses, and organizations to connect, communicate, and interact with a global audience. Popular social media platforms include Facebook, Instagram, Twitter, LinkedIn, TikTok, and YouTube, each catering to different types of content and user interactions. Social media has become an essential tool for building relationships, promoting brands, sharing news, and creating communities.
                    </p>

                    {/* Button aligned to the left */}
                    <div className="mt-3 text-md-start text-center">
                    <Link to="/contact" className="btn btn-success btn-lg text-centert"> Get Started</Link>
                    </div>
                </div>

                {/* Right Image */}
                <div className="col-md-6 text-center mt-5">
                    <img
                        src={Service}
                        alt="Social Media"
                        className="img-fluid rounded shadow animated-image"
                    />
                </div>

            </div>
        </div>
    );
};

export default SocialMediaHome;
