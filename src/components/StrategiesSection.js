import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faBullseye } from "@fortawesome/free-solid-svg-icons";
import "./StrategiesSection.css"; // For custom styles
import mockuphandphone from "../images/about11.jpg";
import "./global.css";

const StrategiesSection = () => {
    return (
        <div className="wrapper">
            <div className="row align-items-center">
                {/* Left Image Section */}
                <div className="col-md-6">
                    <h2 className="text-start title" style={{"fontSize":"53px","fontWeight":"600"}}>
                        Our Investment And Business <span className="subTitle">Strategies</span>.
                    </h2>
                    <div className="row mt-5">
                        {/* Card 1 */}
                        <div className="col-md-6 mb-4">
                            <div className="card strategy-card">
                                <div className="card-body text-start">
                                    <FontAwesomeIcon icon={faLightbulb} size="2x" className="text-success icon mb-3" />
                                    <h5 className="card-title element"   style={{"fontSize":"28px","fontWeight":"500", color: '#08344e',marginTop:"0px"}}>Progressive Path</h5>
                                    <p className="card-text element" style={{marginTop:"0px",lineHeight:"2rem"}}>Ensure mobile responsiveness for seamless user experiences across devices and prioritize security through SSL encryption.</p>
                                </div>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="col-md-6 mb-4">
                            <div className="card strategy-card">
                                <div className="card-body text-start">
                                    <FontAwesomeIcon icon={faBullseye} size="2x" className="text-success icon mb-3" />
                                    <h5 className="card-title element"    style={{"fontSize":"28px","fontWeight":"500", color: '#08344e',marginTop:"0px"}}>Growth Goals</h5>
                                    <p className="card-text element"  style={{marginTop:"0px",lineHeight:"2rem"}}>To foster growth, integrate patient engagement features like appointment booking and live chat for better communication. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Right Content Section */}
               

                <div className="col-md-6 text-center">
                    <div className="hover-image-container">
                        <img
                            src= {mockuphandphone} // Replace with actual image URL
                            alt="Investment Strategies"
                            className=" hover-image"
                            // style={{height:"850px"}}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StrategiesSection;
