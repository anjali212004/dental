import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../global.css";
import "./DigitalMarketingServices.css";
import { FaChartLine, FaBullseye, FaClipboardCheck, FaSyncAlt } from "react-icons/fa";

const services = [
  {
    title: "Strategic Growth & Planning",
    description:
      "We partner with your practice to define high-value patient cases and develop a data-driven strategy that attracts the most qualified leads. Our targeted approach directs potential patients to a high-converting landing page, educating them and creating urgency to take action.",
    icon: <FaChartLine size={30} className="service-icon" />
  },
  {
    title: "Precision Execution",
    description:
      "A winning PPC campaign isn’t just about ads—it’s about relevance, timing, and optimization. We fine-tune keywords, craft compelling ad copy, and implement a structured campaign strategy that reduces costs while increasing conversion rates. The result? More high-quality leads at a lower cost.",
    icon: <FaBullseye size={30} className="service-icon" />
  },
  {
    title: "Performance Tracking & Insights",
    description:
      "Success isn’t a guessing game. We track every patient interaction—whether through call recordings, form submissions, or other conversion points—allowing us to directly connect results to your PPC campaign. By monitoring the full journey from first click to scheduled appointment, we ensure maximum return on investment.",
    icon: <FaClipboardCheck size={30} className="service-icon" />
  },
  {
    title: "Continuous Optimization & Growth",
    description:
      "Once live, the campaign doesn't stop evolving. We analyze performance data, refine targeting, and adjust strategies to enhance effectiveness. Through continuous testing and optimization, we drive sustained growth and ensure your marketing efforts deliver the highest ROI.",
    icon: <FaSyncAlt size={30} className="service-icon" />
  },
];

const DigitalMarketingServices = () => {
  return (
    <div className="wrapper">
      <h2 className="heading text-center mb-4">
        <span className="circle title">
          Digital Marketing &nbsp; <span className="subTitle"> Services</span>
        </span>
      </h2>
      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
            <div className="digital-marketing-service-card p-4">
              <div className="icon-container">{service.icon}</div>
              <h5 className="card-title">{service.title}</h5>
              <p className=" element" style={{marginTop:"0px"}}>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalMarketingServices;
