import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import CouponCardModal from "./CouponCardModal";

const CouponCard = ({ coupon, refetch }) => {
    const axiosSecure = useAxiosSecure();
    const { _id, couponCode, couponDescription, expiryDate, discountAmount } = coupon;

    const handleDeleteCoupon = async (id) => {
        try {
            await axiosSecure.delete(`/coupon/${id}`);
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Coupon has been deleted.",
                        icon: "success"
                    });
                }
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
        <div className="border border-gray-300 shadow-2xl px-6 py-10 rounded-tr-3xl rounded-bl-3xl">
            <h2 className="text-xl font-black mb-1"> Code: {couponCode} </h2>
            <p className="text-md font-bold mb-1"> Discount Amount: {discountAmount} </p>
            <p className="m2-4 text-xs"> {couponDescription} </p>
            <p className="text-md font-bold mb-2"> Expiry Date: {expiryDate} </p>

            <div className="space-x-1">
                <button onClick={() => document.getElementById(`my_modal_${_id}`).showModal()} className="bg-blue-500 font-bold text-md px-3 py-1 rounded-md"> Edit Coupon </button>

                <button onClick={() => handleDeleteCoupon(_id)} className="bg-red-500 font-bold text-md px-3 py-1 rounded-md"> Delete Coupon </button>
            </div>

            {/* Modal Part */}
            <CouponCardModal
                key={coupon._id}
                coupon={coupon}
                refetch={refetch}
            ></CouponCardModal>
        </div>
    );
};

export default CouponCard;