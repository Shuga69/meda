import React, { useState, useEffect, Fragment } from "react";
import Text from "../Text";
import left from "../../assets/leftArrow.svg";
import right from "../../assets/rightArrow.svg";
import IconButton from "../IconButton";
import useMedia from "../../hooks/useMedia";
import "./style.css";
const CardSlider = ({ component, data, title, subtitle }) => {
  const [current, setCurrent] = useState(0);
  const [slidePerPage, setSlidePerPage] = useState(4);
  const isTablet = useMedia("(min-width: 1600px)");
  const isPhone = useMedia("(min-width: 1367px)");

  useEffect(() => {
    setSlidePerPage(4);
    if (!isTablet) {
      setSlidePerPage(3);
    }
    if (!isPhone) {
      setSlidePerPage(2);
    }
  }, [isTablet, isPhone]);

  const length = data.length;
  const nextSlide = () => {
    setCurrent(current >= length - slidePerPage ? 0 : current + slidePerPage);
  };

  const prevSlide = () => {
    setCurrent(current <= 0 ? length - slidePerPage : current - slidePerPage);
  };

  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }
  return (
    <>
      <div className='gabor-season-title-container'>
        <div>
          <Text className='gabor-season-title' text={title} />
          {subtitle && (
            <Text className='gabor-season-subtitle' text={subtitle} />
          )}
        </div>
        <div className='gabor-season-arrows-container'>
          <IconButton onClick={prevSlide} icon={left} />
          <IconButton onClick={nextSlide} icon={right} />
        </div>
      </div>
      <div className='gabor-season-cards-slides'>
        <div className='gabor-season-cards-section'>
          {data.map((item, index, arr) => {
            let classes;
            for (let i = 0; i < slidePerPage; i++)
              if (index === current + i) classes = "slideActive";

            return <Fragment key={index}>{component(item, classes)}</Fragment>;
          })}
        </div>
      </div>
    </>
  );
};

export default CardSlider;
