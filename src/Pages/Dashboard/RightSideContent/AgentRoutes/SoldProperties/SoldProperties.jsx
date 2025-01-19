import React from 'react';

const SoldProperties = () => {
    const soldProperties = [
        {
          title: 'Luxury Apartment',
          location: 'Downtown, NY',
          buyerName: 'Jane Smith',
          buyerEmail: 'jane.smith@example.com',
          soldPrice: 600000,
        },
        // Add more sample sold properties as needed
      ];
  return (
    <div className="max-w-7xl mx-auto my-10 p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">My Sold Properties</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#C82021] text-white text-left">
              <th className="px-4 py-2">Property Title</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">Buyer Name</th>
              <th className="px-4 py-2">Buyer Email</th>
              <th className="px-4 py-2">Sold Price</th>
            </tr>
          </thead>
          <tbody>
            {soldProperties.map((property, index) => (
              <tr
                key={index}
                className={`$ {
                  index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                } hover:bg-gray-200 transition-colors duration-200`}
              >
                <td className="border px-4 py-2 font-medium">{property.title}</td>
                <td className="border px-4 py-2">{property.location}</td>
                <td className="border px-4 py-2">{property.buyerName}</td>
                <td className="border px-4 py-2">{property.buyerEmail}</td>
                <td className="border px-4 py-2 text-green-500 font-semibold">${property.soldPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SoldProperties;

// Sample usage

// <SoldProperties soldProperties={sampleSoldProperties} />
