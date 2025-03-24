import React, { useState, useEffect, useRef } from "react";

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
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  // Preload images when the component mounts
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === slides.length) {
        setIsTransitioning(false);
        setCurrentIndex(0);
        setTimeout(() => setIsTransitioning(true), 50);
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="overflow-hidden relative">
          <div
            ref={sliderRef}
            className={`flex ${
              isTransitioning
                ? "transition-transform duration-1000 ease-in-out"
                : ""
            }`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2 relative">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={slide.image}
                    alt={slide.name}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;
