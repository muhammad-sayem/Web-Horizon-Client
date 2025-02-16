import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../Shared/LoadingSpinner";

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
            <h2 className="text-[#6D1212] text-3xl font-bold"> Featured Products </h2>

            <div>
                {
                    featuredProducts.map(feaProduct => (
                        <p> {feaProduct.productName} </p>
                    ))
                }
            </div>
        </div>
    );
};

export default FeaturedProducts;