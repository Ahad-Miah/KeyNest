import React from 'react';
import Banner from '../Banner/Banner';
import Advertise from '../Advertise/Advertise';
import Reviews from '../Reviews/Reviews';

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
        </div>
    );
};

export default HomePage;