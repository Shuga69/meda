import React from "react";
import "./style.css";
import WelcomeCard from "./WelcomeCard";
import welcomeImage from "../../assets/welcomeImage.png";
import welcomeImage2 from "../../assets/welcomeImage2.png";
import welcomeImage3 from "../../assets/welcomeImage3.png";
import welcomeImage4 from "../../assets/welcomeImage4.png";
import Text from "../Text";
const WelcomeSection = () => {
  return (
    <div className='gabor-welcome-section-container'>
      <Text className='gabor-welcome-title' text='Welcome to Gabor' />
      <div className='gabor-welcome-cards-container'>
        <WelcomeCard
          image={welcomeImage}
          reverse={true}
          text='Created more than 60 years ago, German brand Gabor has a strong reputation for their comfortable, quality footwear. Gabor Shoes was established in 1949 by Joachim and Bernhard Gabor, and is now run by Joachim Gabor’s son, Achim.'
        />
        <WelcomeCard
          image={welcomeImage2}
          text='With technically advanced manufacturing techniques and both classic and contemporary styles, Gabor takes you from day to night with its beautiful collection of Womens shoes, Womens Boots, Womens Ankle Boots and Ladies Sandals in a wide selection of colours and styles.'
        />
        <WelcomeCard
          image={welcomeImage3}
          reverse={true}
          text='Gabor Shoes has something for every season and every style, offering everything from Mary Janes Shoes and Knee High Boots to ladies sandals UK and handbags. With Gabor, superior comfort and quality always comes as standard, and with an extended range of size and width options you’ll be sure to find shoes that love you back.'
        />
        <WelcomeCard
          image={welcomeImage4}
          text='Our range of convenient delivery options means you can buy Gabor shoes online to suit your schedule, and we pride ourselves on our professional customer service team, who are on hand 7 days a week to offer their friendly help and advice.'
        />
      </div>
    </div>
  );
};

export default WelcomeSection;
