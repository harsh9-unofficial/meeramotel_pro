import React from "react";

const GalleryHome = () => {
  return (
    <div>
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] flex items-center justify-center text-center text-white">
        <img
          src="facilityhome.svg"
          alt="Facility Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="relative z-10">
          <p className="text-sm md:text-base">Home / Gallery</p>
          <h1 className="text-3xl md:text-5xl font-bold mt-2">GALLERY</h1>
        </div>
      </div>
    </div>
  );
};

export default GalleryHome;
