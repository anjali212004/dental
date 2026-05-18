import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../global.css'
import { Link } from "react-router-dom";

const VideographyContent = () => {
    return (
        <section className="text-center text-black" >
            <div className="wrapper">
                <h2 className="title" >A Picture is Worth a Thousand Words... But What <span className="subTitle">About a Video</span></h2>
                <p className="mt-3 mb-4 px-3 element" style={{ marginTop: "0px" }}>At Progressive Dental, our goal is to deliver powerful, impactful messages to clients in the most concise and compelling way possible through tailored videography and photography. For dentists, attracting the right kind of patients—those seeking quality care rather than just focusing on price—is essential. Using video to educate and offer a glimpse into the unique experience of being part of your practice is crucial.
                    Below, we showcase three types of dental videos we specialize in creating to help attract high-value cases to your practice. Our team of videographers are W2 employees at Progressive Dental, extensively trained in advanced procedures, terminology, and patient psychology. This allows us to handle everything from planning and filming to editing and delivery, ensuring every asset reflects our expertise.</p>
                <div className=" mt-3">
                    <Link to="/contact" className="btn btn-success btn-lg"> Let's Talk <i className="bi bi-arrow-right ms-2"></i></Link>
                </div>
            </div>
        </section>
    );
};

export default VideographyContent;