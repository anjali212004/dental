import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faPalette, faImages, faUserTie } from "@fortawesome/free-solid-svg-icons";
import "./Services.css";
import Service from "../images/blogs2.webp";
import "./email.css"

const SemiCustomDesignServices = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".service-card");
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("animate");
      }, index * 200);
    });
  }, []);

  return (
    <div className="wrapper">
      <h1 className="heading">
                <span className="circle title" >
                Semi Custom Design <span className="subTitle">Services</span>
                </span>
            </h1>
        
      <div className="row">
        {/* Left Section */}

        <div className="col-lg-6">
          <div className="row g-3">
            <div className="col-md-6">
              <div className="service-card">
                <FontAwesomeIcon icon={faClock} className="icon" />
                <h5 style={{ fontSize: "1.75rem" }}>Quick Turnaround</h5>
                
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-card mt-2">
                <FontAwesomeIcon icon={faPalette} className="icon" />
                <h5 style={{ fontSize: "1.75rem" }}>Brand Identity</h5>
                
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-card">
                <FontAwesomeIcon icon={faImages} className="icon" />
                <h5 style={{ fontSize: "1.75rem" }}>Customized Images</h5>
                
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-card mt-2">
                <FontAwesomeIcon icon={faUserTie} className="icon" />
                <h5 style={{ fontSize: "1.75rem" }}>Dedicated Project Manager</h5>
                
              </div>
            </div>
          </div>
        </div>

        {/* right section */}

        <div className="col-md-6 text-center mt-5">
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

export default SemiCustomDesignServices;
