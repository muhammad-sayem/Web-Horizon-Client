import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: users = [], isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/users");
      return data;
    },
  });

  const allUsers = users.filter((oneUser) => oneUser?.email !== user?.email);

  const handleMakeModerator = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure to make this user a moderator?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Make Moderator!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axiosSecure.patch(`/users/moderator/${id}`);
          refetch();
          Swal.fire({
            title: "Done!",
            text: "This user is now a moderator.",
            icon: "success",
          });
        }
      });
    } catch (err) {
      console.log(err);
      Swal.fire({
        title: "Something Went Wrong",
        icon: "error",
      });
    }
  };

  const handleMakeAdmin = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure to make this user an admin?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Make Admin!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axiosSecure.patch(`/users/admin/${id}`);
          refetch();
          Swal.fire({
            title: "Done!",
            text: "This user is now an admin.",
            icon: "success",
          });
        }
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
      <h2 className="text-3xl sm:text-4xl text-center text-[#1A2634] font-bold my-4 darkDamagetext-[#f97d5e]">
        Manage Users
      </h2>

      <div className="overflow-x-auto">
        <table className="table-auto min-w-full border-collapse border border-gray-300 text-xs sm:text-base">
          {/* Table Head */}
          <thead className="bg-gray-200 text-gray-700 darkDamagebg-[#f97d5e] darkDamagetext-black uppercase">
            <tr>
              <th className="p-3 text-center">User Name</th>
              <th className="p-3 text-center">User Email</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          
          <tbody>
            {allUsers.map((singleUser) => (
              <tr key={singleUser._id} className="border-b border-gray-300 darkDamageborder-[#f97d5e] darkDamagetext-white">
                <td className="p-3 text-center darkDamagetext-[#f97d5e]">
                  {singleUser?.name}
                </td>
                <td className="p-3 text-center darkDamagetext-[#f97d5e]">
                  {singleUser?.email}
                </td>

                {/* Action Buttons */}
                <td className="p-3 flex flex-col sm:flex-row justify-center items-center gap-2">
                  
                  <button
                    disabled={singleUser?.role === "Moderator"}
                    className={`text-xs sm:text-sm font-bold px-3 py-1 rounded ${singleUser?.role === "Moderator"
                        ? "bg-teal-900 cursor-not-allowed text-white"
                        : "bg-teal-500 hover:bg-teal-600 text-white"
                      }`}
                    onClick={() => handleMakeModerator(singleUser?._id)}
                  >
                    Make Moderator
                  </button>

                  
                  <button
                    disabled={singleUser?.role === "Admin"}
                    className={`text-xs sm:text-sm font-bold px-3 py-1 rounded ${singleUser?.role === "Admin"
                        ? "bg-blue-900 cursor-not-allowed text-white"
                        : "bg-blue-500 hover:bg-blue-600 text-white"
                      }`}
                    onClick={() => handleMakeAdmin(singleUser?._id)}
                  >
                    Make Admin
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
