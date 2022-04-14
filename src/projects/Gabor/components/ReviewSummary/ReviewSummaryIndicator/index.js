import React from "react";
import Text from "../../Text";
import star from "../../../assets/star.svg";
import "./style.css";
const ReviewSummaryIndicator = ({ summary, quantity, percent }) => {
  return (
    <div className='gabor-review-summary-indicator-container'>
      <Text
        style={{ paddingRight: 5 }}
        className='gabor-review-summary-indicator-text'
        text={summary}
      />
      <img
        className='gabor-review-summary-indicator-star'
        width={20}
        src={star}
      />
      <div
        style={{
          background: `linear-gradient(to right,#e1202c, #e1202c ${percent}%, #e5e5e5 ${percent}%, #e5e5e5 ${
            100 - percent
          }%)`,
        }}
        className='gabor-review-summary-indicator'></div>
      <Text
        style={{ paddingLeft: 5 }}
        className='gabor-review-summary-indicator-text'
        text={quantity}
      />
    </div>
  );
};

export default ReviewSummaryIndicator;
