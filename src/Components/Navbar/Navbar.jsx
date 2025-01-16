import React from 'react';
import Drawer from '../Drawer/Drawer';


const Navbar = () => {

    const links = <>
        <li><a>Home</a></li>
        <li><a>All Properties</a></li>
        <li><a>Janina</a></li>
        <li><a>Janina</a></li>

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
                <a className="font-bold text-xl md:text-3xl text-[#C82021]">KeyNest</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            
            <div className="navbar-end flex gap-3 items-center">
            <div>
                {profile}
            </div>
                <a className="btn">Sign in</a>
            </div>
        </div>
    );
};

export default Navbar;