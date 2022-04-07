import React, { useState } from "react";
import Text from "../Text";
import IconButton from "../IconButton";
import Button from "../Button";
import slider from "../../assets/slider1.png";
import slider1 from "../../assets/slider2.png";
import slider2 from "../../assets/slider3.png";
import left from "../../assets/leftArrow.svg";
import right from "../../assets/rightArrow.svg";
import "./style.css";
const MainSection = () => {
  const [current, setCurrent] = useState(0);

  const data = [{ image: slider }, { image: slider1 }, { image: slider2 }];
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
    <div className='gabor-slider-container'>
      <div className='gabor-slider-information'>
        <div className='gabor-slider-information-text'>
          <Text className='gabor-slider-subtitle-text' text='New Arrivals' />
          <Text
            className='gabor-slider-title-text'
            text='Spring/Summer Esential Collection'
          />
          <Button text='Shop now' />
        </div>
        <Text
          className='gabor-slider-counter-text'
          text={`0${current + 1}/0${length}`}
        />
      </div>
      <div className='gabor-slider-buttons'>
        <IconButton onClick={prevSlide} icon={left} />
        <IconButton onClick={nextSlide} icon={right} />
      </div>
      <div className='gabor-slider-image'>
        {data.map((slide, index, arr) => {
          let classes;
          if (index === current) classes = "slideActive";
          else if (index === current + 1) classes = "nextSlide";
          else if (index === current - 1) classes = "prevSlide";
          else classes = "slide";
          if (current === 0 && index === arr.length - 1) classes = "prevSlide";
          if (current === arr.length - 1 && index === 0) classes = "nextSlide";

          return <img className={"image " + classes} src={arr[index].image} />;
        })}
      </div>
    </div>
  );
};

export default MainSection;
