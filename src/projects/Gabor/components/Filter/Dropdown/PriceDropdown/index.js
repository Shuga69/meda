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
    <div ref={ref} className='gabor-dropdown-container'>
      <div className='gabor-dropdown'>
        <div className='gabor-control'>
          <div className='gabor-selected-value'>
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
        <div className={`gabor-options ${open ? "gabor-open" : ""}`}>
          <div style={{ height: 70, padding: "10px 10px 17px 10px" }}>
            <PriceSlider min={0} max={1000} onChange={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceDropdown;
