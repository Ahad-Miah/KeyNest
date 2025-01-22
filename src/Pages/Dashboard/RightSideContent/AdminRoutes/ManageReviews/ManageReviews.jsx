import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';

const ManageReviews = () => {

      const { data: reviews ,refetch} = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
          const { data } = await axios.get(`${import.meta.env.VITE_API_URL}allReviews`)
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
            axios.delete(`${import.meta.env.VITE_API_URL}review/${id}`)
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
    <div className="max-w-7xl mx-auto my-10 p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Manage Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews?.map((review, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 border border-gray-300 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <img
                src={review?.userImage}
                alt={review?.userName}
                className="w-12 h-12 rounded-full border-2 border-purple-500 mr-4"
              />
              <div>
                <h2 className="text-lg font-bold text-gray-800">{review?.userName}</h2>
                <p className="text-sm text-gray-600">{review?.userEmail}</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">{review?.reviewDescription}</p>
            <button
              onClick={() => handleDelete(review?._id)}
              className="flex items-center justify-center w-full px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-md hover:bg-red-600 transition-colors duration-300"
            >
              <AiOutlineDelete className="mr-2" /> Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageReviews;

