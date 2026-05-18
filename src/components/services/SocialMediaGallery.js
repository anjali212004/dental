import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import dw2 from "../../images/sm2.jpg";
import dw3 from "../../images/sm6.jpg";
import dw4 from "../../images/sm3.png";
import dw5 from "../../images/sm5.jpg";
import dw6 from "../../images/sm4.png";
import dw1 from "../../images/sm7.jpg";

const SocialMediaGallery = () => {
  return (
    <div className="wrapper">
      <h2 className="text-center title">Social Media <span className="subTitle">Gallery</span></h2>
      <div className="row g-4 ">
        {/* First Column - 1 Large Image (Spans 2 rows) */}
        <div className="col-md-4 d-flex flex-column">
          <img
            src={dw1}
            className="img-fluid w-100 flex-fill rounded"
            alt="Social Image 1"
            style={{ objectFit: "cover", height: "300px", marginBottom: "16px" }}
          />
          <img
            src={dw4}
            className="img-fluid w-100 flex-fill rounded"
            alt="Social Image 2"
            style={{ objectFit: "cover", height: "300px" }}
          />
        </div>

        {/* Second Column - 2 Images Stacked */}
        <div className="col-md-4 d-flex flex-column">
          <img
            src={dw3}
            className="img-fluid w-100 flex-fill rounded"
            alt="Social Image 2"
            style={{ objectFit: "cover", height: "300px", marginBottom: "16px" }}
          />
          <img
            src={dw2}
            className="img-fluid w-100 flex-fill rounded"
            alt="Social Image 3"
            style={{ objectFit: "cover", height: "300px" }}
          />
        </div>

        {/* Third Column - 2 Images Stacked */}
        <div className="col-md-4 d-flex flex-column">
          <img
            src={dw5}
            className="img-fluid w-100 flex-fill rounded"
            alt="Social Image 4"
            style={{ objectFit: "cover", height: "300px", marginBottom: "16px" }}
          />
          <img
            src={dw6}
            className="img-fluid w-100 flex-fill rounded"
            alt="Social Image 5"
            style={{ objectFit: "cover", height: "300px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaGallery;
