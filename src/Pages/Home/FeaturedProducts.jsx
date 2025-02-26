import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import FeatureProductCard from "./FeatureProductCard";
import { useState } from "react";

const FeaturedProducts = () => {
    const axiosSecure = useAxiosSecure();
    const [showAll, setShowAll] = useState(false);

    const {data: featuredProducts = [], isLoading, refetch} = useQuery({
        queryKey: ['featuredProducts'],
        queryFn: async() => {
            const {data} = await axiosSecure.get('/featured');
            return data;
        }
    });

    const displayProducts = showAll ? featuredProducts : featuredProducts.slice(0, 4);

    if(isLoading){
        return <LoadingSpinner></LoadingSpinner>
    }

    console.log(featuredProducts);

    return (
        <div className="my-8 lg:my-16">
            <h2 className="text-[#1A2634] text-3xl font-bold mb-6"> Featured Products </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {
                    displayProducts.map(feaProduct => <FeatureProductCard
                        key={feaProduct._id}
                        feaProduct={feaProduct}
                        refetch={refetch}
                    ></FeatureProductCard>)
                }
            </div>

            <button onClick={()=> setShowAll(!showAll)} className="mt-3 bg-[#1A2634] text-[#87CEEB] px-6 py-3 rounded-xl text-xl"> {showAll ?  "View Less": "View All"} </button>
        </div> 
    );
};

export default FeaturedProducts;