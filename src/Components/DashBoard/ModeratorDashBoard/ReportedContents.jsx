import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ReportedContents = () => {
    const axiosSecure = useAxiosSecure();

    const { data: products = [], refetch, isLoading } = useQuery({
        queryKey: ['reported-products'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/producs/reported');
            return data;
        }
    });

    console.log(products);

    const handleDeleteProduct = async (id) => {
        try {
            await axiosSecure.delete(`/product/${id}`);
            refetch();
            Swal.fire({
                title: "Product Deleted Successfully",
                icon: "success"
            });
        }
        catch (err) {
            console.log(err);
            Swal.fire({
                title: "Something Wrong",
                icon: "error"
            });
        }
    }

    return (
        <div className="">
            <h2 className="text-5xl text-center text-[#6D1212] font-bold my-4"> Reported contents </h2>

            <div className="">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="w-1/3 text-center">Product Name</th>
                            <th className="w-1/3"></th>
                            <th className="w-1/3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}

                        {
                            products.map(product => (<tr key={product._id} className="border-2 text-center">
                                <th> {product.productName} </th>

                                <td>  <Link to={`/product/${product._id}`} className="bg-blue-500 text-md text-black font-bold px-6 py-2 rounded-xl"> View Details </Link> </td>

                                <td> <button onClick={() => handleDeleteProduct(product._id)} className="bg-red-500 text-md text-black font-bold px-6 py-2 rounded-xl"> Delete </button> </td>



                            </tr>))
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ReportedContents;