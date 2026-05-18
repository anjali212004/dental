import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CustomDesignWebsite.css";
import cd1 from "../images/cd1.webp";
import cd2 from "../images/cd2.jpg";
import cd3 from "../images/cd3.jpg";


const CardItem = ({ img, title }) => {
  return (
    <div className="col-md-4 mb-4 mt-5">
      <div className="card shadow-sm border-0 ">
        <img src={img} className="card-img-top" alt={title} />
        <div className="card-body text-center">
          {/* <button className="btn btn-success mb-2 text-start">Custom Designs</button> */}
          <h5 className="">{title}</h5>
        </div>
      </div>
    </div>
  );
};

const CustomDesignWebsite = () => {
  const designs = [
    {
      img: cd1, // Replace with actual image URL
      title: "Vandervoort Family Dentistry",
    },
    {
      img: cd2, // Replace with actual image URL
      title: "Leaf Dental",
    },
    {
      img: cd3, // Replace with actual image URL
      title: "Innerbloom Dental Studio",
    },
  ];

  return (
    <div className="wrapper text-center">
      <h1 className="heading" style={{marginBottom:"0px"}}>
        <span className="circle title">
        Custom Designs We've Done  <span className="subTitle">  For Others</span>
        </span>
      </h1>
      
      <div className="row">
        {designs.map((design, index) => (
          <CardItem key={index} img={design.img} title={design.title} />
        ))}
      </div>
      {/* <button className="btn btn- mt-3">See More Designs</button> */}
    </div>
  );
};

export default CustomDesignWebsite;
