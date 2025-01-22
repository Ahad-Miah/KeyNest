import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import errorImg from '../../assets/error.png'

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <FaExclamationTriangle className="text-red-500 text-8xl mb-6 animate-pulse" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops! Something Went Wrong</h1>
        <p className="text-gray-600 text-lg text-center max-w-lg mb-6">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 bg-indigo-500 text-white font-medium rounded-md shadow-md hover:bg-indigo-600 transition duration-300"
        >
          Go Back
        </button>
      </div>
      <div className="mt-12">
        <img
          src={errorImg}
          alt="Error Illustration"
          className="w-full max-w-md object-contain mx-auto"
        />
      </div>
    </div>
  );
};

export default ErrorPage;