import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const axiosSecure = useAxiosSecure();
    const {id} = useParams()

    const {data: product} = useQuery({
        queryKey: ['product'],
        queryFn: async() => {
            const {data} = await axiosSecure.get(`/product/${id}`);
            return data
        }
    })

    console.log(product);
    
    return (
        <div>
            
        </div>
    );
};

export default ProductDetails;