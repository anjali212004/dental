import React from 'react';
import { Link } from 'react-router-dom';
import clinicImage from "../../images/blogs5.webp";
import "./blogPost.css";
import { FaCalendar, FaMapMarkerAlt, FaClock, FaShare } from 'react-icons/fa';
import "../global.css";

const MobileFriendly = () => {
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
        <h1 className='title'>How to Make Your Dental Website Mobile-Friendly</h1>
        <div className="blog-meta">
          <span><FaMapMarkerAlt /> New York, USA</span>
          <span><FaCalendar /> September 15, 2024</span>
          <span><FaClock /> 6 min read</span>
        </div>
      </div>

      {/* Featured Image */}
      <div className="featured-image-container">
        <img src={clinicImage} alt="Mobile-Friendly Dental Website" className="featured-image" />
        <div className="image-caption">A responsive and user-friendly dental website</div>
      </div>

      {/* Blog Content */}
      <article className="blog-content">
        {/* Introduction */}
        <section className="content-section">
          <h2 className='text-center title'>The Importance of a <span className='subTitle'>Mobile-Friendly Dental Website</span></h2>
          <p className="lead-paragraph element" style={{ marginTop: "0px" }}>
            With most users accessing websites from their smartphones, having a mobile-friendly dental website is no longer optional—it's essential. A responsive website ensures that potential patients can easily navigate your site, book appointments, and access essential information on the go.
            
            A well-optimized mobile site enhances user experience, improves search engine rankings, and increases engagement. Key features such as fast load times, intuitive navigation, and mobile-responsive design help clinics attract and retain patients effectively.
          </p>
        </section>

        {/* Key Strategies Section */}
        <section className="content-section highlight-box">
          <h3 className='title text-center'>Essential Strategies for a <span className='subTitle'>Mobile-Friendly Website</span></h3>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h4>Responsive Design</h4>
              <p>Ensure your website adjusts to all screen sizes.</p>
            </div>
            <div className="benefit-item">
              <h4>Fast Load Speed</h4>
              <p>Optimize images and code for quicker performance.</p>
            </div>
            <div className="benefit-item">
              <h4>Easy Navigation</h4>
              <p>Use simple menus and clear call-to-actions.</p>
            </div>
            <div className="benefit-item">
              <h4>Click-to-Call Feature</h4>
              <p>Allow patients to contact you with a single tap.</p>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="content-section stats-container">
          <h3 className='text-center title'>Why Mobile Optimization <span className='subTitle'>Matters</span></h3>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">70%</span>
              <p>of patients book appointments via mobile devices.</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">60%</span>
              <p>of users leave sites that aren’t mobile-friendly.</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">50%</span>
              <p>prefer mobile-optimized dental websites.</p>
            </div>
          </div>
        </section>

        {/* Implementation Guide */}
        <section className="content-section">
          <h3 className='text-center title'>Steps to Optimize Your Dental Website</h3>
          <div className="steps-container">
            <div className="step">
              <span className="step-number">1</span>
              <h4>Use a Responsive Theme</h4>
              <p>Choose a design that adapts to different devices.</p>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <h4>Improve Page Speed</h4>
              <p>Compress images and minimize unnecessary scripts.</p>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <h4>Optimize for Touch</h4>
              <p>Ensure buttons and links are easily clickable.</p>
            </div>
            <div className="step">
              <span className="step-number">4</span>
              <h4>Test on Mobile Devices</h4>
              <p>Regularly check usability across different smartphones.</p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="content-section conclusion">
          <h3 className='title text-center'>Final Thoughts</h3>
          <p className="element" style={{ marginTop: "0px" }}>
            Optimizing your dental website for mobile devices enhances patient experience, boosts search rankings, and increases appointment bookings. Implementing these strategies ensures that your practice stays competitive in today's digital landscape.
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

export default MobileFriendly;
