import React, { useEffect, useRef, useState } from "react";
import profile1 from "../images/profile1.jpg";
import profile2 from "../images/profile2.jpg";
import profile3 from "../images/profile3.jpg";  // Replace with your actual image imports
import "./TeamSlider.css";

// const teamMembers = [
//   {
//     name: "Isabel Mercado",
//     designation: "Risk Manager",
//     image: profile1,
//   },
//   {
//     name: "John Doe",
//     designation: "Project Manager",
//     image: profile1,
//   },
//   {
//     name: "Jane Smith",
//     designation: "Developer",
//     image: profile1,
//   },
//   {
//     name: "Alice Johnson",
//     designation: "Designer",
//     image: profile1,
//   },
//   {
//     name: "Chris Brown",
//     designation: "Tester",
//     image: profile1,
//   },
// ];

// import "./TeamSlider.css"

const TeamSlider = () => {
  const teamMembers = [
    {
      name: "Alfredo Torres",
      role: "Investment Banker",
      image: profile1,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut eiusmod tempor.",
    },
    {
      name: "Isabel Mendoza",
      role: "Risk Manager",
      image:
        profile2,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut eiusmod tempor.",
    },
    {
      name: "Verona Blair",
      role: "Investment Advisor",
      image:
        profile3,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut eiusmod tempor.",
    },
    {
      name: "Sarah Johnson",
      role: "Financial Analyst",
      image:
        profile1,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut eiusmod tempor.",
    },
    {
      name: "Verona Blair",
      role: "Investment Advisor",
      image:
        profile3,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut eiusmod tempor.",
    },
    {
      name: "Sarah Johnson",
      role: "Financial Analyst",
      image:
        profile1,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut eiusmod tempor.",
    },
  ]

  const slideLeft = () => {
    const slider = document.getElementById("slider")
    slider.scrollLeft = slider.scrollLeft - 300
  }

  const slideRight = () => {
    const slider = document.getElementById("slider")
    slider.scrollLeft = slider.scrollLeft + 300
  }

  return (
    <div className="carousel-container">
      <button className="nav-btn prev-btn" onClick={slideLeft}>
        ❮
      </button>
      <div className="carousel-track" id="slider">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="card-image">
              <img src={member.image || "/placeholder.svg"} alt={member.name} />
              <div className="overlay"></div>
            </div>
            <div className="card-content">
              <div className="quote-section">
                <span className="quote-mark">❝</span>
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="nav-btn next-btn" onClick={slideRight}>
        ❯
      </button>
    </div>
  )
}

export default TeamSlider

