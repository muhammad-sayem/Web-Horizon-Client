import React from 'react';
import heroBg from "../../assets/images/hero bg.jpg";
import heroImage from "../../assets/images/hero image.png";
import { Link } from 'react-router-dom';
import { Cursor, useTypewriter } from "react-simple-typewriter";

const HeroSection = () => {
    const [text] = useTypewriter({
        words: ["Discover & Share Top Websites - Spark Innovation!"],
        loop: 0
    });

    return (
        <div
            className="min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                WebkitMaskImage: `linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)`,
                maskImage: `linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)`
            }}
        >
            <div className="flex flex-col md:flex-row items-center justify-between text-white px-4 py-20 lg:py-10 md:px-8 lg:px-20 md:gap-8 ">
                
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">Discover Great Websites</h2>

                    <h3 className="text-2xl lg:text-3xl mb-4">Fuel Your Vision</h3>

                    <p className="text-sm sm:text-base mb-4">
                        Unveil the most inspiring and unique websites that are pushing the boundaries of digital innovation.
                        Share your discoveries and help others explore the most innovative web experiences.
                    </p>
                    <Link to="/products">
                        <button className="bg-white text-[#5A45CE] font-semibold px-6 py-3 lg:py-4 lg:px-8 rounded-full text-sm sm:text-base hover:scale-105 transition duration-200">
                            VIEW ALL WEBSITES
                        </button>
                    </Link>
                </div>

                <div className="w-full md:w-1/2 flex justify-center">
                    <img src={heroImage} alt="Hero" className="w-full h-[350px] lg:h-[550px] max-w-md md:max-w-full" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
