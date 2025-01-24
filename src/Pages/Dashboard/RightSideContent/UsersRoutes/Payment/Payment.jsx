import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './checkoutForm';


const stripePromise=loadStripe(`${import.meta.env.VITE_Payment_Gateway_PK}`)
const Payment = () => {
    const offered=useLoaderData();
    // console.log(offered)
    return (
        <div>
            <Helmet>
                <title>Payment || KeyNest</title>
            </Helmet>
            
            <div>
                <Elements stripe={stripePromise}>
                   <CheckoutForm offered={offered}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;