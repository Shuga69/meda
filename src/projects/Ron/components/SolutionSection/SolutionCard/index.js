import React from "react";

import Text from "../../Text";
import "./style.css";
const SolutionCard = ({
  image,
  style,
  title,
  description,
  children,
  listTitle,
}) => {
  return (
    <div style={style} className='ron-solution-card-container'>
      <div className='ron-solution-card-text-container'>
        <Text text='Solutions for' />
        <Text className='ron-solution-card-title' text={title} />
        <Text text={description} />
        <Text className='ron-solution-card-list-title' text={listTitle} />
        {children}
        <Text text='The EverythingLegal platform allows for your notary to be completely remote.' />
      </div>
      <img className='ron-solution-image' src={image} />
    </div>
  );
};

export default SolutionCard;
