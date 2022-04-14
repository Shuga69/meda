import React from "react";
import { Link, NavLink } from "react-router-dom";
import Text from "../Text";
import "./style.css";

const ProductCard = ({
  title,
  price,
  icons,
  image,
  saleTitle,
  saleType,
  className,
}) => {
  return (
    <NavLink to='/product' className='gabor-product__navigation-link'>
      <div className={"gabor-product-card-container " + className}>
        <div
          className={`gabor-product-card-sale-title ${saleType}`}
          style={saleType ? { display: "block" } : { display: "none" }}>
          <Text className='gabor-product-card-sale-text' text={saleTitle} />
        </div>
        <img className='gabor-product-card-image' src={image} />
        <Text className='gabor-product-card-title' text={title} />
        <Text className='gabor-product-card-price' text={price} />
        <div className='gabor-product-card-icons'>
          <img src={icons} />
        </div>
      </div>
    </NavLink>
  );
};

export default ProductCard;
