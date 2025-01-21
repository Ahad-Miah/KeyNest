import React, { useContext, useEffect, useState } from 'react';
import { BiRightArrow } from 'react-icons/bi';
import { FaUserFriends, FaCalendarAlt, FaFileInvoiceDollar } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import { BsHeart } from "react-icons/bs";
import { BsBuildings } from "react-icons/bs";
import { MdOutlineReviews } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { TbBuildingCommunity } from "react-icons/tb";
import { GrMoney } from "react-icons/gr";
import { CiSquareQuestion } from "react-icons/ci";
import { MdOutlineManageHistory } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import  { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';
import axios from 'axios';


const LeftSide = () => {
    const{user}=useContext(AuthContext);
    // console.log(user?.email);

    // const [role,setRole]=useState();

    const {data: role}=useQuery({
        queryKey: ['role',user?.email],
  queryFn: async () => {
    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}user/role/${user?.email}`)
    return data.role;
  },
    })
    // console.log(role);
  

        

    const userLinks = <>
        <NavLink
         className={({ isActive }) =>
            isActive ? " flex items-center text-blue-600 font-medium bg-blue-100 rounded-lg" : ""}
        to='/dashboard/myProfile'><li className="flex items-center text-gray-600 hover:text-blue-600 hover:bg-blue-100 p-2 rounded-lg transition">
            <FaUserFriends className="mr-3 text-lg" />
            My Profile
        </li></NavLink>
        <NavLink
         className={({ isActive }) =>
            isActive ? " flex items-center text-blue-600 font-medium bg-blue-100 rounded-lg" : ""}
        to='/dashboard/wishList'>
        <li className="flex items-center text-gray-600 hover:text-blue-600 hover:bg-blue-100 p-2 rounded-lg transition">
            <BsHeart className="mr-3 text-lg" />
            WishList
        </li>
        </NavLink>
        <NavLink
         className={({ isActive }) =>
            isActive ? " flex items-center text-blue-600 font-medium bg-blue-100 rounded-lg" : ""}
        to='/dashboard/propertyBrought'>
        <li className="flex items-center text-gray-600 hover:text-blue-600 hover:bg-blue-100 p-2 rounded-lg transition">
            <BsBuildings className="mr-3 text-lg" />
            Property Brought
        </li>
        </NavLink>
        <NavLink
         className={({ isActive }) =>
            isActive ? " flex items-center text-blue-600 font-medium bg-blue-100 rounded-lg" : ""}
        to='/dashboard/reviews'>
        <li className="flex items-center text-gray-600 hover:text-blue-600 hover:bg-blue-100 p-2 rounded-lg transition">
            <MdOutlineReviews className="mr-3 text-lg" />
            My Reviews
        </li>
        </NavLink>
    </>
    const agentLinks = <>
        <NavLink
        className={({ isActive }) =>
            isActive ? " flex items-center text-blue-600 font-medium bg-blue-100 rounded-lg" : ""}
        to='/dashboard/myProfile'>
        <li className="flex items-center text-blue-600 font-medium bg-blue-100 p-2 rounded-lg">
            <FaUserFriends className="mr-3 text-lg" />
            My Profile
        </li>
        </NavLink>
        <NavLink 
        className={({ isActive }) =>
            isActive ? " flex items-center text-blue-600 font-medium bg-blue-100 rounded-lg" : ""}
        to='/dashboard/addProperty'>
        <li className="flex items-center text-gray-600 hover:text-blue-600 hover:bg-blue-100 p-2 rounded-lg transition">
            <IoMdAdd className="mr-3 text-lg" />
            Add Property
        </li>
        </NavLink>
       <NavLink
       className={({ isActive }) =>
        isActive ? " flex items-center text-blue-600 font-medium bg-blue-100 rounded-lg" : ""}
       to='/dashboard/myAddedProperties'>
       <li className="flex items-center text-gray-600 hover:text-blue-600 hover:bg-blue-100 p-2 rounded-lg transition">
            <TbBuildingCommunity className="mr-3 text-lg" />
            My Added properties
        </li>
       </NavLink>
        <NavLink
        className={({ isActive }) =>
            isActive ? " flex items-center text-blue-600 font-medium bg-blue-100 rounded-lg" : ""}
        to='/dashboard/soldProperties'>
        <li className="flex items-center text-gray-600 hover:text-blue-600 hover:bg-blue-100 p-2 rounded-lg transition">
            <GrMoney className="mr-3 text-lg" />
            My Sold Properties
        </li>
        </NavLink>
        <NavLink
        className={({ isActive }) =>
            isActive ? " flex items-center text-blue-600 font-medium bg-blue-100 rounded-lg" : ""}
        to='/dashboard/requestedProperties'>
        <li className="flex items-center text-gray-600 hover:text-blue-600 hover:bg-blue-100 p-2 rounded-lg transition">
        <CiSquareQuestion  className="mr-3 text-lg" />
            Requested Properties
        </li>
        </NavLink>
    </>

    const adminLinks=<>
        <NavLink 
         className={({ isActive }) =>
            isActive ? " flex items-center text-blue-600 font-medium bg-blue-100 rounded-lg" : ""}
        to='/dashboard/myProfile'>
        <li className="flex items-center text-gray-600 hover:text-blue-600 hover:bg-blue-100 p-2 rounded-lg transition">
            <FaUserFriends className="mr-3 text-lg" />
           My profile
        </li>
        </NavLink>
       <NavLink 
       className={({ isActive }) =>
        isActive ? " flex items-center text-blue-600 font-medium bg-blue-100  rounded-lg" : ""}
       to='/dashboard/manageProperties'>
       <li className="flex items-center text-gray-600 hover:text-blue-600 hover:bg-blue-100 p-2 rounded-lg transition">
            <MdOutlineManageHistory className="mr-3 text-lg" />
            Manage Properties
        </li>
       </NavLink>
        <NavLink 
        className={({ isActive }) =>
            isActive ? " flex items-center text-blue-600 font-medium bg-blue-100  rounded-lg" : ""}
        to='/dashboard/manageUsers'>
        <li className="flex items-center text-gray-600 hover:text-blue-600 hover:bg-blue-100 p-2 rounded-lg transition">
            <MdManageAccounts className="mr-3 text-lg" />
            Manage Users
        </li>
        </NavLink>
        <NavLink 
        className={({ isActive }) =>
            isActive ? " flex items-center text-blue-600 font-medium bg-blue-100  rounded-lg" : ""}
        to='/dashboard/manageReviews'>
        <li className="flex items-center text-gray-600 hover:text-blue-600 hover:bg-blue-100 p-2 rounded-lg transition">
            <MdOutlineRateReview className="mr-3 text-lg" />
            Manage Reviews
        </li>
        </NavLink>
    </>
    return (
        <div className="bg-white min-h-screen  shadow-xl flex flex-col p-4 border border-base-300 rounded-lg">
            {/* Brand Section */}
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-xl font-bold text-[#C82021]">KeyNest™</h1>
                <Link to='/'> <FaArrowLeft className="text-xl text-gray-600 cursor-pointer" title='Back To Home' /></Link>
            </div>
            {/* user Menu */}
           {
            role==="customer" &&  <div className="mb-6">
            <h3 className="text-sm text-gray-500 font-semibold mb-3">User Menu</h3>
            <ul className="space-y-2">
                {userLinks}
            </ul>
        </div>
           }
            {/* agent menu */}
            {
                role==="agent" && <div className="mb-6">
                <h3 className="text-sm text-gray-500 font-semibold mb-3">Agent Menu</h3>
                <ul className="space-y-2">
                    {agentLinks}
                </ul>
            </div>
            }
            {/* admin menu */}
           {
            role==="admin" &&  <div className="mb-6">
            <h3 className="text-sm text-gray-500 font-semibold mb-3">Admin Menu</h3>
            <ul className="space-y-2">
                {adminLinks}
            </ul>
        </div>
           }
           {
            role==="fraud" &&  <NavLink
            className={({ isActive }) =>
                isActive ? " flex items-center text-blue-600 font-medium bg-blue-100 rounded-lg" : ""}
            to='/dashboard/myProfile'>
            <li className="flex items-center text-blue-600 font-medium bg-blue-100 p-2 rounded-lg">
                <FaUserFriends className="mr-3 text-lg" />
                My Profile
            </li>
            </NavLink>
           }

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