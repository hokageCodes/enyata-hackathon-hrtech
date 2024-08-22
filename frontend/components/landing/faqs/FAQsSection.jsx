"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What makes OnboardingPro different from other platforms?",
    answer:
      "OnboardingPro is designed with flexibility in mind. We offer customizable workflows, seamless integrations, and in-depth analytics, all in a user-friendly interface that makes onboarding efficient and effective.",
  },
  {
    question: "How secure is my data with OnboardingPro?",
    answer:
      "Your data security is our top priority. We employ industry-standard encryption, regular security audits, and compliance with data protection regulations to ensure your data is safe with us.",
  },
  {
    question: "Can OnboardingPro integrate with my existing HR tools?",
    answer:
      "Absolutely! OnboardingPro is built to integrate seamlessly with a variety of HR tools, including payroll systems, employee databases, and communication platforms.",
  },
  {
    question: "How do I track the progress of new hires?",
    answer:
      "Our platform offers real-time analytics and reporting features, allowing you to monitor the progress of new hires through every stage of the onboarding process.",
  },
  {
    question: "Is there customer support available?",
    answer:
      "Yes, we offer 24/7 customer support to assist you with any issues or questions you may have, ensuring your onboarding process runs smoothly.",
  },
  {
    question: "Can I customize the onboarding process for different roles?",
    answer:
      "OnboardingPro allows you to create role-specific onboarding workflows, ensuring each new hire receives the training and resources they need to succeed.",
  },
];

const FAQItem = ({ faq, index, activeIndex, onClick }) => (
  <div className="border-b border-gray-200 pb-4">
    <motion.div
      className="flex justify-between items-center cursor-pointer"
      onClick={() => onClick(index)}
      initial={false}
      animate={{
        backgroundColor: activeIndex === index ? "#F3F4F6" : "transparent",
      }}
      transition={{ duration: 0.2 }}
    >
      <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
      <motion.span
        className="ml-4 text-[#7152F3] font-bold"
        initial={{ rotate: 0 }}
        animate={{ rotate: activeIndex === index ? 90 : 0 }}
        transition={{ duration: 0.2 }}
      >
        +
      </motion.span>
    </motion.div>
    <motion.p
      className="mt-4 text-gray-600 text-sm lg:text-base"
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: activeIndex === index ? "auto" : 0, opacity: activeIndex === index ? 1 : 0 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {faq.answer}
    </motion.p>
  </div>
);

const FAQsSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#7152F3] mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              activeIndex={activeIndex}
              onClick={toggleFAQ}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
