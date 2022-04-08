import React, { useState } from "react";
import Text from "../Text";
import left from "../../assets/leftArrow.svg";
import right from "../../assets/rightArrow.svg";
import seasonImage1 from "../../assets/seasonCard1.jpg";
import seasonImage2 from "../../assets/seasonCard2.png";
import "./style.css";
import IconButton from "../IconButton";
import SeasonCard from "./SeasonCard";
const SeasonSection = () => {
  const [current, setCurrent] = useState(0);

  const data = [
    [
      {
        title: "Stylish Trainers",
        subtitle: "18 items",
        image: seasonImage2,
        color: { background: "#FBF5F0" },
      },
      {
        title: "This season’s New Arrivals",
        subtitle: "24 items",
        image: seasonImage1,
        color: { background: "#F3EFEC" },
      },
      {
        title: "Stylish Trainers",
        subtitle: "18 items",
        image: seasonImage2,
        color: { background: "#F5F5F5" },
      },
      {
        title: "This season’s New Arrivals",
        subtitle: "24 items",
        image: seasonImage1,
        color: { background: "#EDF0ED" },
      },
    ],
    [
      {
        title: "This season’s New Arrivals",
        subtitle: "31 items",
        image: seasonImage2,
        color: { background: "#FBF5F0" },
      },
      {
        title: "Summer Sandals ",
        subtitle: "14 items",
        image: seasonImage1,
        color: { background: "#F3EFEC" },
      },
      {
        title: "This season’s New Arrivals",
        subtitle: "31 items",
        image: seasonImage1,
        color: { background: "#F5F5F5" },
      },
      {
        title: "Summer Sandals",
        subtitle: "14 items",
        image: seasonImage2,
        color: { background: "#EDF0ED" },
      },
    ],
  ];
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
    <div className='gabor-season-section'>
      <div className='gabor-season-title-container'>
        <div>
          <Text className='gabor-season-title' text='Season collection' />
          <Text
            className='gabor-season-subtitle'
            text='Must-have pieces selected every month'
          />
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
                  <SeasonCard
                    className={classes}
                    title={item.title}
                    subtitle={item.subtitle}
                    image={item.image}
                    color={item.color}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SeasonSection;
