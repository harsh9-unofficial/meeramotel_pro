import React, { useEffect, useRef } from "react";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Olivia",
      rating: 5,
      text: "This cozy, sustainable boutique motel showcases retro design with modern wellness touches, including recycled vintage breeze blocks and a gelato color palette.",
      image: "sara.svg",
    },
    {
      id: 2,
      name: "James",
      rating: 5,
      text: "A refurbished classic Queenslander featuring, an in-house Thai restaurant, the Laneway cocktail bar, free Wi-Fi, and a pool and spa.",
      image: "test.svg",
    },
    {
      id: 3,
      name: "Rose",
      rating: 5,
      text: "A boutique motel offering 12 stylish rooms, just minutes away from local bakeries, an old cinema, and river swimming spots. ",
      image: "test2.svg",
    },
    {
      id: 4,
      name: "Wilson",
      rating: 5,
      text: "We Had An Amazing Time At Motel Mirambeena in Australia! John And I Were Impressed By The Beautiful Natural Environment, The Refreshing Swimming Pool, And The Delicious Dinner Options. The Rooms Were Cozy And Made Our Stay Truly Memorable.",
      image: "test3.svg",
    },
    {
      id: 5,
      name: "Noah",
      rating: 5,
      text: "Features an Italianate double-story design with poolside cabanas, a mini gym, and the on-site bar/restaurant La Costa Cantina.",
      image: "test4.svg",
    },
    {
      id: 6,
      name: "Smith",
      rating: 5,
      text: "positive experiences regarding cleanliness, comfort, location, and the friendliness of the staff at this motels.",
      image: "test5.svg",
    },
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (scrollContainer) {
        scrollAmount += 1;
        scrollContainer.scrollLeft = scrollAmount;

        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
          scrollContainer.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="text-center mb-10">
        <h2
          className="text-[#000000] uppercase mb-2"
          style={{ fontFamily: "inter" }}
        >
          TESTIMONIALS
        </h2>
        <h3
          className="text-4xl lg:text-5xl font-indie-flower text-black mb-4"
          style={{ fontFamily: "Kalam, cursive" }}
        >
          Enjoy the{" "}
          <span
            className="text-orange-500"
            style={{ fontFamily: "Kalam, cursive" }}
          >
            SAY
          </span>
          ?
        </h3>
      </div>

      <div
        ref={scrollRef}
        className=" h-[500px] flex space-x-6 overflow-hidden "
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="bg-yellow-50 p-4 rounded-lg shadow-md min-w-[300px] max-w-[300px] h-[400px] flex flex-col justify-between overflow-visible"
          >
            <div className="flex mb-2">
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="text-gray-700 whitespace-normal break-words overflow-hidden text-justify">
              {testimonial.text}
            </p>

            <div className="flex items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <span className="font-semibold text-gray-900">
                {testimonial.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
