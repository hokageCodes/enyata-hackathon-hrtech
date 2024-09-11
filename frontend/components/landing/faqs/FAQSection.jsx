import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqData = [
  { question: "What makes OnboardingPro different from other platforms?" },
  { question: "How secure is my data with OnboardingPro?" },
  { question: "Can OnboardingPro integrate with my existing HR tools?" },
  { question: "How do I track the progress of new hires?" },
  { question: "Is there customer support available?" },
  { question: "Can I customize the onboarding process for different roles?" },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="px-4 py-8 md:px-20 lg:px-40">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#2874F0] mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="border-b border-gray-200 cursor-pointer"
          >
            <div
              className="flex justify-between items-center py-4"
              onClick={() => toggleFAQ(index)}
            >
              <p className="text-lg text-gray-700 font-medium">
                {faq.question}
              </p>
              <motion.span
                className="text-[#2874F0] font-bold text-xl"
                animate={{ rotate: activeIndex === index ? 45 : 0 }}
              >
                +
              </motion.span>
            </div>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                className="overflow-hidden text-gray-600 text-base"
              >
                <p className="pb-4">
                  This is where the answer to the question will go. Customize
                  this text based on the specific FAQs you have.
                </p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
