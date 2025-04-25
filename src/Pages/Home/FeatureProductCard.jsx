import { FiTriangle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import Swal from "sweetalert2";
import UseRole from "../../hooks/useRole";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";


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
            <div className="bg-white p-6 shadow-[4px_4px_10px_rgba(0,0,0,0.35)] darkDamageshadow-[1px_1px_8px_#f97d5e] h-full rounded-2xl">

                <div className="flex gap-x-3 items-center">
                    {/* <img src={productImage} className="w-16 h-16 mb-4" alt="" /> */}
                    <h2 className="text-xl darkDamagetext-[#f97d5e] font-bold"> {productName} </h2>
                </div>

                <div className="mt-2 darkDamagetext-white">
                    <p> {productDescription.length > 60 ? productDescription.slice(0, 60) + "..." : productDescription} </p>

                    <div className="my-3 darkDamagetext-[#f97d5e]">
                        <h3 className="text-lg font-bold inline"> Tags: </h3>
                        {
                            tags.map((tag, index) => (
                                <p key={index} className="text-md inline ml-1">{tag} |</p>
                            ))
                        }
                    </div>
                </div>

                <div className="flex gap-x-1">
                    <Link to={`/product/${_id}`}> <button className="px-4 py-1 text-white bg-[#f97d5e] transition-transform duration-200 ease-in-out transform hover:scale-105 darkDamagebg-[#f97d5e] darkDamagetext-[#1A2634] darkDamagehover:text-[#f97d5e] darkDamagehover:bg-[#1A2634] darkDamagehover:border-2 darkDamagehover:border-[#f97d5e] font-bold text-md rounded-md"> Details </button> </Link>

                    <button onClick={() => updateUpvote(_id)}
                        disabled={owner?.email === user?.email || hasUpvoted || role === 'Admin' || role === "Moderator"}
                        className={`group text-gray-600 px-3 py-1 rounded-md flex items-center gap-x-1 ${owner?.email === user?.email || hasUpvoted || role === 'Admin' || role === "Moderator"
                            ? 'bg-gray-400 text-gray-700  cursor-not-allowed pointer-events-none'
                            : 'bg-[#f97d5e] text-[#1A2634] hover:border-[#f97d5e] hover:cursor-pointer transform transition-transform duration-200 ease-in-out hover:scale-105'}`}
                    >
                        <div className="flex items-center gap-x-1 ">
                            <AiFillLike size={20} className="text-white" />
                            <p className="text-white font-bold text-md">{upvotes}</p>
                        </div>

                    </button>
                </div>
            </div>
        </div >
    );
};

export default FeatureProductCard;