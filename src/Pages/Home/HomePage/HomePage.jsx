import React from 'react';
import Banner from '../Banner/Banner';
import Advertise from '../Advertise/Advertise';
import Reviews from '../Reviews/Reviews';
import HowItWorks from '../HowItWorks/HowItWorks';
import AboutUS from '../AboutUs/AboutUS';

const HomePage = () => {
    return (
        <div>
            <section className='mb-14'>
                <Banner></Banner>
            </section>
            <section>
                <Advertise></Advertise>
            </section>
            <section>
                <Reviews></Reviews>
            </section>
            <section>
                <HowItWorks></HowItWorks>
            </section>
            <section>
            <AboutUS></AboutUS>
            </section>
        </div>
    );
};

export default HomePage;