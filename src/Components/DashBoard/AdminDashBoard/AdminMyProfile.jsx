import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../Shared/LoadingSpinner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import UseRole from "../../../hooks/useRole";

const AdminMyProfile = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
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

 

  return (
    <div className="w-full md:w-2/5 mx-auto my-12 shadow-2xl darkDamageshadow-[1px_1px_8px_#f97d5e] rounded-2xl p-5">

      <div className=" mb-6 md:mb-0 text-center">
        <h2 className="text-3xl font-bold mb-2 darkDamagetext-[#f97d5e]"> My Profile </h2>
        <div className="flex justify-center my-4">
          <img
            src={user?.photoURL}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-4 md:mb-0"
            alt="User Avatar"
          />
        </div>
        <div className="text-center darkDamagetext-white">
          <h2 className="text-xl lg:text-2xl font-bold">Name: {user?.displayName}</h2>
          <p className="text-lg lg:text-2xl font-bold">Email: {user?.email}</p>
          <p className="text-lg lg:text-2xl font-bold">Role: {role}</p>
        </div>
      </div>


      
    </div>
  );
};

export default AdminMyProfile;