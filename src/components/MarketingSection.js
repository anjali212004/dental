import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './global.css';
import { FaTooth, FaMobileAlt, FaCalendarCheck } from "react-icons/fa"; // Importing relevant icons
import logo from "../images/blogs8.webp";

const iconStyle = {
  fontSize: "3rem", // Increased icon size
  color: "#094886", // Styled icon color
  
};

const MarketingSection = ({ btnText }) => {
  return (
    <section className="text-center text-black">
      <div className="wrapper">
        <h1 className="heading mb-4">
          <span className="circle title">
            We Create High-Performing &nbsp; <span className="subTitle">Dental Websites</span>
          </span>
        </h1>

        <div className="row align-items-center">
          {/* Left Column: Points with Icons */}
          <div className="col-md-6 text-start">
            <div className="mt-3 mb-4 element">
              <p className="d-flex align-items-center"><FaTooth style={iconStyle} /> <span style={{marginLeft:"21px"}}>Our team ensures your website is fast, SEO-friendly, and attracts new patients.</span></p>
              <p className="d-flex align-items-center"><FaMobileAlt style={iconStyle} /> <span style={{marginLeft:"21px"}}>We deliver seamless user experiences with mobile-friendly layouts & strategic marketing.</span></p>
              <p className="d-flex align-items-center"><FaCalendarCheck style={iconStyle} /> <span style={{marginLeft:"21px"}}>Improve patient conversions with integrated appointment booking.</span></p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="col-md-6">
            <img
              src={logo}
              alt="Dental Website"
              className="img-fluid"
              style={{ height: "310px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;
