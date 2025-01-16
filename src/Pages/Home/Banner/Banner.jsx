import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import banner1 from '../../../assets/bi1.avif'
import banner2 from '../../../assets/bi2.avif'
import banner3 from '../../../assets/bi3.avif'
import banner4 from '../../../assets/bi4.avif'
import banner5 from '../../../assets/bi5.avif'

const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div
                        style={{
                            backgroundImage: `url(${banner1})`,
                        }}
                        className={`h-[300px] md:h-[400px] lg:h-[450px] bg-cover bg-center flex justify-center items-center relative`}
                    >
                        {/* Dark Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>

                        {/* Content */}
                        <div className="relative w-3/4 md:w-2/3 lg:w-1/2 text-center text-white">
                            <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold mb-4">
                                Find Your Dream Home Today!
                            </h1>
                            <p className="text-sm md:text-base lg:text-lg">
                                Discover the perfect property that suits your lifestyle. Browse from a wide range of verified listings, tailored to meet your unique needs.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        style={{
                            backgroundImage: `url(${banner2})`,
                        }}
                        className={`h-[300px] md:h-[400px] lg:h-[450px] bg-cover bg-center flex justify-center items-center relative`}
                    >
                        {/* Dark Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>

                        {/* Content */}
                        <div className="relative w-3/4 md:w-2/3 lg:w-1/2 text-center text-white">
                            <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold mb-4">
                                Your Trusted Real Estate Partner
                            </h1>
                            <p className="text-sm md:text-base lg:text-lg">
                                Connect with top agents and explore verified properties in your preferred locations. Make confident decisions with us.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        style={{
                            backgroundImage: `url(${banner3})`,
                        }}
                        className={`h-[300px] md:h-[400px] lg:h-[450px] bg-cover bg-center flex justify-center items-center relative`}
                    >
                        {/* Dark Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>

                        {/* Content */}
                        <div className="relative w-3/4 md:w-2/3 lg:w-1/2 text-center text-white">
                            <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold mb-4">
                            Invest in Your Future!
                            </h1>
                            <p className="text-sm md:text-base lg:text-lg">
                            Whether you're buying or selling, our platform makes it simple, secure, and transparent. Start your journey today.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        style={{
                            backgroundImage: `url(${banner4})`,
                        }}
                        className={`h-[300px] md:h-[400px] lg:h-[450px] bg-cover bg-center flex justify-center items-center relative`}
                    >
                        {/* Dark Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>

                        {/* Content */}
                        <div className="relative w-3/4 md:w-2/3 lg:w-1/2 text-center text-white">
                            <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold mb-4">
                            Live Where You Love!
                            </h1>
                            <p className="text-sm md:text-base lg:text-lg">
                            From luxury villas to budget-friendly apartments, find a property that truly feels like home.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        style={{
                            backgroundImage: `url(${banner5})`,
                        }}
                        className={`h-[300px] md:h-[400px] lg:h-[450px] bg-cover bg-center flex justify-center items-center relative`}
                    >
                        {/* Dark Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>

                        {/* Content */}
                        <div className="relative w-3/4 md:w-2/3 lg:w-1/2 text-center text-white">
                            <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold mb-4">
                            Your Home, Your Way!
                            </h1>
                            <p className="text-sm md:text-base lg:text-lg">
                            Search, wishlist, and buy properties effortlessly. Experience the ultimate real estate convenience, all in one place.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>

    );
};

export default Banner;