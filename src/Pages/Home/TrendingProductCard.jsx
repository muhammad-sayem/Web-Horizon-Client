import { FiTriangle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import UseRole from "../../hooks/useRole";
import { AiFillLike } from "react-icons/ai";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

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
        <div data-aos="zoom-in-up" data-aos-duration="1500">
            <div className="p-5 bg-white shadow-[4px_4px_10px_rgba(0,0,0,0.35)] h-full rounded-2xl">

                <div className="">
                    <img src={productImage} className="w-full h-48 lg:h-56 object-fill mb-4 border rounded-xl" alt="" />
                    <h2 className="text-md lg:text-xl font-bold"> {productName} </h2>
                </div>

                <div className="mt-2">
                    <p> {productDescription.length > 60 ? productDescription.slice(0, 60) + "..." : productDescription} </p>

                    <div className="my-1">
                        <h3 className="text-md font-bold inline"> Tags: </h3>
                        {
                            tags.map((tag, index) => (
                                <p key={index} className="text-md inline ml-1">{tag} |</p>
                            ))
                        }
                    </div>
                </div>

                <div className="flex gap-x-1">
                    <Link to={`/product/${_id}`}> <button className="px-2 lg:px-4 py-1 text-white bg-[#5a45ce] transition-transform duration-200 ease-in-out transform hover:scale-105 font-bold text-sm lg:text-md rounded-md"> Details </button> </Link>

                    <button onClick={() => updateUpvote(_id)}
                        disabled={owner?.email === user?.email || hasUpvoted || role === 'Admin' || role === "Moderator"}
                        className={`group text-gray-600 px-3 rounded-md flex items-center gap-x-1 ${owner?.email === user?.email || hasUpvoted || role === 'Admin' || role === "Moderator"
                            ? 'bg-gray-400 text-gray-700 cursor-not-allowed pointer-events-none'
                            : 'border border-[#5a45ce] text-[#1A2634] hover:cursor-pointer transform transition-transform duration-200 ease-in-out hover:scale-105'}`}
                    >
                        <div className="flex items-center gap-x-1">
                            <AiFillLike size={20} className="" />
                            <p className="font-bold text-md">{upvotes}</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TrendingProductCard;

// shadow: shadow-[4px_4px_10px_rgba(0,0,0,0.35)] darkDamageshadow-[1px_1px_8px_#5a45ce]