import Carousel from "../../Components/Carousel/Carousel";
import FeaturedProducts from "./FeaturedProducts";
import TrendingProducts from "./TrendingProducts";

const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Carousel></Carousel>
            <FeaturedProducts></FeaturedProducts>
            <TrendingProducts></TrendingProducts>
        </div>
    );
};

export default Home;