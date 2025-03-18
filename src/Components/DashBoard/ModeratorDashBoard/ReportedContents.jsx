import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ReportedContents = () => {
    const axiosSecure = useAxiosSecure();

    const { data: products = [], refetch, isLoading } = useQuery({
        queryKey: ['reported-products'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/products/reported');
            return data;
        }
    });

    const handleDeleteProduct = async (id) => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(async(result) => {
                if (result.isConfirmed) {
                    await axiosSecure.delete(`/product/${id}`);
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            });
        }
        catch (err) {
            console.log(err);
            Swal.fire({
                title: "Something Went Wrong",
                icon: "error"
            });
        }
    }

    return (
        <div className="max-w-full px-2">
            <h2 className="text-3xl md:text-5xl text-center text-[#1A2634] font-bold my-4 dark:text-[#87CEEB]">
                Reported Contents
            </h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full min-w-max border border-gray-300">
                    {/* Table Head */}
                    <thead>
                        <tr className="bg-gray-200 dark:bg-[#87CEEB] dark:text-black text-sm md:text-md">
                            <th className="px-2 py-2 text-center">Product Name</th>
                            <th className="px-2 py-2 text-center">Details</th>
                            <th className="px-2 py-2 text-center">Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map(product => (
                            <tr key={product._id} className="border text-center">
                                <td className="px-2 py-2 text-sm md:text-md">{product.productName}</td>

                                {/* View Details Button */}
                                <td className="px-2 py-2">
                                    <Link
                                        to={`/product/${product._id}`}
                                        className="bg-blue-500 text-white text-sm md:text-md font-semibold px-3 md:px-4 py-1 md:py-2 rounded-xl block w-full max-w-[150px] text-center"
                                    >
                                        View Details
                                    </Link>
                                </td>

                                {/* Delete Button */}
                                <td className="px-2 py-2">
                                    <button
                                        onClick={() => handleDeleteProduct(product._id)}
                                        className="bg-red-500 text-white text-sm md:text-md font-semibold px-3 md:px-4 py-1 md:py-2 rounded-xl block w-full max-w-[150px] text-center hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ReportedContents;
