import React from 'react';
import banner1 from '../../../assets/bi2.avif'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Advertise = () => {
    const { data: properties ,refetch} = useQuery({
        queryKey: ['properties'],
        queryFn: async () => {
          const { data } = await axios.get(`${import.meta.env.VITE_API_URL}advertiseProperty`)
          return data;
        },
      })

    return (
        <div className="py-12 px-4 md:px-8 mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center"><span className='text-[#C82021]'>Features</span> property For sale</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {properties?.map((ad, index) => (
                <div
                    key={index}
                    className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 hover:shadow-xl transition-shadow duration-300 group"
                >
                    <img
                        src={ad?.image}
                        alt={ad?.propertyLocation}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-4">
                        <h2 className="text-lg font-bold text-gray-800">{ad?.location}</h2>
                        <p className="text-green-600 font-semibold">${ad?.price?.minPrice} - ${ad?.price?.maxPrice}</p>
                        <p
                            className={`text-sm font-medium mb-4 mt-2 ${ad?.verificationStatus === 'verified'
                                    ? 'text-green-700 badge font-bold p-2 bg-green-300'
                                    : ad?.verificationStatus === 'rejected'
                                        ? 'text-red-500'
                                        : 'text-yellow-500'
                                }`}
                        >
                            {ad?.verificationStatus}
                        </p>
                        {/* Details Button */}
                        <Link 
                        to={`details/${ad._id}`}
                        className="mt-8 pb-4">
                            <a href className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all w-full bg-red-500 rounded-xl group">
                                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                                    <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                                </span>
                                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white">View Details</span>
                            </a>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>

    );
};

export default Advertise;