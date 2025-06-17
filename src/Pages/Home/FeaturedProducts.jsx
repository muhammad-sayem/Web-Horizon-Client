import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import FeatureProductCard from "./FeatureProductCard";
import { useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const FeaturedProducts = () => {
    const [text] = useTypewriter({
        words: ["Featured Websites"],
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
        <div className="w-4/5 my-12 md:my-20 lg:my-32 mx-auto">
            <div className="flex flex-col items-center md:flex-row md:justify-between mb-4 lg:mb-8" data-aos="fade-down" data-aos-duration="1500">

                <div className=" lg:w-1/3">

                </div>

                {/* <h2 className="w-1/2 lg:w-1/3 text-[#5a45ce] text-xl md:text-3xl lg:text-4xl font-bold text-center"> {text} <Cursor></Cursor> </h2> */}

                <h2 className="w-1/2 lg:w-1/3 text-[#5a45ce] text-xl md:text-3xl lg:text-4xl font-bold text-center"> Featured Websites </h2>

                <div className="w-1/2 lg:w-1/3  flex justify-end">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="text-white bg-[#5a45ce] px-4 lg:px-6 py-2  rounded-xl text-sm md:text-xl lg:text-lg font-bold transition-transform duration-200 ease-in-out transform hover:scale-105">
                        {showAll ? "View Less" : "View All Featured"}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
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