import React from "react";

const FoodDining = () => {
  return (
    <section className="w-full md:pr-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center ">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src="fooddining.svg"
            alt="Food & Dining"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-br-[100px] object-cover rounded-l-none pr-6"
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full md:w-1/2 px-6 md:py-10 md:px-12 py-10 md:py-16 text-justify">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900">
            <span
              className="text-orange-500 font-medium"
              style={{ fontFamily: "Kalam, cursive" }}
            >
              FOOD
            </span>{" "}
            & <span style={{ fontFamily: "Kalam, cursive" }}>DINING</span>
          </h2>
          <ul className="mt-4 text-[#888888] space-y-2 text-sm md:text-base ">
            <li>- Full Room Service</li>
            <li>- Breakfast And Coffee Room Open 24/7</li>
            <li>- Full Menu Packages Including Our Huge Crib Lunches</li>
            <li>- Bar Facilities At Cheap Prices</li>
            <li>- Licensed Restaurant Indoors And Outdoors</li>
            <li>- BBQs And Charcoal Cookers</li>
            <li>- Large, Commercial Wood-Fire Pizza Oven</li>
            <li>- Smoking Areas Heated And Covered</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FoodDining;
