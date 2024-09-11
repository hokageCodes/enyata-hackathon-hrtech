import React from 'react';
import { FaCogs, FaUsersCog, FaChartLine, FaHandshake } from 'react-icons/fa';

export default function SharedValues() {
  const values = [
    {
      title: 'Streamlined Processes',
      description: 'Automate repetitive tasks to save time and reduce errors.',
      icon: <FaCogs className="w-12 h-12 text-white" />,
    },
    {
      title: 'Consistent Onboarding',
      description: 'Standardize procedures across departments for a seamless experience.',
      icon: <FaUsersCog className="w-12 h-12 text-white" />,
    },
    {
      title: 'Progress Tracking',
      description: 'Monitor new hires’ progress and ensure engagement with real-time updates.',
      icon: <FaChartLine className="w-12 h-12 text-white" />,
    },
    {
      title: 'Enhanced Interaction',
      description: 'Facilitate early interaction with team members and mentors to build connections.',
      icon: <FaHandshake className="w-12 h-12 text-white" />,
    },
  ];

  return (
    <div className="container flex flex-col justify-between h-full max-w-6xl px-4 py-16 mx-auto xl:px-0 sm:py-64">
      <h2 className="mb-1 text-3xl sm:text-4xl font-bold leading-tight text-black text-center">Our Key Features</h2>
      <p className="mb-12 text-lg text-black text-center">Here are a few of the core values that define our firm.</p>

      <div className="space-y-10">
        {/* First Row */}
        <div className="flex flex-col sm:flex-row w-full space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="w-full sm:w-2/3 h-[280px] p-[40px] bg-[#2874F0] rounded-[16px] flex items-center space-x-4 
                          transform transition-transform duration-700 ease-out translate-y-8 delay-200 animate-fadeInUp">
            {values[0].icon}
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-bold text-white">{values[0].title}</h3>
              <p className="text-white">{values[0].description}</p>
            </div>
          </div>

          <div className="w-full sm:w-1/3 h-[280px] p-[40px] bg-[#2874F0] rounded-[16px] flex items-center space-x-4
                          transform transition-transform duration-700 ease-out translate-y-8 delay-300 animate-fadeInUp">
            {values[1].icon}
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-bold text-white">{values[1].title}</h3>
              <p className="text-white">{values[1].description}</p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col sm:flex-row w-full space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="w-full sm:w-1/3 h-[280px] p-[40px] bg-[#2874F0] rounded-[16px] flex items-center space-x-4 
                          transform transition-transform duration-700 ease-out translate-y-8 delay-400 animate-fadeInUp">
            {values[2].icon}
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-bold text-white">{values[2].title}</h3>
              <p className="text-white">{values[2].description}</p>
            </div>
          </div>

          <div className="w-full sm:w-2/3 h-[280px] p-[40px] bg-[#2874F0] rounded-[16px] flex items-center space-x-4 
                          transform transition-transform duration-700 ease-out translate-y-8 delay-500 animate-fadeInUp">
            {values[3].icon}
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-bold text-white">{values[3].title}</h3>
              <p className="text-white">{values[3].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
