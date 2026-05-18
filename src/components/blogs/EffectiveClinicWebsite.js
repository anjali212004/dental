import React from 'react';
import { Link } from 'react-router-dom';
import clinicImage from "../../images/ec.jpg";
import "./blogPost.css";
import { FaCalendar, FaMapMarkerAlt, FaClock, FaShare } from 'react-icons/fa';
import "../global.css";

const EfficientClinicWebsite = () => {
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
        <h1 className='title'>Why Every Clinic Needs an Efficient Website</h1>
        <div className="blog-meta">
          <span><FaMapMarkerAlt /> Los Angeles, USA</span>
          <span><FaCalendar /> August 10, 2024</span>
          <span><FaClock /> 7 min read</span>
        </div>
      </div>

      {/* Featured Image */}
      <div className="featured-image-container">
        <img src={clinicImage} alt="Efficient Clinic Website" className="featured-image" />
        <div className="image-caption">Modern and efficient clinic website design</div>
      </div>

      {/* Blog Content */}
      <article className="blog-content">
        {/* Introduction */}
        <section className="content-section">
          <h2 className='text-center title'>The Importance of a <span className='subTitle'>Modern Clinic Website</span></h2>
          <p className="lead-paragraph element" style={{ marginTop: "0px" }}>
            In today's fast-paced digital world, an efficient website is a necessity for clinics. With patients increasingly relying on online information to choose healthcare providers, your clinic's website serves as the first point of contact, setting the tone for trust and professionalism.
            
            A well-structured website enhances accessibility, improves appointment scheduling, and provides essential health information. Features like online booking, virtual consultations, secure patient portals, and mobile-friendly design help streamline operations and enhance patient experience. Additionally, strong search engine optimization (SEO) ensures higher visibility in local search results.
            
            Investing in a modern, well-optimized clinic website is not just about digital presence—it's about offering convenience, building credibility, and ensuring patient satisfaction in a highly competitive healthcare environment.
          </p>
        </section>

        {/* Key Benefits Section */}
        <section className="content-section highlight-box">
          <h3 className='title text-center'>Key Benefits of an <span className='subTitle'>Efficient Clinic Website</span></h3>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h4>Improved Accessibility</h4>
              <p>Provide vital information and services 24/7</p>
            </div>
            <div className="benefit-item">
              <h4>Streamlined Appointments</h4>
              <p>Enable hassle-free online booking for patients</p>
            </div>
            <div className="benefit-item">
              <h4>Better Patient Communication</h4>
              <p>Offer real-time chat, FAQs, and informative blogs</p>
            </div>
            <div className="benefit-item">
              <h4>Enhanced Credibility</h4>
              <p>Build trust through testimonials and professional design</p>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="content-section stats-container">
          <h3 className='text-center title'>Impact on Patient <span className='subTitle'>Experience</span></h3>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">78%</span>
              <p>of patients prefer online appointment booking</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">65%</span>
              <p>trust clinics with professional websites</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">50%</span>
              <p>look for online health resources before visiting</p>
            </div>
          </div>
        </section>

        {/* Implementation Guide */}
        <section className="content-section">
          <h3 className='text-center title'>Building an Efficient Website</h3>
          <div className="steps-container">
            <div className="step">
              <span className="step-number">1</span>
              <h4>Define Your Goals</h4>
              <p>Identify key functionalities and patient needs.</p>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <h4>Design & Development</h4>
              <p>Create a user-friendly, responsive website.</p>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <h4>Content & SEO</h4>
              <p>Optimize pages with engaging, informative content.</p>
            </div>
            <div className="step">
              <span className="step-number">4</span>
              <h4>Continuous Optimization</h4>
              <p>Update content, monitor performance, and improve UX.</p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="content-section conclusion">
          <h3 className='title text-center'>Final Thoughts</h3>
          <p className="element" style={{ marginTop: "0px" }}>
            A well-designed clinic website goes beyond aesthetics—it enhances patient trust, streamlines processes, and improves overall healthcare accessibility. By implementing essential features and keeping up with digital trends, clinics can provide a seamless experience for their patients while growing their practice.
          </p>
          <div className="cta-container">
            <Link to="/contact" className="cta-button">
              Start Building Your Clinic Website →
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
};

export default EfficientClinicWebsite;
