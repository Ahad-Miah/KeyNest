import React from 'react';
import { SlCallOut } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { toast } from 'react-toastify';

const ContactUs = () => {

    const handleSendEmail=(e)=>{
        e.preventDefault();
        toast.success("Mail Sent");
        e.target.reset();
    }
    return (
        <div className='px-8 py-8 md:flex gap-5 *:mb-7'>
            <div className='border h-fit border-gray-200 p-4 md:w-1/2'>
            <div>
                <h1 className='font-semibold text-3xl'>Get in touch</h1>
            </div>
            <div>
                <form onSubmit={handleSendEmail}>
                    {/* name */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-semibold text-gray-700">Your Name</span>                         
                        </div>
                        <input required type="text" placeholder="Your name" className="bg-gray-100 w-full h-12 rounded-md px-5" />
                    </label>
                    <div className='md:flex gap-4 items-center justify-center md:*:w-1/2 '>
                        {/* phone */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-semibold text-gray-700">Phone Number</span>                         
                        </div>
                        <input required type="number" placeholder="Phone Number" className="bg-gray-100  h-12 rounded-md px-3" />
                    </label>
                    {/* email */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-semibold text-gray-700">Your Email</span>                         
                        </div>
                        <input required type="email" placeholder="Your Email" className="bg-gray-100 h-12 rounded-md px-3" />
                    </label>
                    </div>
                    {/* subject */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-semibold text-gray-700">Subject</span>                         
                        </div>
                        <input required type="text" placeholder="Enter Subject" className="bg-gray-100 w-full h-12 rounded-md px-5" />
                    </label>
                    {/* description */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-semibold text-gray-700">Description</span>                         
                        </div>
                        <textarea required placeholder="Enter Description" className="bg-gray-100 w-full h-96 rounded-md px-5 pt-5" />
                    </label>
                    <button className='h-12 font-semibold  rounded-md w-full mt-4  text-center border border-red-600 hover:bg-[#C82021] hover:text-white'>Send mail</button>
                </form>
            </div>
            </div>
            <div className=' md:w-1/2'>
            <div>
                <h1 className='text-3xl mb-5 font-semibold'>Contact Details</h1>
                <div className='flex items-center gap-4 mb-8'>
                    <div className=' border rounded-md flex justify-center w-16 p-4'><SlCallOut className='text-3xl text-[#c82020be]' /></div>
                    <div>
                        <h3 className='font-semibold text-xl'>Call Us At</h3>
                        <a href='tel:01745007673'>+8801745007673</a>
                    </div>
                </div>
                <div className='flex items-center gap-4 mb-8'>
                    <div className=' border rounded-md flex justify-center w-16 p-4'><TfiEmail className='text-3xl text-[#c82020be]' /></div>
                    <div>
                        <h3 className='font-semibold text-xl'>Email Us</h3>
                        <a href='mailto:ahadahmedcc@gmail.com'>ahadahmedcc@gmail.com</a>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className=' border rounded-md flex justify-center w-16 p-4'><CiLocationOn className='text-3xl text-[#c82020be]' /></div>
                    <div>
                        <h3 className='font-semibold text-xl'>Location</h3>
                        <a href='tel:01745007673'>Savar, Dhaka, Bangladesh</a>
                    </div>
                </div>
            </div>
            <div className='mt-8'>
                <h2 className='text-3xl font-semibold mb-8'>Find Us on</h2>
                <iframe className='w-full h-96 rounded-md'  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.427967021792!2d90.30392657442783!3d23.87443838400482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c3d39e568203%3A0xe0b8071e4b7f17db!2sFazlur%20Rahman%20Hall!5e0!3m2!1sen!2sbd!4v1739904695288!5m2!1sen!2sbd" frameborder="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            </div>  
        </div>
    );
};

export default ContactUs;