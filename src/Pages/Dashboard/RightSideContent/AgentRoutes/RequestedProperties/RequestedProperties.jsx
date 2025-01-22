import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { AuthContext } from '../../../../../Provider/AuthProvider/AuthProvider';
import axios from 'axios';
import { toast } from 'react-toastify';

const RequestedProperties = () => {

  const {user}=useContext(AuthContext);
  const { data: offers ,refetch} = useQuery({
    queryKey: ['offers',user?.email],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}requested/${user?.email}`)
      return data;
    },
  })

      const handleStatus=(id,status,propertyId)=>{
          // console.log(id);
          // console.log(status);
          axios.patch(`${import.meta.env.VITE_API_URL}updateOfferStatus/${id}?status=${status}&propertyId=${propertyId}`)
          .then(result=>{
                      if(result.data.acknowledged){
                          toast.success(`Property ${status}ed`);
                      }
                      refetch();
                  });

      }
      if(offers?.length==0){
        return <div className='text-2xl font-bold flex items-center text-center justify-center'>No Requested Property.</div>
      }

  return (
    <div className="mx-auto my-10 p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Requested/Offered Properties</h1>
      <div className="overflow-x-auto">
        <table className=" table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#C82021] text-white text-center">
              <th className="px-4 py-2">Property Title</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">Buyer Name</th>
              <th className="px-4 py-2">Buyer Email</th>
              <th className="px-4 py-2">Offered Price</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {offers?.map((offer, index) => (
              <tr
                key={index}
                className={`$ {
                  index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                } hover:bg-gray-200 transition-colors duration-200`}
              >
                <td className="border px-4 py-2 font-medium">{offer?.propertyTitle}</td>
                <td className="border px-4 py-2">{offer?.propertyLocation}</td>
                <td className="border px-4 py-2">{offer?.buyerName}</td>
                <td className="border px-4 py-2">{offer?.buyerEmail}</td>
                <td className="border px-4 py-2 text-blue-500 font-semibold">${offer?.offerPrice}</td>
                <td className="px-4 py-2 flex space-x-2 justify-center items-center mt-1.5">
                  {
                   offer?.status==="accepted"?<span className='badge badge-secondary p-3 font-semibold bg-green-600'>Accepted</span>:offer?.status==="rejected"?<span className='badge badge-secondary p-3 font-semibold bg-red-600'>Rejected</span>:
                   <>
                   <button
                    onClick={() => handleStatus(offer?._id,"accept",offer?.propertyId)}
                    className="flex items-center px-3 py-2 bg-green-500 text-white text-sm font-medium rounded-md hover:bg-green-600 transition-colors duration-300"
                  >
                    <AiOutlineCheck className="mr-2" /> Accept
                  </button>
                  <button
                    onClick={() => handleStatus(offer?._id,"reject")}
                    className="flex items-center px-3 py-2 bg-red-500 text-white text-sm font-medium rounded-md hover:bg-red-600 transition-colors duration-300"
                  >
                    <AiOutlineClose className="mr-2" /> Reject
                  </button>
                   </>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestedProperties;