import React from 'react';
import { Link } from 'react-router-dom';
import dentalImage from "../../images/blogs8.webp";
import "./blogPost.css";
import { FaCalendar, FaMapMarkerAlt, FaClock, FaShare } from 'react-icons/fa';
import "../global.css";

const HighlightDentalServices = () => {
  return (
    <div className="blog-post-container">
      {/* Blog Navigation */}
      <div className="blog-nav">
        <Link to="/" className="back-link">
          <span className="arrow">←</span> Back to Blogs
        </Link>
        <div className="share-buttons">
          <FaShare /> Share
        </div>
      </div>

      {/* Blog Header */}
      <div className="blog-header">
        <h1 className='title'>How to Highlight Dental Services Effectively on Your Website</h1>
        <div className="blog-meta">
          <span><FaMapMarkerAlt /> New York, USA</span>
          <span><FaCalendar /> September 5, 2024</span>
          <span><FaClock /> 6 min read</span>
        </div>
      </div>

      {/* Featured Image */}
      <div className="featured-image-container">
        <img src={dentalImage} alt="Highlighting Dental Services" className="featured-image" />
        <div className="image-caption">Showcasing dental services effectively on a website</div>
      </div>

      {/* Blog Content */}
      <article className="blog-content">
        {/* Introduction */}
        <section className="content-section">
          <h2 className='text-center title'>The Importance of a <span className='subTitle'>Well-Designed Dental Website</span></h2>
          <p className="lead-paragraph element" style={{ marginTop: "0px" }}>
            A well-structured dental website is key to attracting new patients and retaining existing ones. 
            Your website serves as a digital front door, helping potential patients understand your services, 
            book appointments easily, and feel confident in their choice of a dental care provider.
          </p>
        </section>

        {/* Key Strategies Section */}
        <section className="content-section highlight-box">
          <h3 className='title text-center'>Key Strategies for Highlighting <span className='subTitle'>Dental Services</span></h3>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h4>Clear Service Pages</h4>
              <p>Ensure each service has a dedicated, detailed page.</p>
            </div>
            <div className="benefit-item">
              <h4>Engaging Visuals</h4>
              <p>Use high-quality images and videos of procedures.</p>
            </div>
            <div className="benefit-item">
              <h4>Patient Testimonials</h4>
              <p>Showcase real experiences to build trust.</p>
            </div>
            <div className="benefit-item">
              <h4>Easy Online Booking</h4>
              <p>Integrate a seamless appointment scheduling system.</p>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="content-section stats-container">
          <h3 className='text-center title'>Why a Strong Online Presence <span className='subTitle'>Matters</span></h3>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">80%</span>
              <p>of patients research dentists online before visiting</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">72%</span>
              <p>prefer online appointment scheduling</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">60%</span>
              <p>trust dental practices with professional websites</p>
            </div>
          </div>
        </section>

        {/* Implementation Guide */}
        <section className="content-section">
          <h3 className='text-center title'>Steps to Optimize Your Website</h3>
          <div className="steps-container">
            <div className="step">
              <span className="step-number">1</span>
              <h4>Define Your Core Services</h4>
              <p>Highlight essential treatments like cleanings, orthodontics, and cosmetic dentistry.</p>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <h4>Enhance User Experience</h4>
              <p>Make navigation simple and intuitive for patients.</p>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <h4>Leverage SEO & Content Marketing</h4>
              <p>Use keywords and informative blogs to improve search rankings.</p>
            </div>
            <div className="step">
              <span className="step-number">4</span>
              <h4>Incorporate Patient Reviews</h4>
              <p>Showcase testimonials to enhance credibility.</p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="content-section conclusion">
          <h3 className='title text-center'>Final Thoughts</h3>
          <p className="element" style={{ marginTop: "0px" }}>
            A compelling dental website enhances patient trust and engagement. By focusing on clear service presentation,
            user-friendly navigation, and strong SEO, dental practices can attract more patients and establish a strong digital presence.
          </p>
          <div className="cta-container">
            <Link to="/contact" className="cta-button">
              Optimize Your Dental Website Today →
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
};

export default HighlightDentalServices;
