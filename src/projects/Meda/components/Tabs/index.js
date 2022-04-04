import React, { useState } from "react";
import Tab from "./Tab";
import "./style.css";

const Tabs = ({ children, type }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const onClickTabItem = (tab, index) => {
    setActiveTab(tab);
    children[index].props.onClick();
  };
  return (
    <div className='tabs'>
      <ol className='tab-list'>
        {children.map((child, index) => {
          const { label, style } = child.props;

          return (
            <Tab
              type={type}
              activeTab={activeTab}
              key={label}
              label={label}
              style={style}
              onClick={() => onClickTabItem(label, index)}
            />
          );
        })}
      </ol>
      <div className='tab-content'>
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
};

export default Tabs;
