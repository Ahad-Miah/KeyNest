import React, { useContext, useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';

const Details = () => {

    const property=useLoaderData();
    const {user}=useContext(AuthContext);
    const {data: role}=useQuery({
        queryKey: ['role',user?.email],
  queryFn: async () => {
    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}user/role/${user?.email}`)
    return data.role;
  },
    })
  const [isModalOpen, setModalOpen] = useState(false);
  const [reviewText, setReviewText] = useState('');

  const { data: reviews ,refetch} = useQuery({
    queryKey: ['reviews',property?._id],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}reviews/${property?._id}`)
      return data;
    },
  })
//   reviews
// const reviews = [
//     { text: 'Amazing property! Would love to stay here.', userName: 'Emily Clark' },
//     { text: 'Breathtaking view and luxurious interiors.', userName: 'Daniel Foster' },
//   ];

  const handleAddToWishlist=()=>{
    const wishList={
        propertyImage:property?.image,
        propertyTitle:property?.title,
        propertyId:property?._id,
        propertyLocation:property?.location,
        agentName:property?.agentName,
        agentEmail:property?.agentEmail,
        agentImage:property?.agentImage,
        price:property.price,
        verificationStatus:property?.verificationStatus,
        userEmail:user?.email
  }

  axios.post(`${import.meta.env.VITE_API_URL}wishlist`,wishList)
    .then(result=>{
      // console.log(result);
        if(result.data.insertedId){
            toast.success("Property added to Wishlist Successfully");
        }
    });

  console.log(wishList);
}
const now = new Date();

  const handleAddReview = () => {
    if(reviewText===""){
        toast.error("please add a review");
        return;
    }
    const reviewInfo={
        propertyTitle:property?.title,
        agentName:property?.agentName,
        reviewTime:now.toLocaleTimeString(),
        reviewDescription:reviewText,
        userEmail:user?.email,
        userName:user?.displayName,
        propertyId:property?._id
    }
    console.log(reviewInfo);
    axios.post(`${import.meta.env.VITE_API_URL}reviews`,reviewInfo)
    .then(result=>{
      // console.log(result);
        if(result.data.insertedId){
            toast.success("Review added Successfully");
        }
        refetch();
    });
    
    setReviewText('')
    setModalOpen(false);
  };

  return (
    <div className="py-12 px-4 md:px-8 mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">{property?.title}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={property?.image}
          alt={property?.title}
          className="w-full md:w-1/2 h-72 object-cover rounded-lg shadow-md"
        />
        <div className="flex flex-col justify-between md:w-1/2">
          <p className="text-lg text-gray-700 mb-4">{property?.description}</p>
          <p className="text-xl font-semibold text-green-600 mb-2">
            Price Range: ${property?.price?.minPrice} - ${property?.price?.maxPrice}
          </p>
          <p className="text-lg text-gray-800 mb-6">Agent: {property?.agentName}</p>
          <button
          disabled={role==="admin" || role==="agent"}
            onClick={handleAddToWishlist}
            className="flex items-center justify-center px-6 py-3 bg-[#e43939] text-white text-sm font-medium rounded-md hover:bg-[#831212] transition duration-300"
          >
            <AiOutlineHeart className="mr-2" /> Add to Wishlist
          </button>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Reviews</h2>
        {reviews?.length > 0 ? (
          <div className="space-y-4">
            {reviews?.map((review, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-4 border border-gray-300"
              >
                <p className="text-gray-700">{review?.reviewDescription}</p>
                <p className="text-sm text-gray-500 mt-2">- {review?.userName}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No reviews yet. Be the first to review!</p>
        )}

        <button
         disabled={role==="admin" || role==="agent"}
          onClick={() => setModalOpen(true)}
          className="mt-6 px-6 py-3 bg-green-500 text-white text-sm font-medium rounded-md hover:bg-green-600 transition duration-300"
        >
          Add a Review
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Add a Review</h3>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows="4"
              placeholder="Write your review here..."
            ></textarea>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-400 transition duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleAddReview}
                className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-md hover:bg-green-600 transition duration-300"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;

// Sample usage


// const handleAddToWishlist = (id) => alert(`Added property with ID: ${id} to wishlist`);
// const handleAddReview = (id, reviewText) => alert(`Added review for property with ID: ${id}: ${reviewText}`);
// <PropertyDetails
//   property={sampleProperty}
//   reviews={sampleReviews}
//   onAddToWishlist={handleAddToWishlist}
//   onAddReview={handleAddReview}
// />
