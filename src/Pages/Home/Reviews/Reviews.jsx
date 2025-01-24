import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaStar } from "react-icons/fa";

const Reviews = () => {

  const { data: reviews ,refetch} = useQuery({
    queryKey: ['reviews'],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}allReviews`)
      return data.reverse().slice(0,3);
    },
  })

  return (
    <div className="py-12 px-4 md:px-8 lg:px-8 mx-auto bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Latest User <span className="text-[#C82021]">Reviews</span> 
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews?.map((review, index) => (
          <div
            key={index}
            className="group bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={review?.userImage
                }
                alt={review.name}
                className="w-12 h-12 rounded-full border-2 border-accent"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{review.userName}</h4>
                <p className="text-sm text-gray-500">{review?.propertyTitle}</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{review?.reviewDescription}</p>
            <div className="flex justify-center items-center gap-1 text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
