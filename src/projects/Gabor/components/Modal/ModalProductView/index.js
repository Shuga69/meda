import React from "react";
import bagImage1 from "../../../assets/bagImage1.png";
import Text from "../../Text";
import deleteIcon from "../../../assets/deleteIcon.svg";
import "./style.css";
const ModalProductView = ({ title, color, size, quantity, sale, price }) => {
  return (
    <div className='gabor-modal-product-view-container'>
      <div className='gabor-modal-product-title-container'>
        <div>
          <img src={bagImage1} />
        </div>
        <div className='gabor-modal-product-title'>
          <Text className='gabor-modal-product-title-text' text={title} />
          <div className='gabor-modal-product-description'>
            <div className='gabor-modal-product-description-item'>
              <Text
                className='gabor-modal-product-description-title'
                text='Colour'
              />
              <Text
                className='gabor-modal-product-description-text'
                text={color}
              />
            </div>
            <div className='gabor-modal-product-description-item'>
              <Text
                className='gabor-modal-product-description-title'
                text='Size'
              />
              <Text
                className='gabor-modal-product-description-text'
                text={size}
              />
            </div>
            <div className='gabor-modal-product-description-item'>
              <Text
                className='gabor-modal-product-description-title'
                text='Quantity'
              />
              <Text
                className='gabor-modal-product-description-text'
                text={quantity}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='gabor-modal-product-price-container'>
        <div className='gabor-modal-product-price'>
          {sale && (
            <Text className='gabor-modal-product-price-sale' text={sale} />
          )}
          <Text className='gabor-modal-product-price-text' text={price} />
        </div>
        <div>
          <img src={deleteIcon} />
        </div>
      </div>
    </div>
  );
};

export default ModalProductView;
