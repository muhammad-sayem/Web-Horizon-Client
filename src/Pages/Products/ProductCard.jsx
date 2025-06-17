import { LuTriangle } from "react-icons/lu";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UseRole from "../../hooks/useRole";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { AiFillLike } from "react-icons/ai";

const ProductCard = ({ product, refetch, isLoading }) => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [role] = UseRole();
    const [hasUpvoted, setHasUpvoted] = useState(false);
    const navigate = useNavigate();

    const { _id, productName, productImage, productDescription, owner, upvotes, externalLink, tags, upVotedUsers } = product;

    useEffect(() => {
        if (user?.email && Array.isArray(upVotedUsers) && upVotedUsers.includes(user.email)) {
            setHasUpvoted(true);
        }
    }, [user, upVotedUsers]);

    const updateUpvote = async () => {
        if(!user){
            navigate("/login");
            return;
        }

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
            <div className="w-full shadow-[4px_4px_10px_rgba(0,0,0,0.35)] p-4 rounded-2xl flex flex-col justify-between h-full blink-purple-glow" data-aos="zoom-in-up" data-aos-duration="1500">
                <div className="gap-x-4">
                    <img src={productImage} className="w-full h-48 lg:h-56 rounded-lg border mb-2" alt="" />
                    <h3 className="text-md lg:text-xl font-bold"> {productName} </h3>
                </div>

                <p className="text-sm my-1 flex-grow">
                    {productDescription.slice(0, 75)}{productDescription.length > 100 ? "..." : ""}
                </p>

                <div className="space-x-3 flex items-center">
                    <p className="text-md font-black mb-2 mt-1 inline"> Tags: </p>
                    {
                        tags.map((tag, index) => (
                            <p key={index} className="text-md inline ml-1"> {tag} |</p>
                        ))
                    }
                </div>

                <div className="flex items-center gap-x-2 mt-2">

                    <button className="px-3 py-1 rounded-lg bg-[#5a45ce] font-bold text-md text-white transition-transform duration-200 ease-in-out transform hover:scale-105"> <Link to={`/product/${_id}`}> Details </Link> </button>

                    <button
                        onClick={updateUpvote}
                        disabled={owner?.email === user?.email || hasUpvoted || role === "Admin" || role === "Moderator"}
                        className={`flex justify-center items-center gap-x-1 text-lg font-bold border-2 w-1/2 py-[2px] rounded-lg ${owner?.email === user?.email || hasUpvoted || role === "Admin" || role === "Moderator"
                            ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                            : "border-2 border-[#5a45ce] hover:cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-105"}`}
                    >
                        <AiFillLike className="" size={20} /> <span className=""> Like ({upvotes}) </span> 
                    </button>

                </div>
            </div>
        </div>
    );
};

export default ProductCard;