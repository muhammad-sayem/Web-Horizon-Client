import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const [reviewsText] = useTypewriter({
        words: ['User Reviews'],
        loop: 0
    });

    return (
        <div className='w-4/5 mx-auto mb-12 md:mb-20 lg:mb-32'>
            {/* <h2 className='text-4xl text-center font-bold mb-8' data-aos="fade-down" data-aos-duration="1500"> <span className="text-[#5a45ce]"> {reviewsText}<Cursor></Cursor> </span></h2> */}

            <h2 className='text-4xl text-center font-bold mb-8' data-aos="fade-down" data-aos-duration="1500">
                <span className="text-[#5a45ce]"> User Reviews </span>
            </h2>

            <ReviewCard></ReviewCard>
        </div>
    );
};

export default Reviews;