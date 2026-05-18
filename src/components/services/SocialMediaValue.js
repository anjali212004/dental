import React from 'react';
import "../global.css"

const SocialMediaValue = () => {
    return (
        <div className="wrapper">
            <div className="row">
                {/* Content Section with Heading and Description */}
                <h2 className='text-center title'>Unique Added Value of <span className='subTitle'>Social Media</span></h2>
                
                {/* Empty Column for Spacing */}
                <div className="col-md-3"><blockquote className="blockquote">
                    <p className="mb-0 element" style={{ "fontSize": "25px", "marginTop": "0px" }}>"Strategic social media marketing tailored for dental practices—maximizing reach, engagement, and patient connections."</p>

                </blockquote></div>

                <div className="col-md-9">
                    <p className='element' style={{ marginTop: "0px" }}>
                        Our social media specialists are dedicated to staying ahead of evolving trends and platform features while possessing deep expertise in niche marketing strategies for the dental industry. We excel in executing lead generation campaigns that deliver measurable returns, maximizing message reach and effectiveness in alignment with your practice’s goals. Our approach ensures consistent brand identity, messaging, and voice across various marketing channels. Additionally, we seamlessly integrate social media efforts with your internal marketing strategies to enhance patient engagement and overall experience.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SocialMediaValue;
