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
        <div className="my-8">
            <h2 className="text-[#1A2634] text-3xl font-bold mb-6"> {text} <Cursor></Cursor> </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {
                    displayProducts.map(treProduct => <TrendingProductCard
                        key={treProduct._id}
                        treProduct={treProduct}
                        refetch={refetch}
                    ></TrendingProductCard>)
                }
            </div>

            <Link to='/products'>
                <button className="mt-6 bg-[#1A2634] text-[#87CEEB] px-6 py-3 rounded-xl text-xl font-bold"> View All  </button>
            </Link>
        </div>
    );
};

export default TrendingProducts;