import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./team.css";

const reviews = [
  {
    name: "Dr. Aarav Mehta",
    rating: 5,
    review: "The team did an amazing job with our clinic's website. It’s not only visually appealing but also extremely user-friendly. Our patients love the easy navigation, and we’ve seen an increase in online appointment bookings.",
  },
  {
    name: "Dr. Priya Sharma",
    rating: 4,
    review: "We’ve been searching for a solution that fits the needs of our dental practice, and this service really delivered. The website looks great and works seamlessly across devices. We would’ve liked a bit more customization options, but overall, we’re happy with the result.",
  },
  {
    name: "Dr. Rohan Verma",
    rating: 5,
    review: "I couldn’t be happier with the website design. The team really understood our vision and created something that represents our dental practice perfectly. The integration of appointment scheduling has made things so much easier for our patients. Highly recommend!",
  },
 
];

const ReviewCard = () => {
  return (
    <div className="wrapper">
      
      <h1 className="heading">
        <span className="circle title">
          What Our  <span className="subTitle">Clients Say</span>
        </span>
      </h1>

      
      <div className="row g-4">
        {reviews.map((review, index) => (
          <div key={index} className="col-lg-4">
            <div className="review-card h-100" style={{
              background: "white",
              borderRadius: "15px",
              padding: "2rem",
              position: "relative",
              transition: "all 0.3s ease",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
            }}>
              <div className="quote-icon mb-3" style={{
                color: "#3498db",
                fontSize: "24px"
              }}>
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="review-text mb-4" style={{
                color: "#555",
                fontSize: "1rem",
                lineHeight: "1.6",
                fontStyle: "italic"
              }}>{review.review}</p>
              <div className="rating mb-3" style={{ color: "#ffd700" }}>
                {"★".repeat(review.rating)}
              </div>
              <div className="reviewer-info">
                <h5 style={{
                  color: "#2c3e50",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  marginBottom: "0.2rem"
                }}>{review.name}</h5>
                <p style={{
                  color: "#666",
                  fontSize: "0.9rem",
                  marginBottom: "0"
                }}>{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;