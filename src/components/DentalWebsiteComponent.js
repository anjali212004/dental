import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import trophy from "../images/trophy.jpg"; // Update with your image path
import "./global.css";
import { Link } from "react-router-dom";

const DentalWebsiteComponent = () => {
  return (
    <div className="wrapper">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h2 className=" text-start title" >Dental Website Design <span className="subTitle">Done Right</span></h2>
          <p className="text-start mt-4 element" style={{fontSize:"18px",marginTop:"0px"}}>
            Welcome to our website gallery, where we showcase our expertise in
            seamlessly creating captivating dental website designs with
            easy-to-use, data-driven marketing strategies.
          </p>
          <p className="text-start element" style={{fontSize:"18px",marginTop:"0px"}}>
            Our platform is designed for dental and specialist practices of all
            sizes. It offers regular updates that help improve visibility online
            and make content appealing to patients. Our platform empowers
            dentists to easily update their information as needed, such as if
            their hours change, they offer a new service, or they hire a new
            team member!
          </p>
          
          <div className="mt-3 text-md-start text-center">
              <Link to="/contact" className="btn btn-success btn-lg text-centert"> Start Your Website Design</Link>
          </div>
        </div>
        <div className="col-md-6 text-center mt-3">
          <img
            src={trophy}
            alt="Awards"
            
            style={{ height: "250px",width : "200px" }} // Set desired height here
          />
        </div>
      </div>
    </div>
  );
};

export default DentalWebsiteComponent;
