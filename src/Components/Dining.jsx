import React from "react";

function Dining() {
  return (
    <div className="bg-white text-gray-800">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <img
            src="dining.svg"
            alt="dining"
            className="w-full h-screen object-cover"
          />
        </div>
        <div className="lg:w-1/2 p-6 md:p-12 flex flex-col justify-center">
          <h2
            className="text-[#000000] uppercase mb-4"
            style={{ fontFamily: "inter" }}
          >
            Dining
          </h2>
          <h1
            className="text-4xl title text-orange-500 mb-4"
            style={{ fontFamily: "Kalam, cursive" }}
          >
            Wine &amp; Dinner.
          </h1>
          <p className="text-[#888888] mb-6 text-justify">
            We specialize in short and long stays for contractors in and around
            Whyalla. Accommodation for large or small groups of working men and
            women, day shifters, night shifters. Our clients rave about us due
            to the one thing that makes us the best Whyalla Motel!
          </p>
          <div className="text-[#888888] text-xs">
            <h3 className="uppercase mb-6" style={{ fontFamily: "inter" }}>
              House of Operation
            </h3>
            <div className="flex justify-between mb-2.5">
              <span>Dinner</span>
              <span>05:30 PM Onwards</span>
            </div>
            <hr className="border-[#DADADA] mb-5" />
            <div className="flex justify-between mb-2.5">
              <span>Tuesday to Saturday</span>
            </div>
            <hr className="border-[#DADADA]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dining;
