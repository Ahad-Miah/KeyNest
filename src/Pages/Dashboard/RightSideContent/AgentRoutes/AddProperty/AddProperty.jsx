import React, { useContext, useState } from 'react';
import { AiOutlineUpload } from 'react-icons/ai';
import { AuthContext } from '../../../../../Provider/AuthProvider/AuthProvider';
import axios from 'axios';
import { toast } from 'react-toastify';
import useAxiosSecure from '../../../../../hooks/useAxiosSecure/useAxiosSecure';
import { Helmet } from 'react-helmet-async';
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddProperty = () => {
  
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const { user } = useContext(AuthContext);
  const axiosSecure=useAxiosSecure();

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) {
      console.error("No file selected!");
      return;
    }

    // Create a FormData object and append the file
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(image_hosting_api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        const imageUrl = response.data.data.display_url; 
        setUploadedImageUrl(imageUrl);
        // console.log("Image uploaded successfully:", imageUrl);
      } else {
        console.error("Image upload failed:", response.data);
      }
    } catch (error) {
      console.error("Error uploading image:", error.message || error);
    }
  };


  const handleAddProperty = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const location = form.location.value;
    const description = form.description.value;
    const agentName = form.agentName.value;
    const agentEmail = form.agentEmail.value;
    const minPrice = parseFloat(form.minPrice.value);
    const maxPrice = parseFloat(form.maxPrice.value);

    const price = {
      minPrice, maxPrice
    }

    const propertyInfo = {
      title, location,description, agentName,agentImage:user?.photoURL,
      agentEmail, price,image:uploadedImageUrl,verificationStatus:"pending"
    }
    // console.log(propertyInfo)

    axiosSecure.post(`add-property`,propertyInfo)
    .then(result=>{
      // console.log(result);
        if(result.data.insertedId){
            form.reset();
            toast.success("Added Successfully");
        }
    });


  }
  return (
    <div className="mx-auto my-10 p-6  rounded-lg shadow-md bg-white">
      <Helmet>
        <title>Add Property || KeyNest</title>
      </Helmet>
      <h1 className="text-4xl font-bold mb-6">Add Property</h1>
      <form onSubmit={handleAddProperty}>
        {/* title */}
        <div className="mb-4">
          <label htmlFor="property-title" className="block font-medium mb-2">Property Title</label>
          <input
            type="text"
            id="property-title"
            name="title"
            required
            placeholder="Enter property title"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* location */}
        <div className="mb-4">
          <label htmlFor="property-location" className="block font-medium mb-2">Property Location</label>
          <input
            type="text"
            id="property-location"
            name="location"
            required
            placeholder="Enter property location"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* description */}
        <div className="mb-4">
          <label htmlFor="property-title" className="block font-medium mb-2">Property Description</label>
          <textarea
            id="property-title"
            name="description"
            required
            placeholder="Enter Description about property"
            className="w-full h-28 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* image */}
        <div className="mb-4 ">
          <label htmlFor="property-image" className="block font-medium mb-2">Property Image</label>
          <div className='md:flex items-center gap-3 space-y-3 md:*:w-1/2'>
          <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer hover:bg-gray-50">
            <label htmlFor="property-image" className="flex flex-col items-center">
              <AiOutlineUpload size={24} className="text-gray-500 mb-2" />
              <span className="text-sm text-gray-600">Drop your images here, or <span className="text-blue-500 underline">Click to browse</span></span>
            </label>
            <input
              type="file"
              onChange={handleImageUpload}
              id="property-image"
              name="propertyImage"
              accept="image/*"
              className="hidden"
            />
          </div>
          {/* preview image */}
          <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer hover:bg-gray-50 h-40">
            <img
              src={uploadedImageUrl}
              alt="Upload Image"
              className="w-full h-full rounded-md border border-gray-300 object-cover"
            />
          </div>
          </div>
          
        </div>
        {/* agent name */}
        <div className="mb-4">
          <label htmlFor="agent-name" className="block font-medium mb-2">Agent Name</label>
          <input
            type="text"
            id="agent-name"
            name="agentName"
            value={user?.displayName}
            readOnly
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
          />
        </div>
        {/* agent email */}
        <div className="mb-4">
          <label htmlFor="agent-email" className="block font-medium mb-2">Agent Email</label>
          <input
            type="email"
            id="agent-email"
            name="agentEmail"
            value={user?.email}
            readOnly
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
          />
        </div>

          {/* price range */}
        <div className="mb-4">
          <label htmlFor="price-range" className="block font-medium mb-2">Price Range</label>
          <div className='md:flex items-center gap-4'>
            <label htmlFor="price-range" className="block font-medium mb-2">Min</label>
            <input
              type="text"
              id="min-price"
              name="minPrice"
              required
              placeholder="Enter minimum price"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="price-range" className="block font-medium mb-2">Max</label>
            <input
              type="text"
              id="max-price"
              name="maxPrice"
              required
              placeholder="Enter maximum  price"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add Property
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
