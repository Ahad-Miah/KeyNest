import React, { useContext } from 'react';
import Drawer from '../Drawer/Drawer';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';


const Navbar = () => {
    const links = <>
       <NavLink 
        className={({ isActive }) =>
    isActive ? " text-[#C82021] font-bold text-[16px] underline" : ""}
   to='/'> <li><a>Home</a></li></NavLink>
        <NavLink
        className={({ isActive }) =>
            isActive ? " text-[#C82021] font-bold text-[16px] underline" : ""}
         to='/allProperties'><li><a>All Properties</a></li></NavLink>
        <NavLink
        className={({ isActive }) =>
            isActive ? " text-[#C82021] font-bold text-[16px] underline" : ""}
         to='/dashboard'><li><a>Dashboard</a></li></NavLink>
    </>

    const profile = <>
        <div className="avatar">
            <div className="w-10 md:w-12 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
        </div>

    </>
    return (
        <div className="navbar px-4 md:px-8 sticky z-10 top-0 bg-white border border-b-2 border-base-200">
            <div className="navbar-start">
                <div className='lg:hidden'>
                    <Drawer links={links}></Drawer>
                </div>
                <Link to='/' className="font-bold text-xl md:text-3xl text-[#C82021]">KeyNest</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal flex justify-center items-center px-1">
                    {links}
                </ul>
            </div>
            
            <div className="navbar-end flex gap-3 items-center">
            <div>
                {profile}
            </div>
                <Link to='login' className="btn text-white bg-[#252525] px-7">Sign in</Link>
            </div>
        </div>
    );
};

export default Navbar;