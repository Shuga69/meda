import React from "react";
import { Link } from "react-router-dom";
import Text from "../Text";
import "./style.css";
const LogInfoContainer = ({ children, text }) => {
  return (
    <article className='meda-article-container'>
      <div className='meda-article-add-btn'>
        <Text
          style={{
            "text-transform": "uppercase",
            color: "#028F68",
          }}
          text={text}
        />

        <Link to='/b'>
          <Text
            style={{
              "font-weight": "500",
              "font-size": "21px",
              color: "#028F68",
            }}
            text='+'
          />
        </Link>
      </div>
      <div className='meda-article-content'>{children}</div>
    </article>
  );
};

export default LogInfoContainer;