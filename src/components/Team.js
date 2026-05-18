import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./team.css";
import mem1 from "../images/mem8.jpg";
import mem2 from "../images/mem9.jpeg";
import mem3 from "../images/mem10.jpg";
import mem4 from "../images/mem11.jpg";

const Team = () => {
    const teamMembers = [
        { name: "Tanish Sharma", role: "Risk Manager", img: mem1 },
        { name: "Ayush Sahu", role: "IT Manager", img: mem2 },
        { name: "Rohit Sharma", role: "Investment Banker", img: mem3 },
        { name: "Yuvraj Singh", role: "Financial Planner", img: mem4 },
    ];

    return (
        <div className="wrapper  text-center">
            <h1 className="heading mb-4">
                <span className="circle title">
                    Our &nbsp;<span className="subTitle">Professional Team</span>
                </span>
            </h1>

            <div className="row justify-content-center g-4">
                {teamMembers.map((member, index) => (
                    <div key={index} className="col-lg-3 col-md-6 col-sm-10 d-flex justify-content-center">
                        <div className="team-card">
                            <div className="image-wrapper">
                                <img src={member.img} alt={member.name} className="team-img" />
                            </div>
                            <div className="text-center">
                                <h4 className="team-name">{member.name}</h4>
                                <p className="team-role">{member.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
