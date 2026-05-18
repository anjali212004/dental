import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SuccessSEO from "../images/seo1 .avif";
import SuccessLSA from "../images/success3.webp";
import SuccessPSA from "../images/success4.webp";
import "./global.css";

const SuccessStoriesComponent = () => {
    const customRef = useRef(null);
    const semiCustomRef = useRef(null);
    const preDesignedRef = useRef(null);

    const [activeButton, setActiveButton] = useState("seo");

    const scrollToSection = (ref, button) => {
        setActiveButton(button);
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: "smooth",
        });
    };

    const renderSection = (ref, title, service, counters, imageSrc) => {
        const titleWords = service.title.split(" ");
        const lastWord = titleWords.pop();
        return (
            <div ref={ref} className="py-3">
                <h2 className="text-center mb-3 title" style={{ fontSize: "32px", fontWeight: 600, color: "#08344e" }}>
                    {title}
                </h2>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2 className="text-start title" style={{ fontSize: "48px", fontWeight: "600" }}>
                            {titleWords.join(" ")} <span className="subTitle">{lastWord}</span>
                        </h2>
                        <p className="text-start my-3 element" style={{ fontSize: "18px", marginTop: "0px" }}>
                            {service.description}
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src={imageSrc} alt="Success Stories Illustration" className="img-fluid" style={{ minHeight: "350px" }} />
                    </div>
                </div>

                <div className="row">
                    {counters.map((counter, index) => (
                        <div className="col-md-4 mb-3" key={index}>
                            <div className="card shadow-sm border-0 text-center">
                                <div className="card-body">
                                    <p className="fw-bold" style={{ fontSize: "36px", fontWeight: 600, color: "#08344e" }}>{counter.value}</p>
                                    <h5 className="card-title">{counter.label}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="wrapper py-5">
            <div className="d-flex flex-wrap justify-content-center mb-4">
                <button
                    className={`btn mx-2 my-1 ${activeButton === "seo" ? "btn-success" : "btn-outline-success"}`}
                    onClick={() => scrollToSection(customRef, "seo")}
                >
                    Search Engine Optimization
                </button>
                <button
                    className={`btn mx-2 my-1 ${activeButton === "lsa" ? "btn-success" : "btn-outline-success"}`}
                    onClick={() => scrollToSection(semiCustomRef, "lsa")}
                >
                    Local Services Ads
                </button>
                <button
                    className={`btn mx-2 my-1 ${activeButton === "psa" ? "btn-success" : "btn-outline-success"}`}
                    onClick={() => scrollToSection(preDesignedRef, "psa")}
                >
                    Paid Search Ads
                </button>
            </div>

            {renderSection(
                customRef,
                "",
                {
                    title: "Search Engine Optimization",
                    description:
                        "Boost your website's visibility on search engines with our tailored SEO strategies. We craft result-oriented SEO solutions, including content optimization, backlink building, mobile-friendliness enhancements, and page speed optimization, to improve user experience and search engine rankings. Our data-driven approach ensures continuous performance monitoring, allowing us to adapt strategies for sustained growth. Whether you're a startup or an established business, we provide customized solutions to increase your brand’s reach, attract potential customers, and maximize conversions. With our white-hat SEO techniques and in-depth competitor analysis, we help your business achieve long-term success in the digital landscape. Let us optimize your website for search engines and turn visitors into loyal customers today!",
                },
                [
                    { label: "Traffic Increase", value: "+600%" },
                    { label: "Keyword Visibility", value: "+16%" },
                    { label: "Conversion Rate", value: "48%" },
                ],
                SuccessSEO
            )}
            {renderSection(
                semiCustomRef,
                "",
                {
                    title: "Local Services Ads",
                    description:
                        "Reach local customers effectively with our Local Services Ads solutions. Our targeted approach ensures your business appears at the top of search results when local customers are searching for your services. With pay-per-lead pricing, you only pay for genuine inquiries, maximizing your return on investment. Let us help you grow your business locally and attract the right customers effortlessly!",
                },
                [
                    { label: "Lead Growth", value: "+300%" },
                    { label: "Local Reach", value: "+20%" },
                    { label: "Customer Calls", value: "35%" },
                ],
                SuccessLSA
            )}
            {renderSection(
                preDesignedRef,
                "",
                {
                    title: "Paid Search Ads",
                    description:
                        "Maximize your ROI with expertly managed Paid Search Ads that drive high-quality traffic and increase conversions. Our data-driven approach ensures your ads reach the right audience at the right time, delivering measurable results. From keyword research and ad copy optimization to bid management and performance tracking, we handle every aspect to maximize your ad spend efficiency. Whether you’re looking to generate leads, boost sales, or enhance brand visibility, our tailored strategies will help you achieve your goals.",
                },
                [
                    { label: "Ad Clicks", value: "+450%" },
                    { label: "Return on Ad Spend", value: "+50%" },
                    { label: "Conversion Boost", value: "+70%" },
                ],
                SuccessPSA
            )}
        </div>
    );
};

export default SuccessStoriesComponent;
