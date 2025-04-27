import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const [reviewsText] = useTypewriter({
        words: ['User Reviews'],
        loop: 0
    });

    return (
        <div className='w-4/5 mx-auto mb-32'>
            <h2 className='text-4xl text-center font-black mb-8' data-aos="fade-down" data-aos-duration="1500">
                <span className="text-[#F97D5E]"> {reviewsText}<Cursor></Cursor> </span>
            </h2>

            <ReviewCard></ReviewCard>
        </div>
    );
};

export default Reviews;