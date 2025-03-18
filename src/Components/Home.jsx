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
          <div className="bg-[#F1EFE1] p-2 rounded-lg flex flex-wrap gap-2 w-full max-w-4xl justify-center">
            {/* Check-in Field */}
            <div className="relative flex items-center bg-white p-3 rounded-lg h-14 w-full sm:w-60 md:w-52 text-[#888888]">
              <input
                type="date"
                value={checkInDate}
                onChange={handleCheckInChange}
                className="w-full bg-transparent focus:outline-none text-gray-700"
                min={new Date().toISOString().split("T")[0]} // Prevent past dates
              />
            </div>

            {/* Check-out Field */}
            <div className="relative flex items-center bg-white p-3 rounded-lg h-14 w-full sm:w-60 md:w-52 text-[#888888]">
              <input
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                className="w-full bg-transparent focus:outline-none text-gray-700"
                min={checkInDate || new Date().toISOString().split("T")[0]} // Prevent past and invalid dates
              />
            </div>

            {/* Guests Dropdown */}
            <div className="relative h-14 w-full sm:w-60 md:w-52">
              <div
                className="flex items-center justify-between bg-white p-3 rounded-lg cursor-pointer h-full"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className="text-[#888888]">
                  {guests.adult + guests.child} Person
                </span>
                <div className="flex items-center space-x-2">
                  <FaChevronDown className="text-gray-500" />
                  <FaUser className="text-gray-500" />
                </div>
              </div>

              {/* Dropdown Menu */}
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 mt-3 bg-[#F1EFE1] text-[#888888] rounded-lg shadow-lg p-2 space-y-2 w-48 transition-all duration-300 ${
                  isDropdownOpen
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                {["child", "adult", "room"].map((type) => (
                  <div
                    key={type}
                    className="flex justify-between items-center bg-gray-100 p-2 rounded-lg"
                  >
                    <span className="capitalize">{type}</span>
                    <div className="flex items-center space-x-2">
                      <button
                        className="p-1 bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center"
                        onClick={() => updateGuests(type, "increase")}
                      >
                        +
                      </button>
                      <span>{guests[type]}</span>
                      <button
                        className="p-1 bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center"
                        onClick={() => updateGuests(type, "decrease")}
                      >
                        -
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Search Button */}
            <button className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-lg text-lg h-14 w-full sm:w-60 md:w-52">
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
      </div>
    </section>
  );
};

export default Home;
