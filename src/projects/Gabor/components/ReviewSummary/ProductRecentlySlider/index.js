import React, { useState } from "react";
import ProductCard from "../../ProductCard";
import IconButton from "../../IconButton";
import left from "../../../assets/leftArrow.svg";
import right from "../../../assets/rightArrow.svg";
import Text from "../../Text";
import "./style.css";
const ProductRecentlySlider = ({ data, productData }) => {
  const [current, setCurrent] = useState(0);

  const length = data.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }
  return (
    <div style={{ height: 600 }} className='gabor-product-section'>
      <div className='gabor-season-title-container'>
        <div>
          <Text className='gabor-season-title' text='Season collection' />
        </div>
        <div className='gabor-season-arrows-container'>
          <IconButton onClick={prevSlide} icon={left} />
          <IconButton onClick={nextSlide} icon={right} />
        </div>
      </div>

      <div className='gabor-season-cards-section'>
        {data.map((slide, index, arr) => {
          let classes;
          if (index === current) classes = "slideActive";
          else if (index === current + 1) classes = "nextSlide";
          else if (index === current - 1) classes = "prevSlide";
          else classes = "slide";
          if (current === 0 && index === arr.length - 1) classes = "prevSlide";
          if (current === arr.length - 1 && index === 0) classes = "nextSlide";

          return (
            <div className='gabor-season-cards-container'>
              {slide.map((item) => {
                return (
                  <div
                    className={
                      "gabor-product-cards-slider-container " + classes
                    }>
                    <ProductCard
                      className={classes}
                      title={item.title}
                      price={item.price}
                      image={item.image}
                      icons={item.icons}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductRecentlySlider;
