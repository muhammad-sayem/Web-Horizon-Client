import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import CouponCardModal from "./CouponCardModal";

const CouponCard = ({ coupon, refetch }) => {
    const axiosSecure = useAxiosSecure();
    const { _id, couponCode, couponDescription, expiryDate, discountAmount } = coupon;

    const handleDeleteCoupon = async (id) => {
        try {
            await axiosSecure.delete(`/coupon/${_id}`);
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
        <div className="border-2">
            <h2 className="text-xl font-black mb-2"> Code: {couponCode} </h2>
            <p className="text-md font-bold mb-2"> Expiry Date: {expiryDate} </p>
            <p className="mb-4"> {couponDescription} </p>
            <p className="text-xl font-bold mb-2"> Discount Amount: {discountAmount} </p>

            <div className="space-x-3">
                <button onClick={() => document.getElementById(`my_modal_${_id}`).showModal()} className="btn bg-blue-500 font-bold text-md"> Edit Coupon </button>

                <tton onClick={() => handleDeleteCoupon(_id)} className="btn bg-red-500 font-bold text-md"> Delete Coupon </tton>
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