import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import successStoriesImage from '../images/Success.jpg'; // Replace with the actual image path
import { Link } from 'react-router-dom';
const SuccessStoriesPage = () => {
  return (
    <section className="success-stories-section mt-4 wrapper">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={successStoriesImage} alt="Success Stories Illustration" className="img-fluid" />
          </Col>
          <Col md={6}>
            <div className="success-stories-content">
              <h2 className=" text-start title" style={{fontSize:"48px",fontWeight:"600"}}>Marketing Results That Speak <span className='subTitle'>for Themselves</span></h2>
              <p className=" text-start my-3 element" style={{fontSize:"18px"}}>
                On this page, you can discover how we've achieved remarkable dental marketing results for our clients. From top search rankings to increased visibility and patient growth, our case studies demonstrate the power of partnering with GDW. Click below to get started on your own success story.
              </p>
              
              <div className="mt-3 text-md-start text-center">
                    <Link to="/contact" className="btn btn-success btn-lg text-centert">Contact Our Team</Link>
                </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SuccessStoriesPage;