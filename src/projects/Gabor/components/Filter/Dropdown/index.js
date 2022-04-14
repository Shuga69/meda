import React, { useState, useEffect, useRef } from "react";
import filterArrow from "../../../assets/filterArrow.svg";
import Text from "../../Text";
import PriceSlider from "../PriceSlider";
import "./style.css";
const Dropdown = ({
  prompt = "Select one",
  value,
  onChange,
  options,
  label,
  selectedOptions,
  type = "text",
}) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ddRef = useRef(null);
  console.log(selectedOptions);
  useEffect(() => {
    addClickHandlers();
    return () => removeClickHandlers();
  });

  function filter(options) {
    return options.filter(
      (option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  }

  function addClickHandlers() {
    ["click", "touchend"].map((e) =>
      document.addEventListener(e, toggle, false)
    );
  }

  function removeClickHandlers() {
    ["click", "touchend"].map((e) =>
      document.addEventListener(e, toggle, false)
    );
  }

  function toggle(e) {
    setOpen(e && e.target === ddRef.current);
  }

  function displayValue() {
    if (query.length > 0) return query;
    if (value) return value[label];
  }

  function selectOption(option) {
    setQuery("");
    onChange(option);
    toggle();
  }
  return (
    <div className='dropdown-container'>
      <div className='dropdown'>
        <div className='control'>
          <div className='selected-value'>
            <input
              type='text'
              placeholder={value ? value[label] : prompt}
              ref={ddRef}
              onMouseDown={toggle}
              onClick={toggle}
              onTouchEnd={toggle}
              value={displayValue()}
              onChange={(e) => {
                onChange(null);
                setQuery(e.target.value);
              }}
            />
          </div>
          <img src={filterArrow} />
        </div>
        <div className={`options ${open ? "open" : ""}`}>
          {type === "text" ? (
            filter(options).map((option) => (
              <div
                className='option-select-container'
                onMouseDown={() => selectOption(option)}
                onTouchEnd={() => selectOption(option)}
                onClick={() => selectOption(option)}>
                <input
                  className='option-select-checkbox'
                  id='1'
                  checked={
                    selectedOptions && selectedOptions.includes(option[label])
                  }
                  type='checkbox'
                />

                <label
                  for='1'
                  className={`option ${value === option ? "selected" : ""}`}>
                  {option[label]}
                </label>
              </div>
            ))
          ) : (
            <div className='gabor-color-container'>
              {filter(options).map((option) => (
                <div
                  className='gabor-color-option'
                  style={{ background: option[label] }}></div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
