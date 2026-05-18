import React from 'react';
import { Link } from 'react-router-dom';
import seoImage from "../../images/seo1.jpg";
import "./blogPost.css";
import { FaCalendar, FaMapMarkerAlt, FaClock, FaShare } from 'react-icons/fa';
import "../global.css";

const SEOStrategies = () => {
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
        <h1 className='title'>Effective SEO Strategies for Clinics</h1>
        <div className="blog-meta">
          <span><FaMapMarkerAlt /> New York, USA</span>
          <span><FaCalendar /> August 15, 2024</span>
          <span><FaClock /> 8 min read</span>
        </div>
      </div>

      {/* Featured Image */}
      <div className="featured-image-container">
        <img src={seoImage} alt="SEO Strategies for Clinics" className="featured-image" />
        <div className="image-caption">Boost your clinic's online presence with SEO</div>
      </div>

      {/* Blog Content */}
      <article className="blog-content">
        {/* Introduction */}
        <section className="content-section">
          <h2 className='text-center title'>Why <span className='subTitle'>SEO Matters</span> for Clinics</h2>
          <p className="lead-paragraph element" style={{ marginTop: "0px" }}>
            In an era where online searches drive patient decisions, having a strong SEO strategy is crucial for clinics. Optimizing your website for search engines ensures higher visibility, attracts new patients, and builds trust in your medical practice.
          </p>
        </section>

        {/* Key SEO Strategies Section */}
        <section className="content-section highlight-box">
          <h3 className='title text-center'>Key <span className='subTitle'>SEO Strategies</span> for Clinics</h3>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h4>Local SEO Optimization</h4>
              <p>Optimize Google My Business and local directories.</p>
            </div>
            <div className="benefit-item">
              <h4>Mobile-Friendly Design</h4>
              <p>Ensure seamless user experience on all devices.</p>
            </div>
            <div className="benefit-item">
              <h4>Quality Content Creation</h4>
              <p>Publish informative blogs and patient guides.</p>
            </div>
            <div className="benefit-item">
              <h4>Technical SEO</h4>
              <p>Improve page speed, security, and structured data.</p>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="content-section stats-container">
          <h3 className='text-center title'>Impact of SEO on <span className='subTitle'>Clinic Visibility</span></h3>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">80%</span>
              <p>of patients search online before booking an appointment.</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">70%</span>
              <p>prefer clinics that appear on the first page of Google.</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">60%</span>
              <p>click on the top three search results.</p>
            </div>
          </div>
        </section>

        {/* SEO Implementation Guide */}
        <section className="content-section">
          <h3 className='text-center title'>Steps to Optimize Your Clinic’s SEO</h3>
          <div className="steps-container">
            <div className="step">
              <span className="step-number">1</span>
              <h4>Keyword Research</h4>
              <p>Find relevant medical and local keywords.</p>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <h4>On-Page Optimization</h4>
              <p>Optimize titles, meta descriptions, and content.</p>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <h4>Local SEO</h4>
              <p>Claim and update Google My Business profile.</p>
            </div>
            <div className="step">
              <span className="step-number">4</span>
              <h4>Link Building</h4>
              <p>Get high-quality backlinks from authoritative sites.</p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="content-section conclusion">
          <h3 className='title text-center'>Final Thoughts</h3>
          <p className="element" style={{ marginTop: "0px" }}>
            Implementing a strong SEO strategy helps clinics stay competitive, attract more patients, and establish authority in the healthcare industry. Start optimizing your clinic’s online presence today!
          </p>
          <div className="cta-container">
            <Link to="/contact" className="cta-button">
              Optimize Your SEO Strategy →
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
};

export default SEOStrategies;
