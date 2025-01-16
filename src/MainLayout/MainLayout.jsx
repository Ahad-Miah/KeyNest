import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
          <Navbar></Navbar>
          <section className='min-h-[calc(100vh-24px-282px)]'>
          <Outlet></Outlet>
          </section>
          <Footer></Footer>
        </div>
    );
};

export default MainLayout;