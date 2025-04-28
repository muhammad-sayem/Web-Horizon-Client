import React from 'react';
import reviewer1 from "../../assets/images/reviewer1.webp";
import reviewer2 from "../../assets/images/reviewer2.webp";
import reviewer3 from "../../assets/images/reviewer3.jpg";
import { FaStar, FaRegStarHalfStroke, FaRegStar, FaQuoteLeft } from "react-icons/fa6";

const ReviewCard = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>

            <div className='shadow-[4px_4px_10px_rgba(0,0,0,0.35)] p-6 rounded-2xl' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1500">

                <div className='flex justify-center'>
                    <img src={reviewer1} className='h-24 w-24 rounded-full border-2 border-[#f97d5e]' alt="" />
                </div>

                <h2 className='text-center text-[#1A2634] text-2xl font-bold my-2'> Lucas Williams </h2>

                <p className='text-center'> Web Horizon is a fantastic platform for discovering useful websites. The smooth interface and like feature make finding the best ones easy. Highly recommend! </p>

                <p className='text-center font-bold my-2 text-xl'> Rating </p>

                <div className='flex justify-center text-[#F19100]'>
                    <FaStar size={25}></FaStar>
                    <FaStar size={25}></FaStar>
                    <FaStar size={25}></FaStar>
                    <FaStar size={25}></FaStar>
                    <FaRegStar size={25}></FaRegStar>
                </div>
            </div>

            {/* ----------------- */}

            <div className='shadow-[4px_4px_10px_rgba(0,0,0,0.35)] p-6 rounded-2xl' data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1500">
                <div className='flex justify-center'>
                    <img src={reviewer2} className='w-24 h-24 rounded-full border-2 border-[#f97d5e]' alt="" />
                </div>
                <h2 className='text-center text-[#1A2634] text-2xl font-bold my-2'> Alexander Lee </h2>
                <p className='text-center'> Browsing new websites is effortless with Web Horizon. The upvote and downvote system helps quickly spot the best ones. A must-visit platform for exploring online trends! </p>

                <p className='text-center font-bold my-2 text-xl'> Rating </p>

                <div className='flex justify-center text-[#F19100]'>
                    <FaStar size={25}></FaStar>
                    <FaStar size={25}></FaStar>
                    <FaStar size={25}></FaStar>
                    <FaStar size={25}></FaStar>
                    <FaRegStarHalfStroke size={25}></FaRegStarHalfStroke>
                </div>
            </div>

            {/* -------------- */}

            <div className='shadow-[4px_4px_10px_rgba(0,0,0,0.35)] p-6 rounded-2xl' data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1500">
                <div className='flex justify-center'>
                    <img src={reviewer3} className='w-24 h-24 rounded-full border-2 border-[#f97d5e]' alt="" />
                </div>
                <h2 className='text-center text-[#1A2634] text-2xl font-bold my-2'> Jacob Scott </h2>

                <p className='text-center'> As a web enthusiast, I love Web Horizon’s variety. The smooth navigation, reviews, and ratings make discovering innovative websites and staying updated with trends super easy! </p>

                <p className='text-center font-bold my-2 text-xl'> Rating </p>

                <div className='flex justify-center text-[#F19100]'>
                    <FaStar size={25}></FaStar>
                    <FaStar size={25}></FaStar>
                    <FaStar size={25}></FaStar>
                    <FaStar size={25}></FaStar>
                    <FaRegStar size={25}></FaRegStar>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;