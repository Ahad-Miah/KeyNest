import { useContext, useState } from 'react';
import { FaCheckCircle, FaTrashAlt } from 'react-icons/fa';
import { AuthContext } from '../../../../../Provider/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../../../../hooks/useAxiosSecure/useAxiosSecure';
import { Helmet } from 'react-helmet-async';


const Wishlist = () => {
  const axiosSecure=useAxiosSecure();

  // const [wishlist, setWishlist] = useState([
  //   {
  //     id: 1,
  //     image: 'https://via.placeholder.com/300',
  //     title: 'Luxury Villa',
  //     location: 'Beverly Hills, CA',
  //     agentName: 'John Doe',
  //     agentImage: 'https://via.placeholder.com/50',
  //     isVerified: true,
  //     priceRange: '$1,200,000 - $1,500,000',
  //   },
  //   {
  //     id: 2,
  //     image: 'https://via.placeholder.com/300',
  //     title: 'Modern Apartment',
  //     location: 'New York, NY',
  //     agentName: 'Jane Smith',
  //     agentImage: 'https://via.placeholder.com/50',
  //     isVerified: false,
  //     priceRange: '$800,000 - $1,000,000',
  //   },
  //   {
  //     id: 3,
  //     image: 'https://via.placeholder.com/300',
  //     title: 'Luxury Villa',
  //     location: 'Beverly Hills, CA',
  //     agentName: 'John Doe',
  //     agentImage: 'https://via.placeholder.com/50',
  //     isVerified: true,
  //     priceRange: '$1,200,000 - $1,500,000',
  //   },
  //   {
  //     id: 4,
  //     image: 'https://via.placeholder.com/300',
  //     title: 'Luxury Villa',
  //     location: 'Beverly Hills, CA',
  //     agentName: 'John Doe',
  //     agentImage: 'https://via.placeholder.com/50',
  //     isVerified: true,
  //     priceRange: '$1,200,000 - $1,500,000',
  //   },
  // ]);

  const { user } = useContext(AuthContext);
  const { data: wishlist, refetch } = useQuery({
    queryKey: ['wishlist', user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`wishlist/${user?.email}`)
      return data;
    },
  })
  const handleDelete=(id)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`wishlist/${id}`)
         .then(result=>{
          if(result.data.deletedCount){
              Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
                refetch();
             }
         }); 
      }
    
    });
  }
  return (
    <div className="  py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>WishList || KeyNest</title>
      </Helmet>
      <div className=" mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Your Wishlist</h1>
        <div className="grid grid-cols-1 gap-6">
          {wishlist?.map((property) => (
            <div
              className="flex md:h-[200px] flex-col items-center bg-white border border-red-900 rounded-lg shadow-xl md:flex-row md:justify-between"
            >
              <img
                className="object-cover w-1/2 rounded-t-lg h-full  border border-green-900 md:rounded-none md:rounded-s-lg"
                src={property?.propertyImage}
                alt={property?.propertyTitle}
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2  font-bold tracking-tight text-gray-900 ">
                  {property?.propertyTitle}
                </h5>
                <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">{property?.propertyLocation}</p>

                <div className="flex items-center mb-3">
                  <img
                    src={property?.agentImage}
                    alt={property?.agentName}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-3">
                    <p className="font-medium text-gray-800">{property?.agentName}</p>
                    <p className="text-sm text-gray-500">
                      {property.
                        verificationStatus==="verified" && <FaCheckCircle className="text-green-500 inline mr-1" />}
                      {property.verificationStatus==="verified" ? 'Verified' : 'Not Verified'}
                    </p>
                  </div>
                </div>

                <p className="text-lg font-semibold text-green-600">Price Range: {property?.price?.minPrice} - {property?.price?.minPrice}</p>
              </div>
              <div className="flex space-x-3 mb-4 mt-4 mr-4">
                  <Link to={`/dashboard/offerForm/${property?._id}`}>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                    Make an Offer
                  </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(property?._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
