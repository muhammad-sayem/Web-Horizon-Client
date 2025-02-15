import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ProductCard from "./ProductCard";

const Products = () => {
    const axiosSecure = useAxiosSecure();

    const {data: products = [], isLoading, refetch} = useQuery({
        queryKey: ['all-products'],
        queryFn: async() => {
            const {data} = await axiosSecure.get('/products');
            return data;
        }
    });

    console.log(products);

    return (
        <div className="w-11/12 mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                        refetch={refetch}
                        isLoading={isLoading}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;