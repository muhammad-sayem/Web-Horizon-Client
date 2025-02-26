import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ProductCard from "./ProductCard";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Products = () => {

    const axiosSecure = useAxiosSecure();
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

    const { data, isLoading, refetch } = useQuery({
        queryKey: ['all-products', query, currentPage],
        queryFn: async () => {
            const url = `/products?${query ? `search=${query}&` : ""}page=${currentPage}&limit=${productsPerPage}`;
            const { data } = await axiosSecure.get(url);
            return data;
        }
    });

    const products = data?.products || [];
    const totalProducts = data?.totalProducts || 0;
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    const handleSearch = () => {
        setQuery(search);
        setCurrentPage(1);
        refetch();
    };

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>;
    }

    return (

        <div>
            <Helmet>
                <title>Products</title>
            </Helmet>

            <div className="w-11/12 mx-auto mb-12">
                <div className='flex items-center p-1 overflow-hidden rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-black focus-within:ring-[#6D1212] border-4 border-[#6D1212] w-full lg:w-3/4 mx-auto mb-6'>
                    <input
                        className='flex-grow px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                        type='text'
                        name='search'
                        placeholder='Enter Product Tags and click to search'
                        aria-label='Enter Product Tags to search'
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    />

                    <button onClick={handleSearch} className='px-1 md:px-4 py-3 text-sm tracking-wider font-black uppercase transition-colors duration-300 transform bg-[#6D1212] text-white rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                        Search
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                            refetch={refetch}
                            isLoading={isLoading}
                        />
                    ))}
                </div>

                <div className="flex justify-center mt-8 space-x-2">
                    {[...Array(totalPages).keys()].map((number) => (
                        <button
                            key={number}
                            onClick={() => setCurrentPage(number + 1)}
                            className={`px-4 py-2 border rounded-md ${currentPage === number + 1 ? 'bg-[#6D1212] text-white' : 'bg-gray-200 text-black'}`}
                        >
                            {number + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Products;
