import React from 'react';
import registerAnimation from '../../assets/LootieFiles/RegisterAnimation.json'
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';

const Register = () => {
    return (
        <div className="hero bg-base-100 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse gap-6">
                <div className="text-center lg:text-left">

                    <Lottie animationData={registerAnimation}></Lottie>
                </div>
                <div className="card bg-base-100 w-full md:max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="file" required className="file-input file-input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <Link to='/login' className="label group">
                                <a className="label-text-alt link link-hover">Already Have an Account?  <span className='text-[#C82021] group-hover:font-bold group-hover:text-[14px]'>Login</span></a>
                            </Link>
                        </div>
                        <div className="form-control">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <div className='px-6 pb-4 -mt-6'>
                        <div className="divider">OR</div>
                        <button className="btn w-full btn-primary">Login With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;