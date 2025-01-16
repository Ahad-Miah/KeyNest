import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer border border-t-2 border-base-200 footer-center p-10">
  <aside>
  <a className="font-bold text-xl md:text-3xl text-[#C82021]">KeyNest</a>
    <p className="font-bold">
      
    Unlock your perfect property
    </p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a>
      <FaFacebook className='text-3xl'></FaFacebook>
      </a>
      <a>
        <FaTwitter className='text-3xl'></FaTwitter>
      </a>
      <a>
       <FaLinkedin className='text-3xl'></FaLinkedin>
      </a>
    </div>
  </nav>
</footer>
    );
};

export default Footer;