"use client";
import { useState } from "react";
import Image from "next/image"; // Next.js Image component
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import Logo from '../../../assets/svgs/logop.svg'; // Logo import

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu on click
  };

  return (
    <nav className="w-full bg-gray-100 shadow-md">
      <div className="max-w-[1240px] h-[80px] mx-auto px-4 flex justify-between items-center rounded-tl-[100px]">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          {/* Display logo only on mobile */}
          <div className="md:hidden">
            <Image
              src={Logo}
              alt="OnboardingPro Logo"
              width={36}
              height={35.16}
              className="block"
            />
          </div>

          {/* Display logo and text on desktop */}
          <div className="hidden md:flex items-center gap-2">
            <Image
              src={Logo}
              alt="OnboardingPro Logo"
              width={36}
              height={35.16}
              className="block"
            />
            <span className="text-[24px] font-syne font-semibold leading-[32px] text-left text-blue-500">
              OnboardingPro
            </span>
          </div>
        </div>

        {/* Navigation Links (Desktop only) */}
        <ul className="hidden md:flex space-x-8">
          {["Home", "Features", "How It Works", "Pricing", "FAQ", "Contact"].map((item) => (
            <li
              key={item}
              onClick={() => setActiveLink(item)}
              className={`font-montserrat text-[16px] font-semibold leading-[24px] text-left cursor-pointer ${
                activeLink === item ? "text-blue-700" : "text-blue-500"
              } transition duration-300 hover:text-blue-700`}
            >
              <a href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* CTA Button (Desktop only) */}
        <div className="hidden md:flex">
          <a
            href="/get-started"
            className="bg-blue-500 text-white h-[56px] px-6 flex items-center gap-2 rounded-[100px] hover:bg-blue-600 transition"
          >
            <span className="text-sm font-semibold leading-none">Get started for free</span>
            <FiArrowRight className="h-5 w-5" />
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={handleMenuToggle} className="text-blue-500 focus:outline-none">
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden bg-gray-100 shadow-md space-y-4 mt-4 py-4 px-6">
          {["Home", "Features", "How It Works", "Pricing", "FAQ", "Contact"].map((item) => (
            <li
              key={item}
              onClick={() => {
                setActiveLink(item);
                setIsMenuOpen(false); // Close menu on link click
              }}
              className={`font-montserrat text-[16px] font-semibold leading-[24px] cursor-pointer ${
                activeLink === item ? "text-blue-700" : "text-blue-500"
              } transition duration-300 hover:text-blue-700`}
            >
              <a href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}>{item}</a>
            </li>
          ))}
          <li>
            <a
              href="/get-started"
              className="bg-blue-500 text-white h-[56px] px-6 flex items-center gap-2 rounded-[100px] hover:bg-blue-600 transition"
            >
              <span className="text-sm font-semibold leading-none">Get started for free</span>
              <FiArrowRight className="h-5 w-5" />
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
