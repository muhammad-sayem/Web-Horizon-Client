import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import sorryImage from "../../assets/images/sorry image.png";

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

    const handleShowAll = () => {
        setSearch("");
        setQuery("");
        setSort("");
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

            <div className="w-[90%] lg:w-4/5 mx-auto mt-32 mb-12">

                <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-4 mb-12">


                    <div className='flex items-center p-1 overflow-hidden rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-black focus-within:ring-[#5a45ce] border-2 border-[#5a45ce] w-full sm:w-4/5 md:w-1/2 lg:w-1/3'>
                        <input
                            className='flex-grow px-3 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent text-sm sm:text-base'
                            type='text'
                            name='search'
                            placeholder='Enter Product Tag and click to search'
                            aria-label='Enter Product Tags to search'
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                        />
                        <button
                            onClick={handleSearch}
                            className='px-2 sm:px-2 py-2 sm:py-3 text-sm lg:text-base tracking-wider transition-transform duration-200 ease-in-out transform hover:scale-105 text-white bg-[#5a45ce] rounded-md focus:outline-none'>
                            Search
                        </button>
                    </div>


                    <div className="flex flex-col md:flex-row md:justify-between gap-3">
                        <select
                            className='p-2 sm:p-4 border-2 border-[#5a45ce] rounded-lg text-gray-700 outline-none focus:ring focus:ring-[#1A2634] focus:ring-opacity-50 w-full min-w-[200px] text-base'
                            onChange={(e) => setSort(e.target.value)}
                            value={sort}
                        >
                            <option value="" disabled>Sort By Likes</option>
                            <option value="asc">Least Liked</option>
                            <option value="desc">Most Liked</option>
                        </select>

                        <button
                            onClick={handleShowAll}
                            className="px-2 lg:px-6 py-1 lg:w-full sm:w-auto rounded-lg bg-[#5a45ce] text-white text-sm lg:text-base transition-transform duration-200 ease-in-out transform hover:scale-105">
                            Show All
                        </button>
                    </div>
                </div>


                <div
                    className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 md:gap-y-12 lg:gap-y-16 min-h-[300px] place-items-center"
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                >
                    {products.length > 0 ? (
                        products.map((product) => (
                            <ProductCard
                                key={product._id}
                                product={product}
                                refetch={refetch}
                                isLoading={isLoading}
                            />
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center col-span-full space-y-4 p-6 text-center">
                            <img src={sorryImage} alt="Sorry" className="w-32 h-32 object-contain" />
                            <h5 className="text-3xl font-bold text-gray-600">Sorry</h5>
                            <p className="text-lg font-semibold text-gray-500">No Websites available in this category.</p>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                <div className="flex flex-wrap justify-center mt-8 gap-2">
                    {[...Array(totalPages).keys()].map((number) => (
                        <button
                            key={number}
                            onClick={() => setCurrentPage(number + 1)}
                            className={`px-4 py-2 border rounded-md transition-colors duration-300 ${currentPage === number + 1 ? 'bg-[#1A2634] text-[#D6C6FF]' : 'bg-[#5a45ce] text-[#1A2634]'}`}
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
