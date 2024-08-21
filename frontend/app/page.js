import OurKeyFeatures from "@/components/landing/features/KeyFeatures";
import HeroSection from "@/components/landing/hero/HeroSection";
import HowItWorks from "@/components/landing/how-it-works/HowItWorks";
import Pricing from "@/components/landing/pricing/Pricing";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurKeyFeatures />
      <HowItWorks />
      <Pricing />
    </>
  );
}
