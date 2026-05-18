import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "10px 0",
        color: "#094886",
        fontWeight: "400"
      }}
    >
      <div className="container">
        <div className="mobile-nav-container">
          <Link className="navbar-brand me-5" to="/">
            <img src={logo} alt="Logo" style={{ width: "150px" }} />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          {/* Main Navigation Links */}
          <ul className="navbar-nav me-auto" style={{ gap: "26px" }}>
            <li className="nav-item">
              <Link className="nav-link" to="/ourStory" style={{ fontSize: "18px", color: '#08344e' }}>
                Our Story
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ fontSize: "18px", color: '#08344e' }}
              >
                Services
              </Link>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li><Link className="dropdown-item" to="/services/dentalWebsites">Dental Websites</Link></li>
                <li><Link className="dropdown-item" to="/services/digitalMarketing">Digital Marketing</Link></li>
                <li><Link className="dropdown-item" to="/services/dentalMarketing">Dental Marketing</Link></li>
                <li><Link className="dropdown-item" to="/services/socialMedia">Social Media</Link></li>
                <li><Link className="dropdown-item" to="/services/traditionalMarketing">Traditional Marketing</Link></li>
                <li><Link className="dropdown-item" to="/services/videography">Videography</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ fontSize: "18px", color: '#08344e' }}
              >
                Dental Website
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/custom-design">
                    Custom Design
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/semi-custom-design">
                    Semi-Custom Design
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/pre-design">
                    Pre-Design
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/integration">
                    Integration
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link 
                className="nav-link dropdown-toggle" 
                to="#" 
                id="navbarDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
                style={{ fontSize: "18px", color: '#08344e' }}
              >
                Our Work
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/gallery">Gallery</Link></li>
                <li><Link className="dropdown-item" to="/success-stories">Success Stories</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/resources" style={{ fontSize: "18px", color: '#08344e' }}>
                Blogs
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact" style={{ fontSize: "18px", color: '#08344e' }}>
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Phone Number (Right-aligned) */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
               to="/contact"
                className="btn"
                
                style={{
                  backgroundColor: "#2c9133",
                  color: "white",
                  fontWeight: "bold",
                  padding: "8px 18px",
                  borderRadius: "20px",
                }}
              >
                111-222-3333
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;