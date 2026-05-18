import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import blog from "../../images/pw.jpg";
import "./blogPost.css";
import { FaCalendar, FaMapMarkerAlt, FaClock, FaShare } from 'react-icons/fa';
import "../global.css"

const ProfessionalWebsite = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


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
        <h1 className='title'>Why Every Dental Center Needs a <span className='subTitle'>Professional Website</span></h1>
        <div className="blog-meta">
          <span><FaMapMarkerAlt /> New York, USA</span>
          <span><FaCalendar /> July 20, 2024</span>
          <span><FaClock /> 8 min read</span>
        </div>
      </div>

      {/* Featured Image */}
      <div className="featured-image-container">
        <img src={blog} alt="Professional Dental Website" className="featured-image" />
        <div className="image-caption">Modern dental website design example</div>
      </div>

      {/* Blog Content */}
      <article className="blog-content">
        {/* Introduction */}
        <section className="content-section ">
          <h2 className='text-center title'>The Digital Revolution in <span className='subTitle'>Dental Practice</span></h2>
          <p className="lead-paragraph element" style={{ marginTop: "0px" }}>
            In today's digital-first world, a professional website isn't just an option for dental practices—it’s an essential tool that can make or break your success. With over 80% of patients researching healthcare providers online before making appointments, your website serves as your digital front door, shaping potential patients' first impressions and influencing their decisions.

            A well-designed website not only enhances your credibility but also improves patient engagement, streamlines appointment scheduling, and showcases your expertise. Features like online booking, patient testimonials, educational content, and mobile-friendly design can set your practice apart from competitors. Additionally, search engine optimization (SEO) ensures that your practice appears in local searches, making it easier for new patients to find you.

            In an era where convenience and accessibility drive patient choices, having an outdated or poorly designed website can result in lost opportunities. Investing in a professional, user-friendly, and informative website isn’t just about aesthetics—it’s a strategic move to grow your practice, build trust, and provide a seamless experience for your patients.
          </p>
        </section>

        {/* Key Benefits Section */}
        <section className="content-section highlight-box">
          <h3 className='title text-center'>Key Benefits at a <span className='subTitle'>Glance</span></h3>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h4>Enhanced Credibility</h4>
              <p>Build trust with potential patients through professional online presence</p>
            </div>
            <div className="benefit-item">
              <h4>24/7 Accessibility</h4>
              <p>Provide information and services round the clock</p>
            </div>
            <div className="benefit-item">
              <h4>Patient Engagement</h4>
              <p>Interact with patients through multiple digital channels</p>
            </div>
            <div className="benefit-item">
              <h4>Competitive Edge</h4>
              <p>Stand out in the crowded dental market</p>
            </div>
          </div>
        </section>

        

        {/* Statistics Section */}
        <section className="content-section stats-container">
          <h3 className='text-center title'>Impact on Patient <span className='subTitle'>Acquisition</span></h3>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">70%</span>
              <p>of patients check online reviews</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">63%</span>
              <p>choose providers with strong online presence</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">48%</span>
              <p>visit doctor websites before booking</p>
            </div>
          </div>
        </section>

        {/* Implementation Guide */}
        <section className="content-section">
          <h3 className='text-center title'>Implementation Steps</h3>
          <div className="steps-container">
            <div className="step">
              <span className="step-number">1</span>
              <h4>Planning & Research</h4>
              <p>Define your goals, target audience, and key features needed.</p>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <h4>Design & Development</h4>
              <p>Create user-friendly interface with modern design elements.</p>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <h4>Content Creation</h4>
              <p>Develop engaging, informative content for your services.</p>
            </div>
            <div className="step">
              <span className="step-number">4</span>
              <h4>Launch & Optimization</h4>
              <p>Regular updates and performance monitoring.</p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="content-section conclusion">
          <h3 className='title text-center'>Final Thoughts</h3>
          <p className="element" style={{ marginTop: "0px" }}>
            A professional website is more than just an online presence—it's a powerful tool that can transform your dental practice. By implementing these features and following best practices, you can create a digital experience that attracts and retains patients while streamlining your practice operations.
          </p>
          <div className="cta-container">
            <Link to="/contact" className="cta-button">
              Get Started with Your Dental Website →
            </Link>
          </div>
        </section>
      </article>

      
    </div>
  );
};

export default ProfessionalWebsite;