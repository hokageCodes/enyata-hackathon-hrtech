"use client";
import Image from 'next/image';
import PricingImg from '../../../assets/img/pricing.png';

const Pricing = () => {
  return (
    <section className="bg-[#2874F0] flex flex-col lg:flex-row items-center justify-center min-h-screen px-5 lg:px-20 py-10">
      {/* Left Text Container */}
      <div className="max-w-[500px] text-white space-y-5 lg:space-y-3 text-center lg:text-left mb-8 lg:mb-0 lg:mr-10">
        <h1 className="font-montserrat font-semibold text-[28px] lg:text-[36px] leading-[36px] lg:leading-[48px] tracking-tight"
          style={{ letterSpacing: '-1.2px' }}>
          Start Using OnboardingPro for Free
        </h1>
        <p className="font-montserrat text-[16px] lg:text-[19px] font-normal leading-[28px] lg:leading-[32px] tracking-tight"
          style={{ letterSpacing: '-0.2px' }}>
          Enjoy full access to all features at no cost. Sign up now—pricing
          plans will be introduced soon.
        </p>
        {/* Call-to-Action */}
        <button
          className="bg-white text-[#2874F0] font-montserrat font-semibold text-[16px] lg:text-[17px] px-5 py-3 rounded-full mx-auto lg:mx-0"
          style={{ letterSpacing: '-0.6px', width: '100%', maxWidth: '261px', height: 'auto' }}>
          Get started for free →
        </button>
        <p className="font-montserrat text-[12px] lg:text-[14px] font-medium leading-[20px]">
          Pricing plans will be introduced soon. No credit card required.
        </p>
      </div>

      {/* Right Image Container */}
      <div className="flex items-center justify-center">
        <Image
          src={PricingImg}
          alt="Schedule Preview"
          width={338}
          height={520}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default Pricing;
