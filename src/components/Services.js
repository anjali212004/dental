import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopMedical,
  faBullhorn,
  faTooth,
  faShareAlt,
  faNewspaper,
  faVideo
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Services.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";

const serviceList = [
  { id: 1, name: "Dental Websites", icon: faLaptopMedical, desc: "Professional, user-friendly websites for dental practices." },
  { id: 2, name: "Digital Marketing", icon: faBullhorn, desc: "Boost your online presence with effective strategies." },
  { id: 3, name: "Dental Marketing", icon: faTooth, desc: "Tailored marketing to attract new dental patients." },
  { id: 4, name: "Social Media", icon: faShareAlt, desc: "Engage with patients through social platforms." },
  { id: 5, name: "Traditional Marketing", icon: faNewspaper, desc: "Offline strategies to grow your dental brand." },
  { id: 6, name: "Videography", icon: faVideo, desc: "Create compelling videos for your practice." }
];

const Services = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".service-card");
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("animate");
      }, index * 200);
    });
  }, []);

  return (
    <div className="wrapper text-center">
      <h1 className="heading mb-4">
        <span className="circle title">
        Empower Your Business with Our &nbsp; <span className="subTitle"> Services</span>
        </span>
      </h1>

      <p className="element" style={{ fontSize: "18px", margin: "0" }}>
        Elevate your dental practice with expert web design, digital marketing, and branding solutions. We create professional, mobile-friendly dental websites and use advanced marketing strategies to expand your reach and grow your practice.
      </p>

      <div className="row mt-5 justify-content-center">
        {serviceList.map((service) => (
          <div key={service.id} className="col-lg-4 col-md-6 mb-4">
            <div className="service-card p-4 shadow-lg">
              <FontAwesomeIcon icon={service.icon} className="service-icon mb-3" style={{ fontSize: "40px" }} />
              <h4 className="fw-bold">{service.name}</h4>
              <p className="text-muted">{service.desc}</p>
              <Link to={`/services/${service.name.toLowerCase().replace(/\s+(.)/g, (match, letter) => letter.toUpperCase())}`} className="btn btn-success">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
