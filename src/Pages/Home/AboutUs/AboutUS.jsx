import React from 'react';
import { FaUsers, FaBuilding, FaHandshake } from "react-icons/fa";
const AboutUS = () => {
    return (
        <section className="py-12 bg-gray-50">
            <div className="mx-auto px-4 lg:px-8">
                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">
                        About <span className="text-[#C82021]">Us</span>
                    </h2>
                    <p className="mt-4 text-gray-600">
                        Learn more about our mission, values, and the services we provide.
                        We strive to help you find your dream property with ease and trust.
                    </p>
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-4">
                            <FaUsers className="text-blue-600 text-3xl" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Who We Are
                        </h3>
                        <p className="text-gray-600 text-center">
                            We are a team of dedicated professionals passionate about
                            connecting people to their dream properties.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mb-4">
                            <FaBuilding className="text-green-600 text-3xl" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Our Mission
                        </h3>
                        <p className="text-gray-600 text-center">
                            Our mission is to simplify property transactions and provide
                            the best services to property buyers, sellers, and renters.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-full mb-4">
                            <FaHandshake className="text-yellow-600 text-3xl" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Why Choose Us
                        </h3>
                        <p className="text-gray-600 text-center">
                            Trusted by thousands of customers for our reliable, transparent,
                            and efficient services in the real estate industry.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUS;