// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'


import bgimg1 from '../../assets/images/slider image 1.jpg'
import bgimg2 from '../../assets/images/slider image 2.jpg'
import bgimg3 from '../../assets/images/slider image 3.jpg'
import Slide from './Slide'

export default function Carousel() {
    return (
        <div className='mx-auto'>
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
                <SwiperSlide>
                    <Slide
                        image={bgimg1}
                        text='Discover & Share the Best Tech Products - A World of Innovation Awaits'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={bgimg2}
                        text='Showcase Your Innovation & Explore the Best in Tech – Bringing Ideas to the Spotlight!Discover & Share the Best Tech Products – A World of Innovation Awaits!'
                        
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={bgimg3}
                        text='Upvote, Review & Explore the Latest Innovations – Experience the Tech That Sets New Standards!'
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
} 