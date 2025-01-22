import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../../Provider/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const OfferForm = () => {
  const [offerAmount, setOfferAmount] = useState('');
  const [buyingDate, setBuyingDate] = useState('');
  
  const property=useLoaderData();
  const {user}=useContext(AuthContext);

  const {data: role}=useQuery({
    queryKey: ['role',user?.email],
queryFn: async () => {
const {data} = await axios.get(`${import.meta.env.VITE_API_URL}user/role/${user?.email}`)
return data.role;
},
}) 
    const isOfferValid =offerAmount >= property?.price?.minPrice && offerAmount <= property?.price?.maxPrice;
    

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isOfferValid && buyingDate) {
        
        const form=e.target;
        const propertyTitle=form.title.value;
        const propertyLocation=form.location.value;
        const agentName=form.agentName.value;
        const agentEmail=property?.agentEmail;
        const buyerEmail=form.buyerEmail.value;
        const buyerName=form.buyerName.value;
        const propertyId=property?.propertyId;
        const propertyImage=property?.
        propertyImage;
        const offerPrice=offerAmount;

        const offerInfo={
            propertyTitle,propertyLocation,agentEmail,buyerEmail,buyerName,propertyId,agentName,offerPrice,propertyImage,status:"pending"
        }
        axios.post(`${import.meta.env.VITE_API_URL}requested`,offerInfo)
    .then(result=>{
      // console.log(result);
        if(result.data.insertedId){
            toast.success("Offer send Successfully");
            form.reset();
        }
        
    });


      } else {
          toast.error('Please enter a valid offer amount and select a date.');
      }
  };

  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center text-indigo-600">Make an Offer</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Property Title</label>
            <input
              type="text"
              name='title'
              value={property?.propertyTitle}
              readOnly
              className="w-full border border-gray-300 rounded-lg p-2 bg-gray-100 text-gray-800"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Property Location</label>
            <input
              type="text"
              name='location'
              value={property?.propertyLocation}
              readOnly
              className="w-full border border-gray-300 rounded-lg p-2 bg-gray-100 text-gray-800"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Agent Name</label>
            <input
              type="text"
              name='agentName'
              value={property?.agentName}
              readOnly
              className="w-full border border-gray-300 rounded-lg p-2 bg-gray-100 text-gray-800"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Buyer Email</label>
            <input
              type="email"
              name='buyerEmail'
              value={user?.email}
              readOnly
              className="w-full border border-gray-300 rounded-lg p-2 bg-gray-100 text-gray-800"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Buyer Name</label>
            <input
              type="text"
              name='buyerName'
              value={user?.displayName}
              readOnly
              className="w-full border border-gray-300 rounded-lg p-2 bg-gray-100 text-gray-800"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Offer Amount</label>
          <input
            type="number"
            value={offerAmount}
            onChange={(e) => setOfferAmount(parseFloat(e.target.value))}
            className={`w-full border rounded-lg p-2 ${
              isOfferValid ? 'border-gray-300' : 'border-red-500'
            } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            placeholder={`Enter amount between $${property?.price?.minPrice} and $${property?.price?.maxPrice}`}
          />
          {!isOfferValid && offerAmount && (
            <p className="text-red-500 text-sm mt-1">
              Amount must be between ${property?.price?.minPrice} and ${property?.price?.maxPrice}.
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Buying Date</label>
          <input
            type="date"
            onChange={(e) => setBuyingDate(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={!isOfferValid || !buyingDate && role==="admin" || role==="admin"}
            className="px-6 py-3 bg-indigo-500 text-white font-medium rounded-md hover:bg-indigo-600 transition duration-300 disabled:opacity-50"
          >
            Submit Offer
          </button>
        </div>
      </form>
    </div>
  );
};

export default OfferForm;
