import Carousel from "../../Components/Carousel/Carousel";
import CouponCarousel from "./CouponCarousel";
import Faqs from "./Faqs";
import FeaturedProducts from "./FeaturedProducts";
import HeroSection from "./HeroSection";
import Reviews from "./Reviews";
import TrendingProducts from "./TrendingProducts";
import Users from "./Users";
import WhatCanYouDo from "./WhatCanYouDo";

const Home = () => {

    return (
        <div>
            <div className="mb-16">
                {/* <Carousel></Carousel> */}
                <HeroSection></HeroSection>
            </div>
            <div>
                <div className="">
                    <FeaturedProducts></FeaturedProducts>
                    <TrendingProducts></TrendingProducts>
                </div>
                <WhatCanYouDo></WhatCanYouDo>
                <Users></Users>
                <Reviews></Reviews>
                <CouponCarousel></CouponCarousel>
                {/* <Faqs></Faqs> */}
            </div>
        </div>
    );
};

export default Home;