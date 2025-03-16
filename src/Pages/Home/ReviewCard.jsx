import React from 'react';
import reviewer1 from "../../assets/images/reviewer1.jpg";
import reviewer2 from "../../assets/images/reviewer2.jpg";
import reviewer3 from "../../assets/images/reviewer3.jpg";
import { FaStar, FaRegStarHalfStroke, FaRegStar, FaQuoteLeft } from "react-icons/fa6";

const ReviewCard = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <div className='shadow-xl p-8 dark:border-2 border-[#F19100]' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="2000">
                <div className='flex justify-center'>
                    <img src={reviewer1} className='w-16 h-16 rounded-full' alt="" />
                </div>
                <h2 className='text-center text-[#1A2634] text-2xl font-bold my-2'> Lucas Williams </h2>

                <p className='text-center dark:text-white'> Tech Horizon has completely transformed how I discover new tech products. The user interface is smooth, and I love the upvote/downvote feature. It's easy to navigate, and I’ve found some incredible tools that have enhanced my work. Highly recommend it to anyone in tech! </p>

                <p className='text-center font-bold my-2 text-lg dark:text-white dark:font-bold'> Rating </p>

                <div className='flex justify-center text-[#F19100]'>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaRegStar></FaRegStar>
                </div>
            </div>

            {/* ----------------- */}

            <div className='shadow-xl p-8 dark:border-2 border-[#F19100]' data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="2000">
                <div className='flex justify-center'>
                    <img src={reviewer2} className='w-16 h-16 rounded-full' alt="" />
                </div>
                <h2 className='text-center text-[#1A2634] text-2xl font-bold my-2'> Alexander Lee </h2>
                <p className='text-center dark:text-white'> Discovering new tech products has never been easier. The user-friendly interface on Tech Horizon makes browsing effortless. The upvote and downvote features allow me to see the best products. It's a game-changer for anyone looking to stay on top of the latest tech tools! </p>

                <p className='text-center font-bold my-2 text-lg dark:text-white dark:font-bold'> Rating </p>

                <div className='flex justify-center text-[#F19100]'>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaRegStarHalfStroke></FaRegStarHalfStroke>
                </div>
            </div>

            {/* -------------- */}

            <div className='shadow-xl p-8 dark:border-2 border-[#F19100]' data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="2000">
                <div className='flex justify-center'>
                    <img src={reviewer3} className='w-16 h-16 rounded-full' alt="" />
                </div>
                <h2 className='text-center text-[#1A2634] text-2xl font-bold my-2'> Jacob Scott </h2>
                <p className='text-center dark:text-white'> As a tech enthusiast, I’m impressed by the variety of products on Tech Horizon. The platform is easy to navigate, and the reviews and ratings help me choose the best tools. It’s my go-to site for discovering cutting-edge tech and staying ahead of the curve! </p>

                <p className='text-center font-bold my-2 text-lg dark:text-white dark:font-bold'> Rating </p>

                <div className='flex justify-center text-[#F19100]'>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaRegStar></FaRegStar>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;