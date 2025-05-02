import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../Shared/LoadingSpinner";
import UseRole from "../../../hooks/useRole";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";

const ModeratorMyProfile = () => {
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
    <div className="w-full md:w-4/5 lg:w-2/5 mx-auto my-12 shadow-[4px_4px_10px_rgba(90,69,206,0.5)] rounded-2xl p-5">

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
          <h2 className="text-2xl font-bold">Name: {user?.displayName}</h2>
          <p className="text-2xl font-bold">Email: {user?.email}</p>
          <p className="text-2xl font-bold">Role: {role}</p>
        </div>
      </div>


      
    </div>
  );
};

export default ModeratorMyProfile;