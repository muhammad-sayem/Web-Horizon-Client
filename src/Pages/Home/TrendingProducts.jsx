import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import TrendingProductCard from "./TrendingProductCard";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const TrendingProducts = () => {
    const [text] = useTypewriter({
        words: ["Trending Products"],
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
        <div className="mb-8">
            <h2 className="text-[#1A2634] dark:text-[#87CEEB] text-4xl font-bold mb-6 text-center" data-aos="fade-down" data-aos-duration="2000"> {text} <Cursor></Cursor> </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up" data-aos-duration="2000">
                {
                    displayProducts.map(treProduct => <TrendingProductCard
                        key={treProduct._id}
                        treProduct={treProduct}
                        refetch={refetch}
                    ></TrendingProductCard>)
                }
            </div>

            <Link to='/products'>
                <div className="w-3/4 mx-auto">
                    <button className="w-full mt-6 bg-[#1A2634] text-[#87CEEB] dark:text-[#1A2634] dark:bg-[#87CEEB] dark:hover:text-[#87CEEB] dark:hover:bg-black px-3 py-2 rounded-xl text-md font-bold"> View All  </button>

                </div>
            </Link>
        </div>
    );
};

export default TrendingProducts;