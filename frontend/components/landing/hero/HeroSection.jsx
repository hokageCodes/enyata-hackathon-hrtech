"use client"
import React from "react";
import Image from "next/image";
import HeroImage from '../../../assets/img/heero.png';

const HeroSection = () => {
  return (
    <section className="py-12 lg:py-24 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between">
      <div className="lg:w-1/2 px-4 lg:px-6 text-center lg:text-left lg:ml-12">
        <h1 className="text-3xl lg:text-5xl font-bold text-[#4F31D0] mb-4">
          <span className="text-[#88A52A]">Elevate</span> Your Team's Onboarding Experience with <span className="text-[#88A52A]">OnboardingPro</span>
        </h1>
        <p className="text-lg lg:text-xl text-gray-700 mb-6">
          Simplify and enhance your employee integration process with our cutting-edge platform. Efficient, intuitive, and effective.
        </p>
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
          <a
            href="#register"
            className="bg-[#88A52A] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#8bb636] transition"
          >
            Get Started
          </a>
          <a
            href="#learn-more"
            className="bg-transparent text-[#4F31D0] border border-[#4F31D0] font-semibold py-3 px-6 rounded-lg hover:bg-[#7152F3] hover:text-white transition"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="lg:w-1/2 mt-8 lg:mt-0 px-4 flex justify-center lg:justify-end">
        <Image
          src={HeroImage}
          alt="Hero Visual"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
