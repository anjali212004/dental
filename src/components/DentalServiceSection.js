import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DentalServiceSection.css"; // Import the CSS file
import Service from "../images/service1.jpg";
import "./global.css";
import { Link } from "react-router-dom";

const DentalServiceSection = () => {
  return (
    <div className="wrapper">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-md-6">
          <h1
            className="title text-start"
            style={{ fontSize: "50px", fontWeight: "600" }}
          >
            Exceptional Dental Websites for <span className="subTitle">Your Practice</span> 
          </h1>
          <p className="mt-3 text-start element" style={{marginTop:"0px"}}>
            Our team specializes in creating websites that attract more patients,
            enhance your reputation, and grow your practice. Let us design a
            platform that highlights your unique services.
          </p>
          <p className="mt-3 text-start element" style={{marginTop:"0px"}}>
            Schedule a free consultation today and discover how our custom
            dental website solutions can help your practice thrive.
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

export default DentalServiceSection;
