import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Icons for mobile menu
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        !event.target.closest(".menu-container") &&
        !event.target.closest(".menu-btn")
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-50 bg-[#ffffff] backdrop-blur-md text-[#FF7F3E] px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <img src="logo.svg" alt="Mirambeena Motel" className="h-10 w-auto" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 lg:space-x-10 text-sm uppercase">
        import {Link} from "react-router-dom";
        <Link to="/" className="hover:text-orange-400 transition">
          Home
        </Link>
        <Link to="/facility" className="hover:text-orange-400 transition">
          Facility
        </Link>
        <Link to="/gallery" className="hover:text-orange-400 transition">
          Gallery
        </Link>
        <Link to="/careers" className="hover:text-orange-400 transition">
          Careers
        </Link>
        <Link to="/contactus" className="hover:text-orange-400 transition">
          Contact Us
        </Link>
      </div>

      {/* Call Us Button (Desktop) */}
      <a href="tel:+61 422040662">
        <button className="hidden md:block bg-orange-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-orange-600 transition">
          Call Us
        </button>
      </a>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden menu-btn focus:outline-none z-50 relative"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`menu-container absolute top-16 left-0 w-full bg-[#ffffff] text-[#FF7F3E] p-6 shadow-lg transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-5"
        }`}
      >
        <Link
          to="/"
          className="block py-3 text-center hover:text-orange-400 transition"
        >
          Home
        </Link>
        <Link
          to="/facility"
          className="block py-3 text-center hover:text-orange-400 transition"
        >
          Facility
        </Link>
        <Link
          to="/gallery"
          className="block py-3 text-center hover:text-orange-400 transition"
        >
          Gallery
        </Link>
        <Link
          to="/careers"
          className="block py-3 text-center hover:text-orange-400 transition"
        >
          Careers
        </Link>
        <Link
          to="/contactus"
          className="block py-3 text-center hover:text-orange-400 transition"
        >
          Contact Us
        </Link>
        <button className="w-full bg-orange-500 py-2 mt-3 rounded-full text-white hover:bg-orange-600 transition">
          Call Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;