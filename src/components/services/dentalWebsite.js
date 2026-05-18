import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../global.css'
import { Link } from "react-router-dom";

const dentalWebsite  = ()=> {
  return (
    <section className="text-center text-black" >
      <div className="container">
        <h2 className="" style={{ fontSize: "49px", fontWeight: "600", color: '#08344e' }}>Transform Your Dental Website Into A Patient Magnet</h2>
        <p className="mt-3 mb-4 px-3 element" style={{ marginTop: "0px", fontSize: "16px" }}> Your dental website should be an essential tool for attracting new patients and growing your practice. Instead of opting for a generic, outdated design, we’ll create a custom website that works seamlessly to bring in a consistent flow of patients. Whether you want to attract general patients or specialized cases like dental implants, periodontal treatments, orthodontics, or restorative procedures, we design your site to meet your specific goals. We take care of everything—from strategy and content creation to design, development, and optimization—ensuring your website becomes a key asset for your practice.</p>
        <div className=" mt-3">
          <Link to="/about" className="btn btn-success btn-lg"> Let's Talk <i className="bi bi-arrow-right ms-2"></i></Link>
        </div>
      </div>
    </section>
  );
};

export default dentalWebsite;
