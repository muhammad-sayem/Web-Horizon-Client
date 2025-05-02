import React from 'react';
import reviewer1 from "../../assets/images/reviewer1.webp";
import reviewer2 from "../../assets/images/reviewer2.webp";
import reviewer3 from "../../assets/images/reviewer3.jpg";
import { FaStar, FaRegStarHalfStroke, FaRegStar, FaQuoteLeft } from "react-icons/fa6";

const ReviewCard = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>

            <div className='shadow-[4px_4px_10px_rgba(0,0,0,0.35)] rounded-2xl p-4' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1500">

                <div className='flex items-center gap-x-4 mb-6'>
                    <div>
                        <img src={reviewer1} className='h-16 w-16 rounded-full' alt="" />
                    </div>

                    <div>
                        <h2 className='text-center text-[#1A2634] text-2xl font-bold'> Lucas Williams </h2>
                        <p> Software Engineer </p>
                    </div>
                </div>

                <div>
                    <p className='text-sm'> Web Horizon is a fantastic platform for discovering useful websites. The smooth interface and like feature make finding the best ones easy. It's Highly recommend! </p>

                    <p className='font-bold my-1 text-md'> Rating </p>

                    <div className='flex text-[#F19100]'>
                        <FaStar size={20}></FaStar>
                        <FaStar size={20}></FaStar>
                        <FaStar size={20}></FaStar>
                        <FaStar size={20}></FaStar>
                        <FaRegStar size={20}></FaRegStar>
                    </div>
                </div>
            </div>

            {/* ----------------- */}

            <div className='shadow-[4px_4px_10px_rgba(0,0,0,0.35)] rounded-2xl p-4' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1500">

                <div className='flex items-center gap-x-4 mb-6'>
                    <div>
                        <img src={reviewer2} className='h-16 w-16 rounded-full' alt="" />
                    </div>

                    <div>
                        <h2 className='text-center text-[#1A2634] text-2xl font-bold'> Alexander Lee </h2>
                        <p> UI/UX Designer </p>
                    </div>
                </div>

                <div>
                    <p className='text-sm'> Browsing new websites is effortless with Web Horizon. The upvote and downvote system helps quickly spot the best ones. A must-visit platform for exploring online trends! </p>

                    <p className='font-bold my-1 text-md'> Rating </p>

                    <div className='flex text-[#F19100]'>
                        <FaStar size={20}></FaStar>
                        <FaStar size={20}></FaStar>
                        <FaStar size={20}></FaStar>
                        <FaStar size={20}></FaStar>
                        <FaRegStar size={20}></FaRegStar>
                    </div>
                </div>
            </div>

            {/* -------------- */}

            <div className='shadow-[4px_4px_10px_rgba(0,0,0,0.35)] rounded-2xl p-4' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1500">

                <div className='flex items-center gap-x-4 mb-6'>
                    <div>
                        <img src={reviewer3} className='h-16 w-16 rounded-full' alt="" />
                    </div>

                    <div>
                        <h2 className='text-center text-[#1A2634] text-2xl font-bold'> Jacob Scott </h2>
                        <p> Software Engineer </p>
                    </div>
                </div>

                <div>
                    <p className='text-sm'> As a web enthusiast, I love Web Horizon’s variety. The smooth navigation, reviews, and ratings make discovering innovative websites and staying updated with trends super easy! </p>

                    <p className='font-bold my-1 text-md'> Rating </p>

                    <div className='flex text-[#F19100]'>
                        <FaStar size={20}></FaStar>
                        <FaStar size={20}></FaStar>
                        <FaStar size={20}></FaStar>
                        <FaStar size={20}></FaStar>
                        <FaRegStar size={20}></FaRegStar>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ReviewCard;