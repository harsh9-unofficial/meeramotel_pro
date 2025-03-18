import React, { useState } from "react";

const DiscoverRooms = () => {
  const [selectedRoom, setSelectedRoom] = useState("Units");
  const [imageSrc, setImageSrc] = useState("room.svg"); // ✅ Declare imageSrc state

  const rooms = [
    {
      name: "Units",
      image: "room.svg",
    },
    {
      name: "Ensuite",
      image: "room2.svg",
    },
    {
      name: "Restroom",
      image: "room3.svg",
    },
  ];

  const handleRoomClick = (room) => {
    setSelectedRoom(room.name);
    setImageSrc(room.image); // ✅ Update imageSrc when clicking a button
  };

  return (
    <div className="py-12 pr-6 md:pr-12 bg-[#F1EFE1] ">
      <div className="max-w-7xl mx-auto text-left md:pl-12 pl-6">
        <h2 className="text-sm text-[#000000] " style={{ fontFamily: "inter" }}>
          DISCOVER ROOMS
        </h2>
        <h1
          className="text-4xl mt-2 font-shadows-into-light"
          style={{ fontFamily: "Kalam, cursive" }}
        >
          RELAXED{" "}
          <span
            className="text-orange-500"
            style={{ fontFamily: "Kalam, cursive" }}
          >
            ATMOSPHERE
          </span>{" "}
          FOR YOU
        </h1>
        <p className="mt-4 text-[#888888] mb-2.5 text-justify">
          We specialize in short and long stays for contractors in and around
          Whyalla. Accommodation for large or small groups of working men and
          women, day shifters, night shifters. Our clients rave about us due to
          the one thing that makes us the best Whyalla motel.
        </p>
      </div>
      <div
        className="top-4 left-2 sm:top-8 sm:left-4 md:top-12 md:left-6 lg:top-16 lg:left-10 
             bg-orange-500 text-white font-semibold text-xs sm:text-sm md:text-base 
             flex flex-col items-center justify-center rounded-full 
             w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-b-none ml-6"
      >
        <span className="text-sm sm:text-base md:text-lg font-bold">45+</span>
        <span className="text-[8px] sm:text-xs md:text-sm">ROOM</span>
      </div>

      <div className="flex flex-col lg:flex-row items-center">
        <div className="relative lg:w-1/2">
          <img
            src={imageSrc} // ✅ Use dynamic state for image source
            alt="Selected Room"
            className="rounded-lg rounded-l-none w-full"
          />

          <div className="sm:absolute bottom-4 left-4 flex items-center gap-1 bg-white rounded-full px-1 text-xs sm:text-sm sm:gap-1 overflow-hidden max-w-fit py-1 my-2">
            {rooms.map((room) => (
              <button
                key={room.name}
                onClick={() => handleRoomClick(room)}
                className={`px-4 py-2 text-sm sm:text-base rounded-full transition-all duration-300  ${
                  selectedRoom === room.name
                    ? "bg-orange-500 text-white"
                    : "text-gray-700 hover:bg-orange-100 hover:text-orange-500"
                }`}
              >
                {room.name}
              </button>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-12 mt-5 lg:mt-0 ml-6">
          <h2
            className="text-2xl text-orange-500 font-shadows-into-light"
            style={{ fontFamily: "Kalam, cursive" }}
          >
            WHYALLA ACCOMMODATION
          </h2>
          <p className="mt-4 text-[#888888] text-justify">
            We specialize in short and long stays for contractors in and around
            Whyalla. Accommodation for large or small groups of working men and
            women, day shifters, night shifters. Our clients rave about us due
            to the one thing that makes us the best Whyalla motel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscoverRooms;
