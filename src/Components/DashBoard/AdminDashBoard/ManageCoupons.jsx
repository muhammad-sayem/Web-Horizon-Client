import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import CouponCard from "./CouponCard";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageCoupons = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: coupons = [], isLoading, refetch } = useQuery({
    queryKey: ["coupons"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/coupons");
      return data;
    },
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
      discountAmount,
    };

    try {
      await axiosSecure.post("/add-coupon", formData);
      refetch();
      form.reset();
      Swal.fire({
        title: "Coupon added successfully!!",
        icon: "success",
      });
    } catch (err) {
      console.log(err);
      Swal.fire({
        title: "Something Went Wrong",
        icon: "error",
      });
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-12">

      <h2 className="text-2xl md:text-3xl lg:text-4xl text-center text-[#5A45CE] font-bold my-4">
        Available Coupons
      </h2>


      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {
          coupons.map((coupon) => (
            <CouponCard key={coupon._id} coupon={coupon} refetch={refetch} />
          ))
        }
      </div>

      <h2 className="text-3xl sm:text-4xl text-center text-[#5A45CE] font-bold mt-16 mb-8">
        Add New Coupon
      </h2>

      {/* Coupon Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          <div>
            <p className="text-[#5A45CE] text-lg font-bold">Coupon Code</p>
            <input
              type="text"
              name="couponCode"
              placeholder="Enter Coupon Code"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <p className="text-[#5A45CE] text-lg font-bold">Expiry Date</p>
            <input
              type="date"
              name="expiryDate"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        <div className="mt-6">
          <p className="text-[#5A45CE] text-lg font-bold">Coupon Description</p>
          <textarea
            className="textarea textarea-bordered w-full"
            name="couponDescription"
            placeholder="Description of the coupon"
            required
          />
        </div>

        <div className="mt-6">
          <p className="text-[#5A45CE] text-lg font-bold">Discount Amount</p>
          <input
            type="text"
            name="discountAmount"
            placeholder="Discount Amount"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="my-8">
            <button className="w-full py-2 rounded-lg bg-[#5A45CE] text-[#D6C6FF] transition-transform duration-200 ease-in-out transform hover:scale-105 text-xl font-bold">
            Add Coupon
          </button>
        </div>
      </form>
    </div>
  );
};

export default ManageCoupons;
