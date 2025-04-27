import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import { FaExternalLinkAlt } from "react-icons/fa";
import { LuTriangle } from "react-icons/lu";
import { MdReportGmailerrorred } from "react-icons/md";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import ProductReviewModal from "./ProductReviewModal";
import Reviews from "./Reviews";
import UseRole from "../../hooks/useRole";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { AiFillLike } from "react-icons/ai";

const ProductDetails = () => {
    const axiosSecure = useAxiosSecure();
    const { id } = useParams();
    const { user } = useAuth();
    const [role] = UseRole();
    const [hasUpvoted, setHasUpvoted] = useState(false);

    const { data: product = {}, isLoading, refetch } = useQuery({
        queryKey: ['product', id],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/product/${id}`);
            return data;
        }
    });

    useEffect(() => {
        if (user?.email && Array.isArray(product?.upVotedUsers) && product.upVotedUsers.includes(user.email)) {
            setHasUpvoted(true);
        }
    }, [user, product]);

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    const { productName, productImage, productDescription, upvotes, tags, owner, reported, externalLink } = product;
    console.log(product);

    const updateUpvote = async () => {
        if (!user || hasUpvoted) return;

        try {
            await axiosSecure.patch(`/product/upvote/${id}`);
            await axiosSecure.patch(`/product/feature-upvote/${_id}`);
            setHasUpvoted(true);
            refetch();

            Swal.fire({
                title: "Upvote done",
                icon: "success"
            });
        } catch (err) {
            Swal.fire({
                title: "Something went wrong",
                icon: "error"
            });
        }
    };

    const handleReport = async () => {
        try {
            await axiosSecure.patch(`/product/report/${id}`);
            refetch();
            Swal.fire({
                title: "Report done",
                icon: "success"
            });

        }
        catch (err) {
            console.log(err);
            Swal.fire({
                title: "Something wrong",
                icon: "error"
            });
        }
    }

    return (
        <div className='w-2/3 mx-auto mt-40 mb-12'>
            <div className='gap-x-8 px-12 py-6 shadow-[4px_4px_10px_rgba(0,0,0,0.35)] rounded-2xl'>
                <div className='flex flex-col items-center'>
                    <h3 className="text-4xl font-black mb-6"> {productName} </h3>
                    <img src={productImage} alt='' className='h-96 w-full rounded-xl border' />
                </div>

                <div className="my-8">
                    <p className="text-lg text-gray-500 my-4"> {productDescription} </p>

                    <div className="flex gap-x-4 items-center">
                        <p className="text-xl font-black "> Tags: </p>
                        {tags.map((tag, index) => (
                            <p key={index} className="text-[#1A2634] font-bold text-lg">{tag} |</p>
                        ))}
                    </div>

                    <div className="flex gap-x-3 my-8">
                        <Link to={externalLink} className="flex justify-center items-center gap-x-2 text-xl font-bold border-2 border-black w-1/3 py-2 rounded-full transition-transform duration-200 ease-in-out transform hover:scale-105" target="_blank">
                            <FaExternalLinkAlt size={25}></FaExternalLinkAlt>  Visit
                        </Link>

                        <button
                            onClick={updateUpvote}
                            disabled={!user || owner?.email === user?.email || hasUpvoted || role === 'Admin' || role === "Moderator"}
                            className={`flex justify-center items-center gap-x-2 text-xl font-bold border-2 w-1/3 py-2 rounded-full 
                                ${!user || owner?.email === user?.email || hasUpvoted || role === 'Admin' || role === "Moderator"
                                    ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                                    : 'border-[#f97d5e] transition-transform duration-200 ease-in-out transform hover:scale-105 hover:cursor-pointer'}`}>
                            <AiFillLike size={25}></AiFillLike> Like ({upvotes})
                        </button>

                        <button disabled={owner?.email === user?.email || role === "Admin" || role === "Moderator"} onClick={handleReport} className={`flex justify-center items-center gap-x-2 text-xl text-white font-bold border-2 w-1/3 py-2 rounded-full transition-transform duration-200 ease-in-out transform hover:scale-105 ${owner?.email === user?.email || role === "Admin" || role === "Moderator" ? "bg-red-900 cursor-not-allowed" : "bg-red-600 text-white"}`}>
                            <MdReportGmailerrorred size={30}></MdReportGmailerrorred> Report
                        </button>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl text-[#1A2634] font-bold my-4"> Reviews </h2>
                    <Reviews
                        key={product._id}
                        product={product}
                    ></Reviews>
                </div>

                <div>
                    <button onClick={() => document.getElementById(`my_modal_${id}`).showModal()} disabled={owner?.email === user?.email || role === "Admin" || role === "Moderator"} className={`px-10 py-3 text-lg font-bold bg-[#1A2634] text-[#f97d5e] ${owner?.email === user?.email || role === "Admin" || role === "Moderator" ? "bg-gray-500 cursor-not-allowed" : "bg-[#f97d5e] text-white transition-transform duration-200 ease-in-out transform hover:scale-105"}`}> Add a Review </button>
                </div>

                {/* Modal Part */}
                <ProductReviewModal
                    key={product._id}
                    product={product}
                    refetch={refetch}
                ></ProductReviewModal>

            </div>
        </div>
    );
};

export default ProductDetails;
