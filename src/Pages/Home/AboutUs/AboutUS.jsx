import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Left Section - Text Content */}
        <motion.div 
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 leading-snug">
            About <span className="text-[#C82021]">Us</span>
          </h2>
          <p className="mt-4 text-gray-600">
            At <span className="font-semibold">Key Nest</span>, we believe in simplifying property transactions while ensuring trust and transparency.  
            Whether you're buying, selling, or renting, we offer a seamless and hassle-free experience.
          </p>
          <p className="mt-4 text-gray-600">
            Our platform connects you with verified properties, experienced agents, and the latest market insights.  
            With a customer-first approach, we make your real estate journey easy and enjoyable.
          </p>
          <p className="mt-4 text-gray-600">
            Join thousands of happy homeowners and investors who have found success with us.  
            Let’s build your dream home together! 🏡
          </p>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div 
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img 
            src="https://plus.unsplash.com/premium_photo-1726797766978-11a0b18dc341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFwcHklMjBmYW1pbHklMjBpbiUyMGhvdXNlfGVufDB8fDB8fHww" 
            alt="About Us"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;
