import Carousel from "../../Components/Carousel/Carousel";
import CouponCarousel from "./CouponCarousel";
import Faqs from "./Faqs";
import FeaturedProducts from "./FeaturedProducts";
import Reviews from "./Reviews";
import TrendingProducts from "./TrendingProducts";
import Users from "./Users";
import WhatCanYouDo from "./WhatCanYouDo";

const Home = () => {

    return (
        <div>
            <Carousel></Carousel>
            <div className="w-11/12 mx-auto">
                <FeaturedProducts></FeaturedProducts>
                <TrendingProducts></TrendingProducts>
                <WhatCanYouDo></WhatCanYouDo>
                <Users></Users>
                <Reviews></Reviews>
                <CouponCarousel></CouponCarousel>
                <Faqs></Faqs>
            </div>
        </div>
    );
};

export default Home;