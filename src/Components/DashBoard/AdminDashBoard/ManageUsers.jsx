import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: users = [], isLoading, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const { data } = await axiosSecure.get('/users');
      return data;
    }
  });

  const allUsers = users.filter(oneUser => oneUser?.email !== user?.email);

  const handleMakeModerator = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure to make this user moderator?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Make Moderator!"
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axiosSecure.patch(`/users/moderator/${id}`);
          refetch();
          Swal.fire({
            title: "Done!",
            text: "This user is moderator now.",
            icon: "success"
          });
        }
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







  const handleMakeAdmin = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure to make this user admin?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Make Admin!"
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axiosSecure.patch(`/users/admin/${id}`);
          refetch();
          Swal.fire({
            title: "Done!",
            text: "This user is admin now.",
            icon: "success"
          });
        }
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

  console.log(users);
  return (
    <div>
      <h2 className="text-5xl text-center text-[#6D1212] font-bold my-4"> Manage Users </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>User Name</th>
              <th> User Email</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {
              allUsers.map(singleUser => (
                <tr key={singleUser._id}>
                  <th> {singleUser?.name} </th>
                  <td> {singleUser?.email} </td>
                  <td> <button
                    disabled={singleUser?.role === "Moderator"}
                    className={`text-md font-bold px-4 py-2 ${singleUser?.role === "Moderator" ? "bg-teal-900 cursor-not-allowed" : "bg-teal-500"}`}
                    onClick={() => handleMakeModerator(singleUser?._id)}
                  > Make Moderator </button> </td>

                  <td> <button
                    disabled={singleUser?.role === "Admin"}
                    className={`text-md font-bold px-4 py-2 ${singleUser?.role === "Admin" ? "bg-blue-900 cursor-not-allowed" : "bg-blue-500"}`}
                    onClick={() => handleMakeAdmin(singleUser?._id)}
                  > Make Admin </button> </td>

                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;