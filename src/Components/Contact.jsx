import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#F1EFE1] flex items-center justify-center md:p-12 p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src="form.svg" // Replace with the actual image URL
            alt="Fireplace with pizza"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Right Contact Form Section */}
        <div className="w-full md:w-1/2 md:pl-10">
          <h2
            className="text-[#000000] uppercase mb-2"
            style={{ fontFamily: "inter" }}
          >
            CONTACT US
          </h2>
          <h3
            className="text-4xl lg:text-5xl font-indie-flower text-orange-500 mb-4"
            style={{ fontFamily: "Kalam, cursive" }}
          >
            GIVE{" "}
            <span
              className="text-[#000000]"
              style={{ fontFamily: "Kalam, cursive" }}
            >
              YOUR FEEDBACK
            </span>{" "}
          </h3>
          <p className="text-[#888888] mb-6">
            We specialize in short and long stays for contractors in and around
            Whyalla. Accommodation for large or small groups of working men and
            women, day shifters, night shifters. Our clients rave about us due
            to the one thing that makes us the best Whyalla motel!
          </p>

          {/* Contact Form */}
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-[#888888] border-[#B2B2B2]"
              />
              <input
                type="email"
                placeholder="Email ID"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-[#888888] border-[#B2B2B2]"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-[#888888] border-[#B2B2B2]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-[#888888] border-[#B2B2B2]"
            />
            <textarea
              placeholder="Message"
              className="w-full p-2 border rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500 text-[#888888] border-[#B2B2B2]"
            ></textarea>
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
