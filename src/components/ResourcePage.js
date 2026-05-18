import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import blog from "../images/blogs.webp";
import blog1 from "../images/blogs1.webp";
import blog2 from "../images/blogs2.webp";
import blog3 from "../images/blog3.webp";
import blog4 from "../images/blog4.jpeg";
import blog5 from "../images/blogs5.webp";
import blog11 from "../images/blogs11.jpg";
import blog10 from "../images/blogs10.webp";
import blog9 from "../images/blogs9.png";
import blog8 from "../images/blogs8.webp";
import blog7 from "../images/blog7.jpg";
import blog6 from "../images/blogs6.webp";
import { Link } from "react-router-dom";
const blogs = [
  {
    title: "Why Every Dental Center Needs a Professional Website",
    image: blog,
    link: "/blogs/professional-website",
  },
  {
    title: "Top Features for an Effective Dental Clinic Website",
    image: blog1,
    link: "/blogs/effective-clinic-website",
  },
  {
    title: "How a Well-Designed Website Can Attract More Patients",
    image: blog2,
    link: "/blogs/attract-more-patients",
  },
  {
    title: "The Importance of SEO for Dental Websites",
    image: blog3,
    link: "/blogs/seo-strategies",
  },
  {
    title: "Creating Engaging Blog Content for Dental Websites",
    image: blog4,
    link: "/blogs/engaging-blog-content",
  },
  {
    title: "How to Make Your Dental Website Mobile-Friendly",
    image: blog5,
    link: "/blogs/mobile-friendly",
  },
  {
    title: "Tips for Showcasing Patient Reviews on Your Website",
    image: blog6,
    link: "/blogs/patient-reviews",
  },
  {
    title: "The Role of Visuals in Dental Websites",
    image: blog7,
    link: "/blogs/visuals-in-dental-website",
  },
  {
    title: "How to Highlight Dental Services Effectively on Your Website",
    image: blog8,
    link: "/blogs/highlight-dental-services",
  },
  {
    title: "Ensuring Website Security for Dental Clinics",
    image: blog9,
    link: "/blogs/dental-clinics",
  },
  {
    title: "Building Trust with a Strong About Us Page",
    image: blog10,
    link: "/blogs/building-trust",
  },
  {
    title: "Strategies for Increasing Website Engagement",
    image: blog11,
    link: "/blogs/website-engagement",
  }
];

const ResourcePage = () => {
  return (
    <div className="wrapper py-5" style={{ backgroundColor: "#f5fff5" }}>
      <h1 className="text-center mb-4 title" >
        Dental Care <span className="subTitle">Blogs</span>
      </h1>
      
      <div className="row g-4">
        {blogs.map((blog, index) => (
          <div className="col-md-4" key={index}>
            <div className="card h-100 shadow-sm border-0 blog-card" style={{marginTop:"30px"}}>
              <img
                src={blog.image}
                className="card-img-top"
                alt={blog.title}
                style={{ maxHeight: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-dark" style={{ fontSize: "20px", fontWeight: "500" }}>
                  {blog.title}
                </h5>
                <Link 
                 to={blog.link} 
                  className="btn mt-auto text-left" 
                  style={{ backgroundColor: "#28a745", borderColor: "#28a745", borderRadius: "20px", padding: "6px 10px", fontSize: "14px", fontWeight: "500", color: "#fff", transition: "0.3s", width: "fit-content" }}
                  onMouseOver={(e) => e.target.style.backgroundColor = "#218838"}
                  onMouseOut={(e) => e.target.style.backgroundColor = "#28a745"}
                >
                  Read More
                </Link>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcePage;
