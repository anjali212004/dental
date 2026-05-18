import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import google1 from "../images/google1.jpg";
import google2 from "../images/google2.jpg";
import google3 from "../images/google3.jpg";
import "./global.css";
import "./ContentSection.css"

const ContentSection = () => {
    const [activeTab, setActiveTab] = useState("paidAd");

    const content = {
        paidAd: {
            title: "Paid Ads",
            text: "Paid Ads are a great way to quickly reach your target audience through PPC campaigns. They provide instant traffic and measurable results, making them a strong choice for businesses looking for rapid growth. Additionally, paid ads allow for precise targeting based on demographics, interests, and user behavior, ensuring optimal conversion rates.",
            image: google1
        },
        seo: {
            title: "SEO",
            text: "SEO helps improve organic rankings by optimizing website content and structure. By focusing on keyword research, quality content, and technical SEO, businesses can drive long-term traffic and build credibility. Effective SEO strategies also include backlinking, local SEO enhancements, and continuous content updates to maintain and improve rankings.",
            image: google2
        },
        gmbListing: {
            title: "GMB Listing",
            text: "GMB Listing enhances local search visibility and helps businesses attract nearby customers. A well-optimized listing includes accurate business details, reviews, and engaging photos, improving customer trust. Additionally, posting regular updates, responding to customer queries, and using Google Posts can further boost engagement and visibility.",
            image: google3
        }
    };

    return (
        <div className="container">
            {/* Tab Buttons */}
            <div className="d-flex justify-content-center mb-4">
                {Object.keys(content).map((key) => (
                    <button
                        key={key}
                        className={`content-section-btn px-5 ${activeTab === key ? "active" : ""}`}
                        onClick={() => setActiveTab(key)}
                    >
                        {content[key].title}
                    </button>
                ))}
            </div>

            {/* Content Card */}
            <div className="card shadow-lg p-4" style={{ borderRadius: "10px", backgroundColor: "#f8f9fa" }}>
                <div className="row align-items-center">
                    {/* Left Side - Content */}
                    <div className="col-md-6">
                        <h3 className="text-left" style={{ fontSize: "30px", fontWeight: "600", color: "#08344e", marginBottom: "1rem" }}>
                            {content[activeTab].title}
                        </h3>
                        <p style={{ fontSize: "20px", lineHeight: "1.8", color: "#333", textAlign: "left" }}>
                            {content[activeTab].text}
                        </p>
                    </div>

                    {/* Right Side - Image */}
                    <div className="col-md-6 text-center">
                        <img
                            src={content[activeTab].image}
                            alt={activeTab}
                            className="img-fluid rounded"
                            style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentSection;
