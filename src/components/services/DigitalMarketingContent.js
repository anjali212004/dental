import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../global.css'
import { Link } from "react-router-dom";

const DigitalMarketingContent  = ()=> {
  return (
    <section className="text-center text-black" >
      <div className="wrapper">
        <h2 className=" title" >It's Not Just About Attracting "New Patients" – <span className="subTitle">It's About Targeting the "Right Patients" for High-Value Treatments</span></h2>
        <p className="mt-3 mb-4 text-start text-md-center element" style={{ marginTop: "0px"}}>Simply attracting new patients isn’t enough in today’s competitive market. To truly grow your practice, it’s crucial to bring in the right patients—those seeking specific, high-dollar treatments. The power of digital marketing lies in its ability to target and refine who sees your site and what search terms trigger its visibility. A common mistake many doctors make is investing in SEO or PPC without a clear strategy focused on the types of cases they want to attract or the searches potential patients are conducting. Keep in mind, individuals looking for significant procedures will spend far more time online researching their options, making digital marketing a vital tool for high-value case acquisition.</p>
        <div className=" mt-3">
          <Link to="/contact" className="btn btn-success btn-lg"> Let's Talk <i className="bi bi-arrow-right ms-2"></i></Link>
        </div>
      </div>
    </section>
  );
};

export default  DigitalMarketingContent;