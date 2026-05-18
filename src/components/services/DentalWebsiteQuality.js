import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import dw3 from "../../images/dw3.jpg";
import '../global.css';
import './DentalWebsiteQuality.css';

const DentalWebsiteQuality = () => {
  return (
    <div className="wrapper">
      <div className="row align-items-center">
        {/* Left Section - Single Image */}
        <div className="col-lg-6 mt-2">
          <img
            src={dw3}
            className="img-fluid w-100 p-1"
            alt="site preview"
          />
        </div>
        
        {/* Right Section - Features */}
        <div className="col-lg-6 text-start">
          <h2 className="title" >Advanced Sites With <span className="subTitle">Superior Quality</span></h2>
          
          <div className="row">
            {/* First Column of Features */}
            <div className="col-md-6">
              <ul className="list-unstyled element" style={{marginTop:"0px"}}>
                <li>✅ Tailored Design</li>
                <li>✅ Mobile-Responsive Layout</li>
                <li>✅ Quick Load Time</li>
                <li>✅ Complimentary Updates</li>
                <li>✅ One-Tap Contact Dialing</li>
                <li>✅ One-Tap Navigation</li>
                <li>✅ Instructional Videos</li>
              </ul>
            </div>
            
            {/* Second Column of Features */}
            <div className="col-md-6">
              <ul className="list-unstyled element" style={{marginTop:"0px"}}>
                <li>✅ YouTube Integration</li>
                <li>✅ Google Reviews</li>
                <li>✅ Professional Practice</li>
                <li>✅ Stunning Photography</li>
                <li>✅ Social Media Connectivity</li>
                <li>✅ SEO Optimization</li>
                <li>✅ Comprehensive Reporting </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalWebsiteQuality;
