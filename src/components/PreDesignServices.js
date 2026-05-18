import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faRocket, faPalette } from '@fortawesome/free-solid-svg-icons';
import "./global.css"

const PreDesignServices = () => {
    const cards = [
        {
            id: 1,
            icon: <FontAwesomeIcon icon={faDollarSign}/>,
            title: "Budget-Friendly Choice",
            content: "Your startup package includes a pre-designed dental website template. You can still personalize it by adding your own logo and images, but the essential structure is already in place—saving you both time and money."
        },
        {
            id: 2,
            icon: <FontAwesomeIcon icon={faRocket} />,
            title: "Quick Setup",
            content: "With a ready-made template, your website can go live in just a few days instead of weeks. Simply browse through the available designs, pick the one that suits your clinic best, and leave the rest to us!"
        },
        {
            id: 3,
            icon: <FontAwesomeIcon icon={faPalette} />,
            title: "Plenty of Designs",
            content: "We currently offer around 30 unique website templates, each available in multiple color schemes. Plus, we introduce at least six fresh designs every year, so if you ever want a change, you can switch to a new template at no extra cost!"
        }
    ];

    return (
        <div className="wrapper">
            <h1 className="text-center mb-4 py-4 mb-3 title" style={{"fontSize":"43px","fontWeight":"600"}}>
                What Dental Website <span className="subTitle">Media Offers</span>
            </h1>
            <div className="row mt-4">
                {cards.map((card) => (
                    <div
                        className="col-md-4 mb-4 d-flex justify-content-center"
                        key={card.id}
                    >
                        <div className="card custom-card text-start shadow-lg" style={{"padding": "3rem"}}>
                            <div className="icon mb-3 text-start">
                                <span className="icon-size" style={{"color":'green'}}>{card.icon}</span>
                            </div>
                            <h3 className="card-title fw-bold text-dark py-3 element" style={{marginTop:"0px"}}>{card.title}</h3>
                            <p className="card-text element" style={{marginTop:"0px",lineHeight:"1.5rem"}}>{card.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PreDesignServices;
