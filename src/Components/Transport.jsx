import React from "react";

const FoodDining = () => {
  return (
    <section className="w-full py-12  md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src="fooddining.svg"
            alt="Food & Dining"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-cover rounded-br-[80px] md:rounded-br-[100px] pr-6"
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full md:w-1/2 px-6 md:py-10 md:px-12 py-10 md:py-16 text-justify">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            <span className="text-orange-500 font-kalam">Transport</span>
          </h2>
          <ul className="mt-4 text-[#888888] space-y-2 text-sm sm:text-base">
            <li>✔ Free airport pick-up and drop-off</li>
            <li>✔ Courtesy shuttle bus</li>
            <li>✔ Parking for trucks, trailers, and commercial vehicles</li>
            <li>✔ Car washing facilities (off-site)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FoodDining;
