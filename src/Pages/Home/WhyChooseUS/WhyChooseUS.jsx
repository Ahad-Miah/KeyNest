import React from 'react';
import { FaRegCheckCircle, FaStar, FaShieldAlt, FaHeadset } from "react-icons/fa";

const features = [
  {
    icon: <FaRegCheckCircle className="text-4xl text-blue-600" />,
    title: "Verified Properties",
    description: "All properties listed are verified to ensure authenticity and reliability.",
  },
  {
    icon: <FaStar className="text-4xl text-yellow-500" />,
    title: "Top Rated Agents",
    description: "Work with highly rated professionals for a seamless experience.",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-green-600" />,
    title: "Secure Transactions",
    description: "We ensure safe and secure transactions for every deal.",
  },
  {
    icon: <FaHeadset className="text-4xl text-purple-600" />,
    title: "24/7 Customer Support",
    description: "Get assistance anytime with our dedicated customer support team.",
  },
];

const WhyChooseUS = () => {
    return (
        <section className="bg-gray-50 py-16 px-6 md:px-10">
      <div className="Container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Why Choose <span className="text-[#C82021]">Key Nest?</span>
        </h2>
        <p className="text-gray-600 mb-10">
          Discover why thousands of users trust us for their property needs.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 text-center transition-all hover:shadow-2xl"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default WhyChooseUS;