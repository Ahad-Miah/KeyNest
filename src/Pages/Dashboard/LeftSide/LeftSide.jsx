import React from 'react';
import { BiRightArrow } from 'react-icons/bi';
import { FaUserFriends, FaCalendarAlt, FaFileInvoiceDollar } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import { BsHeart } from "react-icons/bs";
import { BsBuildings } from "react-icons/bs";
import { MdOutlineReviews } from "react-icons/md";
import { Link } from 'react-router-dom';


const LeftSide = () => {
    return (
        <div className="bg-white h-screen shadow-xl flex flex-col p-4 border border-base-300 rounded-lg">
        {/* Brand Section */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-[#C82021]">KeyNest™</h1>
         <Link to='/'> <FaArrowLeft className="text-xl text-gray-600 cursor-pointer" title='Back To Home' /></Link>
        </div>
        {/* Main Menu */}
        <div className="mb-6">
          <h3 className="text-sm text-gray-500 font-semibold mb-3">MAIN MENU</h3>
          <ul className="space-y-2">
            <li className="flex items-center text-blue-600 font-medium bg-blue-100 p-2 rounded-lg">
              <FaUserFriends className="mr-3 text-lg" />
              My Profile
            </li>
            <li className="flex items-center text-gray-600 hover:text-blue-600 hover:bg-blue-100 p-2 rounded-lg transition">
            <BsHeart  className="mr-3 text-lg" />
              WishList
            </li>
            <li className="flex items-center text-gray-600 hover:text-blue-600 hover:bg-blue-100 p-2 rounded-lg transition">
            <BsBuildings  className="mr-3 text-lg" />
              Property Brought
            </li>
            <li className="flex items-center text-gray-600 hover:text-blue-600 hover:bg-blue-100 p-2 rounded-lg transition">
            <MdOutlineReviews  className="mr-3 text-lg" />
             My Reviews
            </li>
            <li className="flex items-center text-gray-600 hover:text-blue-600 hover:bg-blue-100 p-2 rounded-lg transition">
              <FaCalendarAlt className="mr-3 text-lg" />
              Schedule
            </li>
          </ul>
        </div>
  
        {/* Department Section */}
        {/* Other Section */}
        <div>
          <h3 className="text-sm text-gray-500 font-semibold mb-3">OTHER</h3>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-600 hover:text-blue-600 hover:bg-blue-100 p-2 rounded-lg transition">
              <FiSettings className="mr-3 text-lg" />
              Setting
            </li>
            <li className="flex items-center text-gray-600 hover:text-blue-600 hover:bg-blue-100 p-2 rounded-lg transition">
              <FiHelpCircle className="mr-3 text-lg" />
              Help Center
            </li>
          </ul>
        </div>
      </div>
    );
};

export default LeftSide;