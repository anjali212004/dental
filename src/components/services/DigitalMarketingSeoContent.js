import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../global.css'
import { Link } from "react-router-dom";

const DigitalMarketingSeoContent = () => {
    return (
        <section className="text-center text-black" >
            <div className="wrapper">
                <h2 className="title" >How SEO Can Benefit Your <span className="subTitle">Dental Practice</span></h2>
                <p className="mt-3 mb-4 px-3 element" style={{ marginTop: "0px", fontSize: "16px" }}>Search engines rely on metadata to display relevant information on the results page. This metadata serves as a brief summary of a page’s content. By optimizing this metadata, we can target specific services to particular locations. Properly aligning these factors improves rankings and boosts visibility across multiple search engines.
                    We prioritize staying ahead of industry trends to enhance the user experience, ultimately driving high-quality patient conversions. Our process starts with an SEO quality control check to ensure your dental website meets search engine guidelines. By continuously analyzing data, we refine and optimize to keep your website on the cutting edge of SEO developments.</p>
                <div className=" mt-3">
                    <Link to="/contact" className="btn btn-success btn-lg"> Let's Talk <i className="bi bi-arrow-right ms-2"></i></Link>
                </div>
            </div>
        </section>
    );
};

export default DigitalMarketingSeoContent;
