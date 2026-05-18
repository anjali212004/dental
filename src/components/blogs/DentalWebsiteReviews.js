import React from 'react';
import { Link } from 'react-router-dom';
import dentalImage from "../../images/blog7.jpg";
import "./blogPost.css";
import { FaCalendar, FaMapMarkerAlt, FaClock, FaShare } from 'react-icons/fa';
import "../global.css";

const DentalWebsiteVisuals = () => {
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
        <h1 className='title'>The Role of Visuals in Dental Websites</h1>
        <div className="blog-meta">
          <span><FaMapMarkerAlt /> New York, USA</span>
          <span><FaCalendar /> September 15, 2024</span>
          <span><FaClock /> 6 min read</span>
        </div>
      </div>

      {/* Featured Image */}
      <div className="featured-image-container">
        <img src={dentalImage} alt="Dental Website Visuals" className="featured-image" />
        <div className="image-caption">How visuals enhance dental website engagement</div>
      </div>

      {/* Blog Content */}
      <article className="blog-content">
        {/* Introduction */}
        <section className="content-section">
          <h2 className='text-center title'>The Power of <span className='subTitle'>Visual Elements</span></h2>
          <p className="lead-paragraph element" style={{ marginTop: "0px" }}>
            In the competitive world of dental healthcare, a visually appealing website plays a crucial role in attracting and retaining patients. High-quality visuals not only create a lasting first impression but also build trust and credibility.
            
            From professional photography to engaging infographics, visuals enhance user experience by making information more digestible and engaging. Well-placed images, videos, and graphics can help convey dental procedures effectively, reduce patient anxiety, and showcase clinic professionalism.
          </p>
        </section>

        {/* Key Benefits Section */}
        <section className="content-section highlight-box">
          <h3 className='title text-center'>Why Visuals Matter in <span className='subTitle'>Dental Websites</span></h3>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h4>Enhances Trust</h4>
              <p>Professional visuals build credibility and reassure patients.</p>
            </div>
            <div className="benefit-item">
              <h4>Improves Engagement</h4>
              <p>Eye-catching images and videos increase patient interest.</p>
            </div>
            <div className="benefit-item">
              <h4>Educates Patients</h4>
              <p>Infographics simplify complex dental procedures.</p>
            </div>
            <div className="benefit-item">
              <h4>Boosts SEO</h4>
              <p>Optimized visuals improve search engine rankings.</p>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="content-section stats-container">
          <h3 className='text-center title'>Visual Impact on <span className='subTitle'>User Experience</span></h3>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">80%</span>
              <p>of people remember visual content better than text.</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">60%</span>
              <p>more engagement occurs on pages with relevant images.</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">70%</span>
              <p>of patients feel more comfortable after seeing procedural videos.</p>
            </div>
          </div>
        </section>

        {/* Implementation Guide */}
        <section className="content-section">
          <h3 className='text-center title'>Optimizing Visuals for Your Dental Website</h3>
          <div className="steps-container">
            <div className="step">
              <span className="step-number">1</span>
              <h4>Use High-Quality Images</h4>
              <p>Invest in professional photos of your clinic and staff.</p>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <h4>Incorporate Videos</h4>
              <p>Create informative videos to explain procedures clearly.</p>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <h4>Leverage Infographics</h4>
              <p>Use visuals to break down dental care tips and services.</p>
            </div>
            <div className="step">
              <span className="step-number">4</span>
              <h4>Ensure Mobile Responsiveness</h4>
              <p>Optimize images and videos for seamless mobile viewing.</p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="content-section conclusion">
          <h3 className='title text-center'>Final Thoughts</h3>
          <p className="element" style={{ marginTop: "0px" }}>
            Visual content is a powerful tool for dental websites, helping clinics establish trust, educate patients, and improve engagement. By strategically incorporating high-quality images, videos, and graphics, dental professionals can enhance their online presence and provide a superior user experience.
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

export default DentalWebsiteVisuals;
