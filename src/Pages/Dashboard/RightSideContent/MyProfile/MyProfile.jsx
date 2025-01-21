import React, { useContext } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { AuthContext } from "../../../../Provider/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";

const MyProfile = () => {
  const { user, Signout } = useContext(AuthContext);

  const handleSignOut = () => {
    Signout()
      .then(res => {
        navigate('/login');
      })
      .catch(err => console.log(err));
  }

  const { data: role } = useQuery({
    queryKey: ['role', user?.email],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}user/role/${user?.email}`)
      return data.role;
    },
  })
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-4xl p-6 md:flex">
        {/* Left Section: Profile Image */}
        <div className="flex justify-center md:w-1/3 mb-6 md:mb-0">
          <div className="relative">
            <img
              src={user?.photoURL}
              alt="User"
              className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg"
            />
            <div className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full text-white shadow-md">
              <FaMapMarkerAlt size={24} />
            </div>
          </div>
        </div>

        {/* Right Section: User Information */}
        <div className="md:w-2/3 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{user?.displayName}</h1>
          {
            role==="customer" ||<p className="text-gray-600 text-lg mb-6">
            Role: <span className={`${role==="fraud"?"text-red-700 font-bold badge bg-base-300":"text-blue-500 font-bold badge bg-base-300"} `}>{role}</span>
          </p>
          }


          {/* Contact Information */}
          <div className="space-y-4">
            <div className="flex items-center text-gray-700">
              <FaEnvelope className="mr-3 text-blue-500" size={20} />
              <span>{user?.email}</span>
            </div>
          </div>
          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            <button onClick={handleSignOut} className="btn text-white bg-[#252525] px-7 hover:text-black">
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
