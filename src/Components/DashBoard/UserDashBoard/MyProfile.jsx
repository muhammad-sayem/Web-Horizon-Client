import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../../Shared/LoadingSpinner";
import { MdVerified } from "react-icons/md";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from "../../CheckoutForm/CheckoutForm";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)

const MyProfile = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();
  let subscriptionCost = 90;

  const { data: allUsers = [], isLoading } = useQuery({
    queryKey: ['allUsers'],
    queryFn: async () => {
      const { data } = await axiosSecure.get('/users');
      return data;
    }
  });

  const currUser = allUsers.find(singleUser => singleUser?.email === user?.email);

  if (isLoading || !currUser) {
    return <LoadingSpinner />;
  }

  console.log(currUser?._id);

  const handleSubscribe = async (id) => {
    if (!id) {
      return;
    }

    try {
      await axiosSecure.patch(`/user/status-subscribed/${id}`);
      Swal.fire({
        title: "Subscription Complete",
        icon: "success"
      });
      navigate('/dashboard/my-products');
    }
    catch (err) {
      console.log(err);
      Swal.fire({
        title: "Something went wrong",
        icon: "error"
      });
      navigate('/dashboard/my-profile');
    }
  };

  return (
    <div className="w-4/5 mx-auto flex items-center justify-between my-12 shadow-2xl p-5">
      <div className="flex items-center gap-x-6">
        <img src={user?.photoURL} className="w-40 h-40 rounded-full" alt="User Avatar" />
        <div>
          <h2 className="text-2xl font-bold">{user?.displayName}</h2>
          <p className="text-2xl font-bold">{user?.email}</p>
        </div>
      </div>

      <div>
        {currUser?.subscribed ? (
          <div className="flex justify-center items-center gap-x-2">
            <MdVerified size={30} color="green"></MdVerified>
            <p className="text-2xl font-bold text-green-800"> Verified </p>
          </div>
        ) : (
          <div>
            <button
              onClick={() => document.getElementById(`my_modal_${user?.email}`)?.showModal()}
              className="bg-[#6D1212] px-8 py-2 text-white text-xl font-bold"
            >
              Buy Subscription <br /> ${subscriptionCost}
            </button>


            {/* Modal */}
            <dialog id={`my_modal_${user?.email}`} className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg"> Enter card details to buy subscription </h3>

                {/* CheckoutForm */}
                <Elements stripe={stripePromise}>
                  {/* Form Component */}
                  <CheckoutForm></CheckoutForm>
                </Elements>

                <div className="modal-action mt-1">
                  <form method="dialog" className="space-x-2 w-full">
                    <button className="btn w-full bg-red-500 text-white font-bold">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
