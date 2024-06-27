"use client"
import React, { useState } from "react";
import Image from "./Image";
import { StyledSlider } from "./SlideImage";


const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <StyledSlider>
      <button className="leftArrow" onClick={prevSlide} ><i class="fa-solid fa-angles-right"></i></button>
      <button className="rightArrow" onClick={nextSlide} ><i class="fa-solid fa-angles-right"></i></button>
      {slides.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && <Image src={slide.image} alt="" />}
          </div>
        );
      })}
    </StyledSlider>
  );
};

export default Slider;
