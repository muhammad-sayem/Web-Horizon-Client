import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const CouponCardModal = ({ coupon, refetch }) => {
    const axiosSecure = useAxiosSecure();
    const { _id, couponCode, couponDescription, expiryDate, discountAmount } = coupon;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const couponCode = form.couponCode.value;
        const expiryDate = form.expiryDate.value;
        const couponDescription = form.couponDescription.value;
        const discountAmount = parseInt(form.discountAmount.value);

        const couponData = {
            couponCode,
            expiryDate,
            couponDescription,
            discountAmount
        }

        console.log(couponData);

        try {
            await axiosSecure.put(`/coupon/${_id}`, couponData);
            refetch();
            Swal.fire({
                title: "Coupon updated successfully!!",
                icon: "success"
            });
            form.reset();
            document.getElementById(`my_modal_${_id}`).close();
        }
        catch (err) {
            console.log(err);
            Swal.fire({
                title: "Something Went wrong",
                icon: "error"
            });
        }
    }

    return (
        <div>
            <dialog id={`my_modal_${_id}`} className="modal">
                <div className="modal-box">
                    <h2 className="text-3xl text-center mb-4 font-bold text-[#1A2634]"> Edit Coupon Info </h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <p className='text-[#1A2634] text-lg font-bold'>Coupon Code</p>
                            <input
                                type="text"
                                name="couponCode"
                                className="input input-bordered w-full"
                                required
                                defaultValue={couponCode}
                            />
                        </div>

                        <div className="mb-6">
                            <p className='text-[#1A2634] text-lg font-bold'>Expiry Date</p>
                            <input
                                type="date"
                                name="expiryDate"
                                className="input input-bordered w-full"
                                required
                                defaultValue={expiryDate}
                            />
                        </div>

                        <div className="mb-6">
                            <p className='text-[#1A2634] text-lg font-bold'>Coupon Description</p>
                            <input
                                type="text"
                                name="couponDescription"
                                className="input input-bordered w-full"
                                required
                                defaultValue={couponDescription}
                            />
                        </div>

                        <div className="mb-6">
                            <p className='text-[#1A2634] text-lg font-bold'>Discount Amount</p>
                            <input
                                type="text"
                                name="discountAmount"
                                className="input input-bordered w-full"
                                required
                                defaultValue={discountAmount}
                            />
                        </div>
                        <div className="mx-auto my-2">
                            <button className="btn w-full bg-[#1A2634] text-white text-xl font-bold"> Update Coupon Info</button>
                        </div>
                    </form>
                    
                    <div className='flex justify-center'>
                        <button className="btn w-full bg-red-500 text-white text-xl font-bold" onClick={() => document.getElementById(`my_modal_${_id}`).close()}> Close </button>
                    </div>


                </div>
            </dialog>
        </div>
    );
};

export default CouponCardModal;