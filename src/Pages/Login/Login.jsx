import Lottie from 'lottie-react';
import React from 'react';
import loginAnimation from '../../assets/LootieFiles/LoginAnimation.json'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero bg-base-100 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse gap-6">
                <div className="text-center lg:text-left">
                    
                    <Lottie className='lg:w-[400px] lg:h-[400px]' animationData={loginAnimation}></Lottie>
                </div>
                <div className="card bg-base-100 w-full md:max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
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
                            <Link to='/register' className="label group">
                                <a className="label-text-alt link link-hover">Don't Have any Account?  <span className='text-[#C82021] group-hover:font-bold group-hover:text-[14px]'>Register</span></a>
                            </Link>
                        </div>
                        <div className="form-control">
                            <button className="btn btn-primary">Login</button>
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

export default Login;