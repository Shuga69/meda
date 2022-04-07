import React from "react";
import review1 from "../../../assets/review1.png";
import review2 from "../../../assets/review2.png";
import "./style.css";
const Reviews = () => {
  return (
    <div className='gabor-review-section'>
      <div className='gabor-review-text-container'>
        <img src={review1} />
        <img src={review2} />
      </div>
    </div>
  );
};

export default Reviews;
