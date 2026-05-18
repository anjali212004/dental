import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./HeroSection.css"
import blog3 from "../images/hs1.jpg"
import blog1 from "../images/hs2.jpg"
import blog2 from "../images/hs3.jpg"
import blog4 from "../images/hs4.jpg"
import blog5 from "../images/hs5.jpg"
import hs11 from "../images/hs11.png";
import hs12 from "../images/hs12.png";
import hs13 from "../images/hs13.png";
import hs14 from "../images/hs14.png";
import hs15 from "../images/hs15.png";
import "./global.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [fade, setFade] = useState(true)
  

  const [imagesLoaded, setImagesLoaded] = useState(false)

  const slides = [
    {
      id: 1,
      content:
        "Our expert developers craft custom dental websites that engage patients and boost your online presence.",
      highlight: "Custom Dental ",
      buttonLabel: "Design My Site",
      image: blog1,
      image2: hs11,
    },
    {
      id: 2,
      content: "Get a modern, mobile-friendly website tailored to your dental practice. Stand out online and attract new patients today.",
      highlight: "Mobile-Friendly",
      buttonLabel: "Get Started Now",
      image: blog2,
      image2: hs12,
    },
    {
      id: 3,
      content: "Achieve a professional online presence with expert website design services. Grow your practice with confidence.",
      highlight: "Web Solutions",
      buttonLabel: "Grow Confidence",
      image: blog3,
      image2: hs13,
    },
    {
      id: 4,
      content: "Our SEO-optimized websites help your practice rank higher on search engines, bringing more patients to your door.",
      highlight: "SEO-Optimized",
      buttonLabel: "Boost My Rankings",
      image: blog4,
      image2: hs14,
    },
    {
      id: 5,
      content: "Experience hassle-free website management with ongoing support. Focus on your practice while we handle the tech.",
      highlight: "Ongoing Support",
      buttonLabel: "Let's Manage It",
      image: blog5,
      image2: hs15,
    },
  ];


  const logos = [
    { id: 1, text: "World Hive" },
    { id: 2, text: "Inside Studio" },
    { id: 3, text: "Chat Meeting" },
  ]

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = slides.map((slide) => {
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.src = slide.image
          img.onload = resolve
          img.onerror = reject
        })
      })

      try {
        await Promise.all(imagePromises)
        setImagesLoaded(true)
      } catch (error) {
        console.error("Error loading images:", error)
        setImagesLoaded(true)
      }
    }

    loadImages()
  }, [])

  // Slider effect
  useEffect(() => {
    if (!imagesLoaded) return

    const slideInterval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setFade(true)
      }, 500)
    }, 4000)

    return () => clearInterval(slideInterval)
  }, [slides.length, imagesLoaded])

  if (!imagesLoaded) {
    return (
      <div className="hero-section d-flex justify-content-center align-items-center">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="hero-section d-flex justify-content-center align-items-center text-center">
      <div className="wrapper">
        <div className="row justify-content-center align-items-center text-center">
          {/* Left Content Section */}
          <div className="col-12 col-md-7 d-flex flex-column align-items-start text-start px-4">
            <h1
              className="text-start"
              style={{
                fontSize: "clamp(30px, 5vw, 60px)",
                fontWeight: "600",
                color: "#094886"
              }}
            >
              Drive Your Dental Practice Growth with{" "}
              <span
                className={`highlight ${fade ? "slide-in" : "slide-out"}`}
                style={{
                  fontSize: "clamp(20px, 5vw, 55px)",
                  fontWeight: "600",
                  display: "inline-block",
                  color: "#169D53",
                }}
              >
                {slides[currentSlide].highlight}
              </span>
            </h1>

            <p className={`mt-3 text-start element ${fade ? "slide-in" : "slide-out"}`} style={{marginTop:"0px"}}>
              {slides[currentSlide].content}
            </p>

            <Link to="/contact"
              className={`btn btn-success text-white btn-lg mt-4 rounded-pill ${fade ? "slide-in" : "slide-out"}`}
              style={{ alignSelf: "flex-start" }}
            >
              {slides[currentSlide].buttonLabel}
            </Link>
          </div>

          {/* Right Image Section */}
          <div className="col-12 col-md-5 d-flex justify-content-center">
            <div className="position-relative" style={{ width: "381px",minHeight: "420px" }}>
              {/* Main Image with Slide Effect */}
              <div 
                className={`position-absolute top-0 start-0 w-100 h-100 ${fade ? "slide-in" : "slide-out"}`} 
                style={{ borderRadius: "0 50% 50% 0", overflow: "hidden", border: "2px solid #ccc" }}
              >
                <img
                  src={slides[currentSlide].image}
                  alt={`Slide ${currentSlide + 1}`}
                  className="img-fluid w-100 h-100 object-fit-cover"
                />
              </div>

              {/* Overlay Image with Slide Effect */}
              <img
                src={slides[currentSlide].image2}
                alt="Overlay"
                className={`position-absolute top-0 start-0 ${fade ? "slide-in" : "slide-out"}`}
                style={{ 
                  width: "187px",
                  height: "147px",
                  marginTop: "271px",
                  marginLeft: "-59px"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection