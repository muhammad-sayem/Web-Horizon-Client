// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

export default function CouponCarousel() {
  const [text] = useTypewriter({
    words: ["Available Offers"],
    loop: 0
  })

  const axiosSecure = useAxiosSecure();

  const { data: allCoupons = [] } = useQuery({
    queryKey: ['all-coupons'],
    queryFn: async () => {
      const { data } = await axiosSecure.get('/coupons');
      return data;
    }
  });

  return (
    <div className='mx-auto my-12'>
      <h2 className="text-3xl text-[#1A2634] font-bold mb-8"> {text} <Cursor></Cursor> </h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        {allCoupons.map((coupon, index) => (
          <SwiperSlide key={index}>
            <div className='flex justify-center w-full h-[350px] md:h-[300px] lg:h-72 bg-[#1A2634] text-[#87CEEB]'>
              <div className='text-center py-5'>
                <div className='flex justify-center items-center gap-x-2 mb-6'>
                  <FaStar size={30} />
                  <h2 className='text-3xl font-bold'> Coupon </h2>
                  <FaStar size={30} />
                </div>

                <div>
                  <div className='text-[#1A2634] bg-[#87CEEB] px-12 md:px-48 lg:px-96 py-1 mb-4'>
                    <h3 className='text-5xl font-bold mb-2'> Flat ${coupon.discountAmount} Off </h3>
                    <p className='text-xl font-bold'> Coupon Code: {coupon.couponCode} </p>
                  </div>

                  <p className='text-xl'> {coupon.couponDescription} </p>
                  <p className='text-lg font-bold'> The Coupon expires on: {coupon.expiryDate} </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
