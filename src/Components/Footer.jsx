import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white p-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section: Logo & Testimonial */}
        <div className="flex flex-col items-start space-y-3">
          {/* Dot pattern logo */}
          <div className="w-full md:w-2/3">
            <img
              src="footerlogo.svg"
              alt="Mirambeena Motel"
              className="h-12 mx-auto mb-6"
            />
          </div>
          {/* Testimonial */}
          <p className="text-sm max-w-md leading-relaxeds mb-5">
            “Sara And I Absolutely Loved Our Stay At Motel Mirambeena! The
            Swimming Pool Was A Great Way To Unwind, The Dinner Was Fantastic”
          </p>
        </div>

        {/* Right Section: Navigation & Social Icons */}
        <div className="flex flex-col items-center space-y-8">
          {/* Navigation Bar */}
          <nav className="flex space-x-4 md:space-x-6 text-sm font-medium">
            <a href="/" className="hover:underline">
              Home
            </a>
            <a href="/facility" className="hover:underline">
              Facility
            </a>
            <a href="/gallery" className="hover:underline">
              Gallery
            </a>
            <a href="/careers" className="hover:underline">
              Careers
            </a>
            <a href="/contactus" className="hover:underline">
              Contact Us
            </a>
          </nav>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-white/50 w-full pt-4 text-center text-sm mt-6">
        Copyright 2023 © Mirambeena Motel. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
