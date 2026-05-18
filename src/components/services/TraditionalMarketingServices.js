import React from "react";
import "../global.css"


const TraditionalMarketingServices = () => {
    return (
        <div className="wrapper">
            {/* Process Explanation */}
            <h2 className="title">Our <span className="subTitle">Services</span></h2>
            <div className="row mt-5">
                <div className="col-md-4">
                    <div className="h-100 p-3 pb-2 pt-5 shadow">
                        <h5 className="fs-5  mb-4 title" style={{fontSize:"30px", marginTop: "6px"}}>Staying Ahead in Marketing</h5>
                        <p className="text-muted mb-2 element" style={{ "lineHeight": "1.5", marginTop: "6px" }}>We keep up with the latest marketing trends, monitoring your practice’s call volume and online leads to refine campaigns for optimal results.</p>
                        <p className="text-end w-full text-main fs-1"><i className="fa-solid fa-bullhorn"></i></p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="h-100 p-3 pt-5 shadow">
                        <h5 className="fs-5 mb-4 title" style={{fontSize:"30px", marginTop: "6px"}}>Targeted Marketing Research</h5>
                        <p className="text-muted mb-2 element " style={{ "lineHeight": "1.5", marginTop: "6px" }}>We focus on specific procedures and tailor campaigns based on location, age, gender, and income to maximize your reach.</p>
                        <p className="text-end w-full text-main fs-1">
                            <i className="fa-solid fa-magnifying-glass-chart"></i>
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="h-100 p-3 pt-5 shadow">
                        <h5 className="fs-5 mb-4 title" style={{fontSize:"30px", marginTop: "6px"}}>Strategic Media Planning</h5>
                        <p className="text-muted element" style={{ "lineHeight": "1.5", marginTop: "6px" }}>We analyze research data and budget constraints to recommend the most effective media channels for promoting your practice.</p>
                        <p className="text-end w-full text-main fs-1">
                            <i className="fa-solid fa-chart-line"></i>
                        </p>
                    </div>
                </div>
                <div className="col-md-4 mt-4">
                    <div className=" h-100 p-3 pt-5 shadow">
                        <h5 className="fs-5 mb-4 title" style={{fontSize:"30px", marginTop: "6px"}}>Negotiating the Best Deals</h5>
                        <p className="text-muted element" style={{ "lineHeight": "1.5", marginTop: "6px" }}>Leveraging our extensive client network, we negotiate with TV, radio, and newspapers to get you the best possible pricing.</p>
                        <p className="text-end w-full text-main fs-1">
                            <i className="fa-solid fa-handshake"></i>
                        </p>
                    </div>
                </div>
                <div className="col-md-4 mt-4">
                    <div className=" h-100 p-3 pt-5 shadow">
                        <h5 className="fs-5 mb-4 title" style={{fontSize:"30px", marginTop: "6px"}}>Customizable Advertising</h5>
                        <p className="text-muted element" style={{ "lineHeight": "1.5", marginTop: "6px" }}>From TV commercials to newspaper and radio ads, we ensure your practice gets visibility among potential patients.</p>
                        <p className="text-end w-full text-main fs-1">
                            <i className="fa-solid fa-ad"></i>
                        </p>
                    </div>
                </div>
                <div className="col-md-4 mt-4">
                    <div className=" h-100 p-3 pt-5 shadow">
                        <h5 className="fs-5 mb-4 title" style={{fontSize:"30px", marginTop: "6px"}}>Advanced Analytics & Reporting</h5>
                        <p className="text-muted element" style={{ "lineHeight": "1.5", marginTop: "6px" }}>With our in-house tools and dedicated account managers, we track and refine your campaign’s performance for continued success.</p>
                        <p className="text-end w-full text-main fs-1">
                            <i className="fa-solid fa-chart-pie"></i>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TraditionalMarketingServices;
