import React, { useState } from "react";
import Text from "../Text";
import useCollapse from "react-collapsed";
import downArrow from "../../assets/downArrow.svg";
import upArrow from "../../assets/upArrow.svg";
import "./style.css";
const ProductExpandInfo = ({
  text,
  children,
  dropDown = true,
  expanded = true,
}) => {
  const [isExpanded, setExpanded] = useState(expanded);
  const { getToggleProps, getCollapseProps } = useCollapse({
    isExpanded,
  });
  return (
    <article className='gabor-article-container'>
      <div
        {...getToggleProps({
          onClick: () => (dropDown ? setExpanded((x) => !x) : null),
        })}
        className='gabor-article-btn'>
        <Text
          style={{
            "text-transform": "uppercase",
            color: "#050505",
          }}
          text={text}
        />
        {dropDown ? (
          <img
            style={{ cursor: "pointer" }}
            src={isExpanded ? upArrow : downArrow}
          />
        ) : (
          <></>
        )}
      </div>
      <div {...getCollapseProps()} className='gabor-article-content'>
        {children}
      </div>
    </article>
  );
};

export default ProductExpandInfo;
