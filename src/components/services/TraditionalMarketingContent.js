import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../global.css'
import { Link } from "react-router-dom";

const TraditionalMarketingContent = () => {
    return (
        <section className="text-center text-black" >
            <div className="wrapper">
                <h2 className="title" >Expertise in Traditional <span className="subTitle">Dental Marketing</span></h2>
                <p className="mt-3 mb-4 px-3 element" style={{ marginTop: "0px" }}>For years, traditional media has played a crucial role in branding local businesses and attracting new patients. In the dental industry, its effectiveness depends on strategic planning, compelling design, and thorough location research. Poor execution can lead to high costs with uncertain results.

                    When done right, traditional dental marketing can be highly profitable. Progressive Dental specializes in research, design, and execution to ensure a successful launch. Whether for specialty or general dental practices, we help maximize patient acquisition and increase return on investment.

                    Most importantly, our nationwide presence and advertising volume allow us to secure prime dental billboard locations at the best rates available!
                </p>
                <div className=" mt-3">
                    <Link to="/contact" className="btn btn-success btn-lg"> Let's Talk <i className="bi bi-arrow-right ms-2"></i></Link>
                </div>
            </div>
        </section>
    );
};

export default TraditionalMarketingContent;