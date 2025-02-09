/* eslint-disable react/prop-types */
import { Link, NavLink } from 'react-router-dom'

const Slide = ({ image, text }) => {
    return (
        <div
            className='w-full bg-center bg-cover h-[38rem]'
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold text-[#FFF5D1] lg:text-5xl px-16 mb-4'>
                        {text}
                    </h1>
                    <br />
                    <NavLink
                        to='/artifacts'
                        className='w-full px-5 py-4 mt-4 text-lg font-bold capitalize transition-colors duration-300 transform bg-[#FFF5D1] text-[#6D1212] rounded-md lg:w-auto hover:bg-[#6D1212] hover:text-[#FFF5D1] hover:border-4 border-[#FFF5D1] focus:outline-none focus:bg-[#f6a62e]'
                    >
                        View All Products
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Slide