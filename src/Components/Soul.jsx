import React from "react";

const Soul = () => {
  return (
    <div className="bg-cream  lg:pl-12 lg:pt-12">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
        {/* Left Section */}
        <div className="lg:w-1/2 px-6 ">
          <h2
            className="text-[#000000] uppercase mb-2"
            style={{ fontFamily: "inter" }}
          >
            Rest Your Soul
          </h2>
          <h1
            className="text-4xl lg:text-5xl font-indie-flower text-black mb-4"
            style={{ fontFamily: "Kalam, cursive" }}
          >
            Enjoy the{" "}
            <span
              className="text-orange-500"
              style={{ fontFamily: "Kalam, cursive" }}
            >
              Dazzling
            </span>{" "}
            Venue.
          </h1>
          <p className="text-[#888888] mb-6 text-justify">
            We specialize in short and long stays for contractors in and around
            Whyalla. Accommodation for large or small groups of working men and
            women, day shifters, night shifters. Our clients rave about us due
            to the one thing that makes us the best Whyalla motel.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3.5">
              <img src="award.svg" className="size-12" />
              <p className="text-lg" style={{ fontFamily: "Kalam, cursive" }}>
                <span
                  className="text-orange-500"
                  style={{ fontFamily: "Kalam, cursive" }}
                >
                  Eco Friendly Hotel
                </span>{" "}
                Award
              </p>
            </div>
            <div className="flex items-center gap-3.5">
              <img src="focused.svg" className="size-12" />
              <p className="text-lg" style={{ fontFamily: "Kalam, cursive" }}>
                <span
                  className="text-orange-500"
                  style={{ fontFamily: "Kalam, cursive" }}
                >
                  Focused on Guest
                </span>{" "}
                Comfort
              </p>
            </div>
            <div className="flex items-center gap-3.5">
              <img src="rich.svg" className="size-12" />
              <p className="text-lg" style={{ fontFamily: "Kalam, cursive" }}>
                <span
                  className="text-orange-500"
                  style={{ fontFamily: "Kalam, cursive" }}
                >
                  Rich Diversity
                </span>{" "}
                of Flora and Fauna
              </p>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-16">
          <div className="px-12">
            <img
              alt="Outdoor seating area with tables and chairs under a covered patio, with a view of greenery and a ping pong table in the foreground"
              className="max-w-lg w-full h-auto object-cover rounded-tl-[300px] rounded-tr-[300px]"
              height="400"
              src="soul.svg"
              width="600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Soul;
