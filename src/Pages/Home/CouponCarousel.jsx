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
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

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
    <div className='w-4/5 mx-auto mb-12 md:mb-20 lg:mb-32'>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-8 text-center text-[#5a45ce]" data-aos="fade-down" data-aos-duration="1500"> {text} <Cursor></Cursor> </h2>

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
        className='mySwiper' data-aos="fade-up" data-aos-duration="1500"
      >
        {allCoupons.map((coupon, index) => (
          <SwiperSlide key={index}>
            <div className='flex justify-center bg-transparent rounded-md border-2 border-[#5A45CE] h-auto text-[#5a45ce] md:px-5 lg:px-20'>
              <div className='text-center py-5'>
                <div className='flex justify-center items-center gap-x-2 mb-2'>
                  <FaStar size={30} />
                  <h2 className='text-3xl font-bold'> Coupon </h2>
                  <FaStar size={30} />
                </div>

                <div className='pb-5'>
                  <div className='text-[#5a45ce] px-12 md:px-48 lg:px-96 py-1 mb-4'>
                    <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-2'> Flat ${coupon.discountAmount} Off </h3>
                    <p className='text-xl font-bold'> Coupon Code: {coupon.couponCode} </p>
                  </div>

                  <p className='text-md lg:text-xl'> {coupon.couponDescription} </p>
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
