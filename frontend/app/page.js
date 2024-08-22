import React from "react";
import OurKeyFeatures from "@/components/landing/features/KeyFeatures";
import HeroSection from "@/components/landing/hero/HeroSection";
import HowItWorks from "@/components/landing/how-it-works/HowItWorks";
import Pricing from "@/components/landing/pricing/Pricing";
import Image from "next/image";
import Footer from "@/components/landing/footer/Footer";
import Navbar from "@/components/landing/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OurKeyFeatures />
      <HowItWorks />
      <Pricing />
      <Footer />
    </>
  );
}
