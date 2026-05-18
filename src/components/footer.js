import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.png";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div>
            <footer className="bg-light" style={{ lineHeight: "3" }}>
                <div className="container">
                    <div className="row">
                        {/* Logo Section */}
                        <div className="col-md-3 mb-3">
                            <h5 className="text-dark">
                                <img
                                    src={logo}
                                    alt="Proinvest"
                                    className="img-fluid"
                                    style={{ maxHeight: "150px", maxWidth: "200px" }}
                                />
                            </h5>
                        </div>

                        {/* Menu Section */}
                        <div className="col-md-3 mb-3">
                            <h6 className="fw-bold text-start" style={{ fontSize: "1.60rem", color: '#474757' }}>Menu</h6>
                            <ul className="text-start">
                                <li>
                                    <Link className="text-dark text-decoration-none" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-dark text-decoration-none" to="/ourStory">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-dark text-decoration-none" to="/services">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-dark text-decoration-none" to="/contact">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Links Section */}
                        <div className="col-md-3 mb-3">
                            <h6 className="fw-bold text-start" style={{ fontSize: "1.60rem", color: '#474757' }}>Links</h6>
                            <ul className="text-start">
                                <li>
                                    <Link className="text-dark text-decoration-none" to="/resources">
                                        Our Blogs
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-dark text-decoration-none" to="/privacy-policy">
                                        Privacy policy
                                    </Link>
                                </li>

                                <li>
                                    <Link className="text-dark text-decoration-none" to="/term-conditions">
                                        Terms & conditions
                                    </Link>
                                </li>

                            </ul>
                        </div>

                        {/* Address Section */}
                        <div className="col-md-3 mb-3">
                            <h6 className="fw-bold text-start" style={{ fontSize: "1.60rem", color: '#474757' }}>Our Address</h6>
                            <ul className="text-start">
                                <li className="mb-1" style={{ lineHeight: '1.5rem' }}>3448 Palmer Hwy, Texas City, TX 77590, United States</li>
                                <li className="mb-3">(+91) 9039383183</li>
                            </ul>
                            <div className="d-flex " style={{ marginLeft: "10px" }}>
                                <a href="/" className="text-dark me-3"><i className="fab fa-youtube"></i></a>
                                <a href="/" className="text-dark me-3"><i className="fab fa-facebook"></i></a>
                                <a href="/" className="text-dark me-3"><i className="fab fa-twitter"></i></a>
                                <a href="/" className="text-dark"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom Section */}
                    <div className="text-center mt-4">
                        <p className="text-secondary small mb-0">
                            © Copyright 2024 <span className="fw-bold">Dental Website Media.</span> All rights reserved
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
