// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import CouponSlide from './CouponSlide';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

export default function CouponCarousel() {
  const axiosSecure = useAxiosSecure();

  const { data: allCoupons = [] } = useQuery({
    queryKey: ['all-coupons'],
    queryFn: async () => {
      const { data } = await axiosSecure.get('/coupons');
      return data;
    }
  });

  console.log(allCoupons);

  return (
    <div className='mx-auto my-12'>
      <h2 className="text-4xl text-[#6D1212] font-bold mb-8"> Available Offers </h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <div>
          
          {
            allCoupons.map(coupon => (
              <SwiperSlide>
                <div className='flex justify-center w-full h-72 bg-[#FFF5D1]'>
                  <div className='text-center py-5'>
                    <div className='flex justify-center items-center gap-x-2 mb-6'>
                      <FaStar size={30}></FaStar> <h2 className='text-3xl font-bold'> Coupon </h2> <FaStar size={30}></FaStar>

                    </div>

                    <div>
                      <div className='text-white bg-red-600 px-96 py-1 mb-4'>
                        <h3 className='text-5xl font-bold mb-2'> Flat ${coupon.discountAmount} Off </h3>
                        <p className='text-xl font-bold'> Coupon Code: {coupon.couponCode} </p>
                      </div>

                      <p className='text-xl'> {coupon.couponDescription} </p>

                      <p className='text-lg font-bold'> The Coupon expires on: {coupon.expiryDate} </p>
                    </div>

                    <br />
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </div>
      </Swiper>
    </div>
  )
} 