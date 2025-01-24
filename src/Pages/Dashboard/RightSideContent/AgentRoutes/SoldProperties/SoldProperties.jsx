import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaDollarSign, FaTrophy } from 'react-icons/fa';
import { AuthContext } from '../../../../../Provider/AuthProvider/AuthProvider';
import useAxiosSecure from '../../../../../hooks/useAxiosSecure/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const SoldProperties = () => {
      const axiosSecure=useAxiosSecure();

  const {user}=useContext(AuthContext);
  const { data: soldProperties ,refetch} = useQuery({
    queryKey: ['soldProperties',user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`agentPropertysell/${user?.email}`)
      return data;
    },
  })
  const totalPrice=soldProperties?.reduce((sum,p)=>sum+p.soldPrice,0);
  return (
    <div className="max-w-7xl mx-auto my-10 p-4">
      <Helmet>
        <title>Sold Properties || KeyNest</title>
      </Helmet>
      <h1 className="text-2xl font-bold mb-6 text-center">My Sold Properties</h1>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl rounded-lg p-6 text-white w-full mb-4 mx-auto md:mx-0 md:w-1/3 lg:w-full">
      <div className="flex flex-col items-center text-center">
        <div className="bg-white text-indigo-600 rounded-full p-4 shadow-md mb-4">
          <FaTrophy className="text-4xl" />
        </div>
        <h3 className="text-xl font-semibold uppercase mb-2">Total Sold Amount</h3>
        <p className="text-3xl font-bold flex items-center gap-2">
          <FaDollarSign className="text-yellow-300" />
          {/* {totalAmount.toLocaleString()} BDT */}
          {totalPrice} BDT
        </p>
        <p className="mt-3 text-sm opacity-90">
          Keep up the excellent work! 🏆
        </p>
      </div>
    </div>
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
            {soldProperties?.map((property, index) => (
              <tr
                key={index}
                className={`$ {
                  index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                } hover:bg-gray-200 transition-colors duration-200`}
              >
                <td className="border px-4 py-2 font-medium">{property?.propertyTitle}</td>
                <td className="border px-4 py-2">{property?.propertyLocation}</td>
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
