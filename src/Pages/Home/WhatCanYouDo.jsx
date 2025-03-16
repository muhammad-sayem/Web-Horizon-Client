import React from 'react';
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { VscFeedback } from "react-icons/vsc";
import { GrTechnology } from "react-icons/gr";

const WhatCanYouDo = () => {

    return (
        <div className='flex items-center gap-x-16 mb-8'>
            <div className='w-1/2'>
                <h2 className='text-5xl text-center font-black mb-8'>
                    <span className="text-[#1A2634]"> What can you do on <br /> Tech Horizon </span>
                </h2>

                <p className='text-lg'> On Tech Horizon, you can explore a wide range of innovative tech products, from web apps and AI tools to software and mobile apps. You can submit your own products, share them with the community, and gather feedback through upvotes, downvotes, and reviews. Whether you're a developer, entrepreneur, or tech enthusiast, you can discover the latest tools to enhance your work. You can also engage with other users, join discussions, and contribute to the growth of the platform. Premium users can access exclusive features, and the user-friendly interface makes navigating and finding products a seamless experience. </p>
            </div>

            {/* ------------------- */}

            <div className='w-1/2'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    <div className='shadow-xl p-5 rounded-xl'>
                        <MdOutlineTravelExplore size={60}></MdOutlineTravelExplore>
                        <h3 className='text-xl font-bold'> Explore innovative tech products </h3>
                        <p> Discover a diverse collection of cutting-edge tech products, ranging from web apps and software to AI tools and mobile apps.  </p>
                    </div>

                    <div className='shadow-xl p-5 rounded-xl'>
                        <IoIosCheckmarkCircle size={60}></IoIosCheckmarkCircle>
                        <h3 className='text-xl font-bold'> Submit Your Own Product </h3>
                        <p> Discover a diverse collection of cutting-edge tech products, ranging from web apps and software to AI tools and mobile apps.  </p>
                    </div>
                    <div className='shadow-xl p-5 rounded-xl'>
                        <VscFeedback size={60}></VscFeedback>
                        <h3 className='text-xl font-bold'> Gather Feedbacks </h3>
                        <p> Discover a diverse collection of cutting-edge tech products, ranging from web apps and software to AI tools and mobile apps.  </p>
                    </div>
                    <div className='shadow-xl p-5 rounded-xl'>
                        <GrTechnology size={60}></GrTechnology>
                        <h3 className='text-xl font-bold'> Discover Latest Tools </h3>
                        <p> Discover a diverse collection of cutting-edge tech products, ranging from web apps and software to AI tools and mobile apps.  </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatCanYouDo;