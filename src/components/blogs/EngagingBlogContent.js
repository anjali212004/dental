import React from 'react';
import { Link } from 'react-router-dom';
import dentalImage from "../../images/blog4.jpeg";
import "./blogPost.css";
import { FaCalendar, FaMapMarkerAlt, FaClock, FaShare } from 'react-icons/fa';
import "../global.css";

const EngagingBlogContent = () => {
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
        <h1 className='title'>Creating Engaging Blog Content for Dental Websites</h1>
        <div className="blog-meta">
          <span><FaMapMarkerAlt /> New York, USA</span>
          <span><FaCalendar /> September 15, 2024</span>
          <span><FaClock /> 6 min read</span>
        </div>
      </div>

      {/* Featured Image */}
      <div className="featured-image-container">
        <img src={dentalImage} alt="Engaging Dental Blog" className="featured-image" />
        <div className="image-caption">Effective blogging strategies for dental websites</div>
      </div>

      {/* Blog Content */}
      <article className="blog-content">
        {/* Introduction */}
        <section className="content-section">
          <h2 className='text-center title'>Why <span className='subTitle'>Dental Blogs Matter</span></h2>
          <p className="lead-paragraph element" style={{ marginTop: "0px" }}>
            In today's digital world, a strong online presence is essential for dental clinics. Blogs are a powerful tool to engage with patients, provide valuable oral health information, and establish authority in the industry.
            
            High-quality dental blog content educates patients, answers common dental concerns, and improves SEO rankings. With well-structured, engaging posts, dental websites can drive traffic, enhance credibility, and convert visitors into patients.
          </p>
        </section>

        {/* Key Benefits Section */}
        <section className="content-section highlight-box">
          <h3 className='title text-center'>Benefits of <span className='subTitle'>Dental Blog Content</span></h3>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h4>Increased Engagement</h4>
              <p>Keep patients informed with valuable content</p>
            </div>
            <div className="benefit-item">
              <h4>Better SEO Rankings</h4>
              <p>Improve visibility with relevant keywords</p>
            </div>
            <div className="benefit-item">
              <h4>Patient Education</h4>
              <p>Address common dental concerns and FAQs</p>
            </div>
            <div className="benefit-item">
              <h4>Higher Conversions</h4>
              <p>Turn visitors into loyal dental patients</p>
            </div>
          </div>
        </section>

        {/* Content Strategies */}
        <section className="content-section stats-container">
          <h3 className='text-center title'>Effective <span className='subTitle'>Content Strategies</span></h3>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">85%</span>
              <p>of users trust blogs for health-related advice</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">70%</span>
              <p>prefer reading educational dental content</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">60%</span>
              <p>are more likely to book a dental appointment after reading informative blogs</p>
            </div>
          </div>
        </section>

        {/* Steps to Creating Engaging Content */}
        <section className="content-section">
          <h3 className='text-center title'>Steps to <span className='subTitle'>Creating Quality Dental Blogs</span></h3>
          <div className="steps-container">
            <div className="step">
              <span className="step-number">1</span>
              <h4>Understand Your Audience</h4>
              <p>Identify common dental concerns and interests.</p>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <h4>Write Informative & Engaging Content</h4>
              <p>Use easy-to-understand language and visuals.</p>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <h4>Optimize for SEO</h4>
              <p>Include relevant keywords, meta descriptions, and quality links.</p>
            </div>
            <div className="step">
              <span className="step-number">4</span>
              <h4>Promote on Social Media</h4>
              <p>Share your blog posts on social platforms for greater reach.</p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="content-section conclusion">
          <h3 className='title text-center'>Final Thoughts</h3>
          <p className="element" style={{ marginTop: "0px" }}>
            A well-crafted dental blog enhances patient trust, boosts website traffic, and establishes authority in the dental industry. By following best practices and delivering quality content, dental clinics can significantly improve their online engagement and grow their patient base.
          </p>
          <div className="cta-container">
            <Link to="/contact" className="cta-button">
              Start Creating Dental Blog Content →
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
};

export default EngagingBlogContent;
