import React, { useState, useEffect } from "react";

function Dining() {
  const images = ["d1.jpg", "d2.jpg", "d3.jpg"]; // Multiple images
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Function to open the PDF directly
  const openPDF = () => {
    window.location.href = "/menu.pdf"; // Opens PDF directly
  };

  return (
    <div className="bg-white text-gray-800">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <img
            src={images[currentImage]}
            alt="dining"
            className="w-full h-[60vh] md:h-screen object-cover transition-opacity duration-1000"
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

          {/* Menu Button (Right-Aligned) */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={openPDF}
              className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
            >
              Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dining;
