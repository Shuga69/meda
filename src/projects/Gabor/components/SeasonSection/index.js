import React from "react";
import seasonImage1 from "../../assets/seasonCard1.jpg";
import seasonImage2 from "../../assets/seasonCard2.png";
import "./style.css";
import SeasonCard from "./SeasonCard";
import CardSlider from "../CardSlider";

const SeasonSection = () => {
  const data = [
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
  ];

  return (
    <div className='gabor-season-section'>
      <CardSlider
        data={data}
        title='Season collection'
        subtitle='Must-have pieces selected every month'
        component={(item, classes) => {
          return (
            <SeasonCard
              className={classes}
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
              color={item.color}
            />
          );
        }}
      />
    </div>
  );
};

export default SeasonSection;
