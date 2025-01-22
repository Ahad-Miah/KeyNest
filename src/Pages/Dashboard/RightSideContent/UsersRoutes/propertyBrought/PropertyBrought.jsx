import React, { useContext } from 'react';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { AuthContext } from '../../../../../Provider/AuthProvider/AuthProvider';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const PropertyBrought = () => {
  

        const {user}=useContext(AuthContext);
    const { data: properties ,refetch} = useQuery({
        queryKey: ['properties',user?.email],
        queryFn: async () => {
          const { data } = await axios.get(`${import.meta.env.VITE_API_URL}userOffered/${user?.email}`)
          return data;
        },
      })
    // const [properties, setProperties] = useState([
    //     {
    //         id: 1,
    //         title: 'Luxury Villa',
    //         location: 'Beverly Hills, CA',
    //         image: 'https://via.placeholder.com/300',
    //         offeredAmount: 1200000,
    //         status: 'pending',
    //     },
    //     {
    //         id: 2,
    //         title: 'Modern Apartment',
    //         location: 'New York, NY',
    //         image: 'https://via.placeholder.com/300',
    //         offeredAmount: 850000,
    //         status: 'accepted',
    //     },
    // ]);

    const handlePay = (id) => {
        // Handle payment logic here
        alert(`Payment processed for property with ID: ${id}`);
    };

    return (
        <div className="max-w-6xl mx-auto my-10 p-4">
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">Properties Bought</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties?.map((property, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={property.propertyImage}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h2 className="text-xl font-semibold text-gray-800">{property.propertyTitle}</h2>
                <p className="text-gray-600 text-sm">{property?.propertyLocation}</p>
                <p className="text-gray-800 text-sm font-medium">Agent: {property.agentName}</p>
                <p className="text-green-600 font-semibold">Offered Amount: ${property.offerPrice}</p>
                <p
                  className={`text-sm font-medium badge  mt-2 ${
                    property.status === 'pending'
                      ? 'text-yellow-700 p-3 bg-yellow-200'
                      : property.status === 'accepted'
                      ? 'text-green-700 bg-green-300'
                      : 'text-red-500'
                  }`}
                >
                  Status: {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
                </p>
                {property.status === 'accepted' && (
                  <button
                    onClick={() => onPay(property.id)}
                    className="mt-4 flex items-center justify-center px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition duration-300 w-full"
                  >
                    <AiOutlineDollarCircle className="mr-2" /> Pay
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );

};

export default PropertyBrought;