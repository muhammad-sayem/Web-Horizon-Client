import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import TrendingProductCard from "./TrendingProductCard";
import { Link } from "react-router-dom";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const TrendingProducts = () => {
    const [text] = useTypewriter({
        words: ["Trending Websites"],
        loop: 0
    })
    const axiosSecure = useAxiosSecure();

    const { data: trendingProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['trendingProducts'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/trending-products');
            return data;
        }
    });

    const displayProducts = trendingProducts.slice(0, 6);

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    // console.log(featuredProducts);

    return (
        <div className="w-4/5 mx-auto">
            <div className="flex justify-between mb-4" data-aos="fade-down" data-aos-duration="1500">
                <div className="w-1/3">

                </div>
                <h2 className="w-1/3 text-[#f97d5e] darkDamagetext-[#f97d5e] text-4xl font-bold text-center"> {text} <Cursor></Cursor> </h2>

                <div className="w-1/3 flex justify-end">
                    <Link to='/products'>
                        <div className="">
                            <button className="text-white bg-[#f97d5e] px-12 py-2 rounded-xl text-xl font-bold transition-transform duration-200 ease-in-out transform hover:scale-105"> View All Websites  </button>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12" data-aos="fade-up" data-aos-duration="1500">
                {
                    displayProducts.map(treProduct => <TrendingProductCard
                        key={treProduct._id}
                        treProduct={treProduct}
                        refetch={refetch}
                    ></TrendingProductCard>)
                }
            </div>


        </div>
    );
};

export default TrendingProducts;