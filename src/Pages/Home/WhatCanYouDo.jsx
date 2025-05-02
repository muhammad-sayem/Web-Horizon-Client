import React from 'react';
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { VscFeedback } from "react-icons/vsc";
import { GrTechnology } from "react-icons/gr";
import sideImage from "../../assets/images/side image 2.jpg"

const WhatCanYouDo = () => {

    return (
        <div className='my-12 md:my-20 lg:my-32 w-4/5 mx-auto'>

            <h2 className='text-4xl text-center font-bold mb-4 lg:mb-8' data-aos="fade-down" data-aos-duration="1500">
                <span className="text-[#5a45ce]"> What can you do on Web Horizon </span>
            </h2>

            <div className='lg:flex items-center space-y-6 gap-x-16'>
                <div className='lg:w-1/2' data-aos="fade-right" data-aos-duration="2000">
                    <div>
                        <img src={sideImage} alt="" className='rounded-xl border border-[#5a45ce]' />
                    </div>

                </div>

                {/* ------------------- */}

                <div className='lg:w-1/2'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='border border-[#5a45ce] shadow-lg p-5 rounded-xl' data-aos="fade-down-right" data-aos-duration="2000">
                            <MdOutlineTravelExplore size={60}></MdOutlineTravelExplore>
                            <h3 className='text-lg font-bold'> Explore innovative websites </h3>
                            <p className='text-md'> Discover a diverse collection of cutting-edge websites, ranging from blogs and portfolios to e-commerce platforms and web apps.  </p>
                        </div>

                        <div className='border border-[#5a45ce] shadow-lg p-5 rounded-xl' data-aos="fade-down-left" data-aos-duration="2000">
                            <IoIosCheckmarkCircle size={60}></IoIosCheckmarkCircle>
                            <h3 className='text-lg font-bold'> Submit your own website </h3>
                            <p className='text-md'> Share your own websites with the community, showcase your projects, and gather valuable feedback from other users.  </p>
                        </div>
                        <div className='border border-[#5a45ce] shadow-lg p-5 rounded-xl' data-aos="fade-up-right" data-aos-duration="2000">
                            <VscFeedback size={60}></VscFeedback>
                            <h3 className='text-lg font-bold'> Gather feedbacks </h3>
                            <p className='text-md'> Receive valuable feedback on your websites through upvotes, downvotes, and reviews from the Web Horizon community. </p>
                        </div>
                        <div className='border border-[#5a45ce] shadow-lg p-5 rounded-xl' data-aos="fade-up-left" data-aos-duration="2000">
                            <GrTechnology size={60}></GrTechnology>
                            <h3 className='text-lg font-bold'> Discover latest websites </h3>
                            <p className='text-md'> Stay updated with the latest and most innovative websites that can enhance your work and online experience. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatCanYouDo;