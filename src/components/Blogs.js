import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Blogs.css";
import blog from "../images/pw.jpg";
import blog1 from "../images/ec.jpg";
import blog2 from "../images/pc.jpg";
import blog3 from "../images/seo1.jpg";
import "./global.css"
import { Link } from "react-router-dom";

const blogs = [
  {
    title: "Why Every Dental Center Needs a Professional Website",
    image: blog,
    link: "/blogs/professional-website",
    address: "New York, USA",
    time: "July 20, 2024",
    description: "A professional website is crucial for any dental center. It enhances credibility and attracts more patients online."
  },
  {
    title: "Top Features for an Effective Dental Clinic Website",
    image: blog1,
    link: "/blogs/effective-clinic-website",
    address: "Los Angeles, USA",
    time: "August 1, 2024",
    description: "From appointment booking to patient testimonials, these key features can make your dental website stand out."
  },
  {
    title: "How a Well-Designed Website Can Attract More Patients",
    image: blog2,
    link: "/blogs/attract-more-patients",
    address: "Chicago, USA",
    time: "August 5, 2024",
    description: "A clean and user-friendly website design can improve patient trust and increase appointments for your clinic."
  },
  {
    title: "SEO Strategies for Dental Websites to Rank Higher in Market",
    image: blog3,
    link: "/blogs/seo-strategies",
    address: "Francisco, USA",
    time: "August 10, 2024",
    description: "Learn how to optimize your dental website for search engines and attract more organic traffic."
  }
];

const NewsBlogs = () => {
  const handleReadMoreClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="wrapper">
      <h1 className="heading mb-4">
        <span className="circle title">
          Our Latest News &nbsp; <span className="subTitle">  & Blogs</span>
        </span>
      </h1>

      <div className="row">
        {blogs.map((blog, index) => (
          <div key={index} className="col-lg-3 col-md-6 col-sm-12 d-flex align-items-stretch">
            <div className="card blog-card w-100">
              <img 
                src={blog.image} 
                className="card-img-top element" 
                style={{ marginTop: "0px", height: "200px", objectFit: "cover" }} 
                alt={blog.title} 
              />
              <div className="card-body d-flex flex-column">
                <p className="text-muted small text-start">{blog.address} | {blog.time}</p>
                <h4 className="card-title text-dark text-start element" 
                    style={{ marginTop: "0px", lineHeight: "1.5rem", fontWeight: "600" }}>
                  {blog.title}
                </h4>
                <p className="text-muted text-start flex-grow-1 element" 
                   style={{marginTop: "0px", lineHeight: "1.5rem"}}>
                  {blog.description}
                </p>
                <div className="text-center mt-auto">
                  <Link 
                    to={blog.link} 
                    className="btn btn-success rounded-pill text-center"
                    onClick={handleReadMoreClick}
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBlogs;