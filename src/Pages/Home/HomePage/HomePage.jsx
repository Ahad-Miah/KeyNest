import React from 'react';
import Banner from '../Banner/Banner';
import Advertise from '../Advertise/Advertise';
import Reviews from '../Reviews/Reviews';
import HowItWorks from '../HowItWorks/HowItWorks';
import AboutUS from '../AboutUs/AboutUS';
import { Helmet } from 'react-helmet-async';
import Faq from '../Faq/Faq';
import WhyChooseUS from '../WhyChooseUS/WhyChooseUS';

const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>KeyNest</title>
            </Helmet>
            <section>
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
            <section>
                <WhyChooseUS></WhyChooseUS>
            </section>
            <section>
                <Faq></Faq>
            </section>
        </div>
    );
};

export default HomePage;