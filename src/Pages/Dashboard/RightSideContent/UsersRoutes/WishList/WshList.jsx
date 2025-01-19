import { useState } from 'react';
import { FaCheckCircle, FaTrashAlt } from 'react-icons/fa';


const Wishlist = () => {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      image: 'https://via.placeholder.com/300',
      title: 'Luxury Villa',
      location: 'Beverly Hills, CA',
      agentName: 'John Doe',
      agentImage: 'https://via.placeholder.com/50',
      isVerified: true,
      priceRange: '$1,200,000 - $1,500,000',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/300',
      title: 'Modern Apartment',
      location: 'New York, NY',
      agentName: 'Jane Smith',
      agentImage: 'https://via.placeholder.com/50',
      isVerified: false,
      priceRange: '$800,000 - $1,000,000',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/300',
      title: 'Luxury Villa',
      location: 'Beverly Hills, CA',
      agentName: 'John Doe',
      agentImage: 'https://via.placeholder.com/50',
      isVerified: true,
      priceRange: '$1,200,000 - $1,500,000',
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/300',
      title: 'Luxury Villa',
      location: 'Beverly Hills, CA',
      agentName: 'John Doe',
      agentImage: 'https://via.placeholder.com/50',
      isVerified: true,
      priceRange: '$1,200,000 - $1,500,000',
    },
  ]);

  const handleRemove = (id) => {
    setWishlist(wishlist.filter(property => property.id !== id));
  };

  return (
    <div className="bg-gray-100  py-12 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Your Wishlist</h1>
        <div className="grid grid-cols-1 gap-6">
          {wishlist.map((property) => (
            <div
            className="flex flex-col items-center bg-white border border-red-900 rounded-lg shadow-xl md:flex-row "
          >
            <img
              className="object-cover w-full rounded-t-lg h-60 md:h-auto md:w-1/2 border border-green-900 md:rounded-none md:rounded-s-lg"
              src={property.image}
              alt={property.title}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {property.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{property.location}</p>
      
              <div className="flex items-center mb-4">
                <img
                  src={property.agentImage}
                  alt={property.agentName}
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-3">
                  <p className="font-medium text-gray-800">{property.agentName}</p>
                  <p className="text-sm text-gray-500">
                    {property.isVerified && <FaCheckCircle className="text-green-500 inline mr-1" />}
                    {property.isVerified ? 'Verified' : 'Not Verified'}
                  </p>
                </div>
              </div>
      
              <p className="text-lg font-semibold text-green-600">{property.priceRange}</p>
      
              <div className="flex space-x-3 mt-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                  Make an Offer
                </button>
                <button
                  onClick={() => handleRemove(property.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
