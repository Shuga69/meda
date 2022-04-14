import React from "react";
import Text from "../Text";
import "./style.css";
const PriceItem = () => {
  return (
    <div className='gabor-product-sale-price-container'>
      <Text
        style={{
          fontWeight: 500,
          fontSize: 18,
          color: "#9FA6B1",
          textDecoration: "line-through",
        }}
        text='£95.00'
      />
      <Text
        style={{
          fontWeight: 700,
          fontSize: 18,
          color: "#E1202C",
          marginLeft: 8,
        }}
        text='£59.00'
      />
      <Text
        style={{
          fontWeight: 600,
          fontSize: 18,
          color: "#050505",
          marginLeft: 8,
        }}
        text='Save 38%'
      />
    </div>
  );
};

export default PriceItem;
