import React, { useState } from "react";
import Button from "../Button";
import Text from "../Text";
import sliderImage from "../../assets/sliderImage.png";
import "./style.css";
const MainSlider = () => {
  const [current, setCurrent] = useState(0);
  const currentSlide = (index) => {
    setCurrent(index);
  };
  const data = [
    {
      title: "Remote Online Notary is here!",
      subtitle: "Contactless document notarization in minutes",
      description:
        "No matter the time of day, schedule your appointment or request an immediate notarization. Online, easy-to-use and legal.",
      button: "Shecule One",
    },
    {
      title: "Are you a Notary?",
      subtitle: "",
      description:
        "Are you seeking a flexible Schedule! No Boss! You call the shots when you work! Quick Pay!",
      button: "Get Started",
    },
    {
      title: "Do You Notarize Documents at Work?",
      subtitle: "",
      description: "Do you notarize documents for your employer/company",
      button: "Get Started",
    },
    {
      title: "",
      subtitle:
        "Are you a title and escrow company, bank, or any other financial institution seeking a centralized solution for your notarial operations?",
      description: "",
      button: "Learn more",
    },
  ];
  return (
    <div className='ron-main-slider-section'>
      <div className='ron-main-slider-container-tablet'>
        <div className='ron-main-slider-btn-container'>
          <Button
            onClick={() => currentSlide(0)}
            className={
              current === 0
                ? "ron-main-slider-btn active"
                : "ron-main-slider-btn"
            }
            text='For Consumers'
          />
          <Button
            onClick={() => currentSlide(1)}
            className={
              current === 1
                ? "ron-main-slider-btn active"
                : "ron-main-slider-btn"
            }
            text='For Notary'
          />
          <Button
            onClick={() => currentSlide(2)}
            className={
              current === 2
                ? "ron-main-slider-btn active"
                : "ron-main-slider-btn"
            }
            text='For Corp Notary'
          />
          <Button
            onClick={() => currentSlide(3)}
            className={
              current === 3
                ? "ron-main-slider-btn active"
                : "ron-main-slider-btn"
            }
            text='For Corp Notary +'
          />
        </div>
        <img className='ron-main-slider-image-tablet' src={sliderImage} />
        <div className='ron-main-slider-content'>
          <Text
            className='ron-main-slider-content-title'
            text={data[current].title}
          />
          <Text
            className='ron-main-slider-content-subtitle'
            text={data[current].subtitle}
          />
          <Text
            className='ron-main-slider-content-description'
            text={data[current].description}
          />
          <Button
            style={{ padding: "13px 21px", marginTop: "16px" }}
            text={data[current].button}
          />
        </div>
      </div>
      <img className='ron-main-slider-image' src={sliderImage} />
    </div>
  );
};

export default MainSlider;
