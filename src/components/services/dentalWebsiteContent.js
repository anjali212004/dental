import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../global.css'
import { Link } from "react-router-dom";

const DentalWebsiteContent  = ()=> {
  return (
    <section className="text-center text-black">
      <div className="wrapper">
        <h2 className="title">It's Not Just About Attracting "New Patients" – <span className="subTitle">It's About Targeting the "Right Patients" for High-Value Treatments</span></h2>
        <p className="mt-3 mb-4 text-start text-md-center element" style={{marginTop:"0px"}}>
          The real advantage of digital marketing lies in the ability to target and attract the right audience, using specific keywords that drive the right traffic to your website. One of the common mistakes we see is doctors investing in SEO or PPC without a comprehensive strategy that defines the type of cases they want to bring in and the search behaviors of potential patients. Keep in mind, when people are preparing to make a significant life purchase, they often spend up to seven times longer researching online than typical consumers. This highlights why digital marketing is crucial when it comes to attracting high-dollar cases.
        </p>
        <div className="mt-3">
          <Link to="/contact" className="btn btn-success btn-lg"> Let's Talk <i className="bi bi-arrow-right ms-2"></i></Link>
        </div>
      </div>
    </section>
  );
};

export default DentalWebsiteContent;
