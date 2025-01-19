import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      propertyTitle: 'Luxury Villa in Beverly Hills',
      agentName: 'John Doe',
      reviewTime: '2 days ago',
      reviewDescription: 'Amazing property! Loved the location and amenities.',
    },
    {
      id: 2,
      propertyTitle: 'Modern Apartment in New York',
      agentName: 'Jane Smith',
      reviewTime: '1 week ago',
      reviewDescription: 'Great experience, the apartment was beautiful and well-maintained.',
    },
  ]);

  const handleDelete = (id) => {
    // Handle deleting the review here
    setReviews(reviews.filter((review) => review.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Your Reviews</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6"
            >
              <div className="flex justify-between w-full mb-4">
                <h5 className="text-xl font-semibold">{review.propertyTitle}</h5>
                <p className="text-sm ">{review.reviewTime}</p>
              </div>

              <div className="flex items-center mb-4">
                <p className="font-medium">Agent: {review.agentName}</p>
              </div>

              <p className=" mb-6">{review.reviewDescription}</p>

              <button
                onClick={() => handleDelete(review.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 flex items-center space-x-2"
              >
                <FaTrashAlt />
                <span>Delete</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
