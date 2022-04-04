import React, { useState } from "react";
import Text from "../Text";
import downArrow from "../../assets/downArrow.svg";
import upArrow from "../../assets/upArrow.svg";
import "./style.css";
import useCollapse from "react-collapsed";
const InfoContainer = ({ text, children }) => {
  const [isExpanded, setExpanded] = useState(false);
  const { getToggleProps, getCollapseProps } = useCollapse({
    isExpanded,
  });

  return (
    <article className='meda-article-container'>
      <div
        {...getToggleProps({
          onClick: () => setExpanded((x) => !x),
        })}
        className='meda-article-btn'>
        <Text
          style={{
            "text-transform": "uppercase",
            color: "#028F68",
          }}
          text={text}
        />
        <img src={isExpanded ? upArrow : downArrow} />
      </div>
      <div {...getCollapseProps()} className='meda-article-content'>
        {children}
      </div>
    </article>
  );
};

export default InfoContainer;
