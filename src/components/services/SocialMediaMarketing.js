import React from 'react';
import "../global.css"

const SocialMediaMarketing = () => {
    return (
        <div className="wrapper">
            <div className="row">
                {/* Content Section with Heading and Description */}
                <h2 className='text-center title'>Why Social Media Marketing Feels <span className='subTitle'>Like a Challenge</span></h2>
                <div className="col-md-9">
                    <p className='element' style={{marginTop:"0px"}}>
                        The primary reason social media marketing often falls short is the inability to engage audiences with content that truly converts.
                        Many businesses are unaware of the direct marketing power available on these platforms, leaving them skeptical about tracking ROI.
                        It’s a time-intensive process that can often backfire. That's where Progressive Dental steps in. Our experts not only align with your practice's goals
                        but also closely monitor key metrics to guarantee that every dollar spent brings measurable returns.
                    </p>
                </div>
                {/* Empty Column for Spacing */}
                <div className="col-md-3"><blockquote className="blockquote">
                    <p className="mb-0 element" style={{"fontSize":"25px","marginTop":"0px"}}>"Social media is not just about marketing; it's about building relationships that convert."</p>
                    
                </blockquote></div>
            </div>
        </div>
    );
};

export default SocialMediaMarketing;
