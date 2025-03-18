import React from "react";

const FacilityHome = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] flex items-center justify-center text-center text-white">
        <img
          src="facilityhome.svg"
          alt="Facility Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="relative z-10">
          <p className="text-sm md:text-base">Home / Facility</p>
          <h1 className="text-3xl md:text-5xl font-bold mt-2">FACILITY</h1>
        </div>
      </div>

      {/* Facility Description Section */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-10 md:py-16 text-justify">
        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          Our customers come back, time and time again, because our facilities
          are second to none and at the end of the day – we care.
        </p>
        <p className="mt-6 text-gray-700 leading-relaxed text-sm md:text-base">
          The facilities here at the Mirambeena Motel are specifically tailored
          to appeal to the kind of customers that we serve best: out-of-town
          contractors, workers flying or driving in who are here at our Whyalla
          Motel to get the job done and then unwind.
        </p>
        <p className="mt-6 text-gray-700 leading-relaxed text-sm md:text-base">
          You’ll be away from family and probably pretty busy getting down to
          business, so when you get back at the end of the day (or night) we
          understand that the last thing you need are hassles and the first
          thing you need – be that a fancy meal or just a cold beer – should be
          delivered with respect, caring, and a friendly face.
        </p>
      </div>
    </div>
  );
};

export default FacilityHome;
