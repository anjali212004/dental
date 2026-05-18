import React from 'react';
import { Link } from 'react-router-dom';
import clinicImage from "../../images/blogs9.png";
import "./blogPost.css";
import { FaCalendar, FaMapMarkerAlt, FaClock, FaShare } from 'react-icons/fa';
import "../global.css";

const DentalClinicSecurity = () => {
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
        <h1 className='title'>Ensuring Website Security for Dental Clinics</h1>
        <div className="blog-meta">
          <span><FaMapMarkerAlt /> New York, USA</span>
          <span><FaCalendar /> September 15, 2024</span>
          <span><FaClock /> 6 min read</span>
        </div>
      </div>

      {/* Featured Image */}
      <div className="featured-image-container">
        <img src={clinicImage} alt="Website Security for Dental Clinics" className="featured-image" />
        <div className="image-caption">Protecting patient data with strong cybersecurity measures</div>
      </div>

      {/* Blog Content */}
      <article className="blog-content">
        {/* Introduction */}
        <section className="content-section">
          <h2 className='text-center title'>The Importance of <span className='subTitle'>Website Security</span></h2>
          <p className="lead-paragraph element" style={{ marginTop: "0px" }}>
            In an era of increasing cyber threats, ensuring the security of a dental clinic's website is paramount. A secure website protects sensitive patient information, maintains compliance with healthcare regulations, and builds trust with patients.
            
            Cybersecurity threats such as data breaches, phishing attacks, and malware can compromise patient records and damage a clinic's reputation. Implementing robust security measures such as SSL encryption, multi-factor authentication, and regular security audits can safeguard patient data and ensure a safe online experience.
          </p>
        </section>

        {/* Key Security Measures */}
        <section className="content-section highlight-box">
          <h3 className='title text-center'>Key <span className='subTitle'>Security Measures</span></h3>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h4>SSL Encryption</h4>
              <p>Ensure secure communication and protect patient data</p>
            </div>
            <div className="benefit-item">
              <h4>Regular Security Audits</h4>
              <p>Identify vulnerabilities and prevent cyber threats</p>
            </div>
            <div className="benefit-item">
              <h4>Multi-Factor Authentication</h4>
              <p>Add an extra layer of security to prevent unauthorized access</p>
            </div>
            <div className="benefit-item">
              <h4>Data Backup & Recovery</h4>
              <p>Protect against data loss with secure backups</p>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="content-section stats-container">
          <h3 className='text-center title'>Cybersecurity <span className='subTitle'>Statistics</span></h3>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">43%</span>
              <p>of cyberattacks target small businesses, including clinics</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">70%</span>
              <p>of healthcare organizations experienced a data breach</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <p>of breaches result from human error or weak security</p>
            </div>
          </div>
        </section>

        {/* Implementation Guide */}
        <section className="content-section">
          <h3 className='text-center title'>Steps to Secure Your Website</h3>
          <div className="steps-container">
            <div className="step">
              <span className="step-number">1</span>
              <h4>Install SSL Certificates</h4>
              <p>Encrypt data and ensure a secure connection.</p>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <h4>Implement Strong Authentication</h4>
              <p>Use multi-factor authentication for login security.</p>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <h4>Regular Security Audits</h4>
              <p>Identify vulnerabilities and patch weaknesses.</p>
            </div>
            <div className="step">
              <span className="step-number">4</span>
              <h4>Data Encryption & Backup</h4>
              <p>Store patient information securely and create regular backups.</p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="content-section conclusion">
          <h3 className='title text-center'>Final Thoughts</h3>
          <p className="element" style={{ marginTop: "0px" }}>
            Securing a dental clinic's website is critical to protecting patient data, ensuring regulatory compliance, and building trust. By following best practices such as encryption, authentication, and regular monitoring, clinics can prevent cyber threats and provide a safe online experience for their patients.
          </p>
          <div className="cta-container">
            <Link to="/contact" className="cta-button">
              Secure Your Clinic's Website Today →
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
};

export default DentalClinicSecurity;
