import React from 'react';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

const ManagePropertise = () => {

    const properties = [
        {
          id: 1,
          title: 'Luxury Apartment',
          location: 'Downtown, NY',
          agentName: 'John Doe',
          agentEmail: 'john.doe@example.com',
          minPrice: 500000,
          maxPrice: 700000,
        },
        // Add more sample properties as needed
      ];
  return (
    <div className="max-w-7xl mx-auto my-10 p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Manage Properties</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#e03535] text-white text-left">
              <th className="px-4 py-2">Property Title</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">Agent Name</th>
              <th className="px-4 py-2">Agent Email</th>
              <th className="px-4 py-2">Price Range</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property, index) => (
              <tr
                key={index}
                className={`$ {
                  index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                } hover:bg-gray-200 transition-colors duration-200`}
              >
                <td className="border px-4 py-2 font-medium">{property.title}</td>
                <td className="border px-4 py-2">{property.location}</td>
                <td className="border px-4 py-2">{property.agentName}</td>
                <td className="border px-4 py-2">{property.agentEmail}</td>
                <td className="border px-4 py-2 text-green-500 font-semibold">${property.minPrice} - ${property.maxPrice}</td>
                <td className="border px-4 py-2 flex space-x-2">
                  <button
                    className="flex items-center px-3 py-2 bg-green-500 text-white text-sm font-medium rounded-md hover:bg-green-600 transition-colors duration-300"
                  >
                    <AiOutlineCheck className="mr-2" /> Verify
                  </button>
                  <button
                    className="flex items-center px-3 py-2 bg-red-500 text-white text-sm font-medium rounded-md hover:bg-red-600 transition-colors duration-300"
                  >
                    <AiOutlineClose className="mr-2" /> Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagePropertise;

// Sample usage

// const handleVerify = (id) => alert(`Verified property with ID: ${id}`);
// const handleReject = (id) => alert(`Rejected property with ID: ${id}`);
// <AllProperties properties={sampleProperties} onVerify={handleVerify} onReject={handleReject} />
