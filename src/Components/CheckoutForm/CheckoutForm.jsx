import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import './CheckoutForm.css';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const CheckoutForm = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState('');
  const [coupon, setCoupon] = useState('');
  const [subscriptionCost, setSubscriptionCost] = useState(90); // Original price
  const [discountedPrice, setDiscountedPrice] = useState(subscriptionCost); // Discounted price

  const { data: allUsers = [], isLoading, refetch } = useQuery({
    queryKey: ['allUsers'],
    queryFn: async () => {
      const { data } = await axiosSecure.get('/users');
      return data;
    }
  });

  const currUser = allUsers.find(singleUser => singleUser?.email === user?.email);

  
  useEffect(() => {
    getPaymentIntent(discountedPrice);
  }, [discountedPrice]);

  
  const getPaymentIntent = async (price) => {
    try {
      const { data } = await axiosSecure.post('/create-payment-intent', { price });
      setClientSecret(data.clientSecret);
    } catch (err) {
      console.log(err);
    }
  };

  const stripe = useStripe();
  const elements = useElements();


  const handleApplyCoupon = (coupon) => {
    let newPrice = subscriptionCost;
    if (coupon === 'HAPPINESS20') {
      newPrice = subscriptionCost - 20;
    } 
    else if (coupon === 'HAPPINESS15') {
      newPrice = subscriptionCost - 15;
    }
    else if (coupon === 'HAPPINESS10') {
      newPrice = subscriptionCost - 10;
    }
    setDiscountedPrice(newPrice);
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: user?.displayName,
          email: user?.email
        },
      },
    });

    if (error) {
      console.log('[error]', error);
      Swal.fire({
        title: "Payment Failed",
        text: error.message,
        icon: "error"
      });
    } else if (paymentIntent.status === 'succeeded') {
      try {
        await axiosSecure.patch(`/user/status-subscribed/${currUser._id}`);
        document.getElementById(`my_modal_${currUser?.email}`).close();
        refetch();
        Swal.fire({
          title: "Subscription Purchased",
          icon: "success"
        });
      } catch (err) {
        console.log(err);
        Swal.fire({
          title: "Something Went Wrong",
          icon: "error"
        });
      }
    }
  };

  return (
    <div>
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
        <p className='text-[#6D1212] text-lg font-bold'>Enter coupon (if available)</p>
        <div className="mt-3 mb-6 flex gap-x-2">
          <input
            type="text"
            name="coupon"
            placeholder="Enter Coupon"
            className="input input-bordered w-full"
            onChange={(e) => setCoupon(e.target.value)}
          />
          <button
            type="button" 
            onClick={() => handleApplyCoupon(coupon)}
            className='btn'
          >
            Apply
          </button>
        </div>
        <button type="submit" className='btn w-full bg-[#6D1212] text-[#FFF5D1]' disabled={!stripe || !clientSecret}>
          Pay ${discountedPrice}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;