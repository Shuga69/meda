import React from "react";
import Button from "../../Button";
import "./style.css";

const Tab = ({ activeTab, label, onClick, type = "", style }) => {
  const onClickTab = () => {
    onClick(label);
  };
  let className = type ? type : "meda-tab-list-item";

  if (activeTab === label) {
    className += type ? " meda-active" : " meda-tab-list-active";
  }
  return (
    <Button
      text={label}
      style={style}
      className={className}
      onClick={onClickTab}
    />
  );
};

export default Tab;
