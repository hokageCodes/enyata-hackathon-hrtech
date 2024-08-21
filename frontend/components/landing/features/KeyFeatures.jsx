import React from 'react';
import { FaCogs, FaUsersCog, FaChartLine, FaUserAlt, FaHandshake } from 'react-icons/fa';

export default function SharedValues() {
  const values = [
    {
      title: 'Streamlined Processes',
      description: 'Automate repetitive tasks to save time and reduce errors.',
      icon: (
        <FaCogs className="w-12 h-12 text-[#5E60CE]" />
      ),
    },
    {
      title: 'Consistent Onboarding',
      description: 'Standardize procedures across departments for a seamless experience.',
      icon: (
        <FaUsersCog className="w-12 h-12 text-[#82D973]" />
      ),
    },
    {
      title: 'Progress Tracking',
      description: 'Monitor new hires’ progress and ensure engagement with real-time updates.',
      icon: (
        <FaChartLine className="w-12 h-12 text-[#FF7E79]" />
      ),
    },
    {
      title: 'Personalized Experience',
      description: 'Tailor onboarding content to individual needs for a more engaging experience.',
      icon: (
        <FaUserAlt className="w-12 h-12 text-[#B5179E]" />
      ),
    },
    {
      title: 'Enhanced Interaction',
      description: 'Facilitate early interaction with team members and mentors to build connections.',
      icon: (
        <FaHandshake className="w-12 h-12 text-[#4361EE]" />
      ),
    },
  ];

  return (
    <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
      <h2 className="mb-1 text-4xl font-bold leading-tight text-[#4F31D0]">Our Key Features</h2>
      <p className="mb-12 text-lg text-gray-500">Here are a few of the core values that define our firm.</p>
      <div className="w-full">
        <div className="flex flex-col w-full mb-10 sm:flex-row">
          {values.slice(0, 2).map((value, index) => (
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2" key={index}>
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[#88A52A] rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-[#88A52A] rounded-lg">
                  <div className="flex items-center -mt-1">
                    {value.icon}
                    <h3 className="my-2 ml-3 text-lg font-bold text-[#4F31D0]">{value.title}</h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-[#3A0CA3] uppercase">------------</p>
                  <p className="mb-2 text-gray-600">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-full mb-5 sm:flex-row">
          {values.slice(2).map((value, index) => (
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2" key={index + 2}>
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[#88A52A] rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-[#88A52A] rounded-lg">
                  <div className="flex items-center -mt-1">
                    {value.icon}
                    <h3 className="my-2 ml-3 text-lg font-bold text-[#4F31D0]">{value.title}</h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-[#3A0CA3] uppercase">------------</p>
                  <p className="mb-2 text-gray-600">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
