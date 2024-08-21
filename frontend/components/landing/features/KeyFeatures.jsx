import React from 'react';

const features = [
  {
    title: 'Streamlined Processes',
    description: 'Automate repetitive tasks to save time and reduce errors.',
    icon: (
      <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 3h4v4h-4V3zm0 8h4v4h-4v-4zM3 10h4v4H3v-4zm0 8h4v4H3v-4zm14 0h4v4h-4v-4zm0-8h4v4h-4v-4z"/>
      </svg>
    ),
  },
  {
    title: 'Consistent Onboarding',
    description: 'Standardize procedures across departments for a seamless experience.',
    icon: (
      <svg className="w-12 h-12 text-green-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M5 5h14v14H5V5zm7 7h2v2h-2v-2zm0-4h2v2h-2V8z"/>
      </svg>
    ),
  },
  {
    title: 'Progress Tracking',
    description: 'Monitor new hires’ progress and ensure engagement with real-time updates.',
    icon: (
      <svg className="w-12 h-12 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
      </svg>
    ),
  },
  {
    title: 'Personalized Experience',
    description: 'Tailor onboarding content to individual needs for a more engaging experience.',
    icon: (
      <svg className="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
      </svg>
    ),
  },
  {
    title: 'Enhanced Interaction',
    description: 'Facilitate early interaction with team members and mentors to build connections.',
    icon: (
      <svg className="w-12 h-12 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
      </svg>
    ),
  },
];

const KeyFeatures = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
