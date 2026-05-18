import React from 'react';
import { Link } from 'react-router-dom';
import aboutUsImage from "../../images/blogs10.webp";
import "./blogPost.css";
import { FaCalendar, FaMapMarkerAlt, FaClock, FaShare } from 'react-icons/fa';
import "../global.css";

const BuildingTrust = () => {
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
        <h1 className='title'>Building Trust with a Strong About Us Page</h1>
        <div className="blog-meta">
          <span><FaMapMarkerAlt /> New York, USA</span>
          <span><FaCalendar /> September 5, 2024</span>
          <span><FaClock /> 6 min read</span>
        </div>
      </div>

      {/* Featured Image */}
      <div className="featured-image-container">
        <img src={aboutUsImage} alt="Strong About Us Page" className="featured-image" />
        <div className="image-caption">An engaging and trust-building About Us page</div>
      </div>

      {/* Blog Content */}
      <article className="blog-content">
        {/* Introduction */}
        <section className="content-section">
          <h2 className='text-center title'>Why <span className='subTitle'>Your About Us Page Matters</span></h2>
          <p className="lead-paragraph element" style={{ marginTop: "0px" }}>
            A well-crafted About Us page is a powerful tool for building trust with patients. In an age where people seek transparency, authenticity, and credibility, this page serves as an introduction to your clinic’s values, team, and mission.
            
            A compelling About Us page humanizes your brand, highlights your expertise, and reassures patients that they are in good hands. By incorporating engaging storytelling, professional credentials, and patient testimonials, clinics can establish trust and create lasting connections with their audience.
          </p>
        </section>

        {/* Key Elements Section */}
        <section className="content-section highlight-box">
          <h3 className='title text-center'>Key Elements of a <span className='subTitle'>Strong About Us Page</span></h3>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h4>Authentic Storytelling</h4>
              <p>Share your clinic's journey and mission.</p>
            </div>
            <div className="benefit-item">
              <h4>Team Introductions</h4>
              <p>Highlight your staff’s expertise and credentials.</p>
            </div>
            <div className="benefit-item">
              <h4>Core Values</h4>
              <p>Communicate your commitment to patient care.</p>
            </div>
            <div className="benefit-item">
              <h4>Patient Testimonials</h4>
              <p>Showcase real experiences to build credibility.</p>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="content-section stats-container">
          <h3 className='text-center title'>Impact on <span className='subTitle'>Patient Trust</span></h3>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">82%</span>
              <p>of patients trust clinics with detailed About Us pages.</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">70%</span>
              <p>are more likely to book an appointment after reading a strong About Us page.</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">60%</span>
              <p>say transparency in clinic history and values builds confidence.</p>
            </div>
          </div>
        </section>

        {/* How to Create a Strong About Us Page */}
        <section className="content-section">
          <h3 className='text-center title'>Steps to Craft an Engaging About Us Page</h3>
          <div className="steps-container">
            <div className="step">
              <span className="step-number">1</span>
              <h4>Define Your Story</h4>
              <p>Clearly communicate your clinic's history and purpose.</p>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <h4>Showcase Your Team</h4>
              <p>Introduce staff members with credentials and personal insights.</p>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <h4>Incorporate Visuals</h4>
              <p>Use photos and videos to enhance authenticity.</p>
            </div>
            <div className="step">
              <span className="step-number">4</span>
              <h4>Keep It Updated</h4>
              <p>Regularly update content to reflect growth and changes.</p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="content-section conclusion">
          <h3 className='title text-center'>Final Thoughts</h3>
          <p className="element" style={{ marginTop: "0px" }}>
            A strong About Us page does more than introduce your clinic—it fosters trust, builds credibility, and reassures patients that they are choosing the right healthcare provider. By sharing your story, values, and expertise, you create a personal connection that sets your clinic apart.
          </p>
          <div className="cta-container">
            <Link to="/contact" className="cta-button">
              Start Building Your About Us Page →
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
};

export default BuildingTrust;
