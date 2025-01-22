import React, { useContext } from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { AuthContext } from '../../../../../Provider/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddedProperties = () => {
    const {user}=useContext(AuthContext);
  const { data: properties ,refetch} = useQuery({
    queryKey: ['properties', user?.email],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}myProperty/${user?.email}`)
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
        axios.delete(`${import.meta.env.VITE_API_URL}property/${id}`)
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
  // console.log(properties);
  // const properties = [
  //   {
  //     id: 1,
  //     image: 'https://via.placeholder.com/400x300',
  //     title: 'Luxury Apartment',
  //     location: 'Downtown, NY',
  //     agentName: 'John Doe',
  //     agentImage: 'https://via.placeholder.com/100',
  //     verificationStatus: 'pending',
  //     minPrice: 500000,
  //     maxPrice: 700000,
  //   },
  //   // Add more sample properties as needed
  // ];
  return (
    <div className="max-w-7xl mx-auto my-10 p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">My Added Properties</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties?.map((property) => (
          <div
            key={property?._id}
            className="border border-gray-200 rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={property?.image}
              alt={property?.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col">
              <h2 className="text-lg font-semibold mb-2">{property?.title.slice(0,22)}...</h2>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Location:</span> {property?.location}
              </p>
              <div className="flex items-center mb-2">
                <img
                  src={property?.agentImage}
                  alt={property?.agentName}
                  className="w-8 h-8 rounded-full border border-gray-300 mr-2"
                />
                <p className="text-gray-600">{property.agentName}</p>
              </div>
              <p className="text-gray-600 h-12 mb-2">
                <span className="font-medium">Price Range:</span> ${property?.price?.minPrice} - ${property?.price?.maxPrice}
              </p>
              <p
                className={`text-sm font-medium mb-4 ${property.verificationStatus === 'pending'
                    ? 'text-yellow-500'
                    : property.verificationStatus === 'verified'
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}
              >
                Verification Status: <span className='badge badge-secondary'>{property?.verificationStatus}</span>
              </p>
              <div className="flex justify-between items-center">
                {property?.verificationStatus !== 'rejected' && (
                  <Link to={`/dashboard/updateProperties/${property?._id}`}>
                  <button
                    className="flex items-center px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition-colors duration-300"
                  >
                    <AiOutlineEdit className="mr-2" /> Update
                  </button>
                  </Link>
                )}
                <button
                onClick={()=>handleDelete(property?._id)}
                  className="flex items-center px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-md hover:bg-red-600 transition-colors duration-300"
                >
                  <AiOutlineDelete className="mr-2" /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddedProperties;
