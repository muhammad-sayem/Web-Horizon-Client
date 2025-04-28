import React from 'react';
import heroImage from "../../assets/images/hero image.jpg";
import { Link } from 'react-router-dom';
import { Cursor, useTypewriter } from "react-simple-typewriter";

const HeroSection = () => {
    const [text] = useTypewriter({
        words: ["Discover & Share Top Websites – Spark Innovation!"],
        loop: 0
    });

    return (
        <div className="min-h-screen bg-cover bg-center" style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImage})`, backgroundSize: 'cover',
            backgroundPosition: 'center', WebkitMaskImage: `linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)`, maskImage: `linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)`,
        }}>

            <div className="text-center p-32 text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover & Share the Best Websites – Unleash Digital Innovation!</h1>

                {/* <h2 className="text-[#f97d5e] text-6xl font-bold text-center"> {text} <Cursor></Cursor> </h2> */}

                <p className="text-lg md:text-2xl mb-6">Unveil the most inspiring and unique websites that are pushing the boundaries of digital innovation. Share your discoveries and help others explore the most innovative web experiences.</p>

                <Link to='/products'>
                    <button className='text-xl font-bold border-4 border-[#f97d5e] bg-white text-[#f97d5e] py-3 px-8 rounded-xl transition-transform duration-200 ease-in-out transform hover:scale-105'> View All Websites </button>
                </Link>
            </div>

        </div>
    );
};

export default HeroSection;