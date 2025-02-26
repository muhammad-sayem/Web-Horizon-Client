import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import { useState } from "react";
import TrendingProductCard from "./TrendingProductCArd";
import { Link } from "react-router-dom";

const TrendingProducts = () => {
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
            <h2 className="text-[#1A2634] text-3xl font-bold mb-6"> Trending Products </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {
                    displayProducts.map(treProduct => <TrendingProductCard
                        key={treProduct._id}
                        treProduct={treProduct}
                        refetch={refetch}
                    ></TrendingProductCard>)
                }
            </div>

            <Link to='/products'>
                <button className="mt-3 bg-[#1A2634] text-[#87CEEB] px-6 py-3 rounded-xl text-xl"> View All  </button>
            </Link>
        </div>
    );
};

export default TrendingProducts;