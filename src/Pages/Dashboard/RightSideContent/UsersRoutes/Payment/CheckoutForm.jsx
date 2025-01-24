import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useAxiosSecure from '../../../../../hooks/useAxiosSecure/useAxiosSecure';
import { AuthContext } from '../../../../../Provider/AuthProvider/AuthProvider';

const CheckoutForm = ({offered}) => {
    const [transactionId,setTransactionId]=useState('');
    const [clientSecret,setClientSecret]=useState('');
    const {user}=useContext(AuthContext);

    const stripe = useStripe();
  const elements = useElements();
  const axiosSecure=useAxiosSecure();
  const price=parseInt(offered.offerPrice)

  useEffect(()=>{
            axiosSecure.post('create-payment-intent',{price})
            .then(res=>{
                // console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret)
              })
  },[price,axiosSecure])
  

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
          return;
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });

          if (error) {
            console.log('error', error);
            toast.error(`${error.message}`)
          } else {
            // console.log('PaymentMethod', paymentMethod);
          }

        //   confirm payment
        const {error:confirmError ,paymentIntent} = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:card,
                billing_details:{
                    email:user?.email || "anonymous",
                    name:user?.displayName  || "anonymous",
                }
            }
        })
        if(confirmError){
            toast.error(`${confirmError.message}`)
        }else{
            // console.log('paymentIntent',paymentIntent);
            if(paymentIntent.status==="succeeded"){
                setTransactionId(paymentIntent.id);
                const paymentInfo={
                    transactionId:paymentIntent.id,
                    buyerEmail:user?.email,
                    buyerName:user?.displayName,
                    agentEmail:offered?.agentEmail,
                    agentName:offered?.agentName,
                    propertyTitle:offered?.propertyTitle,
                    propertyLocation:offered?.propertyLocation,
                    soldPrice:price,
                    offerId:offered?._id
                }
                axiosSecure.post('paymentInfo',paymentInfo)
                .then(result=>{
                        if(result.data.insertedId){
                            toast.success(`Payment Success! Transaction Id: ${paymentIntent.id}`);
                        }
                        
                    });
            }
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            {
                transactionId?<h2 className='text-green-700 font-semibold'>Transaction Id: {transactionId}</h2>:<button className='btn btn-neutral mt-6 font-bold px-8' type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            }
            
        </form>
    );
};

export default CheckoutForm;