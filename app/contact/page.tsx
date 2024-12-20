"use client";
import React from "react";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { z } from "zod";

const validationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  message: z.string().min(1, "Message is required"),
});

const ContactUsPage = () => {
  const handleSubmit = (values: any, { resetForm }: any) => {
    console.log("Form data submitted:", values);
    alert("Form submitted successfully!");
    resetForm();
  };
  return (
    <>
    <h1 className="text-center text-[3rem] mt-16 font-medium">Contact Us</h1>
    <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-10 mx-auto max-w-6xl py-10 px-5">
      {/* Left Section - Form */}
      <motion.div
        className="flex flex-col w-full lg:w-1/2 bg-white p-5 rounded-lg shadow-md"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-4">
          Get in touch. Fill the form.
        </h2>
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            message: "",
          }}
          validationSchema={toFormikValidationSchema(validationSchema)}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <Field
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <Field
                  type="text"
                  name="phone"
                  placeholder="Phone No"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <Field
                  as="textarea"
                  name="message"
                  rows="4"
                  placeholder="Message"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
      </motion.div>

      {/* Divider */}
      <div className="hidden lg:block w-[1px] bg-gray-300 h-full"></div>

      {/* Right Section - Contact Info */}
      <motion.div
        className="flex flex-col w-full lg:w-1/2 space-y-5"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="w-full h-64 rounded-lg overflow-hidden shadow-md"
          whileHover={{ scale: 1.03 }}
        >
          <iframe
            width="100%"
            height="270"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.636720758235!2d85.81634771159072!3d20.35662091044425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19093cc3e1974b%3A0x85a345e1f4fcce86!2sKIIT%20Student%20Activity%20Center%20-%20KSAC!5e0!3m2!1sen!2sin!4v1689966822541!5m2!1sen!2sin"
            allowFullScreen
            style={{ borderRadius: "30px" }}
          ></iframe>
        </motion.div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span>📞</span>
            <p className="text-lg font-medium">
              +91 798100504 <br /> +91 798100505
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <span>📍</span>
            <p className="text-lg font-medium">
              Sadguru Hospital Campus, Jagatpur, Cuttack, Odisha
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <span>📧</span>
            <p className="text-lg font-medium">sadguruhet2013@gmail.com</p>
          </div>
        </div>
      </motion.div>
    </div>
    </>
  );
};

export default ContactUsPage;
