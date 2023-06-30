"use client";

import React from "react";
import Card from "./Card";
import Carousel from "react-material-ui-carousel";

const CarouselBox = () => {
  return (
    <Carousel>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Carousel>
  );
};

export default CarouselBox;
