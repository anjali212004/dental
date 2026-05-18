import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../global.css'
import { Link } from "react-router-dom";

const TraditionalRadioAdvertisement = () => {
    return (
        <section className="text-center text-black" >
            <div className="wrapper">
                <h2 className="title" >Radio Advertising in Traditional <span className="subTitle">Marketing</span></h2>
                <p className="mt-3 mb-4 px-3 element" style={{ marginTop: "0px" }}>Radio advertising remains a vital component of traditional marketing, offering businesses a cost-effective way to reach a broad audience. Unlike digital marketing, radio ads can effectively target local communities, ensuring brand awareness among specific demographics. They provide a personal touch through voice and sound, creating an emotional connection with listeners. Additionally, radio is accessible to people on the go, such as commuters and workers, making it a powerful medium for reinforcing brand messages repeatedly. Despite the rise of online advertising, radio continues to be a trusted platform that enhances brand recall and complements other marketing strategies.
                </p>
                <div className=" mt-3">
                    <Link to="/contact" className="btn btn-success btn-lg"> Let's Talk <i className="bi bi-arrow-right ms-2"></i></Link>
                </div>
            </div>
        </section>
    );
};

export default TraditionalRadioAdvertisement;