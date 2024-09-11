"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Import skeleton styles
import HeroImage from '../../../assets/img/hero.png';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensure animation triggers only once when in view
    threshold: 0.2,    // Trigger when 20% of the section is visible
  });

  // Animation variants for Framer Motion
  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.2 } },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, delay: 0.4 } },
  };

  return (
    <section ref={ref} className="h-[100vh] w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center space-y-8">
        
        {/* Hero Heading */}
        <motion.div
          className="max-w-[595px] w-full space-y-5"
          variants={headingVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold leading-[38px] sm:leading-[50px] md:leading-[58px] tracking-[-1.8px] text-center font-montserrat">
            Your Team's{' '}
            <span className="text-[#FF7380]">Onboarding Experience</span>
          </h1>

          <p className="text-[16px] sm:text-[18px] md:text-[19px] font-semibold leading-[24px] sm:leading-[28px] md:leading-[32px] tracking-[-0.2px] text-center text-gray-700 font-montserrat">
            Simplify and enhance your employee integration process with our
            cutting-edge platform. Efficient, intuitive, and effective.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center sm:space-x-4 space-y-4 sm:space-y-0"
          variants={buttonVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <a
            href="/get-started"
            className="bg-blue-500 text-white px-6 py-3 md:px-8 md:py-3 rounded-full font-semibold text-[16px] leading-none hover:bg-blue-600 transition font-montserrat w-full sm:w-auto text-center"
          >
            Get started for free
          </a>

          <a
            href="/learn-more"
            className="border border-blue-500 text-blue-500 px-6 py-3 md:px-8 md:py-3 rounded-full font-semibold text-[16px] leading-none hover:bg-blue-100 transition font-montserrat w-full sm:w-auto text-center"
          >
            Learn more
          </a>
        </motion.div>

        {/* Hero Image (After Buttons) */}
        <motion.div
          className="mt-6"
          variants={imageVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Skeleton loading for image */}
          {!imageLoaded && (
            <Skeleton
              width={864}
              height={653}
              className="object-contain rounded-[24px_0_0_0] border-0"
            />
          )}

          {/* Lazy load image */}
          <Image
            src={HeroImage}
            alt="Hero Image"
            width={864}
            height={653}
            className="object-contain rounded-[24px_0_0_0] border-0"
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
