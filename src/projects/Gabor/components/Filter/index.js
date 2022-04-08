import React, { useState } from "react";
import filterIcon from "../../assets/Filter_icon.svg";
import Text from "../Text";
import sortIcon from "../../assets/Sort_icon.svg";
import cross from "../../assets/cross.svg";
import "./style.css";
import SelectContainer from "./SelectContainer";
const Filter = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const handleChange = (item) => {
    setSelectedItems((prevItems) =>
      selectedItems.includes(item) ? [...prevItems] : [...prevItems, item]
    );
  };
  const removeFilter = (item) => {
    let arr = [...selectedItems];
    let index = arr.indexOf(item);
    if (index !== -1) {
      arr.splice(index, 1);
      setSelectedItems(arr);
    }
  };
  console.log(selectedItems);
  return (
    <div>
      <div className='gabor-filter-container'>
        <div className='gabor-filter-items-container'>
          <div className='gabor-filter-title'>
            <img src={filterIcon} />
            <Text text='FILTER:' />
          </div>
          <SelectContainer onChange={handleChange} />
        </div>
        <div className='gabor-filter-sort-container'>
          <div className='gabor-filter-sort-title'>
            <img src={sortIcon} />
            <Text className='gabor-filter-sort-text' text='SORT:' />
          </div>
          <select className='gabor-filter-select-item'>
            <option
              className='gabor-filter-select-option'
              selected
              disabled
              hidden>
              Price
            </option>
          </select>
        </div>
      </div>
      <div className='gabor-filter-result-item-section'>
        <div className='gabor-filter-result-item-container'>
          {selectedItems.map((item) => (
            <div className='gabor-filter-result-item'>
              <Text style={{ "margin-right": "10px" }} text={item} />
              <img onClick={() => removeFilter(item)} src={cross} />
            </div>
          ))}
        </div>
        <Text text='24 items' />
      </div>
    </div>
  );
};

export default Filter;
