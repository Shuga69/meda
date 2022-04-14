import React from "react";

const Text = ({ text, style, className }) => {
  return (
    <p className={className ? className : "ron-simple-text"} style={style}>
      {text}
    </p>
  );
};

export default Text;
