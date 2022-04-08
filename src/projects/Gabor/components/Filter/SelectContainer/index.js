import React, { useState } from "react";
import Button from "../../Button";
import Text from "../../Text";
import "./style.css";
const SelectContainer = ({ onChange }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  console.log(open);
  return (
    <div
      className='gabor-filter-items'
      onChange={(e) => onChange(e.target.value)}>
      <div>
        <Button
          className='gabor-filter-select-item'
          onClick={handleOpen}
          text='Categories'
        />
        <div
          className={
            open ? `gabor-filter-option-item` : `gabor-filter-option-item open`
          }>
          asdsadsad
        </div>
      </div>
      <div>
        <Button
          className='gabor-filter-select-item'
          onClick={handleOpen}
          text='Categories'
        />
        <div
          className={
            open ? `gabor-filter-option-item` : `gabor-filter-option-item open`
          }>
          asdsadsad
        </div>
      </div>
      <select className='gabor-filter-select-item'>
        <option className='gabor-filter-select-option' selected disabled hidden>
          <Button text='Categories' />
        </option>
        <option className='gabor-filter-select-option'>
          <label>
            asd
            <input type='text' />
          </label>
        </option>
        <option className='gabor-filter-select-option'>
          <Button text='dsa' />
        </option>
        <option className='gabor-filter-select-option'>
          <Button text='asd' />
        </option>
        <option className='gabor-filter-select-option'>Athleisure</option>
      </select>
      <select className='gabor-filter-select-item'>
        <option className='gabor-filter-select-option' selected disabled hidden>
          Fitting
        </option>
        <option className='gabor-filter-select-option'>Standart</option>
        <option className='gabor-filter-select-option'>Wide</option>
      </select>
      <select className='gabor-filter-select-item'>
        <option className='gabor-filter-select-option' selected disabled hidden>
          Occasion
        </option>
        <option className='gabor-filter-select-option'>Casual</option>
      </select>
      <select className='gabor-filter-select-item'>
        <option className='gabor-filter-select-option' selected disabled hidden>
          Properties
        </option>
        <option className='gabor-filter-select-option'>Removable</option>
      </select>
      <select className='gabor-filter-select-item'>
        <option className='gabor-filter-select-option' selected disabled hidden>
          Colour
        </option>
      </select>
      <select className='gabor-filter-select-item'>
        <option className='gabor-filter-select-option' selected disabled hidden>
          Size
        </option>
      </select>
      <select className='gabor-filter-select-item'>
        <option className='gabor-filter-select-option' selected disabled hidden>
          Price
        </option>
      </select>
    </div>
  );
};

export default SelectContainer;
