import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from 'react-bootstrap';
const ResponsiveMap = () => {
  return (
    <Container>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.0347850089984!2d75.89622167575556!3d22.764090325923853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302b2bcecbfbd%3A0x482f4b02153441b2!2sSkye%20Corporate%20Park!5e0!3m2!1sen!2sin!4v1737720987637!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ResponsiveMap;
