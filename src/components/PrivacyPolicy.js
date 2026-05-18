import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  const policySections = [
    {
      title: "1. Overview",
      content:
        "We value your privacy and are committed to safeguarding your personal data. This Privacy Policy outlines how we collect, use, and protect your information when you interact with our website and services. By using our site, you agree to the terms described here."
    },
    {
      title: "2. Information We Collect",
      content:
        "We may collect various types of information, including your name, email, phone number, business details, and any other data you provide through forms, emails, or phone conversations. Additionally, we automatically gather technical details such as IP address, browser type, and cookies to improve our services."
    },
    {
      title: "3. SMS Communication",
      content:
        "If you opt in to receive SMS messages from us, you consent to getting updates, promotional messages, and service notifications. Standard message rates may apply. You can unsubscribe anytime by replying STOP."
    },
    {
      title: "4. Use of Information",
      content:
        "We utilize collected data to respond to inquiries, enhance our services, ensure compliance, prevent fraud, and communicate updates. Some essential messages related to transactions or account security may be sent without an opt-out option."
    },
    {
      title: "5. Data Sharing & Disclosure",
      content:
        "We do not sell or trade your personal information. However, we may share data with trusted partners who help us operate our website and business, provided they adhere to confidentiality agreements. Legal obligations may also require us to disclose information when necessary."
    },
    {
      title: "6. Third-Party Services",
      content:
        "Our website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their policies separately. Any information you provide on external sites is subject to their terms."
    },
    {
      title: "7. Security Measures",
      content:
        "We implement industry-standard security protocols to protect your information. However, no online transmission is entirely secure. We encourage users to safeguard their login credentials and report any suspicious activity."
    },
    {
      title: "8. Testimonials & Feedback",
      content:
        "We may showcase customer testimonials on our site with their consent. If you wish to remove your testimonial or personal data, please contact us, and we will take appropriate action."
    },
    {
      title: "9. Dispute Resolution",
      content:
        "If you have any concerns about our Privacy Policy, reach out to us. If we cannot resolve your issue, disputes will be handled in accordance with arbitration rules applicable in our jurisdiction."
    },
    {
      title: "10. Data Handling for Minors",
      content:
        "Our website is not intended for individuals under the age of 13. We do not knowingly collect personal data from minors. If we discover such information, we will take immediate steps to delete it."
    },
    {
      title: "11. International Users",
      content:
        "Your information may be processed in different countries where privacy laws may vary. By using our site, you acknowledge and consent to these data transfers."
    },
    {
      title: "12. Contact Information",
      content:
        "If you have any questions regarding this Privacy Policy, feel free to contact us via email or phone. We regularly update this policy, so please review it periodically for any changes."
    }
  ];

  return (
    <div className="terms-wrapper">
      <h1 className="title">Privacy <span className="subTitle">Policy </span></h1>
      <p className="element" style={{marginTop:"0px"}}>
        Your privacy is of utmost importance to us. Below is a summary of key points from our Privacy Policy. Please read the full version for complete details.
      </p>

      <ul  className="element" style={{marginTop:"0px"}}>
        <li>We collect personal and technical data to improve our services and communication.</li>
        <li>SMS notifications are optional, and you can opt out anytime.</li>
        <li>We do not sell your information but may share it with trusted service providers.</li>
        <li>Your data security is our priority, and we use strong protective measures.</li>
        <li>We are not responsible for third-party websites linked from our platform.</li>
      </ul>

      <div  className="element" style={{marginTop:"0px"}}>
        {policySections.map((section, index) => (
          <div className="policy-item" key={index}>
            <h3>{section.title}</h3>
            <p>{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
