import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ReviewProducts = () => {
    const axiosSecure = useAxiosSecure();

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/products');
            return data;
        }
    });

    const handleAccept = async (id) => {
        try {
            await axiosSecure.patch(`/product/accept-status/${id}`);
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

                                    <td> <Link onClick={() => handleAccept(product._id)} className="bg-green-500 text-md text-black font-bold px-6 py-2 rounded-xl"> Accept </Link> </td>

                                    <td> <Link onClick={()=> handleReject(product._id)} className="bg-red-500 text-md text-black font-bold px-6 py-2 rounded-xl">   Reject </Link> </td>
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