import React from "react";
import "./style.css";
const CustomInput = ({ label, listName, data, placeholder }) => {
  return (
    <div className='gabor-custom-modal-input-container'>
      <label className='gabor-custom-modal-input-label' htmlFor='myBrowser'>
        {label}
      </label>
      <input
        className='gabor-custom-modal-input'
        list={listName}
        id='myBrowser'
        name='myBrowser'
        placeholder={placeholder}
      />
      <datalist id={listName}>
        {data.map((item) => {
          return <option key={item} value={item} />;
        })}
      </datalist>
    </div>
  );
};

export default CustomInput;
