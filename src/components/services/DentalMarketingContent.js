import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../global.css'
import { Link } from "react-router-dom";

const DentalMarketingContent  = ()=> {
  return (
    <section className="text-center text-black" >
      <div className="wrapper">
        <h2 className="title">Elevate Your Practice with <span className="subTitle">Smarter Growth</span></h2>
        <p className="mt-3 mb-4 px-3 text-start text-md-center element" style={{ marginTop: "0px" }}>We specialize in dental marketing that focuses on securing high-value dental cases in bulk. Our approach emphasizes maximizing production per patient rather than simply increasing the number of new patients. We design tailored campaigns and training programs that consistently deliver profitable cases, driving substantial growth in your production without the need for additional patient visits. In other words, we help you work more efficiently and achieve greater success without working harder.</p>
        <div className=" mt-3">
          <Link to="/contact" className="btn btn-success btn-lg"> Let's Talk <i className="bi bi-arrow-right ms-2"></i></Link>
        </div>
      </div>
    </section>
  );
};

export default DentalMarketingContent;
