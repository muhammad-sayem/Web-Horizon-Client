import { FiTriangle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import UseRole from "../../hooks/useRole";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const FeatureProductCard = ({ feaProduct, refetch }) => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [role] = UseRole();
    const [hasUpvoted, setHasUpvoted] = useState(false);
    const { _id, productName, productImage, tags, upvotes, owner, upVotedUsers, productDescription } = feaProduct;

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
        <div>
            <div className=" p-6 shadow-[4px_4px_10px_rgba(0,0,0,0.35)] dark:shadow-[1px_1px_8px_#87CEEB] h-full">

                <div className="flex flex-col items-center">
                    <img src={productImage} className="w-16 h-16 mb-4" alt="" />
                    <h2 className="text-2xl dark:text-[#87CEEB] font-bold"> {productName} </h2>
                </div>

                <div className="mt-4 text-center dark:text-white">
                    <p> {productDescription.length > 200 ? productDescription.slice(0, 200) + "..." : productDescription} </p>

                    <div className="my-3 dark:text-[#87CEEB]">
                        <h3 className="text-xl font-bold inline"> Tags: </h3>
                        {
                            tags.map((tag, index) => (
                                <p key={index} className="text-lg border-2 border-[#1A2634] dark:border-[#87CEEB] px-2 rounded-2xl inline ml-1"> {tag} </p>
                            ))
                        }
                    </div>
                </div>

                <div className="flex justify-center gap-x-4 items-center">
                    <Link to={`/product/${_id}`} className="btn bg-[#1A2634] text-[#87CEEB] dark:bg-[#87CEEB] dark:text-[#1A2634] dark:hover:text-[#87CEEB] font-bold text-lg"> View Details </Link>

                    <button onClick={() => updateUpvote(_id)} disabled={owner?.email === user?.email || hasUpvoted || role === 'Admin' || role === "Moderator"} className={`border-2 border-gray-300 text-gray-600 px-5 py-1 rounded-xl ${owner?.email === user?.email || hasUpvoted || role === 'Admin' || role === "Moderator"
                        ? 'bg-gray-400 text-gray-700 border-2 border-black cursor-not-allowed'
                        : 'bg-[#87CEEB] text-[#1A2634] hover:bg-[#1A2634] hover:text-[#87CEEB] hover:cursor-pointer'}`}> <FiTriangle size={20}></FiTriangle> {upvotes} </button>
                </div>
            </div>
        </div>
    );
};

export default FeatureProductCard;