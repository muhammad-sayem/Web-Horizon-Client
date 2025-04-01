import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Products = () => {
    const axiosSecure = useAxiosSecure();
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");
    const [sort, setSort] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

    const { data, isLoading, refetch } = useQuery({
        queryKey: ['all-products', query, currentPage],
        queryFn: async () => {
            const url = `/products?${query ? `search=${query}&` : ""}page=${currentPage}&limit=${productsPerPage}${sort ? `&sort=${sort}` : ""}`;
            const { data } = await axiosSecure.get(url);
            return data;
        }
    });

    useEffect(() => {
        refetch();
    }, [sort, refetch]);

    const products = data?.products || [];
    const totalProducts = data?.totalProducts || 0;
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    const handleSearch = () => {
        setQuery(search);
        setCurrentPage(1);
        refetch();
    };

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <div>
            <Helmet>
                <title>Products</title>
            </Helmet>

            <div className="w-11/12 mx-auto mt-32 mb-12">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
                    <div className='flex items-center p-1 overflow-hidden rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-black focus-within:ring-[#87CEEB] border-4 border-[#87CEEB] w-full md:w-1/2 lg:w-1/3'>
                        <input
                            className='flex-grow px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                            type='text'
                            name='search'
                            placeholder='Enter Product Tag and click to search'
                            aria-label='Enter Product Tags to search'
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                        />
                        <button
                            onClick={handleSearch}
                            className='px-1 md:px-4 py-3 text-sm tracking-wider font-black uppercase transition-colors duration-300 transform bg-black text-[#87CEEB] rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                            Search
                        </button>
                    </div>

                    <select
                        className='p-4 border-2 border-[#1A2634] rounded-lg text-gray-700 outline-none focus:ring focus:ring-[#1A2634] focus:ring-opacity-50 w-full md:w-1/6 text-lg font-bold dark:text-[#87CEEB]'
                        onChange={(e) => setSort(e.target.value)}
                        value={sort}
                    >
                        <option value="" disabled>Sort By Likes</option>
                        <option value="asc">Least Liked</option>
                        <option value="desc">Most Liekd</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="zoom-in" data-aos-duration="2000">
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
                            className={`px-4 py-2 border rounded-md ${currentPage === number + 1 ? 'bg-[#1A2634] text-[#87CEEB]' : 'bg-[#87CEEB] text-[#1A2634]'}`}
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
