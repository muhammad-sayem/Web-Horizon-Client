// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import bgimg1 from '../../assets/images/slider image1.webp'
import bgimg2 from '../../assets/images/slider image2.webp'
import bgimg3 from '../../assets/images/slider image3.webp'
import Slide from './Slide'

export default function Carousel() {
    return (
        <div className='mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper'
            >
                <SwiperSlide>
                    <Slide
                        image={bgimg1}
                        text='Discover & Share the Best Websites – Unleash Digital Innovation!'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={bgimg2}
                        text=' Showcase Your Website & Explore the Web’s Finest – Elevate Your Online Presence!'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={bgimg3}
                        text='Like, Review & Explore Cutting-Edge Websites – Shaping the Future of the Web!'
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
} 