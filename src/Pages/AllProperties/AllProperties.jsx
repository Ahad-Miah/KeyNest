import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure/useAxiosSecure";

const AllProperties = () => {

        const axiosSecure=useAxiosSecure();
    const { data: properties ,refetch} = useQuery({
        queryKey: ['properties'],
        queryFn: async () => {
          const { data } = await axiosSecure.get(`verifiedProperties`)
          return data;
        },
      })
    return (
        <section className="py-12 bg-gray-50">
            <div className="mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">
                        All <span className="text-[#C82021]">Properties</span>
                    </h2>
                    <p className="mt-4 text-gray-600">
                        Browse through the latest properties listed by our top real estate agents.
                    </p>
                </div>

                {/* Properties Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties?.map((property) => (
                        <div
                            key={property._id}
                            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
                        >
                            {/* Property Image */}
                            <div className="relative">
                                <img
                                    src={property?.image}
                                    alt={property?.title}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                {property?.verificationStatus==="verified"&& (
                                    <div
                                        className="absolute top-3 right-3 bg-green-100 text-green-600 text-sm font-bold px-2 py-1 rounded-full flex items-center"
                                        data-tooltip="Verified Property"
                                    >
                                        <FaCheckCircle className="mr-1" />
                                        Verified
                                    </div>
                                )}
                            </div>

                            {/* Property Details */}
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                    {property?.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-3">{property?.location}</p>
                                <div className="flex items-center mb-3">
                                    <img
                                        src={property?.agentImage}
                                        alt={property?.agentName}
                                        className="w-8 h-8 rounded-full mr-2"
                                    />
                                    <span className="text-gray-800 text-sm">{property?.agentName}</span>
                                </div>
                                <p className="text-lg font-bold text-blue-600">Price Range : {property?.price?.minPrice} - {property?.price?.maxPrice}</p>
                            </div>

                            {/* Details Button */}
                            <div className="px-4 pb-4">
                               <Link to={`/details/${property?._id}`}>
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
        </section>
    );
};

export default AllProperties;
