import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import FeatureProductCard from "./FeatureProductCard";
import { useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

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

    const displayProducts = showAll ? featuredProducts : featuredProducts.slice(0, 3);

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    console.log(featuredProducts);

    return (
        <div className="w-4/5 mb-28 mx-auto">
            <div className="flex justify-between mb-4" data-aos="fade-down" data-aos-duration="1500">
                <h2 className="text-[#f97d5e] darkDamagetext-[#f97d5e] text-4xl font-bold"> {text} <Cursor></Cursor> </h2>

                <div>
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="w-full text-white bg-[#f97d5e] px-12 py-2 rounded-xl text-xl font-bold transition-transform duration-200 ease-in-out transform hover:scale-105">
                        {showAll ? "View Less" : "View All Featured"}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12" data-aos="fade-up" data-aos-duration="1500">
                {
                    displayProducts.map(feaProduct => <FeatureProductCard
                        key={feaProduct._id}
                        feaProduct={feaProduct}
                        refetch={refetch}
                    ></FeatureProductCard>)
                }
            </div>
        </div>

    );
};

export default FeaturedProducts;