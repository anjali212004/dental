import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CustomPhotography.css"; // Custom CSS for tilt effect
import v12 from "../../images/v12.jpg";
import v11 from "../../images/v11.jpg";
import v13 from "../../images/v13.jpg";
import "../global.css";

const CustomPhotography = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // 3 images show hongi ek sath
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="wrapper text-center">
      <h2 className="mb-3 title">Custom <span className="subTitle"> Photography</span> </h2>
      <p className="text-muted element" style={{marginTop:"0px"}}>
      Custom photography refers to personalized, tailor-made photography services designed to meet a client’s specific needs, preferences, and objectives. Unlike stock photography, where images are generic and used by anyone, custom photography involves a more thoughtful and deliberate approach. It takes into account the client’s brand, style, vision, and target audience.
In custom photography, the photographer works closely with the client to understand the concept and purpose of the photos. 
      </p>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="image-container-cp tilt-left">
            <img src={v11} alt="Left" className="img-fluid cuspho" />
          </div>
          <div className="image-container-cp">
            <img src={v12} alt="Center" className="img-fluid cuspho" />
          </div>
          <div className="image-container-cp tilt-right">
            <img src={v13} alt="Right" className="img-fluid cuspho" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CustomPhotography;
