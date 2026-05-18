import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactServices = () => {
  const contactData = [
    {
      icon: faEnvelope,
      heading: 'Email Address',
      description: 'contact@domain.com',
    },
    {
      icon: faMapMarkerAlt,
      heading: 'Our Address',
      description: '3448 Palmer Hwy, Texas City, TX 77590, United States',
    },
    {
      icon: faPhone,
      heading: 'Phone Number',
      description: '(+91) 9039383183',
    },
  ];

  return (
    <div className='wrapper'>
      <Container className="">
        <Row className="align-items-center">
          {/* Left Section - Contact Services */}
          <Col lg={6}>
            <div className="pe-lg-4">
              {contactData.map((data, index) => (
                <Card
                  key={index}
                  className="mb-4 border-0 shadow-sm"
                  style={{
                    borderRadius: "15px",
                    transition: "transform 0.3s ease",
                    cursor: "pointer"
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                  onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
                >
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-center text-start">
                      <div
                        className="icon-wrapper me-4"
                        style={{
                          backgroundColor: "#e5f3f0",
                          width: "60px",
                          height: "90px",
                          borderRadius: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}
                      >
                        <FontAwesomeIcon
                          icon={data.icon}
                          style={{
                            fontSize: "24px",
                            color: "#22c55e"
                          }}
                        />
                      </div>
                      <div>
                        <h4 className="text-lg-start text-center" style={{
                          fontSize: "20px",
                          fontWeight: "600",
                          marginBottom: "8px",
                          color: "#094886"
                        }}>
                          {data.heading}
                        </h4>
                        <p style={{
                          fontSize: "15px",
                          color: "#64748b",
                          marginBottom: 0
                        }}>
                          {data.description}
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>

          {/* Right Section - Map */}
          <Col lg={6}>
            <div
              className="map-container"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.131036574505!2d-94.95114272544227!3d29.39572254901701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x863f7975bc219339%3A0xd80b9b799b8a460a!2s3448%20Palmer%20Hwy%2C%20Texas%20City%2C%20TX%2077590%2C%20USA!5e0!3m2!1sen!2sin!4v1739442572119!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{
                  border: "0",
                  minHeight: "450px"
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactServices;

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.131036574505!2d-94.95114272544227!3d29.39572254901701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x863f7975bc219339%3A0xd80b9b799b8a460a!2s3448%20Palmer%20Hwy%2C%20Texas%20City%2C%20TX%2077590%2C%20USA!5e0!3m2!1sen!2sin!4v1739442572119!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>