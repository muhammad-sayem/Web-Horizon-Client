import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ReviewProducts = () => {
    const axiosSecure = useAxiosSecure();

    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/all-products');
            return data;
        }
    });

    const handleAccept = async (id) => {
        try {
            await axiosSecure.patch(`/product/accept-status/${id}`);
            refetch()
            Swal.fire({
                title: "Product Accepted by a moderator",
                icon: "success"
            });
        }
        catch (err) {
            Swal.fire({
                title: "Something Wrong",
                icon: "error"
            });
        }
    };

    const handleReject = async (id) => {
        try {
            await axiosSecure.patch(`/product/reject-status/${id}`);
            refetch();
            Swal.fire({
                title: "Product Rejected by a moderator",
                icon: "Success"
            });
        }
        catch (err) {
            Swal.fire({
                title: "Something Wrong",
                icon: "error"
            });
        }
    };

    // console.log(products);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            products.map(product => (
                                <tr>
                                    <th>{product.productName}</th>

                                    <td> <Link to={`/product/${product._id}`} className="bg-blue-500 text-md text-black font-bold px-6 py-2 rounded-xl"> View Details </Link> </td>

                                    <td> <Link className="bg-yellow-300 text-md text-black font-bold px-6 py-2 rounded-xl"> Make Featured </Link> </td>

                                    <td > <button
                                        disabled={product.status === "Accepted"}
                                        onClick={() => handleAccept(product._id)}
                                        className={` text-md text-black font-bold px-6 py-2 rounded-xl ${product.status === 'Accepted' ? "bg-green-900 cursor-not-allowed" : "bg-green-500"}`}> Accept </button> </td>

                                    <td> <button 
                                        disabled={product.status === 'Rejected'}
                                        onClick={() => handleReject(product._id)}
                                        className={`text-md text-black font-bold px-6 py-2 rounded-xl ${product.status === "Rejected" ? "bg-red-900 cursor-not-allowed" : "bg-red-500 "}`}>   Reject </button> </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReviewProducts;