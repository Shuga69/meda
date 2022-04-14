import React, { useState } from "react";
import IconButton from "../IconButton";
import productSlide from "../../assets/productSlide.png";
import productSlide1 from "../../assets/productSlide1.png";
import productSlide2 from "../../assets/productSlide2.png";
import productSlide3 from "../../assets/productSlide3.png";
import productSlide4 from "../../assets/productSlide4.png";
import productSlide5 from "../../assets/productSlide5.png";
import productSlideBtn1 from "../../assets/productSlideBtn1.png";
import productSlideBtn2 from "../../assets/productSlideBtn2.png";
import leftArrow from "../../assets/leftArrow.svg";
import rightArrow from "../../assets/rightArrow.svg";
import "./style.css";
const ProductSlider = () => {
  const [current, setCurrent] = useState(0);

  const data = [
    { image: productSlide },
    { image: productSlide1 },

    { image: productSlide3 },
    { image: productSlide4 },
    { image: productSlide5 },
  ];
  const buttonData = [
    { image: productSlide2 },
    { image: productSlide1 },

    { image: productSlide3 },
    { image: productSlide4 },
    { image: productSlide5 },
  ];
  const length = data.length;
  const currentSlide = (index) => {
    setCurrent(index);
  };
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
    <div className='gabor-slider-product-section'>
      <div className='gabor-slider-product-container'>
        <a className='prev' onclick='plusSlides(-1)'>
          <IconButton onClick={prevSlide} icon={leftArrow} />
        </a>
        <div id='slides' className='gabor-product-slides-container'>
          {data.map((slide, index, arr) => {
            let classes;
            if (index === current) classes = "slideActive";
            else if (index === current + 1) classes = "nextSlide";
            else if (index === current - 1) classes = "prevSlide";
            else classes = "slide";
            if (current === 0 && index === arr.length - 1)
              classes = "prevSlide";
            if (current === arr.length - 1 && index === 0)
              classes = "nextSlide";

            return (
              <img
                className={"gabor-product-slider-image " + classes}
                src={arr[index].image}
              />
            );
          })}
        </div>
        <a className='next' onclick='plusSlides(1)'>
          <IconButton onClick={nextSlide} icon={rightArrow} />
        </a>
      </div>
      <div class='gabor-slider-product-slides-button'>
        {buttonData.map((item, index) => {
          return (
            <div className='gabor-slider-product-slide-btn'>
              <img
                class='gabor-slider-product-slide-btn-image'
                src={item.image}
                onClick={() => currentSlide(index)}
                alt='The Woods'
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSlider;
