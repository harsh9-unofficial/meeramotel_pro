import React, { useState } from "react";
import { FaCalendarAlt, FaUser, FaChevronDown } from "react-icons/fa";

const Home = () => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState({ child: 1, adult: 1, room: 1 });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const updateGuests = (type, operation) => {
    setGuests((prev) => ({
      ...prev,
      [type]:
        operation === "increase" ? prev[type] + 1 : Math.max(1, prev[type] - 1),
    }));
  };

  // Handle Check-in Date Change
  const handleCheckInChange = (e) => {
    const newCheckInDate = e.target.value;
    setCheckInDate(newCheckInDate);

    // If check-out date is before check-in, reset check-out
    if (checkOutDate && newCheckInDate > checkOutDate) {
      setCheckOutDate(newCheckInDate);
    }
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('homescreen.svg')", // Change to your actual image path
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-10 lg:px-20">
        <h1
          className="text-2xl md:text-4xl lg:text-5xl font-light text-center"
          style={{ fontFamily: "kalam" }}
        >
          "YOUR PERFECT STAY AWAITS. BOOK <br /> NOW,
          <span
            className="text-orange-500 italic font-semibold"
            style={{ fontFamily: "Kalam, cursive" }}
          >
            {" "}
            ENJOY LATER!
          </span>
          "
        </h1>
        <p className="mt-4 text-sm md:text-lg text-gray-300 text-center">
          MOTEL WHICH HAS ACCOMMODATION, RESTAURANT AND FULLY LICENSED BAR
        </p>

        {/* Booking Search Component */}
        <div className="mt-14 flex justify-center px-4">
          {/* Search Button */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-lg text-lg h-14 w-full sm:w-60 md:w-52 cursor-pointer">
            <a
              href="https://book-directonline.com/properties/mirambeenamotel"
              target="_blank"
              rel="noopener noreferrer"
            >
              Search
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
