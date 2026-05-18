import React from "react";
import "./global.css"

const ContactUs = () => {
    return (
        <div className="wrapper">
            <div className="row">
                {/* Contact Form Section */}
                <div className="col-md-5 mt-5" style={{
                    border: "1px solid rgb(52, 123, 52)",
                    borderRadius: "4px",
                    outline: "none",
                }}>
                    <div className="card p-4 shadow">
                        <h2 className="mb-4 text-center title" >Contact Form</h2>
                        <form>
                            <div className="row mt-3">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label text-start d-block">
                                        First Name <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="First Name Here"
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label text-start d-block">
                                        Last Name <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Last Name Here"
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-start d-block">
                                    Email Address <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Add Email"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-start d-block">
                                    Subject <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="How Can We Help You?"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-start d-block">
                                    Comments / Questions <span className="text-danger">*</span>
                                </label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    placeholder="Comments" style={{
                                        border: "1px solid #95bf95",
                                        borderRadius: "4px",
                                        outline: "none",
                                    }}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>




                <div className="col-md-1">
                </div>
                {/* Content Section */}
                <div className="col-md-6 mt-5">
                    <div className="card p-4 shadow">
                        <h2 className="mb-3 text-start title" >
                            Book a <span className="subTitle">consultation</span> with experienced advisors.
                        </h2>
                        <p className="text-start element" style={{marginTop:"0px",lineHeight:"2rem"}}>
                        By contacting us, you can obtain answers to your questions, receive
                        feedback, and schedule appointments. Our dedicated team is here to assist you with expert guidance, personalized support, and solutions tailored to your needs.
                        </p>
                        <div className="mt-4 text-start element"  style={{marginTop:"0px",lineHeight:"2rem"}}>
                            <h5>
                                <i className="fas fa-map-marker-alt me-2"></i>Our Address
                            </h5>
                            <p>Seminyak No.19, Badung, Bali.</p>
                        </div>
                        <div className="text-start element"  style={{marginTop:"0px",lineHeight:"2rem"}}>
                            <h5>
                                <i className="fas fa-phone me-2"></i>Contact Info
                            </h5>
                            <p>(316) 212-3456</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
