import React, { useState } from "react";
import filterIcon from "../../assets/Filter_icon.svg";
import Text from "../Text";
import sortIcon from "../../assets/Sort_icon.svg";
import cross from "../../assets/cross.svg";
import PriceSlider from "./PriceSlider";
import "./style.css";

import Dropdown from "./Dropdown";
import PriceDropdown from "./Dropdown/PriceDropdown";
const Filter = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [value, setValue] = useState();
  const categories = [{ categories: "Athleisure" }];
  const fitting = [{ fitting: "Standart" }, { fitting: "Wide" }];
  const properties = [{ properties: "Removable insoles" }];
  const occasion = [{ occasion: "Casual" }];
  const sellers = [
    { sellers: "Title A-Z" },
    { sellers: "Title Z-A" },
    { sellers: "Price Low-High" },
    { sellers: "Price High-Low" },
    { sellers: "Most Recent" },
    { sellers: "Top Sellers" },
    { sellers: "Highest Rated" },
  ];
  const colour = [
    { colour: "#DCB789" },
    { colour: "#010101" },
    { colour: "#2F4F6E" },
    { colour: "#894619" },
    { colour: "#F2EBDA" },
    { colour: "#82B244" },
    { colour: "#666666" },
    { colour: "#D0D0D0" },
    { colour: "#F20D1D" },
    { colour: "#FDFDFD" },
    { colour: "#FAF838" },
  ];
  const size = [
    { size: "2.5" },
    { size: "3" },
    { size: "3.5" },
    { size: "4" },
    { size: "4.5" },
  ];
  const price = [{ price: "25" }];
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
          <Dropdown
            prompt='Categories'
            value={value}
            selectedOptions={selectedItems}
            onChange={(item) => {
              setValue();
              handleChange(item.categories);
            }}
            options={categories}
            label='categories'
          />
          <Dropdown
            prompt='Fitting'
            value={value}
            selectedOptions={selectedItems}
            onChange={(item) => {
              setValue();
              handleChange(item.fitting);
            }}
            options={fitting}
            label='fitting'
          />
          <Dropdown
            prompt='Occasion'
            value={value}
            selectedOptions={selectedItems}
            onChange={(item) => {
              setValue();
              handleChange(item.occasion);
            }}
            options={occasion}
            label='occasion'
          />
          <Dropdown
            prompt='Properties'
            value={value}
            selectedOptions={selectedItems}
            onChange={(item) => {
              setValue();
              handleChange(item.properties);
            }}
            options={properties}
            label='properties'
          />
          <Dropdown
            prompt='Colour'
            value={value}
            selectedOptions={selectedItems}
            onChange={(item) => {
              setValue();
              handleChange(item.colour);
            }}
            options={colour}
            label='colour'
            type='color'
          />
          <Dropdown
            prompt='Size'
            value={value}
            selectedOptions={selectedItems}
            onChange={(item) => {
              setValue();
              handleChange(item.size);
            }}
            options={size}
            label='size'
          />
          <PriceDropdown prompt='Price' />
        </div>
        <div className='gabor-filter-sort-container'>
          <div className='gabor-filter-sort-title'>
            <img src={sortIcon} />
            <Text className='gabor-filter-sort-text' text='SORT:' />
          </div>
          <Dropdown
            prompt='Top Sellers'
            options={sellers}
            value={value}
            selectedOptions={selectedItems}
            onChange={(item) => {
              setValue();
              handleChange(item.sellers);
            }}
            label='sellers'
          />
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
