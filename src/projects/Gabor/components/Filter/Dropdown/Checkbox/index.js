import React from "react";
import "./style.css";
const Checkbox = ({ checked, value, checkGroup, id, text }) => {
  return (
    <div className='gabor-checkbox-container'>
      <li>
        <input
          type='checkbox'
          defaultChecked={checked}
          value={value}
          name={checkGroup}
          id={"checkbox-" + id}
        />
        <label for={"gabor-checkbox-" + id}>{text}</label>
        <svg
          width='12'
          height='11'
          viewBox='0 0 12 11'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M1 6L4 9L11 1' stroke='black' stroke-width='1.5' />
        </svg>
      </li>
    </div>
  );
};

export default Checkbox;
