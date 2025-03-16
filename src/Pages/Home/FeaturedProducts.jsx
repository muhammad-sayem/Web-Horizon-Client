import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import FeatureProductCard from "./FeatureProductCard";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const FeaturedProducts = () => {
    const [text] = useTypewriter({
        words: ["Featured Products"],
        loop: 0
    });

    const axiosSecure = useAxiosSecure();
    const [showAll, setShowAll] = useState(false);

    const { data: featuredProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['featuredProducts'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/featured');
            return data;
        }
    });

    const displayProducts = showAll ? featuredProducts : featuredProducts.slice(0, 4);

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    console.log(featuredProducts);

    return (
        <div className="my-8 lg:my-16">
            <h2 className="text-[#1A2634] text-4xl font-bold mb-6 text-center"> {text} <Cursor></Cursor> </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
                {
                    displayProducts.map(feaProduct => <FeatureProductCard
                        key={feaProduct._id}
                        feaProduct={feaProduct}
                        refetch={refetch}
                    ></FeatureProductCard>)
                }
            </div>

            <button onClick={() => setShowAll(!showAll)} className="mt-6 bg-[#1A2634] text-[#87CEEB] px-6 py-3 rounded-xl text-xl font-bold"> {showAll ? "View Less" : "View All"} </button>
        </div>
    );
};

export default FeaturedProducts;