import React from 'react';
import reviewer1 from "../../assets/images/reviewer1.webp";
import reviewer2 from "../../assets/images/reviewer2.webp";
import reviewer3 from "../../assets/images/reviewer3.jpg";
import { FaStar, FaRegStarHalfStroke, FaRegStar, FaQuoteLeft } from "react-icons/fa6";

const ReviewCard = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>

            <div className='shadow-[4px_4px_10px_rgba(0,0,0,0.35)] darkDamageshadow-[1px_1px_8px_#f97d5e] p-6 rounded-2xl' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="2000">
                <div className='flex justify-center'>
                    <img src={reviewer1} className='w-24 h-24 rounded-full' alt="" />
                </div>
                <h2 className='text-center text-[#1A2634] text-2xl font-bold my-2 darkDamagetext-[#f97d5e]'> Lucas Williams </h2>

                <p className='text-center darkDamagetext-white'> Web Horizon is a great platform for discovering new websites. The interface is smooth, and the like feature makes it easy to find the best ones. Navigation is simple, and I’ve come across some amazing websites that have been really useful. Highly recommend it to anyone looking for quality websites! </p>

                <p className='text-center font-bold my-2 text-xl darkDamagefont-bold darkDamagetext-[#f97d5e]'> Rating </p>

                <div className='flex justify-center text-[#F19100]'>
                    <FaStar size={25}></FaStar>
                    <FaStar size={25}></FaStar>
                    <FaStar size={25}></FaStar>
                    <FaStar size={25}></FaStar>
                    <FaRegStar size={25}></FaRegStar>
                </div>
            </div>

            {/* ----------------- */}

            <div className='shadow-[4px_4px_10px_rgba(0,0,0,0.35)] darkDamageshadow-[1px_1px_8px_#f97d5e] p-6 rounded-2xl' data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="2000">
                <div className='flex justify-center'>
                    <img src={reviewer2} className='w-24 h-24 rounded-full' alt="" />
                </div>
                <h2 className='text-center text-[#1A2634] text-2xl font-bold my-2 darkDamagetext-[#f97d5e]'> Alexander Lee </h2>
                <p className='text-center darkDamagetext-white'> Discovering new websites has never been easier. The user-friendly interface on Web Horizon makes browsing effortless. The upvote and downvote features help me find the best sites quickly. It's a game-changer for anyone looking to explore top websites and stay updated with the latest online trends! </p>

                <p className='text-center font-bold my-2 text-xl darkDamagefont-bold darkDamagetext-[#f97d5e]'> Rating </p>

                <div className='flex justify-center text-[#F19100]'>
                    <FaStar size={25}></FaStar>
                    <FaStar size={25}></FaStar>
                    <FaStar size={25}></FaStar>
                    <FaStar size={25}></FaStar>
                    <FaRegStarHalfStroke size={25}></FaRegStarHalfStroke>
                </div>
            </div>

            {/* -------------- */}

            <div className='shadow-[4px_4px_10px_rgba(0,0,0,0.35)] darkDamageshadow-[1px_1px_8px_#f97d5e] p-6 rounded-2xl' data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="2000">
                <div className='flex justify-center'>
                    <img src={reviewer3} className='w-24 h-24 rounded-full' alt="" />
                </div>
                <h2 className='text-center text-[#1A2634] text-2xl font-bold my-2 darkDamagetext-[#f97d5e]'> Jacob Scott </h2>

                <p className='text-center darkDamagetext-white'> As a web enthusiast, I’m impressed by the variety of websites on Web Horizon. The platform is easy to navigate, and the reviews and ratings help me find the best sites. It’s my go-to place for discovering innovative websites, exploring new trends, and staying updated with the latest in the online world!</p>

                <p className='text-center font-bold my-2 text-xl darkDamagefont-bold darkDamagetext-[#f97d5e]'> Rating </p>

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