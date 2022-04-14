import React from "react";
import star from "../../assets/star.svg";
import "./style.css";
const ReviewStars = ({ size }) => {
  return (
    <div className='gabor-review-stars-container'>
      <img width={size} src={star} />
      <img width={size} src={star} />
      <img width={size} src={star} />
      <img width={size} src={star} />
      <img width={size} src={star} />
    </div>
  );
};

export default ReviewStars;
