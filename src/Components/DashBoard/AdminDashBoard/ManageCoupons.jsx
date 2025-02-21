import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageCoupons = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: coupons = [], isLoading} = useQuery({
        queryKey: ['coupons'],
        queryFn: async() => {
            const {data} = await axiosSecure.get('/coupons');
            return data;
        }
    });

    console.log(coupons);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const couponCode = form.couponCode.value;
        const expiryDate = form.expiryDate.value;
        const couponDescription = form.couponDescription.value;
        const discountAmount = parseInt(form.discountAmount.value);

        const formData = {
            couponCode,
            expiryDate,
            couponDescription,
            discountAmount
        }

        try {
            await axiosSecure.post('/add-coupon', formData);
            form.reset();
            Swal.fire({
                title: "Coupon added successfully!!",
                icon: "success"
            });
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
            <div>

            </div>

            <h2 className="text-5xl text-center text-[#6D1212] font-bold my-4"> Add New Coupon </h2>

            <form onSubmit={handleSubmit}>
                <div className="w-4/5 mx-auto">
                    <div className="grid gap-x-4">
                        <div className="mb-6">
                            <p className='text-[#6D1212] text-lg font-bold'>Coupon Code</p>
                            <input
                                type="text"
                                name="couponCode"
                                placeholder="Enter Coupon Code"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <p className='text-[#6D1212] text-lg font-bold'>Expiry Date</p>
                            <input
                                type="date"
                                name="expiryDate"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <p className='text-[#6D1212] text-lg font-bold'>Coupon Description</p>
                            <textarea
                                className="textarea textarea-bordered w-full"
                                name="couponDescription"
                                placeholder="Description of the coupon"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <p className='text-[#6D1212] text-lg font-bold'>Discount Amount</p>
                            <input
                                type="text"
                                name="discountAmount"
                                placeholder="Discount Amount"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                    </div>

                </div>
                <div className="w-4/5 mx-auto mt-4">
                    <button className="btn w-full bg-[#6D1212] text-white text-xl font-bold"> Add Coupon </button>
                </div>
            </form>
        </div>
    );
};

export default ManageCoupons;