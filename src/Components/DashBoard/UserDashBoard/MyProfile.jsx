import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../Shared/LoadingSpinner";
import { MdVerified } from "react-icons/md";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from "../../CheckoutForm/CheckoutForm";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import UseRole from "../../../hooks/useRole";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const MyProfile = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [role] = UseRole();

  const { data: allUsers = [], isLoading, refetch } = useQuery({
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
    } catch (err) {
      console.log(err);
      Swal.fire({
        title: "Something went wrong",
        icon: "error"
      });
      navigate('/dashboard/my-profile');
    }
  };

  return (
    <div className="w-full md:w-2/5 mx-auto my-12 shadow-2xl rounded-2xl p-5">

      <div className=" mb-6 md:mb-0 text-center">
        <h2 className="text-3xl font-bold mb-2"> My Profile </h2>
        <div className="flex justify-center my-4">
          <img
            src={user?.photoURL}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-4 md:mb-0"
            alt="User Avatar"
          />
        </div>
        <div className="text-center">
          <h2 className="text-xl lg:text-2xl font-bold">Name: {user?.displayName}</h2>
          <p className="text-lg lg:text-2xl font-bold">Email: {user?.email}</p>
          <p className="text-lg lg:text-2xl font-bold">Role: {role}</p>
        </div>
      </div>


      <div className="mt-4 flex justify-center">
        {currUser?.subscribed ? (
          <div className="flex justify-center items-center gap-x-2">
            <MdVerified size={24} color="green" />
            <p className="text-xl md:text-2xl font-bold text-green-700">Verified</p>
          </div>
        ) : (
          <div>
            <button
              onClick={() => document.getElementById(`my_modal_${user?.email}`)?.showModal()}
              className="bg-[#1A2634] px-6 py-2 text-white text-lg md:text-xl font-bold"
            >
              Buy Subscription <br /> $90
            </button>

            {/* Modal */}
            <dialog id={`my_modal_${currUser?.email}`} className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-xl md:text-2xl">Enter card details to buy subscription</h3>

                {/* CheckoutForm */}
                <Elements stripe={stripePromise}>
                  <CheckoutForm />
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