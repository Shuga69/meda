import React from "react";
import Text from "../Text";
import "./style.css";

const ProductCard = ({ title, price, icons, image, saleTitle, saleType }) => {
  return (
    <div className='gabor-product-card-container'>
      <div
        className={`gabor-product-card-sale-title ${saleType}`}
        style={saleType ? { display: "block" } : { display: "none" }}>
        <Text className='gabor-product-card-sale-text' text={saleTitle} />
      </div>
      <img src={image} />
      <Text className='gabor-product-card-title' text={title} />
      <Text className='gabor-product-card-price' text={price} />
      <div className='gabor-product-card-icons'>
        <img src={icons} />
      </div>
    </div>
  );
};

export default ProductCard;
