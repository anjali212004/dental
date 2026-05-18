import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../global.css";
import "./DentalWebsiteServices.css";

const services = [
  {
    title: "Strategy & Planning",
    description:
      "Our journey begins with a kickoff call to align on your practice objectives. We outline a roadmap to enhance your dental website and brand, ensuring it attracts and converts new patients effectively.",
    icon: <i className="fa fa-line-chart"></i>,
  },
  {
    title: "Development",
    description:
      "We integrate SEO, patient behavior analysis, and cutting-edge design principles to develop a website that resonates with visitors and drives appointment bookings.",
    icon: <i className="fa fa-code"></i>,
  },
  {
    title: "Site Presentation",
    description:
      "During site delivery, we guide you through every component of your website, ensuring maximum effectiveness and engagement.",
    icon: <i className="fa fa-eye"></i>,
  },
  {
    title: "Site Launch & Optimization",
    description:
      "Once your website is live, we engage in ongoing optimization, continuously refining strategies to enhance user engagement and conversions.",
    icon: <i className="fa fa-rocket"></i>,
  },
];

const DentalWebsiteServices = () => {
  return (
    <div className="wrapper">
      <h2 className="heading">
        <span className="circle title">
          Dental Website &nbsp; <span className="subTitle"> Services</span>
        </span>
      </h2>
      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-lg-6 col-md-6 col-sm-12 mb-4">
            <div className="dental-website-card h-100 text-center d-flex flex-column align-items-center">
              <div className="dental-website-icon">{service.icon}</div>
              <h5 className="dental-website-title">{service.title}</h5>
              <p className="element" style={{marginTop:"0px"}}>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DentalWebsiteServices;
