import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import leftimage from "../images/doctor3.JPG";
import "./About.css";
import { Link } from "react-router-dom";
import "./global.css";
import pr3 from "../images/pr3.jpg";

const PatientRoadmap = () => {
  return (
    <div className="wrapper">
      <div className="row align-items-center" >
        {/* Left Side Image */}
        <div className="col-md-6 text-center">
          <div className="position-relative d-inline-block" style={{ width: "358px", height: "310px" }}>
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ borderRadius: "0 50% 50% 0", overflow: "hidden", border: "2px solid #ccc" }}>
              <img
                src={leftimage}
                alt="Doctor"
                className="img-fluid w-100 h-100 object-fit-cover"
              />
            </div>
            <img
              src={pr3}
              alt="Overlay"
              className="position-absolute top-0 start-0"
              style={{ width: "148px", height: "140px",marginTop:"183px",marginLeft:"-59px" }}
            />
          </div>
        </div>




        {/* Right Side Content */}
        <div className="col-md-6 mt-5">
          <h1 className=" mb-3 text-start title" >
            Get Your free Personalized <span className="subTitle">Patient Guide</span>
          </h1>
          <p className="d-flex align-items-center text-start element" style={{ fontSize: "18px", lineHeight: "2.0rem", marginTop: "0px" }}>
            Don't waste your marketing budget! Discover the exact amount to invest in each new
            patient acquisition. Receive a tailored plan to help you attract ideal patients cost-effectively.
          </p>


          <div className="text-start mt-3">
            <Link to="/contact" className="btn btn-success btn-lg"> Get My Free Guide <i className="bi bi-arrow-right ms-2"></i></Link>
          </div>
          <div className="mt-3  element" style={{ fontSize: "18px", lineHeight: "2rem" }}>
            <ul className="mt-3 text-start" style={{ fontSize: "18px", listStyle: "none", paddingLeft: "0" }}>
              <li>No guide needed? Schedule an intro call now.</li>
            </ul>

          </div>

        </div>


      </div>
    </div>
  );
};

export default PatientRoadmap;
