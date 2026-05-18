import React from 'react';
import './VideographySlider.css';

const video1 = "https://www.w3schools.com/html/mov_bbb.mp4"; // Temporary placeholder

const VideographySlider = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <h2 className="title text-center">Custom Videos</h2>
      <div className="w-70 h-28 rounded-lg flex justify-center items-center">
        <video className="w-[400px] h-[300px]"  style={{height:"600px",width:"800px",marginLeft:"270px"}} autoPlay loop mut>
          <source src={video1} type="video/mp4"  />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideographySlider;
