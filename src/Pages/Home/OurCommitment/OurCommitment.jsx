import React from "react";
import { FaFlagCheckered, FaUsers, FaHome, FaRegHandshake } from "react-icons/fa";
import { motion } from "framer-motion";

const milestones = [
  {
    icon: <FaUsers className="text-white text-2xl" />, 
    title: "Our Beginning", 
    description: "Started with a vision to simplify property transactions.",
  },
  {
    icon: <FaHome className="text-white text-2xl" />, 
    title: "Trusted by Many", 
    description: "Helping thousands find their dream homes with ease.",
  },
  {
    icon: <FaRegHandshake className="text-white text-2xl" />, 
    title: "Building Relationships", 
    description: "Fostering trust and transparency in real estate.",
  },
  {
    icon: <FaFlagCheckered className="text-white text-2xl" />, 
    title: "Future Goals", 
    description: "Expanding our reach to serve more homeowners worldwide.",
  },
];

const OurCommitment = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Our <span className="text-[#C82021]">Commitment</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A journey of trust, transparency, and excellence in real estate.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="flex flex-col items-center text-center md:w-1/4"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-[#C82021] rounded-full shadow-lg mb-4">
                {milestone.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{milestone.title}</h3>
              <p className="text-gray-600 mt-2">{milestone.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCommitment;
