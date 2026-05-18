import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CustomDesignWebsite.css";
import pd1 from "../images/pd1.webp";
import pd2 from "../images/pd2.webp";
import pd3 from "../images/pd3.webp";

const CardItem = ({ img, title }) => {
  return (
    <div className="col-md-4 mb-4 mt-5">
      <div className="card shadow-sm border-0 ">
        <img src={img} className="card-img-top" alt={title} />
        <div className="card-body text-center">
          {/* <button className="btn btn-success mb-2 text-start">Custom Designs</button> */}
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </div>
  );
};

const PreDesignWebsite = () => {
  const designs = [
    {
      img: pd1, // Replace with actual image URL
      title: "Vandervoort Family Dentistry",
    },
    {
      img: pd2, // Replace with actual image URL
      title: "Leaf Dental",
    },
    {
      img: pd3, // Replace with actual image URL
      title: "Innerbloom Dental Studio",
    },
  ];

  return (
    <div className="wrapper text-center">
     <h2 className="mb-4 title" style={{"fontSize":"43px","fontWeight":"600"}}>Pick The Pre Designed <span className="subTitle"> Templates</span></h2>
      <div className="row">
        {designs.map((design, index) => (
          <CardItem key={index} img={design.img} title={design.title} />
        ))}
      </div>
      {/* <button className="btn btn- mt-3">See More Designs</button> */}
    </div>
  );
};

export default PreDesignWebsite;
