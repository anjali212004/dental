import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo1 from "../images/logo1.png";
import logo2 from "../images/logo9.jpg";
import logo3 from "../images/logo4.png";
import logo4 from "../images/logo8.png";
import logo5 from "../images/logo5.svg";
import logo6 from "../images/logo6.png";
import "./logoSlider.css"; // Import CSS for animations

const logos = [logo1, logo2, logo3,logo4, logo5, logo6];

const LogoSlider = () => {
  return (
    <div className="logo-slider-new wrapper">
       <h2 className="heading mb-4">
        <span className="circle title" >
          Our &nbsp; <span className="subTitle">Partners</span>
        </span>
      </h2>
      <div className="logo-track-new">
        {/* Duplicate logos to make it seamless */}
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="logo-item-slider">
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
