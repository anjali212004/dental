import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import dentalImage from "../images/dental.jpg"; // Replace with your image path
import "./DentalMarketingResources.css";
import "./global.css"

function DentalMarketingResources() {
  return (
    <div className='wrapper'>
      <Container className="">
      <Row>
        <Col md={7}>
          <h1 className='mt-5 text-center text-md-start title' style= {{ "fontSize": "40px" }} >Dental Marketing <span className="subTitle"> Resources</span></h1>
          <p className='text-start element' style={{ "fontSize": "18px",marginTop:"0px" }} >
            Welcome to GDW's comprehensive collection of dental marketing resources! Whether you're looking to attract new patients, enhance your online presence. Explore expert insights. From SEO and social media marketing to paid advertising and reputation management, our resources will help you stay ahead in the competitive dental industry.
          </p>
        </Col>
        <Col md={5} className="text-center">
          <img src={dentalImage} alt="Dental Marketing Illustration" className="" style={{ "maxWidth": "600px", "minHeight": "300px" }} />
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default DentalMarketingResources;