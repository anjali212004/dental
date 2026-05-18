import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import dw2 from "../../images/dw2.jpg";
// import dw3 from "../../images/dw3.jpg";
// import dw4 from "../../images/dw4.jpg";
// import dw5 from "../../images/dw5.jpg";
// import dw6 from "../../images/dw6.jpg";
// import dw1 from "../../images/dw4.png";
import dw2 from "../../images/pd1.webp";
import dw3 from "../../images/pd2.webp";
import dw4 from "../../images/pd3.webp";
import dw1 from "../../images/cd1.webp";
import dw6 from "../../images/cd2.jpg";
import dw5 from "../../images/cd3.jpg";
import "./DentalGallery.css";

const DentalGallery = () => {
  return (
    <div className="wrapper ">
      <h2 className="heading">
        <span className="circle title">
          Dental Website &nbsp; <span className="subTitle"> Gallery</span>
        </span>
      </h2>
      
      <div className="row g-4">
        {/* First Column */}
        <div className="col-lg-4 col-md-6 col-12">
          <div className="image-container mb-4">
            <img
              src={dw1}
              className="gallery-image rounded"
              alt="Dental Image 1"
            />
          </div>
          <div className="image-container">
            <img
              src={dw4}
              className="gallery-image rounded"
              alt="Dental Image 2"
            />
          </div>
        </div>

        {/* Second Column */}
        <div className="col-lg-4 col-md-6 col-12">
          <div className="image-container mb-4">
            <img
              src={dw3}
              className="gallery-image rounded"
              alt="Dental Image 3"
            />
          </div>
          <div className="image-container">
            <img
              src={dw2}
              className="gallery-image rounded"
              alt="Dental Image 4"
            />
          </div>
        </div>

        {/* Third Column */}
        <div className="col-lg-4 col-md-6 col-12">
          <div className="image-container mb-4">
            <img
              src={dw5}
              className="gallery-image rounded"
              alt="Dental Image 5"
            />
          </div>
          <div className="image-container">
            <img
              src={dw6}
              className="gallery-image rounded"
              alt="Dental Image 6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalGallery;