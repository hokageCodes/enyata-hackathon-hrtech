import React from 'react';

const pricingPlans = [
  {
    plan: 'Basic',
    price: '$19/month',
    features: [
      'Access to core features',
      'Basic support',
      'Limited customization',
    ],
    cta: 'Get Started',
    icon: (
      <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 13h2v2h-2v-2zm0-8h2v6h-2V7z"/>
      </svg>
    ),
  },
  {
    plan: 'Pro',
    price: '$49/month',
    features: [
      'All Basic features',
      'Priority support',
      'Advanced customization',
    ],
    cta: 'Upgrade Now',
    icon: (
      <svg className="w-12 h-12 text-green-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 13h2v2h-2v-2zm0-8h2v6h-2V7z"/>
      </svg>
    ),
  },
  {
    plan: 'Enterprise',
    price: '$99/month',
    features: [
      'All Pro features',
      'Dedicated support',
      'Full customization',
      'API access',
    ],
    cta: 'Contact Us',
    icon: (
      <svg className="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 13h2v2h-2v-2zm0-8h2v6h-2V7z"/>
      </svg>
    ),
  },
];

const Pricing = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center mb-4">
                {plan.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{plan.plan}</h3>
              <p className="text-2xl font-bold mb-4">{plan.price}</p>
              <ul className="mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 15l-3-3 1.41-1.41L10 12.17l5.59-5.59L17 8l-7 7z"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
