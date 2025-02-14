import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ReviewProducts = () => {
    const axiosSecure = useAxiosSecure();

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/products');
            return data;
        }
    })

    console.log(products);

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
                                    <td> <Link to={`/product/${product._id}`} className="bg-yellow-500 px-6"> View Details </Link> </td>
                                    <td> <Link> Make Featured </Link> </td>
                                    <td> <Link> Accept </Link> </td>
                                    <td> <Link> Reject </Link> </td>
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