import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './global.css';
import './AboutHeroSection.css';
function AboutHeroSection() {
  const [projectCount, setProjectCount] = useState(0);
  const [yearsExperience, setYearsExperience] = useState(0);

  useEffect(() => {
    const projectCountTarget = 500;
    const yearsExperienceTarget = 10;
    const countDuration = 2000; // Duration for counter animation in milliseconds

    // General function to increment counter
    const incrementCount = (target, setState) => {
      let current = 0;
      const intervalId = setInterval(() => {
        if (current < target) {
          current++;
          setState(current);
        } else {
          clearInterval(intervalId);
        }
      }, countDuration / target);
    };

    incrementCount(projectCountTarget, setProjectCount);
    incrementCount(yearsExperienceTarget, setYearsExperience);
  }, []); 

  return (
    <section className="about-hero">
      <div className="wrapper">
        <Row>
          <Col md={6}>
            <h6 className="text-start element " style={{ marginTop: '60px',color:"#094886",padding: '5px 20px 5px 20px',fontSize:'18px',fontWeight:"519" }}>
              About Us
            </h6>
            <h1
              className="text-start title"
              style={{
                fontSize: '70px',
                fontWeight: '600',
                marginTop: '0px',
                
              }}
            >
              Expertise For 
              <br />
              Financial <span className="subTitle">Growth</span>
            </h1>
          </Col>
          <Col md={1}>
          </Col>
          <Col md={5}>
            <div className="counter-container mt-5 new">
              <div className="description text-start mt-5">
                <h6 className="element">
                  Dental Website Media is a website that specializes in investment and business,
                  with a professional team that provides expert advice and support to clients.
                </h6>
              </div>
              <div className="counters row mt-5 text-start" >
                <div className="col-md-6 text-center text-bold">
                  <p style={{ fontSize: '20px' }}>
                    <span
                      className="fw-bold text-start" style={{"fontSize":"40px","fontWeight":600,color: '#08344e'}} // Color for the count part
                    >

                      {projectCount}
                    </span>
                    <span
                      className="counter-plus text-bold"
                      style={{ fontSize: '40px', marginTop: '120px', color: 'green',"fontWeight":600 }} // Color for the plus sign
                    >
                      +
                    </span>
                    <br />
                    Projects Completed
                  </p>
                </div>
                <div className="col-md-6 text-center text-bold text-start">
                  <p style={{ fontSize: '20px' }}>
                    <span
                      className=" fw-bold" style={{"fontSize":"40px","fontWeight":600,color: '#08344e'}}  // Color for the count part
                    >
                      {yearsExperience}
                    </span>
                    <span
                      style={{ fontSize: '40px', marginTop: '120px', color: 'green',"fontWeight":600 }} // Color for the plus sign
                    >
                      +
                    </span>
                    <br />
                    Years of Experience
                  </p>
                </div>
              </div>


            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default AboutHeroSection;
