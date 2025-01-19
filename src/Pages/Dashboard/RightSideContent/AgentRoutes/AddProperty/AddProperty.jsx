import React from 'react';
import { AiOutlineUpload } from 'react-icons/ai';

const AddProperty= () => {
  return (
    <div className="mx-auto my-10 p-6  rounded-lg shadow-md bg-white">
      <h1 className="text-4xl font-bold mb-6">Add Property</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="property-title" className="block font-medium mb-2">Property Title</label>
          <input
            type="text"
            id="property-title"
            name="property-title"
            placeholder="Enter property title"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="property-location" className="block font-medium mb-2">Property Location</label>
          <input
            type="text"
            id="property-location"
            name="property-location"
            placeholder="Enter property location"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="property-image" className="block font-medium mb-2">Property Image</label>
          <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer hover:bg-gray-50">
            <label htmlFor="property-image" className="flex flex-col items-center">
              <AiOutlineUpload size={24} className="text-gray-500 mb-2" />
              <span className="text-sm text-gray-600">Drop your images here, or <span className="text-blue-500 underline">Click to browse</span></span>
            </label>
            <input
              type="file"
              id="property-image"
              name="property-image"
              accept="image/*"
              className="hidden"
            />
          </div>
          <div className="mt-4">
              <img
                src={"imagePreview"}
                alt="Preview"
                className="w-full h-auto rounded-md border border-gray-300"
              />
            </div>
        </div>

        <div className="mb-4">
          <label htmlFor="agent-name" className="block font-medium mb-2">Agent Name</label>
          <input
            type="text"
            id="agent-name"
            name="agent-name"
            value="John Doe"
            readOnly
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="agent-email" className="block font-medium mb-2">Agent Email</label>
          <input
            type="email"
            id="agent-email"
            name="agent-email"
            value="johndoe@example.com"
            readOnly
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price-range" className="block font-medium mb-2">Price Range</label>
          <input
            type="text"
            id="price-range"
            name="price-range"
            placeholder="Enter price range"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add Property
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
