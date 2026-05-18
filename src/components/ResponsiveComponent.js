import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ResponsiveComponent.css"; // Import custom CSS

// Importing images for each section
import custom1 from "../images/cd1.webp";
import custom2 from "../images/cd2.jpg";
import custom3 from "../images/cd3.jpg";

import semi1 from "../images/scd1.jpeg";
import semi2 from "../images/scd.webp";
import semi3 from "../images/scd3.jpg";

import pre1 from "../images/pd1.webp";
import pre2 from "../images/pd2.webp";
import pre3 from "../images/pd3.webp";

const ResponsiveComponent = () => {
  const customRef = useRef(null);
  const semiCustomRef = useRef(null);
  const preDesignedRef = useRef(null);

  const [activeButton, setActiveButton] = useState("custom");

  const scrollToSection = (ref, buttonName) => {
    setActiveButton(buttonName);
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  // Unique dental-themed names for each section
  const customDesigns = [
    { image: custom1, name: "Smile Makeover Design" },
    { image: custom2, name: "Cosmetic Dental Enhancement" },
    { image: custom3, name: "Restorative Dentistry Design" },
  ];

  const semiCustomDesigns = [
    { image: semi1, name: "Braces & Alignment Design" },
    { image: semi2, name: "Whitening & Brightening Plan" },
    { image: semi3, name: "Pediatric Dental Care Design" },
  ];

  const preDesignedItems = [
    { image: pre1, name: "Invisalign & Clear Aligners" },
    { image: pre2, name: "Implant Restoration Design" },
    { image: pre3, name: "Dentures & Prosthodontics" },
  ];

  return (
    <div className="wrapper">
      {/* Navigation Buttons */}
      <div className="d-flex justify-content-center mb-4 btn-container">
        <button
          className={`custom-btn mx-2 ${activeButton === "custom" ? "active" : ""}`}
          onClick={() => scrollToSection(customRef, "custom")}
        >
          Custom Designs
        </button>
        <button
          className={`custom-btn mx-2 ${activeButton === "semiCustom" ? "active" : ""}`}
          onClick={() => scrollToSection(semiCustomRef, "semiCustom")}
        >
          Semi Custom Designs
        </button>
        <button
          className={`custom-btn mx-2 ${activeButton === "preDesigned" ? "active" : ""}`}
          onClick={() => scrollToSection(preDesignedRef, "preDesigned")}
        >
          Pre Designed
        </button>
      </div>



      {/* Custom Designs Section */}
      <div ref={customRef} className="py-5">
        <h2 className="text-center mb-4 title">Custom <span className="subTitle">Designs</span></h2>
        <div className="row">
          {customDesigns.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <img src={item.image} className="card-img-top custom-img" alt={item.name} />
                <div className="card-body">
                  <p className="card-text text-center" style={{ fontSize: "20px", fontWeight: "500", color: '#08344e' }}>
                    {item.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Semi Custom Designs Section */}
      <div ref={semiCustomRef} className="py-5">
        <h2 className="text-center mb-4 title">Semi Custom <span className="subTitle">Designs</span></h2>
        <div className="row">
          {semiCustomDesigns.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <img src={item.image} className="card-img-top custom-img" alt={item.name} />
                <div className="card-body">
                  <p className="card-text text-center" style={{ fontSize: "20px", fontWeight: "500", color: '#08344e' }}>{item.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pre Designed Section */}
      <div ref={preDesignedRef} className="py-5">
        <h2 className="text-center mb-4 title">Pre <span className="subTitle">Designed</span></h2>
        <div className="row">
          {preDesignedItems.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card ">
                <img src={item.image} className="card-img-top custom-img" alt={item.name} />
                <div className="card-body">
                  <p className="card-text text-center" style={{ fontSize: "20px", fontWeight: "500", color: '#08344e' }}>{item.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveComponent;