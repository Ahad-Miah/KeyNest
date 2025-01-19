import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

const ManageReviews = () => {

    const reviews = [
        {
          id: 1,
          reviewerImage: 'https://via.placeholder.com/150',
          reviewerName: 'Jane Smith',
          reviewerEmail: 'jane.smith@example.com',
          review: 'This is an amazing property! Loved the experience.',
        },
        {
          id: 2,
          reviewerImage: 'https://via.placeholder.com/150',
          reviewerName: 'John Doe',
          reviewerEmail: 'john.doe@example.com',
          review: 'Great place, but needs better maintenance.',
        },
        // Add more sample reviews as needed
      ];
  return (
    <div className="max-w-7xl mx-auto my-10 p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Manage Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 border border-gray-300 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <img
                src={review.reviewerImage}
                alt={review.reviewerName}
                className="w-12 h-12 rounded-full border-2 border-purple-500 mr-4"
              />
              <div>
                <h2 className="text-lg font-bold text-gray-800">{review.reviewerName}</h2>
                <p className="text-sm text-gray-600">{review.reviewerEmail}</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">{review.review}</p>
            <button
              onClick={() => onDeleteReview(review.id)}
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

