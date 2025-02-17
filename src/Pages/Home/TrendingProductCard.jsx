import { FiTriangle } from "react-icons/fi";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import UseRole from "../../Hooks/UseRole";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const TrendingProductCard = ({ treProduct, refetch }) => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [role] = UseRole();
    const [hasUpvoted, setHasUpvoted] = useState(false);
    const { _id, productName, productImage, tags, upvotes, owner, upVotedUsers } = treProduct;

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
        <div className="border-2 rounded-xl flex justify-between items-center px-5 py-3">
            <div className="flex gap-x-3 items-center">
                <div>
                    <img src={productImage} className="w-16 h-16" alt="" />
                </div>
                <div>
                    <Link to={`/product/${_id}`} className="text-xl font-bold"> {productName} </Link>
                    <div className="flex gap-2">
                        <h3 className="text-lg font-bold"> Tags: </h3>
                        {
                            tags.map(tag => (
                                <p className="text-lg"> {tag} </p>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div>
                <button onClick={updateUpvote} disabled={owner?.email === user?.email || hasUpvoted || role === 'Admin' || role === "Moderator"} className={`border-2 text-gray-600 px-5 py-2 rounded-xl ${owner?.email === user?.email || hasUpvoted || role === 'Admin' || role === "Moderator"
                    ? 'bg-gray-400 text-gray-700 border-2 border-black cursor-not-allowed'
                    : 'hover:bg-[#6D1212] hover:text-[#FFF5D1] hover:cursor-pointer'}`}> <FiTriangle size={20}></FiTriangle> {upvotes} </button>
            </div>
        </div>
    );
};

export default TrendingProductCard;