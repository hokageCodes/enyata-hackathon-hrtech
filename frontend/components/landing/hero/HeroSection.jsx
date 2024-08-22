"use client";
import React, { Suspense, lazy } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";
import HeroImage from '../../../assets/img/heero.png';

// Lazy load the Image component
const LazyImage = lazy(() => import("next/image"));

const HeroSection = () => {
  return (
    <section className="py-12 lg:py-24 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between">
      <div className="lg:w-1/2 px-4 lg:px-6 text-center lg:text-left lg:ml-12">
        <motion.h1
          className="text-3xl lg:text-5xl font-bold text-[#4F31D0] mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-[#88A52A]">Elevate</span> Your Team's Onboarding Experience with <span className="text-[#88A52A]">OnboardingPro</span>
        </motion.h1>
        <motion.p
          className="text-lg lg:text-xl text-gray-700 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          Simplify and enhance your employee integration process with our cutting-edge platform. Efficient, intuitive, and effective.
        </motion.p>
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
          <motion.a
            href="#register"
            className="bg-[#88A52A] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#8bb636] transition"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
          <motion.a
            href="#learn-more"
            className="bg-transparent text-[#4F31D0] border border-[#4F31D0] font-semibold py-3 px-6 rounded-lg hover:bg-[#7152F3] hover:text-white transition"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.a>
        </div>
      </div>
      <div className="lg:w-1/2 mt-8 lg:mt-0 px-4 flex justify-center lg:justify-end">
        <Suspense fallback={<Skeleton height={500} width={500} className="rounded-lg shadow-lg" />}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
          >
            <LazyImage
              src={HeroImage}
              alt="Hero Visual"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </Suspense>
      </div>
    </section>
  );
};

export default HeroSection;
