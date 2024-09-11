"use client"
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#2874F0] py-6 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Brand and Copyright */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">OnboardingPro</h3>
          <p className="text-sm mt-2">© 2024 OnboardingPro. All rights reserved.</p>
        </div>

        {/* Social Icons */}
        <div className="flex mt-4 md:mt-0 space-x-4">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#"
            className="text-white hover:text-gray-200 transition"
          >
            <FaFacebookF />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#"
            className="text-white hover:text-gray-200 transition"
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#"
            className="text-white hover:text-gray-200 transition"
          >
            <FaLinkedinIn />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#"
            className="text-white hover:text-gray-200 transition"
          >
            <FaInstagram />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
