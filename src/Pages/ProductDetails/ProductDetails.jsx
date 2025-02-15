import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import { FaExternalLinkAlt } from "react-icons/fa";
import { LuTriangle } from "react-icons/lu";
import { MdReportGmailerrorred } from "react-icons/md";
import Swal from "sweetalert2";
import UseRole from "../../Hooks/UseRole";

const ProductDetails = () => {
    const axiosSecure = useAxiosSecure();
    const { id } = useParams();
    const [role] = UseRole();

    const { data: product, isLoading, refetch } = useQuery({
        queryKey: ['product', id],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/product/${id}`);
            return data
        }
    });

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    const updateUpvote = async () => {
        try {
            await axiosSecure.patch(`/product/upvote/${id}`);
            refetch();

            Swal.fire({
                title: "Upvote done",
                icon: "success"
            });
        }
        catch (err) {
            Swal.fire({
                title: "Something went wrong",
                icon: "error"
            });
        }

    }

    console.log(product);

    const { productName, productImage, productDescription, owner, upvotes, externalLink, tags } = product;

    return (
        <div className="w-9/12 mx-auto mt-12 border-2 border-yellow-500">
            <div className="flex items-center">

                <div className="w-1/2 flex items-center gap-x-4">
                    <img className="w-20 h-20 rounded-full" src={productImage} alt="" />
                    <h2 className="text-2xl font-bold"> {productName} </h2>
                </div>

                <div className="w-1/2">
                    <div className="flex gap-x-3">
                        <Link className="flex justify-center items-centr gap-x-2 text-xl font-bold border-2 w-1/3 py-2 rounded-full hover:bg-[#6D1212] hover:text-[#FFF5D1]"> <FaExternalLinkAlt size={25} /> Visit </Link>

                        <a onClick={updateUpvote} className={`flex justify-center items-centr gap-x-2 text-xl text-white bg-green-500 font-bold border-2 w-1/3 py-2 rounded-full ${role === 'Admin' || role === "Moderator" ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'hover:bg-green-700 hover:text-[#FFF5D1] hover:cursor-pointer'}`}> <LuTriangle size={25}></LuTriangle> Upvote ({upvotes}) </a>

                        <a className="flex justify-center items-centr gap-x-2 text-xl text-white bg-red-500 font-bold border-2 w-1/3 py-2 rounded-full hover:bg-red-700 hover:text-[#FFF5D1] hover:cursor-pointer"> <MdReportGmailerrorred size={30}></MdReportGmailerrorred> Report </a>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default ProductDetails;