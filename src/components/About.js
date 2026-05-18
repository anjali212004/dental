import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import leftimage from "../images/service1.jpg";
import "./About.css";
import { Link } from "react-router-dom";
import "./global.css";

const About = () => {
  return (
    <div className="wrapper">
      <div className="row align-items-center">
        {/* Left Side Image */}
        <div className="col-md-6">
          <img
            src={leftimage} // Replace this URL with your actual image
            alt="About Us"
            className="img-fluid rounded"
          />
        </div>
        {/* Right Side Content */}
        <div className="col-md-6">
          <h1 className=" mt-3 text-start title">
            Meet the executives driving our <span className="subTitle">Success</span>
          </h1>
          <p className="d-flex align-items-center text-start element" style={{ fontSize: "18px", lineHeight: "2.0rem",marginTop:"0px" }}>
            Our team of experts is dedicated to crafting beautiful, user-friendly dental websites that reflect your practice’s unique identity. We don’t just build websites – we build patient trust. From engaging designs to seamless functionality, our websites are designed to leave a lasting impression.
          </p>

          <div className="mt-3 text-start element" style={{ fontSize: "18px", lineHeight: "2rem" }}>
            <ul className="mt-3 text-start" style={{ fontSize: "18px", listStyle: "none", paddingLeft: "0" }}>
              <li><i className="fa fa-check" style={{ color: "green" }}></i> SEO Optimization</li>
              <li><i className="fa fa-check" style={{ color: "green" }}></i> Branding & Identity</li>
              <li><i className="fa fa-check" style={{ color: "green" }}></i> Patient Education Tools</li>

            </ul>

          </div>
          <div className="text-start mt-3">
            <Link to="/contact" className="btn btn-success btn-lg"> Get Started <i className="bi bi-arrow-right ms-2"></i></Link>
          </div>

        </div>

        
      </div>
    </div>
  );
};

export default About;
