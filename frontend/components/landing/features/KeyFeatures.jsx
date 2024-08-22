"use client";
import React, { Suspense, lazy } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { FaCogs, FaUsersCog, FaChartLine, FaUserAlt, FaHandshake } from 'react-icons/fa';

// Lazy load the icon components if needed
const IconComponents = {
  FaCogs,
  FaUsersCog,
  FaChartLine,
  FaUserAlt,
  FaHandshake
};

// Define your values and placeholder values
const values = [
  {
    title: 'Streamlined Processes',
    description: 'Automate repetitive tasks to save time and reduce errors.',
    icon: 'FaCogs'
  },
  {
    title: 'Consistent Onboarding',
    description: 'Standardize procedures across departments for a seamless experience.',
    icon: 'FaUsersCog'
  },
  {
    title: 'Progress Tracking',
    description: 'Monitor new hires’ progress and ensure engagement with real-time updates.',
    icon: 'FaChartLine'
  },
  {
    title: 'Personalized Experience',
    description: 'Tailor onboarding content to individual needs for a more engaging experience.',
    icon: 'FaUserAlt'
  },
  {
    title: 'Enhanced Interaction',
    description: 'Facilitate early interaction with team members and mentors to build connections.',
    icon: 'FaHandshake'
  },
];

// Placeholder for skeleton loading
const PlaceholderCard = () => (
  <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
    <div className="relative h-full ml-0 mr-0 sm:mr-10">
      <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[#4F31D0] rounded-lg"></span>
      <div className="relative h-full p-5 bg-white border-2 border-[#4F31D0] rounded-lg">
        <div className="flex items-center -mt-1">
          <Skeleton circle height={48} width={48} />
          <div className="ml-3">
            <Skeleton width={150} />
            <div className="my-2 text-lg font-bold text-[#4F31D0]"></div>
          </div>
        </div>
        <p className="mt-3 mb-1 text-xs font-medium text-[#3A0CA3] uppercase">------------</p>
        <Skeleton count={3} />
      </div>
    </div>
  </div>
);

const FeatureCard = ({ title, description, Icon }) => (
  <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
    <div className="relative h-full ml-0 mr-0 sm:mr-10">
      <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[#4F31D0] rounded-lg"></span>
      <div className="relative h-full p-5 bg-white border-2 border-[#4F31D0] rounded-lg">
        <div className="flex items-center -mt-1">
          <Icon className="w-12 h-12 text-[#4F31D0]" />
          <h3 className="my-2 ml-3 text-lg font-bold text-[#4F31D0]">{title}</h3>
        </div>
        <p className="mt-3 mb-1 text-xs font-medium text-[#3A0CA3] uppercase">------------</p>
        <p className="mb-2 text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

export default function SharedValues() {
  return (
    <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
      <h2 className="mb-1 text-4xl font-bold leading-tight text-[#4F31D0] text-center">Our Key Features</h2>
      <p className="mb-12 text-lg text-gray-500 text-center">Here are a few of the core values that define our firm.</p>
      <div className="w-full">
        <div className="flex flex-col w-full mb-10 sm:flex-row">
          <Suspense fallback={<PlaceholderCard />}>
            {values.slice(0, 2).map((value, index) => {
              const Icon = IconComponents[value.icon];
              return (
                <FeatureCard
                  key={index}
                  title={value.title}
                  description={value.description}
                  Icon={Icon}
                />
              );
            })}
          </Suspense>
        </div>
        <div className="flex flex-col w-full mb-5 sm:flex-row">
          <Suspense fallback={<PlaceholderCard />}>
            {values.slice(2).map((value, index) => {
              const Icon = IconComponents[value.icon];
              return (
                <FeatureCard
                  key={index + 2}
                  title={value.title}
                  description={value.description}
                  Icon={Icon}
                />
              );
            })}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
