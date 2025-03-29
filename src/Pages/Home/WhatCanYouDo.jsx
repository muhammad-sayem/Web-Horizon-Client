import React from 'react';
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { VscFeedback } from "react-icons/vsc";
import { GrTechnology } from "react-icons/gr";

const WhatCanYouDo = () => {

    return (
        <div className='lg:flex items-center gap-x-16 mb-8'>
            <div className='lg:w-1/2' data-aos="fade-right" data-aos-duration="2000">
                <h2 className='text-5xl text-center font-black mb-8'>
                    <span className="text-[#1A2634] dark:text-[#87CEEB]"> What can you do on <br /> Web Horizon </span>
                </h2>

                <p className='text-lg dark:text-white'> On Web Horizon, you can explore a wide range of innovative websites, from blogs and portfolios to e-commerce platforms and web apps. You can submit your own websites, share them with the community, and gather feedback through likes and reviews. Whether you're a developer, designer, or web enthusiast, you can discover the latest websites to enhance your work. Engage with other users, join discussions, and contribute to the platform’s growth. Premium users can access exclusive features, and the user-friendly interface makes discovering and navigating websites a seamless experience.</p>

            </div>

            {/* ------------------- */}

            <div className='lg:w-1/2'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    <div className='shadow-xl dark:shadow-[1px_1px_8px_#87CEEB] p-5 rounded-xl' data-aos="fade-down-right" data-aos-duration="2000">
                        <MdOutlineTravelExplore size={60} className='dark:text-[#87CEEB]'></MdOutlineTravelExplore>
                        <h3 className='text-xl font-bold dark:text-[#87CEEB]'> Explore innovative websites </h3>
                        <p className='dark:text-white'> Discover a diverse collection of cutting-edge websites, ranging from blogs and portfolios to e-commerce platforms and web apps.  </p>
                    </div>

                    <div className='shadow-xl dark:shadow-[1px_1px_8px_#87CEEB] p-5 rounded-xl' data-aos="fade-down-left" data-aos-duration="2000">
                        <IoIosCheckmarkCircle size={60} className='dark:text-[#87CEEB]'></IoIosCheckmarkCircle>
                        <h3 className='text-xl font-bold dark:text-[#87CEEB]'> Submit your own website </h3>
                        <p className='dark:text-white'> Share your own websites with the community, showcase your projects, and gather valuable feedback from other users.  </p>
                    </div>
                    <div className='shadow-xl dark:shadow-[1px_1px_8px_#87CEEB] p-5 rounded-xl' data-aos="fade-up-right" data-aos-duration="2000">
                        <VscFeedback size={60} className='dark:text-[#87CEEB]'></VscFeedback>
                        <h3 className='text-xl font-bold dark:text-[#87CEEB]'> Gather feedbacks </h3>
                        <p className='dark:text-white'> Receive valuable feedback on your websites through upvotes, downvotes, and reviews from the Web Horizon community. </p>
                    </div>
                    <div className='shadow-xl dark:shadow-[1px_1px_8px_#87CEEB] p-5 rounded-xl' data-aos="fade-up-left" data-aos-duration="2000">
                        <GrTechnology size={60} className='dark:text-[#87CEEB]'></GrTechnology>
                        <h3 className='text-xl font-bold dark:text-[#87CEEB]'> Discover latest websites </h3>
                        <p className='dark:text-white'> Stay updated with the latest and most innovative websites that can enhance your work and online experience. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatCanYouDo;