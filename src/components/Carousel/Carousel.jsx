import React from "react";
import { Carousel } from "antd";

const CustomCarousel = (props) => {
  const { images } = props;
  const contentStyle = {
    height: "100%",
    color: "#fff",
    lineHeight: "100%",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <Carousel autoplay effect="fade">
      {images.map((image) => (
        <div>
          <h3 style={contentStyle}>
            <img src={image} alt="Carusel1"></img>
          </h3>
        </div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
