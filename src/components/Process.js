import React from "react";
import "./global.css"
import "./Process.css"

const Process = () => {
    return (
        <div className="wrapper">
            {/* Process Explanation */}
            <h1 className="heading mb-4">
                <span className="circle title" >
                    How It &nbsp; <span className="subTitle">  Works</span>
                </span>
            </h1>

            <div className="row process-cards">
                <div className="col-md-4">
                    <div className="process-card h-100 p-3 pb-2 pt-5 shadow">
                        <h5 className="fs-5 text-black mb-4 " >Define Your Audience</h5>
                        <p className="text-muted mb-2 element" style={{ "lineHeight": "1.5", marginTop: "6px" }}>Identify your most valuable clients—the ones who consistently return and contribute to revenue goals.</p>
                        <p className="text-end w-full text-main fs-1"><i className="fa-solid fa-people-group"></i></p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="process-card h-100 p-3 pt-5 shadow">
                        <h5 className="fs-5 text-black mb-4">Implement Promotions</h5>
                        <p className="text-muted mb-2 element" style={{ "lineHeight": "1.5", marginTop: "6px" }}>Utilize tailored online marketing techniques to attract quality clients while optimizing costs for maximum efficiency.</p>
                        <p className="text-end w-full text-main fs-1">
                            <i className="fa-regular fa-lightbulb"></i>
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="process-card h-100 p-3 pt-5 shadow" >
                        <h5 className="fs-5 text-black mb-4"> Scale Operations</h5>
                        <p className="text-muted element" style={{ "lineHeight": "1.5", marginTop: "6px" }}>Expand effortlessly with improved client engagement, higher appointment rates, and a streamlined growth process.</p>
                        <p className="text-end w-full text-main fs-1">
                            <i className="fa-solid fa-chart-line"></i>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process;
