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
        <div className="w-11/12 mx-auto">
            <Carousel></Carousel>
            <FeaturedProducts></FeaturedProducts>
            <TrendingProducts></TrendingProducts>
            <WhatCanYouDo></WhatCanYouDo>
            <Users></Users>
            <Reviews></Reviews>
            <CouponCarousel></CouponCarousel>
            <Faqs></Faqs>
        </div>
    );
};

export default Home;