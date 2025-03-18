import React from "react";
import Home from "../Components/Home";
import About from "../Components/About";
import DiscoverRooms from "../Components/DiscoverRooms";
import Dining from "../Components/Dining";
import Soul from "../Components/Soul";
import Testimonial from "../Components/Testimonial";
import Contact from "../Components/Contact";

const MainHome = () => {
  return (
    <>
      <Home />
      <About />
      <DiscoverRooms />
      <Dining />
      <Soul />
      <Testimonial />
      <Contact />
    </>
  );
};

export default MainHome;
