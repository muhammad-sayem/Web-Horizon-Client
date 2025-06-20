import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import Swal from "sweetalert2";
import UseRole from "../../hooks/useRole";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const FeatureProductCard = ({ feaProduct, refetch }) => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [role] = UseRole();
    const [hasUpvoted, setHasUpvoted] = useState(false);
    const navigate = useNavigate(); // ✅ Add navigation hook
    const { _id, productName, productImage, tags, upvotes, owner, upVotedUsers, productDescription } = feaProduct;

    useEffect(() => {
        if (user?.email && Array.isArray(upVotedUsers) && upVotedUsers.includes(user.email)) {
            setHasUpvoted(true);
        }
    }, [user, upVotedUsers]);

    const updateUpvote = async () => {
        if (!user) {
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
        } catch (err) {
            console.log(err);
            Swal.fire({
                title: "Something went wrong",
                icon: "error"
            });
        }
    };

    return (
        <div data-aos="zoom-in-up" data-aos-duration="1500">
            <div className="p-4 blink-purple-glow h-full rounded-2xl">
                <div className="items-center">
                    <img src={productImage} className="w-full h-48 lg:h-56 object-fill mb-4 border rounded-xl" alt="" />
                    <h2 className="text-lg lg:text-xl font-bold"> {productName} </h2>
                </div>

                <div>
                    <p className="text-sm">
                        {productDescription.length > 60
                            ? productDescription.slice(0, 60) + "..."
                            : productDescription}
                    </p>

                    <div className="my-1">
                        <h3 className="text-md font-bold inline">Tags:</h3>
                        {tags.map((tag, index) => (
                            <p key={index} className="text-md inline ml-1">{tag} |</p>
                        ))}
                    </div>
                </div>

                <div className="flex gap-x-1">
                    <Link to={`/product/${_id}`}>
                        <button className="px-2 lg:px-4 py-1 text-white bg-[#5a45ce] transition-transform duration-200 ease-in-out transform hover:scale-105 font-bold text-sm lg:text-md rounded-md">
                            Details
                        </button>
                    </Link>

                    <button
                        onClick={() => updateUpvote(_id)}
                        disabled={owner?.email === user?.email || hasUpvoted || role === 'Admin' || role === "Moderator"}
                        className={`group text-gray-600 px-3 rounded-md flex items-center gap-x-1 ${
                            owner?.email === user?.email || hasUpvoted || role === 'Admin' || role === "Moderator"
                                ? 'bg-gray-400 text-gray-700 cursor-not-allowed pointer-events-none'
                                : 'border border-[#5a45ce] hover:cursor-pointer transform transition-transform duration-200 ease-in-out hover:scale-105'
                        }`}
                    >
                        <div className="flex items-center gap-x-1">
                            <AiFillLike size={20} />
                            <p className="font-bold text-md">{upvotes}</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeatureProductCard;
