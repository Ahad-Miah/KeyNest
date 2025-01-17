import React from 'react';
import { useState } from 'react';
import { FaCheckCircle, FaMoneyBillAlt, FaBan } from 'react-icons/fa';

const PropertyBrought = () => {
    const [properties, setProperties] = useState([
        {
            id: 1,
            title: 'Luxury Villa',
            location: 'Beverly Hills, CA',
            image: 'https://via.placeholder.com/300',
            offeredAmount: 1200000,
            status: 'pending',
        },
        {
            id: 2,
            title: 'Modern Apartment',
            location: 'New York, NY',
            image: 'https://via.placeholder.com/300',
            offeredAmount: 850000,
            status: 'accepted',
        },
    ]);

    const handlePay = (id) => {
        // Handle payment logic here
        alert(`Payment processed for property with ID: ${id}`);
    };

    return (
        <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Properties You Have Bought</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {properties.map((property) => (
                        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ">
                            <img
                                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-full md:rounded-none"
                                src={property.image}
                                alt={property.title}
                            />
                            <div className="flex flex-col justify-between p-6 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {property.title}
                                </h5>
                                <p className="mb-3 text-lg text-gray-700 dark:text-gray-400">{property.location}</p>

                                <div className="flex justify-between items-center mt-4">
                                    <p className="text-lg font-semibold text-green-600">Offered Amount: ${property.offeredAmount}</p>
                                    <p className={`text-sm font-semibold ${property.status === 'accepted' ? 'text-green-500' : 'text-yellow-500'}`}>
                                        {property.status}
                                    </p>
                                </div>

                                {property.status === 'accepted' && (
                                    <div className="mt-4 flex justify-center">
                                        <button
                                            onClick={() => handlePay(property.id)}
                                            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center space-x-2"
                                        >
                                            <FaMoneyBillAlt />
                                            <span>Pay</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

};

export default PropertyBrought;