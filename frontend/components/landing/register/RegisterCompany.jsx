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
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-xl">
        <div className="mb-8">
          <Stepper step={step} />
        </div>
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
                  className="flex flex-col space-y-4"
                >
                  <h2 className="text-2xl font-bold">Business Information</h2>
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
                  className="flex flex-col space-y-4"
                >
                  <h2 className="text-2xl font-bold">Address</h2>
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
                  className="flex flex-col space-y-4"
                >
                  <h2 className="text-2xl font-bold">Contact Details</h2>
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
                  className="flex flex-col space-y-4"
                >
                  <h2 className="text-2xl font-bold">Contact Person</h2>
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
              ? "bg-black text-white"
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
