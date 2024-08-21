"use client"
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#7152F3] text-white text-center py-6">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold">OnboardingPro</h2>
            <p className="text-sm mt-1">&copy; {new Date().getFullYear()} OnboardingPro. All rights reserved.</p>
          </div>
          <ul className="flex flex-col md:flex-row md:space-x-8">
            <li>
              <a href="#home" className="block py-2 px-3 text-white hover:text-[#A3D139]">Home</a>
            </li>
            <li>
              <a href="#features" className="block py-2 px-3 text-white hover:text-[#A3D139]">Features</a>
            </li>
            <li>
              <a href="#pricing" className="block py-2 px-3 text-white hover:text-[#A3D139]">Pricing</a>
            </li>
            <li>
              <a href="#contact" className="block py-2 px-3 text-white hover:text-[#A3D139]">Contact</a>
            </li>
          </ul>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-white hover:text-[#A3D139]">
              <FaFacebookF />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-white hover:text-[#A3D139]">
              <FaTwitter />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-white hover:text-[#A3D139]">
              <FaLinkedinIn />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-white hover:text-[#A3D139]">
              <FaInstagram />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
