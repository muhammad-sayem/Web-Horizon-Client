import { Helmet } from "react-helmet";
import Carousel from "../../Components/Carousel/Carousel";
import CouponCarousel from "./CouponCarousel";
import FeaturedProducts from "./FeaturedProducts";
import TrendingProducts from "./TrendingProducts";

const Home = () => {

    return (
        <div className="w-11/12 mx-auto">
            <Carousel></Carousel>
            <FeaturedProducts></FeaturedProducts>
            <TrendingProducts></TrendingProducts>
            <CouponCarousel></CouponCarousel>
        </div>
    );
};

export default Home;