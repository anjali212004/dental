import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./global.css"

const ContactInfoCards = () => {
  return (
    <div className="wrapper">
      <div>
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-md-6 text-center text-md-start">
          <div >
            <h2
              className="title text-center text-md-start"
              style={{
                fontSize: "63px",
                fontWeight: "600",
                marginBottom: "1.5rem"
              }}
            >
              Get In Touch With Our <span className="subTitle text-start"> Team</span>
            </h2>
            <p className="text-muted mb-4 element text-start" style={{ marginTop: "0px" }}>
               By contacting us, you can obtain answers to your questions, receive
              feedback, and schedule appointments. Our dedicated team is here to assist you with expert guidance, personalized support, and solutions tailored to your needs. Whether you have inquiries, need professional advice, or want to book a consultation, we’re just a message away!
            </p>
          </div>
        </div>

        <div className="col-md-1 mt-5"></div>
        {/* Right Form */}
        <div className="col-md-5 mt-5" style={{ height: "400px" }}>
          <div
            className="card shadow"
            style={{
              border: "12px solid rgb(66, 192, 182)",
              borderBottom: "none",
              backgroundColor: "#f0fdf4",
            }}
          >
            <div className="card-body p-4">
              <h4 className="fw-bold mb-4" style={{ color: "#00264d" }}>
                Make Appointment
              </h4>
              <form>
                <div className="mb-3">
                  {/* Removed label */}
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    style={{ borderColor: "#ccc" }} // Light border
                  />
                </div>
                <div className="mb-3">
                  {/* Removed label */}
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email Address"
                    style={{ borderColor: "#ccc" }} // Light border
                  />
                </div>
                <div className="mb-3">
                  {/* Removed label */}
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Your Message"
                    style={{ borderColor: "#ccc" }} // Light border
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-success w-100 fw-bold text-white"
                  style={{ borderRadius: "10px" }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactInfoCards;
