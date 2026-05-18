import React from "react";
import "./DentalMarketingServices.css"; // Import CSS for styling
import "../global.css";

const DentalMarketingServices = () => {
  const services = [
    { icon: "tooth", title: "Dental Implants", desc: "Advanced solutions for missing teeth." },
    { icon: "teeth-open", title: "Full Arch Immediate Implants", desc: "Complete restoration in one visit." },
    { icon: "star", title: "LANAP", desc: "Laser-assisted gum disease treatment." },
    { icon: "teeth", title: "Pinhole", desc: "Minimally invasive gum recession treatment." },
    { icon: "smile", title: "Full Mouth Reconstruction", desc: "A complete smile transformation." },
    { icon: "bed", title: "Sleep Apnea", desc: "Improve sleep quality with dental devices." },
    { icon: "teeth", title: "Veneers / Smile Makeovers", desc: "Perfect your smile with veneers." },
    { icon: "grin", title: "Fast Braces, Invisalign, Traditional Ortho", desc: "Align your teeth effectively." },
  ];

  // Slightly darker but still modern colors
  const colors = ["#2E86C1", "#28B463", "#D68910", "#C0392B", "#8E44AD", "#1ABC9C", "#F39C12", "#E74C3C"];

  return (
    <div className="wrapper">
      <h2 className="title">
        Cases That We Specialize In <span className="subTitle">Marketing In Dentistry</span>
      </h2>
      <div className="dentalmarketing__grid mt-5">
        {services.map((service, index) => (
          <div key={index} className="dentalmarketing__card">
            <div
              className="dentalmarketing__card-left"
              style={{ backgroundColor: colors[index % colors.length] }} // Apply color to right border
            >
              {index + 1}
            </div>
            <div className="dentalmarketing__card-content">
              <div
                className="dentalmarketing__icon"
                style={{ color: colors[index % colors.length] }} // Apply same color to icon
              >
                <i className={`fas fa-${service.icon}`}></i>
              </div>
              <h5 className="subTitle" style={{ color: colors[index % colors.length] }}>
                {service.title}
              </h5>
              <p className="dentalmarketing__card-description element" style={{ marginTop: "0px", lineHeight: "1.5rem" }}>
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DentalMarketingServices;
