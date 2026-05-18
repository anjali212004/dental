import React from 'react';
import { Link } from 'react-router-dom';
import reviewsImage from "../../images/blogs6.webp";
import "./blogPost.css";
import { FaCalendar, FaMapMarkerAlt, FaClock, FaShare } from 'react-icons/fa';
import "../global.css";

const PatientReviews = () => {
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
        <h1 className='title'>Tips for Showcasing Patient Reviews on Your Website</h1>
        <div className="blog-meta">
          <span><FaMapMarkerAlt /> Los Angeles, USA</span>
          <span><FaCalendar /> August 15, 2024</span>
          <span><FaClock /> 6 min read</span>
        </div>
      </div>

      {/* Featured Image */}
      <div className="featured-image-container">
        <img src={reviewsImage} alt="Patient Reviews" className="featured-image" />
        <div className="image-caption">Enhance credibility with authentic patient reviews</div>
      </div>

      {/* Blog Content */}
      <article className="blog-content">
        {/* Introduction */}
        <section className="content-section">
          <h2 className='text-center title'>Why <span className='subTitle'>Patient Reviews Matter</span></h2>
          <p className="lead-paragraph element" style={{ marginTop: "0px" }}>
            Patient reviews are crucial in building trust and credibility for your clinic. When potential patients see positive feedback from real people, they are more likely to choose your services.
            Reviews help improve online reputation, boost SEO rankings, and create a transparent communication channel between the clinic and its patients.
          </p>
        </section>

        {/* Key Strategies Section */}
        <section className="content-section highlight-box">
          <h3 className='title text-center'>Effective Ways to <span className='subTitle'>Showcase Patient Reviews</span></h3>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h4>Dedicated Testimonial Page</h4>
              <p>Highlight detailed patient experiences in one place.</p>
            </div>
            <div className="benefit-item">
              <h4>Homepage Highlight</h4>
              <p>Showcase top reviews for instant credibility.</p>
            </div>
            <div className="benefit-item">
              <h4>Video Testimonials</h4>
              <p>Boost engagement with authentic patient stories.</p>
            </div>
            <div className="benefit-item">
              <h4>Third-Party Review Integration</h4>
              <p>Display reviews from Google, Yelp, and Healthgrades.</p>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="content-section stats-container">
          <h3 className='text-center title'>Impact of <span className='subTitle'>Patient Reviews</span></h3>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">88%</span>
              <p>of patients trust online reviews as much as personal recommendations.</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">72%</span>
              <p>of patients read reviews before booking an appointment.</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">55%</span>
              <p>of patients prefer clinics with a high number of positive reviews.</p>
            </div>
          </div>
        </section>

        {/* Implementation Guide */}
        <section className="content-section">
          <h3 className='text-center title'>How to Collect & Display Reviews</h3>
          <div className="steps-container">
            <div className="step">
              <span className="step-number">1</span>
              <h4>Encourage Reviews</h4>
              <p>Ask satisfied patients to leave feedback.</p>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <h4>Use Multiple Platforms</h4>
              <p>Collect reviews on social media, Google, and your website.</p>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <h4>Filter & Feature</h4>
              <p>Highlight the best and most relevant reviews.</p>
            </div>
            <div className="step">
              <span className="step-number">4</span>
              <h4>Respond to Feedback</h4>
              <p>Engage with patient reviews to show appreciation and resolve concerns.</p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="content-section conclusion">
          <h3 className='title text-center'>Final Thoughts</h3>
          <p className="element" style={{ marginTop: "0px" }}>
            Showcasing patient reviews effectively can significantly improve your clinic’s credibility and attract more patients. By leveraging different formats and strategically placing testimonials, you can build trust and encourage new patients to choose your services.
          </p>
          <div className="cta-container">
            <Link to="/contact" className="cta-button">
              Enhance Your Review Strategy →
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
};

export default PatientReviews;
