"use client";
import Image from 'next/image';
import React from 'react';
import Work from '../../../assets/img/works.png'; // Update this with the correct path to your uploaded image

export default function DashboardSection() {
  return (
    <div className="flex flex-col justify-center py-20 bg-gray-100 lg:mt-[-200px] mt-[-100px]">
      {/* Heading and Subheading */}
      <div className="text-center mb-10 px-4 lg:px-0">
        <h2 className="text-[#2874F0] text-3xl lg:text-4xl font-bold mb-5">How It Works</h2>
        <p className="text-[#2874F0] text-lg lg:text-xl opacity-70">
          With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
        </p>
      </div>

      {/* Image and Content Section */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-5 lg:px-10">
        
        {/* Left Section - Image */}
        <div className="relative flex justify-center lg:order-1 order-2">
          <div className="relative w-full h-[250px] lg:h-[413.37px] opacity-80 transform transition-transform duration-700 ease-in-out hover:scale-105">
            <Image 
              src={Work} 
              alt="Dashboard Overview"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg" 
            />
          </div>
        </div>

        {/* Right Section - Numbered List */}
        <div className="flex flex-col justify-center space-y-6 lg:order-2 order-1">
          <ul className="space-y-6 animate-fadeInUp">
            {[
              { num: 1, title: 'Sign Up', description: 'Create an account and set up your profile to get started.' },
              { num: 2, title: 'Customize', description: 'Personalize your onboarding experience.' },
              { num: 3, title: 'Engage', description: 'Interact with team members and complete tasks.' },
              { num: 4, title: 'Provide Feedback', description: 'Share your feedback to improve the experience.' },
              { num: 5, title: 'Get Started', description: 'Begin your journey with the tools and info you need.' }
            ].map((item, index) => (
              <li key={item.num} className={`flex items-start space-x-4 transition-opacity duration-500 ease-out delay-${index * 200}`}>
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#2874F0] flex justify-center items-center rounded-full text-white text-lg font-semibold">
                  {item.num}
                </div>
                <div>
                  <p className="text-lg lg:text-xl text-[#2874F0] font-bold">{item.title}</p>
                  <p className="text-[#2874F0] opacity-70 text-sm lg:text-base">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
