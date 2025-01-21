import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { space } from 'postcss/lib/list';
import React from 'react';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { toast } from 'react-toastify';

const ManagePropertise = () => {

  const { data: properties ,refetch} = useQuery({
    queryKey: ['properties'],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}allProperties`)
      return data;
    },
  })
  // console.log(properties);
  const handleVerify=(id)=>{
      console.log(id);
      axios.patch(`${import.meta.env.VITE_API_URL}updateStatus/${id}`)
      .then(result=>{
        if(result.data.acknowledged){
          toast.success("Verified Successfully");
      }
      refetch();
      })
  }

  const handleStatus=(id,status)=>{
    console.log(id);
    console.log(status);
    axios.patch(`${import.meta.env.VITE_API_URL}updateStatus/${id}?status=${status}`)
    .then(result=>{
      if(result.data.acknowledged){
        toast.success(`${status} successfully`);
    }
    refetch();
    })
}

   
  return (
    <div className="max-w-7xl mx-auto my-10 p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Manage Properties</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#e03535] text-white text-left">
              <th className="px-4 py-2">Property Title</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">Agent Name</th>
              <th className="px-4 py-2">Agent Email</th>
              <th className="px-4 py-2">Price Range</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {properties?.map((property, index) => (
              <tr
                key={index}
                className={`$ {
                  index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                } hover:bg-gray-200 transition-colors duration-200`}
              >
                <td className="border px-4 py-2 font-medium">{property?.title}</td>
                <td className="border px-4 py-2">{property?.location}</td>
                <td className="border px-4 py-2">{property?.agentName}</td>
                <td className="border px-4 py-2">{property?.agentEmail}</td>
                <td className="border px-4 py-2 text-green-500 font-semibold">${property?.price?.minPrice} - ${property?.price?.maxPrice}</td>
                <td className="border px-4 py-2 flex justify-center space-x-2">

                  {
                    property?.verificationStatus==="verified"?<span className='badge badge-secondary p-3 font-semibold bg-green-600'>Verified</span>:property?.verificationStatus==="rejected"?<span className='badge badge-secondary p-3 font-semibold bg-red-600'>Rejected</span>:<>
                    <button
                  onClick={()=>handleStatus(property?._id,"verify")}
                    className="flex items-center px-3 py-2 bg-green-500 text-white text-sm font-medium rounded-md hover:bg-green-600 transition-colors duration-300"
                  >
                    <AiOutlineCheck className="mr-2" /> Verify
                  </button>
                  <button
                  onClick={()=>handleStatus(property?._id,"reject")}
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

export default ManagePropertise;

// Sample usage

// const handleVerify = (id) => alert(`Verified property with ID: ${id}`);
// const handleReject = (id) => alert(`Rejected property with ID: ${id}`);
// <AllProperties properties={sampleProperties} onVerify={handleVerify} onReject={handleReject} />
