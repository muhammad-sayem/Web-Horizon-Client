import { LuTriangle } from "react-icons/lu";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UseRole from "../../hooks/useRole";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { AiFillLike } from "react-icons/ai";

const ProductCard = ({ product, refetch, isLoading }) => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [role] = UseRole();
    const [hasUpvoted, setHasUpvoted] = useState(false);

    const { _id, productName, productImage, productDescription, owner, upvotes, externalLink, tags, upVotedUsers } = product;

    useEffect(() => {
        if (user?.email && Array.isArray(upVotedUsers) && upVotedUsers.includes(user.email)) {
            setHasUpvoted(true);
        }
    }, [user, upVotedUsers]);

    const updateUpvote = async () => {
        if (hasUpvoted) {
            return;
        }

        try {
            await axiosSecure.patch(`/product/upvote/${_id}`);
            await axiosSecure.patch(`/product/feature-upvote/${_id}`);
            setHasUpvoted(true);
            refetch();

            Swal.fire({
                title: "Upvote done",
                icon: "success"
            });
        }
        catch (err) {
            console.log(err);
            Swal.fire({
                title: "Something went wrong",
                icon: "error"
            });
        }
    }

    return (
        <div>
            <div className="w-full shadow-2xl darkDamageshadow-[1px_1px_8px_#f97d5e] p-8 rounded-2xl flex flex-col justify-between h-full">
                <div className="flex items-center gap-x-4">
                    <img src={productImage} className="w-16 h-16" alt="" />
                    <h3 className="text-xl darkDamagetext-[#f97d5e] font-black"> {productName} </h3>
                </div>

                <p className="text-md my-2 flex-grow darkDamagetext-white">
                    {productDescription.slice(0, 80)}{productDescription.length > 100 ? "..." : ""}
                </p>

                <div className="space-x-3 flex">
                    <p className="text-lg font-black mb-2 inline darkDamagetext-[#f97d5e]"> Tags: </p>
                    {
                        tags.map((tag, index) => (
                            <p key={index} className="text-md inline ml-1"> {tag} |</p>
                        ))
                    }
                </div>

                <div className="flex items-center gap-x-2 justify- mt-2">

                    <button className="btn rounded-xl text-[#f97d5e] font-bold text-lg bg-black darkDamagebg-[#f97d5e] darkDamagetext-black hover:text-black darkDamagehover:text-[#f97d5e]"> <Link to={`/product/${_id}`}> Details </Link> </button>

                    <button
                        onClick={updateUpvote}
                        disabled={owner?.email === user?.email || hasUpvoted || role === "Admin" || role === "Moderator"}
                        className={`flex justify-center items-center gap-x-2 text-xl text-white font-bold border-2 w-1/2 py-2 rounded-xl ${owner?.email === user?.email || hasUpvoted || role === "Admin" || role === "Moderator"
                            ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                            : "bg-green-500 hover:bg-green-700 hover:text-[#f97d5e] hover:cursor-pointer"}`}
                    >
                        <AiFillLike size={25} /> Like ({upvotes})
                    </button>

                </div>
            </div>
        </div>
    );
};

export default ProductCard;