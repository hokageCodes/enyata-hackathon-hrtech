import React from 'react';

const howItWorksSteps = [
  {
    step: 1,
    title: 'Sign Up',
    description: 'Create an account and set up your profile to get started.',
    icon: (
      <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c1.48 0 2.857.533 3.928 1.418l-7.786 7.786A9.973 9.973 0 0 1 12 2zm-8.328 1.423C6.134 4.271 8.017 6 10.328 6c.7 0 1.377-.147 2.009-.415L3.677 3.646A9.964 9.964 0 0 1 3.672 3.423zm13.895 1.645L15.82 8.71c.596-.394 1.145-.782 1.731-1.148l5.055 5.055c-1.476 3.596-5.017 6.144-9.275 6.144-2.825 0-5.462-1.075-7.47-2.849L11.562 13a9.968 9.968 0 0 0 5.17-2.689l-2.732-2.732a9.952 9.952 0 0 0 1.01-4.85zm-1.368 3.85L12.208 11.4a9.975 9.975 0 0 0 2.119 2.405L13.522 12.006c.72-.843 1.568-1.532 2.466-2.087z"/>
      </svg>
    ),
  },
  {
    step: 2,
    title: 'Customize',
    description: 'Personalize your onboarding experience according to your role and needs.',
    icon: (
      <svg className="w-12 h-12 text-green-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.333 6H4.667C3.42 6 2.333 7.09 2.333 8.333v7.333C2.333 17.91 3.42 19 4.667 19h14.666c1.247 0 2.333-1.09 2.333-2.333V8.333C21.666 7.09 20.58 6 19.333 6zm-8.542 8.708l-3.542-3.542 1.5-1.5 2.042 2.042 5.042-5.042 1.5 1.5-6.5 6.5zm-1.125-4.167l.917.917-.5.5-1.917-1.917.5-.5.5-.5zM6 13.5l-1.5-1.5.5-.5 1.5 1.5-.5.5zm11.667-3.833l-.5-.5-.917.917-.5-.5 1.417-1.417.5.5zm-.917 2.75l-3.5 3.5-1.5-1.5 3.5-3.5 1.5 1.5zm.583-2.083l-.5.5-2.5-2.5.5-.5 2.5 2.5z"/>
      </svg>
    ),
  },
  {
    step: 3,
    title: 'Engage',
    description: 'Interact with team members and complete your onboarding tasks.',
    icon: (
      <svg className="w-12 h-12 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
      </svg>
    ),
  },
  {
    step: 4,
    title: 'Provide Feedback',
    description: 'Share your feedback to help improve the onboarding experience.',
    icon: (
      <svg className="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 13h2v2h-2v-2zm0-8h2v6h-2V7z"/>
      </svg>
    ),
  },
  {
    step: 5,
    title: 'Get Started',
    description: 'Begin your journey with all the tools and information you need.',
    icon: (
      <svg className="w-12 h-12 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 13h2v2h-2v-2zm0-8h2v6h-2V7z"/>
      </svg>
    ),
  },
];

const HowItWorks = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {howItWorksSteps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">Step {step.step}: {step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
