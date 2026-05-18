import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./email.css";
import { Link } from "react-router-dom";

const EmailSubscription = () => {
    return (
        <div
            className="d-flex flex-column align-items-center justify-content-center p-5"
            style={{
                background: "linear-gradient(to bottom, #edf7ed, #f7fbf7)",
                minHeight: "250px",
                marginTop: "60px",
                textAlign: "center",
                borderRadius: "15px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
            }}
        >
            {/* Enquire Now Section */}
            <div className="d-flex justify-content-between align-items-center w-100 ">
                <h1 className="mb-3 title" style={{ textAlign: "left", color: "#08344e" }}>
                    Ready to turn dreams into reality? <br/> <span className="subTitle">Let's get started now!</span>
                </h1>
                <div className="d-flex align-items-center gap-3">
                    <h2 className="subTitle" style={{ color: "#08344e" }}>Enquire Now</h2>
                    <Link to="/contact" className="btn btn-success" style={{ borderRadius: "25px", padding: "10px 20px", backgroundColor: "#008037", borderColor: "#006b2d" }}>
                        Contact Us
                    </Link>
                </div>
            </div>
            
            {/* Divider */}
            {/* <div style={{ width: "80%", height: "2px", backgroundColor: "#006b2d", margin: "20px 0" }}></div> */}

            {/* Subscription Form */}
            <div className="d-flex flex-column align-items-center">
                <h4 style={{ color: "#08344e", fontSize: "20px" }}>Subscribe to our newsletter</h4>
                <div className="input-group pt-2" style={{ maxWidth: "400px", width: "100%", gap: "10px" }}>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                        style={{
                            backgroundColor: "#ffffff",
                            borderRadius: "25px",
                            boxShadow: "10px 10px rgba(0, 0, 0, 0.1)",
                            borderColor: "#006b2d",
                        }}
                    />
                    <button
                        className="btn btn-success"
                        type="button"
                        style={{
                            borderRadius: "25px",
                            padding: "7px 20px",
                            backgroundColor: "#008037",
                            borderColor: "#006b2d"
                        }}
                    >
                        Subscribe Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmailSubscription;
