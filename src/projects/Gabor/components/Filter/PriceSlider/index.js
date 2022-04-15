import React, { useState, useRef, useEffect, useCallback } from "react";
import Text from "../../Text";
import "./style.css";
const PriceSlider = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);
  const getPercent = useCallback(
    (value) => {
      return Math.round(((value - min) / (max - min)) * 100);
    },
    [min, max]
  );

  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <>
      <div className='gabor-price-slider__number'>
        <div className='gabor-price-slider__min'>£{minVal}</div>
        <Text className='gabor-price-slider__min' text=' - ' />
        <div className='gabor-price-slider__max'>£{maxVal}</div>
      </div>
      <input
        type='range'
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={(event) => {
          const value = Math.min(+event.target.value, maxVal - 1);
          setMinVal(value);
          event.target.value = value.toString();
        }}
        className={
          minVal > max - 100
            ? "gabor-thumb gabor-thumb--zindex-5"
            : "gabor-thumb gabor-thumb--zindex-3"
        }
      />
      <input
        type='range'
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={(event) => {
          const value = Math.max(+event.target.value, minVal + 1);
          setMaxVal(value);
          event.target.value = value.toString();
        }}
        className='gabor-thumb gabor-thumb--zindex-4'
      />

      <div className='gabor-price-slider'>
        <div className='gabor-price-slider__track'></div>
        <div ref={range} className='gabor-price-slider__range'></div>
      </div>
    </>
  );
};

export default PriceSlider;
