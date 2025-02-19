import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ProductCard from "./ProductCard";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import { useState } from "react";

const Products = () => {
    const axiosSecure = useAxiosSecure();
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['all-products', query],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/products?search=${query}`);
            return data;
        }
    });

    const handleSearch = () => {
        setQuery(search);
        refetch();
    }

    console.log(products);

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div className="w-11/12 mx-auto mb-12">
            <div className='flex items-center p-1 overflow-hidden rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300 border-4 border-[#6D1212] w-1/2 mx-auto mb-6'>
                <input
                    className='flex-grow px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                    type='text'
                    name='search'
                    placeholder='Enter Product Tags to search'
                    aria-label='Enter Product Tags to search'
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />

                <button onClick={handleSearch} className='px-1 md:px-4 py-3 text-sm tracking-wider font-black uppercase transition-colors duration-300 transform bg-[#6D1212] text-white rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                    Search
                </button>
            </div>
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