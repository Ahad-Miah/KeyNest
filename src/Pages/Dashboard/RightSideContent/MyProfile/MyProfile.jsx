import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaUser } from "react-icons/fa";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";

const MyProfile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-4xl p-6 md:flex">
        {/* Left Section: Profile Image */}
        <div className="flex justify-center md:w-1/3 mb-6 md:mb-0">
          <div className="relative">
            <img
              src="https://via.placeholder.com/150"
              alt="User"
              className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg"
            />
            <div className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full text-white shadow-md">
              <FaMapMarkerAlt size={24} />
            </div>
          </div>
        </div>

        {/* Right Section: User Information */}
        <div className="md:w-2/3 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">John Doe</h1>
          <p className="text-gray-600 text-lg mb-6">
            Role: <span className="text-blue-500 font-semibold">Admin</span>
          </p>

          {/* Contact Information */}
          <div className="space-y-4">
            <div className="flex items-center text-gray-700">
              <FaEnvelope className="mr-3 text-blue-500" size={20} />
              <span>johndoe@example.com</span>
            </div>
          </div>
          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            <button className="px-6 py-2 bg-gray-100 text-gray-800 font-medium rounded-lg shadow hover:bg-gray-200">
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
