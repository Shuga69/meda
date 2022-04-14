import React from "react";
import ReviewStars from "../../ReviewStars";
import Text from "../../Text";
import "./style.css";
const ReviewComment = ({ days, name, comment }) => {
  return (
    <div className='gabor-review-product-comment'>
      <div className='gabor-review-product-comment-title'>
        <ReviewStars size={20} />
        <Text
          style={{ fontWeight: 500, fontSize: 15, color: "rgba(5, 5, 5, 0.5)" }}
          text={days}
        />
        <Text
          style={{ fontWeight: 600, fontSize: 20, lineHeight: "130%" }}
          text={name}
        />
      </div>
      <div className='gabor-review-product-comment-text'>
        <Text
          style={{ fontSize: 16, color: "#636363", lineHeight: "150%" }}
          text={comment}
        />
      </div>
    </div>
  );
};

export default ReviewComment;
