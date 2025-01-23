import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import useAxiosSecure from '../../../../../hooks/useAxiosSecure/useAxiosSecure';
import { toast } from 'react-toastify';

const AdvertiseProperty = () => {

    const axiosSecure=useAxiosSecure();
        const { data: properties, refetch } = useQuery({
            queryKey: ['properties'],
            queryFn:async () => {
                const { data } =await axios.get(`${import.meta.env.VITE_API_URL}verifiedProperties`)
                return data;
            },
        })

        const handleAdvertise=(id)=>{
            
            axiosSecure.patch(`advertise/${id}`)
            .then(result=>{
                  if(result.data.acknowledged){
                    toast.success(`Advertise successfully`);
                }
                refetch();
                })
        }
  return (
    <div className="max-w-7xl mx-auto my-10 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">Advertise Property</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-200 shadow-lg">
          <thead className="bg-indigo-500 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Property Image</th>
              <th className="px-4 py-2 text-left">Property Title</th>
              <th className="px-4 py-2 text-left">Price Range</th>
              <th className="px-4 py-2 text-left">Agent Name</th>
              <th className="px-4 py-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {properties?.map((property, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-100 transition duration-300"
              >
                <td className="px-4 py-2">
                  <img
                    src={property?.image}
                    alt={property.title}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                </td>
                <td className="px-4 py-2 text-gray-800 font-medium">
                  {property?.title}
                </td>
                <td className="px-4 py-2 text-gray-600">${property?.price?.minPrice} - ${property?.price?.maxPrice}</td>
                <td className="px-4 py-2 text-gray-800">{property?.agentName}</td>
                <td className="px-4 py-2 text-center">
                  <button
                    onClick={() => handleAdvertise(property?._id)}
                    className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white font-medium rounded-md shadow-md hover:bg-blue-600 transition duration-300"
                  >
                    <AiOutlineCheckCircle className="mr-2" /> Advertise
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

export default AdvertiseProperty;