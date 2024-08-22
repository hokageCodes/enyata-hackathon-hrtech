"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";

const validationSchemas = [
  Yup.object({
    name: Yup.string().required("Required"),
    domain: Yup.string().url("Invalid URL").required("Required"),
  }),
  Yup.object({
    street: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    zip: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
  }),
  Yup.object({
    phone: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    website: Yup.string().url("Invalid URL").required("Required"),
  }),
  Yup.object({
    contactName: Yup.string().required("Required"),
    contactEmail: Yup.string().email("Invalid email").required("Required"),
    contactPhone: Yup.string().required("Required"),
  }),
];

const MultiStepForm = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep((currentStep) => currentStep + 1);
  };

  const prevStep = () => {
    setStep((currentStep) => currentStep - 1);
  };

  const handleSubmit = (values) => {
    console.log("Form Submitted", values);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-xl shadow-md">
        {/* Information Section */}
        <div className="flex-1 p-8 bg-gray-50 rounded-l-xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Business Information Form</h1>
          <p className="text-gray-600 mb-4">
            Welcome to the Business Information Form. This multi-step form is designed to collect comprehensive details about your business. Please follow the steps below to provide all the required information. You can navigate through the steps using the "Previous" and "Next" buttons.
          </p>
          <Stepper step={step} />
        </div>
        
        {/* Form Section */}
        <div className="flex-1 p-8">
          <Formik
            initialValues={{
              name: "",
              domain: "",
              street: "",
              city: "",
              state: "",
              zip: "",
              country: "",
              phone: "",
              email: "",
              website: "",
              contactName: "",
              contactEmail: "",
              contactPhone: "",
            }}
            validationSchema={validationSchemas[step]}
            onSubmit={(values, { setSubmitting }) => {
              console.log("Submitting Step:", step);
              console.log("Values:", values);

              if (step === validationSchemas.length - 1) {
                handleSubmit(values);
              } else {
                nextStep();
              }
              setSubmitting(false); // Reset submitting state
            }}
          >
            {({ isSubmitting, errors }) => (
              <Form>
                {step === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col space-y-6"
                  >
                    <h2 className="text-2xl font-bold text-blue-600">Business Information</h2>
                    <p className="text-gray-700 mb-4">
                      Please provide basic information about your business. This includes the business name and domain.
                    </p>
                    <div>
                      <Field
                        name="name"
                        type="text"
                        placeholder="Business Name"
                        className="p-2 border rounded-md w-full"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div>
                      <Field
                        name="domain"
                        type="text"
                        placeholder="Domain"
                        className="p-2 border rounded-md w-full"
                      />
                      <ErrorMessage
                        name="domain"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col space-y-6"
                  >
                    <h2 className="text-2xl font-bold text-blue-600">Address Details</h2>
                    <p className="text-gray-700 mb-4">
                      Please provide your business address. Make sure to include all relevant details to ensure accurate information.
                    </p>
                    <div>
                      <Field
                        name="street"
                        type="text"
                        placeholder="Street"
                        className="p-2 border rounded-md w-full"
                      />
                      <ErrorMessage
                        name="street"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div>
                      <Field
                        name="city"
                        type="text"
                        placeholder="City"
                        className="p-2 border rounded-md w-full"
                      />
                      <ErrorMessage
                        name="city"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div>
                      <Field
                        name="state"
                        type="text"
                        placeholder="State"
                        className="p-2 border rounded-md w-full"
                      />
                      <ErrorMessage
                        name="state"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div>
                      <Field
                        name="zip"
                        type="text"
                        placeholder="ZIP Code"
                        className="p-2 border rounded-md w-full"
                      />
                      <ErrorMessage
                        name="zip"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div>
                      <Field
                        name="country"
                        type="text"
                        placeholder="Country"
                        className="p-2 border rounded-md w-full"
                      />
                      <ErrorMessage
                        name="country"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col space-y-6"
                  >
                    <h2 className="text-2xl font-bold text-blue-600">Contact Details</h2>
                    <p className="text-gray-700 mb-4">
                      Provide your contact details, including phone number, email, and website. This information will be used for correspondence.
                    </p>
                    <div>
                      <Field
                        name="phone"
                        type="text"
                        placeholder="Phone"
                        className="p-2 border rounded-md w-full"
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div>
                      <Field
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="p-2 border rounded-md w-full"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div>
                      <Field
                        name="website"
                        type="text"
                        placeholder="Website"
                        className="p-2 border rounded-md w-full"
                      />
                      <ErrorMessage
                        name="website"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col space-y-6"
                  >
                    <h2 className="text-2xl font-bold text-blue-600">Contact Person</h2>
                    <p className="text-gray-700 mb-4">
                      Finally, provide the details of the contact person for your business. This will help us get in touch with the right person.
                    </p>
                    <div>
                      <Field
                        name="contactName"
                        type="text"
                        placeholder="Contact Person Name"
                        className="p-2 border rounded-md w-full"
                      />
                      <ErrorMessage
                        name="contactName"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div>
                      <Field
                        name="contactEmail"
                        type="email"
                        placeholder="Contact Person Email"
                        className="p-2 border rounded-md w-full"
                      />
                      <ErrorMessage
                        name="contactEmail"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div>
                      <Field
                        name="contactPhone"
                        type="text"
                        placeholder="Contact Person Phone"
                        className="p-2 border rounded-md w-full"
                      />
                      <ErrorMessage
                        name="contactPhone"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </motion.div>
                )}

                <div className="flex justify-between mt-8">
                  {step > 0 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-4 py-2 bg-gray-300 text-black rounded-md"
                    >
                      Previous
                    </button>
                  )}
                  {step < validationSchemas.length - 1 ? (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-4 py-2 bg-green-500 text-white rounded-md"
                    >
                      Submit
                    </button>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

function Stepper({ step }) {
  const steps = ["1", "2", "3", "4"];

  return (
    <div className="flex items-center justify-between mb-8">
      {steps.map((value, index) => (
        <div
          key={index}
          className={`w-10 h-10 flex items-center justify-center rounded-full ${
            step >= index
              ? "bg-blue-600 text-white"
              : "bg-gray-300 text-gray-500"
          }`}
        >
          {value}
        </div>
      ))}
    </div>
  );
}

export default MultiStepForm;
