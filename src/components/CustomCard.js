import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faBrush, faHeadset } from '@fortawesome/free-solid-svg-icons';
import './global.css'

const CustomCard = () => {
    const cards = [
        {
            id: 1,
            icon: <FontAwesomeIcon icon={faCogs} />,
            title: "Easy Integration",
            content: "Seamlessly connect patient portals, appointment scheduling, and online forms to streamline your practice’s workflow. Let your website be a one-stop solution for your patients."
        },
        {
            id: 2,
            icon: <FontAwesomeIcon icon={faBrush} />,
            title: "Premium Design",
            content: "Create a stunning, modern website that reflects the professionalism and care of your dental practice. Our designs are tailored to leave a lasting impression on your patients."
        },
        {
            id: 3,
            icon: <FontAwesomeIcon icon={faHeadset} />,
            title: "Professional Support",
            content: "From setup to ongoing maintenance, our expert team provides unmatched support to ensure your website remains fast, secure, and up to date."
        }
    ];

    return (
        <div className="wrapper ">

            <h1 className="heading mb-4">
                <span className="circle title" >
                    What Dental Website&nbsp; <span className="subTitle">  Media Offers</span>
                </span>
            </h1>
            <div className="row mt-4">
                {cards.map((card) => (
                    <div
                        className="col-md-4 mb-4 d-flex justify-content-center"
                        key={card.id}
                    >
                        <div
                            className="card custom-card text-start shadow-lg"
                            style={{ "padding": "3rem", "border": "2px solid rgb(45 135 18)", "borderRadius": "8px" }}
                        >
                            <div className="icon mb-3 text-start">
                                <span className="icon-size" style={{ "color": 'green' }}>{card.icon}</span>
                            </div>
                            <div className='d-flex flex-column justify-content-between'>

                                <h3 className="card-title fw-bold text-dark py-3">{card.title}</h3>
                                <p className="card-text element" style={{ marginTop: "0px", lineHeight: "1.5rem" }}>{card.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomCard;

