import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const AllProperties = () => {

  // const [properties,setProperties]=useState([]);

  const [sort, setSort] = useState('');

  // console.log(sort);
  const axiosSecure = useAxiosSecure();
  const [search, setSearch] = useState('');
  const { data: properties, refetch } = useQuery({
    queryKey: ['properties', search, sort],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}verifiedProperties?search=${search}&sort=${sort}`)
      return data;
    },
  })
  return (
    <section className="py-12 bg-gray-50">
      <Helmet>
        <title>All Properties || KeyNest</title>
      </Helmet>
      <div className="mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center  mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            All <span className="text-[#C82021]">Properties</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Browse through the latest properties listed by our top real estate agents.
          </p>
          <div className="flex mt-4 justify-center items-center gap-3">
            <label className="input input-bordered flex items-center w-1/2 gap-2">
              <input type="text"
                onChange={(e) => setSearch(e.target.value)}
                className="grow w-full" placeholder="Search Property" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd" />
              </svg>
            </label>
            <select onChange={(e) => setSort(e.target.value)} className="select select-error w-full max-w-xs">
              <option
                disabled selected>Sort By Price</option>
              <option value={"assending"}>Low to High</option>
              <option value={"desending"}>High to Low</option>
            </select>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties?.map((property) => (
            <div
              key={property._id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 group flex flex-col"
            >
              {/* Property Image */}
              <div className="relative">
                <img
                  src={property?.image}
                  alt={property?.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {property?.verificationStatus === "verified" && (
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
              <div className="p-4 flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">
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
                <p className="text-lg font-bold text-blue-600">
                  Price Range: {property?.price?.minPrice} - {property?.price?.maxPrice}
                </p>
              </div>

              {/* Details Button */}
              <div className="px-4 pb-4 mt-auto">
                <Link to={`/details/${property?._id}`}>
                  <a
                    href
                    className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all w-full bg-red-500 rounded-xl group"
                  >
                    <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                      <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                      View Details
                    </span>
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
