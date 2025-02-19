import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
        <Helmet>
            <title>Privacy Policy || KeyNest</title>
        </Helmet>
      {/* Page Title and Intro */}
      <header className="bg-blue-600 text-center py-12">
        <h2 className="text-3xl font-semibold text-white">Privacy Policy</h2>
        <p className="mt-4 text-lg text-white">Your privacy is important to us. Read below to learn more about how we protect and use your data.</p>
      </header>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          {/* Left Sidebar (for Desktop) */}
          <div className="hidden md:block md:w-1/4 mb-8 md:mb-0">
            <ul className="space-y-4">
              <li><a href="#section-1" className="text-blue-600 hover:underline">1. Introduction</a></li>
              <li><a href="#section-2" className="text-blue-600 hover:underline">2. Data Collection</a></li>
              <li><a href="#section-3" className="text-blue-600 hover:underline">3. How We Use Data</a></li>
              <li><a href="#section-4" className="text-blue-600 hover:underline">4. User Rights</a></li>
              <li><a href="#section-5" className="text-blue-600 hover:underline">5. Security</a></li>
            </ul>
          </div>

          {/* Main Content Area */}
          <div className="w-full md:w-3/4">
            <div id="section-1" className="mb-6">
              <h3 className="text-2xl font-semibold text-blue-600">1. Introduction</h3>
              <p className="mt-2 text-lg text-gray-700">We are committed to safeguarding your privacy. This policy explains how we collect and use your personal data.</p>
            </div>

            <div id="section-2" className="mb-6">
              <h3 className="text-2xl font-semibold text-blue-600">2. Data Collection</h3>
              <button
                className="w-full text-left py-4 px-6 mt-4 bg-gray-100 text-lg font-semibold border-b"
                onClick={() => toggleSection(0)}
              >
                What Data We Collect
              </button>
              {activeIndex === 0 && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-700">We collect information such as your name, email, and payment details when you use our platform.</p>
                </div>
              )}
            </div>

            <div id="section-3" className="mb-6">
              <h3 className="text-2xl font-semibold text-blue-600">3. How We Use Data</h3>
              <button
                className="w-full text-left py-4 px-6 mt-4 bg-gray-100 text-lg font-semibold border-b"
                onClick={() => toggleSection(1)}
              >
                How Your Data Is Used
              </button>
              {activeIndex === 1 && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-700">We use your data to provide personalized recommendations and process transactions for the properties you are interested in.</p>
                </div>
              )}
            </div>

            <div id="section-4" className="mb-6">
              <h3 className="text-2xl font-semibold text-blue-600">4. User Rights</h3>
              <button
                className="w-full text-left py-4 px-6 mt-4 bg-gray-100 text-lg font-semibold border-b"
                onClick={() => toggleSection(2)}
              >
                Your Rights and Control Over Your Data
              </button>
              {activeIndex === 2 && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-700">You have the right to access, modify, or delete your personal data at any time by contacting us.</p>
                </div>
              )}
            </div>

            <div id="section-5" className="mb-6">
              <h3 className="text-2xl font-semibold text-blue-600">5. Security</h3>
              <button
                className="w-full text-left py-4 px-6 mt-4 bg-gray-100 text-lg font-semibold border-b"
                onClick={() => toggleSection(3)}
              >
                How We Protect Your Data
              </button>
              {activeIndex === 3 && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-700">We implement industry-standard encryption and security practices to protect your personal data from unauthorized access.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default PrivacyPolicy;
