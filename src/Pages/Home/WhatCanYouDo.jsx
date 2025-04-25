import React from 'react';
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { VscFeedback } from "react-icons/vsc";
import { GrTechnology } from "react-icons/gr";
import sideImage from "../../assets/images/side image 2.jpg"

const WhatCanYouDo = () => {

    return (
        <div className='my-28 w-4/5 mx-auto'>
            <h2 className='text-5xl text-center font-black mb-8' data-aos="fade-down" data-aos-duration="1500">
                <span className="text-[#F97D5E] darkDamagetext-[#f97d5e]"> What can you do on <br /> Web Horizon </span>
            </h2>

            <div className='lg:flex items-center gap-x-16'>
                <div className='lg:w-1/2' data-aos="fade-right" data-aos-duration="2000">
                    <div>
                        <img src={sideImage} alt="" />
                    </div>

                </div>

                {/* ------------------- */}

                <div className='lg:w-1/2'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                        <div className='border border-[#F97D5E] shadow-lg darkDamageshadow-[1px_1px_8px_#f97d5e] p-5 rounded-xl' data-aos="fade-down-right" data-aos-duration="2000">
                            <MdOutlineTravelExplore size={60} className='darkDamagetext-[#f97d5e]'></MdOutlineTravelExplore>
                            <h3 className='text-xl font-bold darkDamagetext-[#f97d5e]'> Explore innovative websites </h3>
                            <p className='darkDamagetext-white'> Discover a diverse collection of cutting-edge websites, ranging from blogs and portfolios to e-commerce platforms and web apps.  </p>
                        </div>

                        <div className='border border-[#F97D5E] shadow-lg darkDamageshadow-[1px_1px_8px_#f97d5e] p-5 rounded-xl' data-aos="fade-down-left" data-aos-duration="2000">
                            <IoIosCheckmarkCircle size={60} className='darkDamagetext-[#f97d5e]'></IoIosCheckmarkCircle>
                            <h3 className='text-xl font-bold darkDamagetext-[#f97d5e]'> Submit your own website </h3>
                            <p className='darkDamagetext-white'> Share your own websites with the community, showcase your projects, and gather valuable feedback from other users.  </p>
                        </div>
                        <div className='border border-[#F97D5E] shadow-lg darkDamageshadow-[1px_1px_8px_#f97d5e] p-5 rounded-xl' data-aos="fade-up-right" data-aos-duration="2000">
                            <VscFeedback size={60} className='darkDamagetext-[#f97d5e]'></VscFeedback>
                            <h3 className='text-xl font-bold darkDamagetext-[#f97d5e]'> Gather feedbacks </h3>
                            <p className='darkDamagetext-white'> Receive valuable feedback on your websites through upvotes, downvotes, and reviews from the Web Horizon community. </p>
                        </div>
                        <div className='border border-[#F97D5E] shadow-lg darkDamageshadow-[1px_1px_8px_#f97d5e] p-5 rounded-xl' data-aos="fade-up-left" data-aos-duration="2000">
                            <GrTechnology size={60} className='darkDamagetext-[#f97d5e]'></GrTechnology>
                            <h3 className='text-xl font-bold darkDamagetext-[#f97d5e]'> Discover latest websites </h3>
                            <p className='darkDamagetext-white'> Stay updated with the latest and most innovative websites that can enhance your work and online experience. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatCanYouDo;