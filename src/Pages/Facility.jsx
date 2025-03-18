import React from "react";
import FacilityHome from "../Components/FacilityHome";
import FoodDining from "../Components/FoodDining";
import Entertainment from "../Components/Entertainment";
import Transport from "../Components/Transport";
import General from "../Components/General";
import Contact from "../Components/Contact";

const facility = () => {
  return (
    <>
      <FacilityHome />
      <FoodDining />
      <Entertainment />
      <Transport />
      <General />
      <Contact />
    </>
  );
};

export default facility;
