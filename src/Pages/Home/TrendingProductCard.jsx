import { FiTriangle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import UseRole from "../../hooks/useRole";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AiFillLike } from "react-icons/ai";

const TrendingProductCard = ({ treProduct, refetch }) => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [role] = UseRole();
    const [hasUpvoted, setHasUpvoted] = useState(false);
    const { _id, productName, productImage, tags, upvotes, owner, upVotedUsers, productDescription } = treProduct;

    // console.log("Owner Email:", owner?.email);
    // console.log("User Email:", user?.email);
    // console.log("Tags:", tags);

    useEffect(() => {
        if (user?.email && Array.isArray(upVotedUsers) && upVotedUsers.includes(user.email)) {
            setHasUpvoted(true);
        }
    }, [user, upVotedUsers]);

    const updateUpvote = async () => {
        if (hasUpvoted) {
            return;
        }

        console.log("Upvote button clicked");

        try {
            await axiosSecure.patch(`/product/upvote/${_id}`);

            try {
                await axiosSecure.patch(`/product/feature-upvote/${_id}`);
            } catch (featureError) {
                console.warn("Product not found in featuredCollection, skipping feature update.");
            }

            setHasUpvoted(true);
            refetch();

            Swal.fire({
                title: "Upvote done",
                icon: "success"
            });
        } catch (err) {
            console.log(err);
            Swal.fire({
                title: "Something Went Wrong",
                icon: "error"
            });
        }
    };

    return (
        <div>
            <div className="p-5 shadow-[4px_4px_10px_rgba(0,0,0,0.35)] dark:shadow-[1px_1px_8px_#87CEEB] h-full rounded-2xl">

                <div className="">
                    {/* <img src={productImage} className="w-16 h-16 mb-4" alt="" /> */}
                    <h2 className="text-xl dark:text-[#87CEEB] font-bold"> {productName} </h2>
                </div>

                <div className="mt-2 dark:text-white">
                    <p> {productDescription.length > 60 ? productDescription.slice(0, 60) + "..." : productDescription} </p>

                    <div className="my-3 dark:text-[#87CEEB]">
                        <h3 className="text-lg font-bold inline"> Tags: </h3>
                        {
                            tags.map((tag, index) => (
                                <p key={index} className="text-md inline ml-1">{tag} |</p>
                            ))
                        }
                    </div>
                </div>

                <div className="flex gap-x-1">
                    <Link to={`/product/${_id}`}> <button className="px-3 py-1 bg-[#1A2634] text-[#87CEEB]  hover:text-[#1A2634] hover:bg-[#87CEEB] dark:bg-[#87CEEB] dark:text-[#1A2634] dark:hover:text-[#87CEEB] font-bold text-md rounded-md"> Details </button> </Link>

                    <button onClick={() => updateUpvote(_id)}
                        disabled={owner?.email === user?.email || hasUpvoted || role === 'Admin' || role === "Moderator"}
                        className={`group text-gray-600 px-3 py-1 rounded-md flex items-center gap-x-1 ${owner?.email === user?.email || hasUpvoted || role === 'Admin' || role === "Moderator"
                            ? 'bg-gray-400 text-gray-700  cursor-not-allowed pointer-events-none'
                            : 'bg-[#87CEEB] text-[#1A2634] hover:bg-[#1A2634] hover:text-[#87CEEB] hover:border-[#87CEEB] hover:cursor-pointer'}`}
                    >
                        <div className="flex items-center gap-x-1">
                            <AiFillLike size={20} className="text-black group-hover:text-[#87CEEB]" />
                            <p className="text-black font-bold text-md group-hover:text-[#87CEEB]">{upvotes}</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TrendingProductCard;
