import React from 'react';
import { Link } from 'react-router-dom';
import clinicImage from "../../images/pc.jpg";
import "./blogPost.css";
import { FaCalendar, FaMapMarkerAlt, FaClock, FaShare } from 'react-icons/fa';
import "../global.css";

const AttractMorePatients = () => {
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
        <h1 className='title'>How to Attract More Patients to Your Clinic</h1>
        <div className="blog-meta">
          <span><FaMapMarkerAlt /> New York, USA</span>
          <span><FaCalendar /> August 12, 2024</span>
          <span><FaClock /> 6 min read</span>
        </div>
      </div>

      {/* Featured Image */}
      <div className="featured-image-container">
        <img src={clinicImage} alt="Attract More Patients" className="featured-image" />
        <div className="image-caption">Creating a patient-friendly clinic experience</div>
      </div>

      {/* Blog Content */}
      <article className="blog-content">
        {/* Introduction */}
        <section className="content-section">
          <h2 className='text-center title'>Why <span className='subTitle'>Patient Engagement</span> Matters</h2>
          <p className="lead-paragraph element" style={{ marginTop: "0px" }}>
            A thriving clinic is built on strong patient relationships. In today's digital world, patients expect easy access to healthcare information and seamless booking experiences. By improving your clinic’s online presence and patient care strategies, you can significantly increase patient inflow and satisfaction.
          </p>
        </section>

        {/* Strategies to Attract Patients */}
        <section className="content-section highlight-box">
          <h3 className='title text-center'>Effective Strategies to <span className='subTitle'>Attract Patients</span></h3>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h4>Optimize Your Website</h4>
              <p>Ensure mobile-friendliness, fast loading, and easy navigation.</p>
            </div>
            <div className="benefit-item">
              <h4>Online Booking System</h4>
              <p>Make appointment scheduling quick and hassle-free.</p>
            </div>
            <div className="benefit-item">
              <h4>Leverage Social Media</h4>
              <p>Engage with potential patients through health tips and updates.</p>
            </div>
            <div className="benefit-item">
              <h4>Encourage Reviews</h4>
              <p>Build trust by displaying testimonials from happy patients.</p>
            </div>
          </div>
        </section>

        {/* Patient Experience Stats */}
        <section className="content-section stats-container">
          <h3 className='text-center title'>What Patients <span className='subTitle'>Look For</span></h3>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">85%</span>
              <p>of patients check online reviews before choosing a clinic.</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">70%</span>
              <p>prefer clinics with an easy online booking system.</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">60%</span>
              <p>trust clinics that engage with patients on social media.</p>
            </div>
          </div>
        </section>

        {/* Action Plan */}
        <section className="content-section">
          <h3 className='text-center title'>Steps to Boost Patient Visits</h3>
          <div className="steps-container">
            <div className="step">
              <span className="step-number">1</span>
              <h4>Enhance Digital Presence</h4>
              <p>Invest in SEO and website optimization.</p>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <h4>Offer Seamless Communication</h4>
              <p>Provide online chat and email support.</p>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <h4>Engage with the Community</h4>
              <p>Host free health workshops and webinars.</p>
            </div>
            <div className="step">
              <span className="step-number">4</span>
              <h4>Build Patient Loyalty</h4>
              <p>Offer personalized care and follow-ups.</p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="content-section conclusion">
          <h3 className='title text-center'>Final Thoughts</h3>
          <p className="element" style={{ marginTop: "0px" }}>
            Attracting more patients requires a blend of digital marketing, excellent service, and patient engagement. By implementing these strategies, you can enhance patient trust and grow your clinic's reputation.
          </p>
          <div className="cta-container">
            <Link to="/contact" className="cta-button">
              Boost Your Clinic's Growth →
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
};

export default AttractMorePatients;
