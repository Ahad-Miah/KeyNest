import React from 'react';
import Banner from '../Banner/Banner';
import Advertise from '../Advertise/Advertise';

const HomePage = () => {
    return (
        <div>
            <section className='mb-14'>
                <Banner></Banner>
            </section>
            <section>
                <Advertise></Advertise>
            </section>
        </div>
    );
};

export default HomePage;