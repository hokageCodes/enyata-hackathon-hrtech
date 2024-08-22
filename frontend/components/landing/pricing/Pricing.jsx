"use client";
import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const buttonVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, delay: 0.4 } },
};

const hoverVariants = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const PricingSection = () => {
  return (
    <section className="bg-[#7152F3] text-white py-12 lg:py-20">
      <div className="max-w-3xl mx-auto text-center px-6">
        <motion.h2
          className="text-3xl lg:text-4xl font-bold mb-4"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Start Using OnboardingPro for Free
        </motion.h2>
        <motion.p
          className="text-lg lg:text-xl mb-6"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Enjoy full access to all features at no cost. Sign up now—pricing plans will be introduced soon.
        </motion.p>
        <motion.a
          href="#"
          className="inline-block bg-white text-[#7152F3] font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          Get Started for Free
        </motion.a>
        <motion.div
          className="mt-8 text-sm text-gray-300"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p>Pricing plans will be introduced soon. No credit card required.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
