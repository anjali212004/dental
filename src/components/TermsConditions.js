import React from "react";
import "./TermsConditions.css";

const TermsAndConditions = () => {
  const terms = [
    {
      title: "1. Introduction",
      content: "Welcome to our Terms and Conditions. These terms outline the rules and regulations for the use of our website and services. By accessing this website, you accept these terms in full. It is your responsibility to review these terms periodically, as continued use of our website implies acceptance of any changes."
    },
    {
      title: "2. Intellectual Property Rights",
      content: "Other than the content you own, under these terms, we own all the intellectual property rights and materials contained in this website. You are granted a limited license only for purposes of viewing the material. Unauthorized use, reproduction, or distribution of any content without our consent is strictly prohibited."
    },
    {
      title: "3. Restrictions",
      content: "You are specifically restricted from publishing any website material in any media, selling or sublicensing any website material, using this website in any way that is damaging, and engaging in any data mining or similar activities. Violating these restrictions may lead to termination of access and possible legal action."
    },
    {
      title: "4. Your Content",
      content: "Your Content must be your own and must not invade any third-party’s rights. We reserve the right to remove any of Your Content from this website at any time without notice. You are solely responsible for the legality and accuracy of any content you upload."
    },
    {
      title: "5. No warranties",
      content: "This website is provided with all faults, and we express no representations or warranties, of any kind related to this website or the materials contained on this website. We do not guarantee uninterrupted availability, accuracy, or fitness for a particular purpose."
    },
    {
      title: "6. Limitation of liability",
      content: "In no event shall we, nor any of our officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website. This includes indirect, incidental, special, or consequential damages, even if advised of the possibility."
    },
    {
      title: "7. Indemnification",
      content: "You hereby indemnify us to the fullest extent from and against any and/or all liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of these terms. You agree to defend and hold us harmless against any claims."
    },
    {
      title: "8. Severability",
      content: "If any provision of these terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions. The remaining terms will continue to be enforceable and in full effect."
    },
    {
      title: "9. Variation of Terms",
      content: "We are permitted to revise these terms at any time as we see fit, and by using this website, you are expected to review these terms on a regular basis. Changes will be effective upon posting, and continued use of the site implies acceptance of the revised terms."
    },
    {
      title: "10. Governing Law & Jurisdiction",
      content: "These terms will be governed by and interpreted in accordance with the laws of our jurisdiction, and you submit to the non-exclusive jurisdiction of the courts for the resolution of any disputes. Users are advised to comply with all applicable laws of their own region."
    }
  ];

  return (
    <div className="terms-container">
      <h1 className="title">Terms and <span className="subTitle">Conditions</span></h1>
      <p className="summary-title">Summary of Terms and Conditions</p>
      <p className="element" style={{marginTop:"0px"}}>
        Before signing up for our services, it is essential to read and
        understand the full Terms and Conditions. The complete version can be
        found at the end of this document. Below is a brief summary of key
        sections for quick reference. This summary is not a substitute for the
        full Terms and Conditions, which form the legally binding agreement.
      </p>

      <ul className="">
        <li className="element" style={{marginTop:"0px"}}>
          The signed <strong>Proposal</strong>, along with these Terms, forms the official
          agreement between you and us.
        </li>
        <li className="element" style={{marginTop:"0px"}}> 
          Our services do not require long-term commitments. Either party may
          request modifications or terminate the services by giving at least a
          month's notice. Cancellations made within the current billing cycle
          will take effect the following month. We are not liable for delays
          due to factors beyond our control.
        </li>
        <li className="element" style={{marginTop:"0px"}}>
          You are responsible for all content, images, terms, conditions, and
          privacy policies displayed on your website. You must ensure that your
          content complies with all applicable laws and regulations.
        </li>
        <li className="element" style={{marginTop:"0px"}}>
          Payments must be made as per the Proposal, including any additional
          requested services. Payments are non-refundable except during the
          initial <strong>14-day Guarantee</strong> period. Late payments may result in service
          suspension.
        </li>
        <li className="element" style={{marginTop:"0px"}}> 
          You retain ownership of your website, domain, content, and images.
          However, we own all software, processes, and tools used to provide
          the services. Upon request, we will provide a complete
          <strong> HTML copy</strong> of your website, including all related images, provided
          that all outstanding balances have been cleared.
        </li>
      </ul>

      <div className="terms-content">
        {terms.map((term, index) => (
          <div className="term-item" key={index}>
            <h3 >{term.title}</h3>
            <p className="element" style={{marginTop:"0px"}}>{term.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsAndConditions;
