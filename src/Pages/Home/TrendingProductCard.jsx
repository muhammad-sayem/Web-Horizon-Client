import { FiTriangle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import UseRole from "../../hooks/useRole";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const TrendingProductCard = ({ treProduct, refetch }) => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [role] = UseRole();
    const [hasUpvoted, setHasUpvoted] = useState(false);
    const { _id, productName, productImage, tags, upvotes, owner, upVotedUsers } = treProduct;

    console.log("Owner Email:", owner?.email);
    console.log("User Email:", user?.email);
    console.log("Tags:", tags);

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
        <div className="flex justify-between items-center p-5 shadow-[4px_4px_10px_rgba(0,0,0,0.35)]">
            <div className="gap-x-3 items-center">
                
                <div className="flex items-center gap-x-3">
                    <img src={productImage} className="w-16 h-16" alt="" />
                    <Link to={`/product/${_id}`} className="text-2xl font-bold"> {productName} </Link>
                </div>

                <div className="flex gap-2 mt-4">
                    <h3 className="text-xl font-bold"> Tags: </h3>
                    {
                        tags.map((tag, index) => (
                            <p key={index} className="text-lg border-2 border-[#1A2634] px-2 rounded-2xl"> {tag} </p>
                        ))
                    }
                </div>

            </div>

            <div>
                <button
                    onClick={updateUpvote}
                    disabled={owner?.email === user?.email || hasUpvoted || role === 'Admin' || role === "Moderator"}
                    className={`border-2 border-gray-300 px-5 py-2 rounded-xl 
                        ${owner?.email === user?.email || hasUpvoted || role === 'Admin' || role === "Moderator"
                            ? 'bg-gray-400 text-gray-700 border-2 border-black cursor-not-allowed'
                            : 'hover:bg-[#1A2634] hover:text-[#87CEEB] hover:cursor-pointer'}`}
                >
                    <FiTriangle size={20} /> {upvotes}
                </button>
            </div>
        </div>
    );
};

export default TrendingProductCard;
