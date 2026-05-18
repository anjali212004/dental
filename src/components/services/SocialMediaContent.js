import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../global.css'
import { Link } from "react-router-dom";

const SocialMediaContent = () => {
    return (
        <section className="text-center text-black" >
            <div className="wrapper">
                <h2 className="title" >How Our Social Media Can Benefit <span className="subTitle">Your Practice</span></h2>
                <p className="mt-3 mb-4 px-3 element" style={{ marginTop: "0px" }}>Navigating social media marketing can be daunting with its constantly changing trends and strategies. Our team of in-house social media specialists is dedicated to partnering with you to craft an effective, results-driven strategy. We focus on creating engaging content that enhances your practice’s brand visibility, incorporating elements like powerful testimonials, video blogs, and before-and-after showcases. This approach not only drives traffic and boosts engagement but also helps generate qualified leads. Additionally, we guide your team in converting these social media interactions into loyal patients.
                    Our social media team collaborates seamlessly with other departments to ensure all campaigns align. We continuously track and optimize each ad, making necessary adjustments to ensure we achieve the best possible outcomes.</p>
                <div className=" mt-3">
                    <Link to="/contact" className="btn btn-success btn-lg"> Let's Talk <i className="bi bi-arrow-right ms-2"></i></Link>
                </div>
            </div>
        </section>
    );
};

export default SocialMediaContent;