import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import FeatureProductCard from "./FeatureProductCard";

const FeaturedProducts = () => {
    const axiosSecure = useAxiosSecure();

    const {data: featuredProducts = [], isLoading, refetch} = useQuery({
        queryKey: ['featuredProducts'],
        queryFn: async() => {
            const {data} = await axiosSecure.get('/featured');
            return data;
        }
    });

    if(isLoading){
        return <LoadingSpinner></LoadingSpinner>
    }

    console.log(featuredProducts);

    return (
        <div className="my-8">
            <h2 className="text-[#6D1212] text-3xl font-bold mb-6"> Featured Products </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {
                    featuredProducts.map(feaProduct => <FeatureProductCard
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