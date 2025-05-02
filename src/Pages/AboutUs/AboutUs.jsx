import React from 'react';
import thinkImage from "../../assets/images/think.png";
import inspirationImage from "../../assets/images/inspiration.svg";

const AboutUs = () => {
    return (
        <div className='mt-20 md:mt-24 lg:mt-32 mb-12 md:mb-24 lg:mb-32 w-4/5 mx-auto'>
            <div className='text-center mb-8 lg:mb-14'>
                <h3 className='text-2xl md:text-3xl lg:text-4xl text-[#5a45ce] font-bold mb-4' data-aos="fade-down" data-aos-duration="1500"> Our Mission </h3>

                <p className='text-md md:text-lg lg:text-xl font-bold' data-aos="zoom-in-up" data-aos-duration="1500"> Web Horizon is where innovation meets visibility — a platform to discover, share, and support amazing websites. </p>
            </div>

            <div className='mb-16'>
                <h3 className='text-2xl md:text-3xl lg:text-4xl text-center text-[#5a45ce] font-bold mb-4 lg:mb-8' data-aos="fade-down" data-aos-duration="1500"> How Web Horizon Started </h3>

                <div className='lg:flex items-center justify-between gap-x-16 space-y-10 lg:space-y-0'>

                    <div className='lg:w-1/2' data-aos="fade-left" data-aos-duration="1500">
                        <p className='text-md md:text-lg lg:text-xl font-bold text-center lg:text-left'> Web Horizon was born out of a simple idea — to create a space where the most creative and useful websites don’t get buried under noise. In a digital world overflowing with content, we saw a gap: there wasn’t a dedicated platform that celebrated fresh ideas, clever builds, and the amazing work of developers, designers, and creators from around the world. What started as a small side project quickly grew into a bigger vision — a community-driven hub for discovering, sharing, and supporting innovative websites. </p>
                    </div>

                    <div className='lg:w-1/2' data-aos="fade-right" data-aos-duration="1500">
                        <img src={thinkImage} alt="" className='w-full border-2 border-[#5A45CE] rounded-xl'/>
                    </div>

                </div>
            </div>

            {/* ------------------------------------ */}

            <div>
                <h3 className='text-2xl md:text-3xl lg:text-4xl text-center text-[#5a45ce] font-bold mb-4 lg:mb-8' data-aos="fade-down" data-aos-duration="1500"> Our Journey and Inspiration </h3>

                <div className='flex flex-col-reverse gap-8 lg:flex-row items-center gap-x-14'>
                    <div className='lg:w-1/2 ' data-aos="fade-right" data-aos-duration="1500">
                        <img src={inspirationImage} alt="" className='w-full' />
                    </div>

                    <div className='lg:w-1/2' data-aos="fade-left" data-aos-duration="1500">
                        <p className='text-md md:text-lg lg:text-xl font-bold text-center lg:text-left'> Web Horizon started as a small side project with a clear purpose — to highlight creative and useful websites that often go unnoticed. Many talented developers and designers build amazing projects, but without the right exposure, their work can get lost in the noise. This inspired the creation of a platform where creators can share their websites, gain recognition, and connect with a supportive community. Over time, that small idea evolved into a growing space powered by innovation, passion, and a shared love for the web.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;