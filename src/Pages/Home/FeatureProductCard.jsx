import { FiTriangle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import UseRole from "../../hooks/useRole";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const FeatureProductCard = ({ feaProduct, refetch }) => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [role] = UseRole();
    const [hasUpvoted, setHasUpvoted] = useState(false);
    const { _id, productName, productImage, tags, upvotes, owner, upVotedUsers } = feaProduct;

    console.log(owner?.email);
    console.log(user?.email);

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
                title: "Something Wrong",
                icon: "error"
            });
        }
    }

    return (
        <Link to={`/product/${_id}`}>
            <div className="flex justify-between items-center p-6 shadow-[4px_4px_10px_rgba(0,0,0,0.35)]">
                <div className="gap-x-3 items-center">

                    <div className="flex items-center gap-x-3">
                        <img src={productImage} className="w-16 h-16" alt="" />
                        <h2 className="text-2xl font-bold"> {productName} </h2>
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
                    <button onClick={() => updateUpvote(_id)} disabled={owner?.email === user?.email || hasUpvoted || role === 'Admin' || role === "Moderator"} className={`border-2 border-gray-300 text-gray-600 px-5 py-2 rounded-xl ${owner?.email === user?.email || hasUpvoted || role === 'Admin' || role === "Moderator"
                        ? 'bg-gray-400 text-gray-700 border-2 border-black cursor-not-allowed'
                        : 'hover:bg-[#1A2634] hover:text-[#87CEEB] hover:cursor-pointer'}`}> <FiTriangle size={20}></FiTriangle> {upvotes} </button>
                </div>
            </div>
        </Link>
    );
};

export default FeatureProductCard;