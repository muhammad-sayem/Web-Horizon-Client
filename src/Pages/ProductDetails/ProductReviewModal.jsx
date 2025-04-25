import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import UseRole from "../../hooks/useRole";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ProductReviewModal = ({ product, refetch }) => {
  const { user } = useAuth();
  const [role] = UseRole();
  const axiosSecure = useAxiosSecure();
  const { _id, productName, owner } = product;
  const [rating, setRating] = useState(0);

  console.log(owner?.email);
  console.log(user?.email);

  const handleAddReview = async (e) => {
    e.preventDefault();
    const form = e.target;

    const reviewerName = form.reviewerName.value;
    const reviewerImage = form.reviewerImage.value;
    const reviewDescription = form.reviewDescription.value;

    const reviewData = {
      productId: _id,
      reviewerName,
      reviewerImage,
      reviewDescription,
      rating
    }

    try {
      await axiosSecure.post('/reviews', reviewData);
      refetch();
      form.reset()
      Swal.fire({
        title: "Review added successfully",
        icon: "success"
      });
      document.getElementById(`my_modal_${product._id}`).close();
    }
    catch (err) {
      console.log(err);
      Swal.fire({
        title: "Something Wrong",
        icon: "error"
      });
    }

    console.log(reviewData);

  }

  return (
    <div>
      <dialog id={`my_modal_${product._id}`} className="modal">
        <form onSubmit={handleAddReview} className="modal-box">
          <div >

            <h2 className="text-3xl font-bold text-center text-[#1A2634] mb-4"> Add Your Review </h2>

            <div className="mb-6">
              <p className='text-[#1A2634] text-lg font-bold darkDamagetext-[#f97d5e]'>Reviewer Name</p>
              <input
                type="text"
                name="reviewerName"
                className="input input-bordered w-full"
                required
                readOnly
                defaultValue={user?.displayName}
              />
            </div>

            <div className="mb-6">
              <p className='text-[#1A2634] text-lg font-bold darkDamagetext-[#f97d5e]'>Reviewer Image</p>
              <input
                readOnly
                type="text"
                name="reviewerImage"
                className="input input-bordered w-full"
                required
                defaultValue={user?.photoURL}
              />
            </div>

            <div className="mb-6">
              <p className='text-[#1A2634] text-lg font-bold darkDamagetext-[#f97d5e]'>Review Description</p>
              <textarea
                type="text"
                name="reviewDescription"
                className="input input-bordered w-full"
                required
                placeholder="Add your review here"
              />
            </div>

            <div className="mb-6">
              <p className='text-[#1A2634] text-lg font-bold darkDamagetext-[#f97d5e]'>Rating</p>
              <input
                type="text"
                name="rating"
                className="input input-bordered w-full"
                required
                placeholder="Add Rating"
                onChange={(e) => setRating(parseFloat(e.target.value))}

              />
            </div>

            <div className="w-full mx-auto mt-4">
              <button disabled={owner?.email === user?.email || role === "Admin" || role === "Moderator"} className={`btn w-full text-xl font-bold ${owner?.email === user?.email || role === "Admin" || role === "Moderator" ? "bg-gray-500 cursor-not-allowed" : "bg-[#1A2634] text-white darkDamagebg-[#f97d5e] darkDamagetext-[#1A2634] darkDamagehover:bg-[#1A2634] darkDamagehover:text-[#f97d5e] darkDamagehover:border darkDamagehover:border-[#f97d5e]"} `}> Submit Review </button>
            </div>

            <div className="modal-action mt-1">
              <form method="dialog" className="w-full">
                <button className="btn bg-red-500 w-full text-white text-xl font-bold">Close</button>
              </form>
            </div>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default ProductReviewModal;