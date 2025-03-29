import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const [reviewsText] = useTypewriter({
        words: ['User Reviews'],
        loop: 0
    });

    return (
        <div className='w-11/12 mx-auto mb-8'>
            <h2 className='text-4xl text-center font-black mb-8' data-aos="fade-left" data-aos-duration="2000">
                <span className="text-[#1A2634] dark:text-[#87CEEB]"> {reviewsText}<Cursor></Cursor> </span>
            </h2>

            <ReviewCard></ReviewCard>
        </div>
    );
};

export default Reviews;