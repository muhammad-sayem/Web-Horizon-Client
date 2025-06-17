import React from 'react';
import { FaCircleQuestion } from "react-icons/fa6";

const WhyChooseUs = () => {
    return (
        <div className='mt-32 mb-28 w-4/6 mx-auto text-[#5A45CE]'>
            <h3 className='text-5xl text-[#5a45ce] font-bold mb-4 text-center' data-aos="fade-down" data-aos-duration="1500"> Why Choose Us </h3>

            <div className='bg-[#cec5ff] p-12 rounded-xl' data-aos="fade-up" data-aos-duration="1500">
                <div className='flex items-center gap-x-2'>
                    <FaCircleQuestion size={20}></FaCircleQuestion>
                    <h4 className='text-2xl font-bold'> Looking for a place where your website truly stands out? </h4>
                </div>
                <p className='text-xl mb-3'> Unlike many platforms that favor well-funded or viral projects, we believe in lifting up creators from all backgrounds. Whether you're a solo developer, student, or startup — your work matters here. </p>

                <div className='flex items-center gap-x-2'>
                    <FaCircleQuestion size={20}></FaCircleQuestion>
                    <h4 className='text-2xl font-bold'> Need a supportive space to showcase your digital work? </h4>
                </div>
                <p className='text-xl mb-3'> Web Horizon is more than just a listing site — it’s a community. Users can upvote, comment, and provide valuable feedback to help creators improve, grow, and feel recognized. </p>

                <div className='flex items-center gap-x-2'>
                    <FaCircleQuestion size={20}></FaCircleQuestion>
                    <h4 className='text-2xl font-bold'> Want to discover unique and innovative websites every day? </h4>
                </div>
                <p className='text-xl mb-3'> Web Horizon is all about fresh content. Users can explore a wide variety of creative, functional, and inspiring websites submitted by real developers and designers — updated regularly to keep discovery exciting. </p>

                <div className='flex items-center gap-x-2'>
                    <FaCircleQuestion size={20}></FaCircleQuestion>
                    <h4 className='text-2xl font-bold'> Tired of platforms that overlook small creators? </h4>
                </div>
                <p className='text-xl mb-3'> Unlike many platforms that favor well-funded or viral projects, we believe in lifting up creators from all backgrounds. Whether you're a solo developer, student, or startup — your work matters here. </p>

                <div className='flex items-center gap-x-2'>
                    <FaCircleQuestion size={20}></FaCircleQuestion>
                    <h4 className='text-2xl font-bold'> Looking for more than just empty likes? </h4>
                </div>
                <p className='text-xl mb-3'> We focus on meaningful interaction. Every upvote and comment on Web Horizon comes from someone genuinely interested in tech, design, and innovation — not bots or random scrolls. </p>

                <div className='flex items-center gap-x-2'>
                    <FaCircleQuestion size={20}></FaCircleQuestion>
                    <h4 className='text-2xl font-bold'> Want to be part of a growing tech community? </h4>
                </div>
                <p className='text-xl mb-3'> Web Horizon brings together web lovers, creators, and learners in one place. It’s a space to connect, collaborate, and stay updated with the latest trends in the world of websites </p>
            </div>
        </div>
    );
};

export default WhyChooseUs;