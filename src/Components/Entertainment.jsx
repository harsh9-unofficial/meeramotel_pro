import React from "react";

const Entertainment = () => {
  return (
    <section className="w-full py-14 bg-[#F9F7ED]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-10 px-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900">
            <span
              className="text-orange-500 font-medium"
              style={{ fontFamily: "Kalam, cursive" }}
            >
              ENTERTAINMENT
            </span>
          </h2>
          <ul className="mt-4 text-[#888888] space-y-2 text-sm md:text-base">
            <li>- Games Room And Recreation Room With Pool Table</li>
            <li>- Outdoor Solar-Heated Swimming Pool And Covered Pergola</li>
            <li>- Smoking Areas, Heated And Covered</li>
            <li>- Foxtel</li>
            <li>- WIFI Internet Throughout The Premises</li>
          </ul>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src="entertainment.svg"
            alt="Entertainment Area"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-bl-[100px] object-cover rounded-l-none ml-10 overflow-hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default Entertainment;
