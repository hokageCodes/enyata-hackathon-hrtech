import React from "react";
import OurKeyFeatures from "@/components/landing/features/KeyFeatures";
import HeroSection from "@/components/landing/hero/HeroSection";
import HowItWorks from "@/components/landing/how-it-works/HowItWorks";
import Pricing from "@/components/landing/pricing/Pricing";
import Image from "next/image";
import FAQsSection from "@/components/landing/faqs/FAQsSection";
import MultiStepForm from "@/components/landing/register/RegisterCompany";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurKeyFeatures />
      <HowItWorks />
      <Pricing />
      <FAQsSection />
      <MultiStepForm />
    </>
  );
}
