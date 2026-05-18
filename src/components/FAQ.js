import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./FAQ.css";

const FAQ = () => {
    const faqQuestions = [
        { question: "What is Dental Website Media?", answer: "Dental Website Media is a platform specializing in creating and marketing websites for dental centers." },
        { question: "What services does Dental Website Media offer?", answer: "We provide dental marketing, digital marketing, social media management, and website design for dental clinics." },
        { question: "What types of website designs do you offer?", answer: "We offer three website design options: custom design, semi-custom design, and pre-designed templates." },
        { question: "How can I get a website for my dental clinic?", answer: "You can get started by contacting us through our website and choosing the design package that fits your needs." },
        { question: "What are the benefits of using Dental Website Media?", answer: "We create professional, high-converting websites tailored for dental practices to enhance online visibility and attract more patients." },
        { question: "Do you offer SEO services for dental websites?", answer: "Yes, we provide SEO optimization to help your dental website rank higher on search engines and attract more organic traffic." },
        { question: "Can you manage social media for my dental clinic?", answer: "Absolutely! We offer social media management services to engage with patients, build your brand, and increase online visibility." }
    ];
    

    return (
        <div className="wrapper ">
            {/* Centered Heading Section */}
            <div className="row">
                <div className="text-center">
                    <h2 className=' circle title'>
                        What are the frequently &nbsp;

                        <span className="subTitle">asked questions?</span>
                    </h2>
                    <p style={{
                        color: "#64748b",
                        fontSize: "1.1rem",
                        maxWidth: "600px",
                        margin: "1 auto"
                    }}>

                    </p>
                </div>
            </div>

            {/* Centered FAQ Section */}
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="accordion" id="faqAccordion">
                        {faqQuestions.map((item, index) => (
                            <div
                                className="accordion-item"
                                key={index}
                                style={{
                                    border: "1px solid #e2e8f0",
                                    borderRadius: "12px",
                                    overflow: "hidden"
                                }}
                            >
                                <h2 className="accordion-header" id={`heading${index}`}>
                                    <button
                                        className="accordion-button collapsed element"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#collapse${index}`}
                                        aria-expanded="false"
                                        aria-controls={`collapse${index}`}
                                        style={{
                                            fontWeight: "500",
                                            fontSize: "18px",
                                            padding: "1.2rem",
                                            backgroundColor: "white",
                                            marginTop:"0px"
                                            
                                        }}
                                    >
                                        {item.question}
                                    </button>
                                </h2>
                                <div
                                    id={`collapse${index}`}
                                    className="accordion-collapse collapse"
                                    aria-labelledby={`heading${index}`}
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div
                                        className="accordion-body element"
                                        style={{
                                            color: "#64748b",
                                            fontSize: "1rem",
                                            lineHeight: "1.6",
                                            padding: "1.2rem",
                                            marginTop:"0px"
                                        }}
                                    >
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;