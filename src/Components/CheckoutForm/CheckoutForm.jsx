import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import './CheckoutForm.css';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const CheckoutForm = ({ subscriptionCost}) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState('');

  const { data: allUsers = [], isLoading, refetch } = useQuery({
    queryKey: ['allUsers'],
    queryFn: async () => {
      const { data } = await axiosSecure.get('/users');
      return data;
    }
  });

  const currUser = allUsers.find(singleUser => singleUser?.email === user?.email);

  useEffect(() => {
    getPaymentIntent()
  }, []);
  console.log(clientSecret);

  const getPaymentIntent = async () => {
    try {
      const { data } = await axiosSecure.post('/create-payment-intent', { price: subscriptionCost });
      setClientSecret(data.clientSecret)
    }
    catch (err) {
      console.log(err);
    }
  }

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
    // Confirm payment //
    const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: user?.displayName,
          email: user?.email
        },
      },
    })
    // console.log(data);

    if (paymentIntent.status === 'succeeded') {
      try {
        await axiosSecure.patch(`/user/status-subscribed/${currUser._id}`);
        document.getElementById(`my_modal_${currUser?.email}`).close();
        refetch();
        Swal.fire({
          title: "Subscription Purchased",
          icon: "success"
        });
        
      }
      catch (err) {
        console.log(err);
        Swal.fire({
          title: "Something Went Wrong",
          icon: "error"
        });
      }
    }
  };

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
      <button type="submit" className='btn w-full bg-[#6D1212] text-[#FFF5D1]' disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;