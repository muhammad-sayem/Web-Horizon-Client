/* eslint-disable react/prop-types */
import { Link, NavLink } from 'react-router-dom'

const Slide = ({ image, text }) => {
    return (
        <div
            className='w-full bg-center bg-cover h-[25rem] md:min-h-screen'
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold text-[#f97d5e] lg:text-5xl px-16 mb-4'>
                        {text}
                    </h1>
                    <br />
                    <NavLink
                        to='/products'
                        className='w-full px-5 py-4 mt-4 text-lg font-bold capitalize transition-colors duration-300 transform bg-[#f97d5e] text-[#1A2634] rounded-md lg:w-auto hover:bg-[#1A2634] hover:text-[#f97d5e] hover:border-4 border-[#f97d5e] focus:outline-none focus:bg-[#f6a62e]'
                    >
                        View All Products
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Slide