import React from "react";
import "../assets/styles/slides.css";

const slides = (props) => {
  return (
        <img
          className="carousel_img"
          src={props.image.link}
          alt="Sliderr_image"
        />
  );
};

export default slides;
