import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  { name: "Gallery", image: "gallery.jpg" },
  { name: "Gallery 1", image: "gallery1.png" },
  { name: "Gallery 2", image: "gallery2.png" },
  { name: "Gallery 3", image: "gallery3.png" },
  { name: "Gallery 4", image: "gallery4.png" },
  { name: "Gallery 5", image: "gallery5.png" },
  { name: "Gallery 6", image: "gallery6.png" },
  { name: "Gallery 7", image: "gallery7.png" },
  { name: "Gallery 8", image: "gallery8.png" },
];

const GalleryGrid = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Desktop Slider View (New Animation) */}
        <div className="hidden md:flex overflow-hidden relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2 relative">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={slide.image}
                    alt={slide.name}
                    className="w-full h-[400px] object-cover"
                  />
                  {/* Name Overlay */}
                  {/* <div className="absolute bottom-0 left-0 right-0 text-white text-center p-3">
                    <h2 className="text-2xl font-bold">{slide.name}</h2>
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 p-3 bg-gray-800/50 text-white rounded-full"
          >
            <FaArrowLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 p-3 bg-gray-800/50 text-white rounded-full"
          >
            <FaArrowRight size={24} />
          </button>
        </div>

        {/* Mobile Slider View (Unchanged) */}
        <div className="md:hidden w-full max-w-lg mx-auto relative overflow-hidden">
          <div
            className="relative flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 h-[400px] relative"
              >
                <img
                  src={slide.image}
                  alt={slide.name}
                  className="w-full h-full object-cover rounded-lg"
                />
                {/* <div className="absolute inset-0 bg-black/50 text-white p-6 flex flex-col items-center justify-end">
                  <h2 className="text-2xl font-bold">{slide.name}</h2>
                </div> */}
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 p-2 bg-gray-800/50 text-white rounded-full"
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 p-2 bg-gray-800/50 text-white rounded-full"
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;
