import React, { useState, useRef, useEffect } from "react";
import PriceSlider from "../../PriceSlider";
import filterArrow from "../../../../assets/filterArrow.svg";
const PriceDropdown = ({ prompt }) => {
  const [open, setOpen] = useState(false);

  const ddRef = useRef(null);
  const ref = useRef(null);
  function toggle(e) {
    setOpen(e && e.target === ddRef.current);
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      toggle();
    }
  }

  return (
    <div ref={ref} className='dropdown-container'>
      <div className='dropdown'>
        <div className='control'>
          <div className='selected-value'>
            <input
              type='text'
              placeholder={prompt}
              ref={ddRef}
              onClick={toggle}
              onTouchEnd={toggle}
            />
          </div>
          <img src={filterArrow} />
        </div>
        <div className={`options ${open ? "open" : ""}`}>
          <div style={{ height: 70, padding: "10px 10px 17px 10px" }}>
            <PriceSlider
              min={0}
              max={1000}
              onChange={({ min, max }) =>
                console.log(`min = ${min}, max = ${max}`)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceDropdown;
