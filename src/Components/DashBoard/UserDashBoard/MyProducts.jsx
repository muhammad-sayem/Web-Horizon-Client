import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import UpdateModal from "./UpdateModal";
import LoadingSpinner from "../../../Shared/LoadingSpinner";
import { Link } from "react-router-dom";

const MyProducts = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: myProducts = [], refetch, isLoading } = useQuery({
    queryKey: ["myProducts"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/products/${user?.email}`);
      return data;
    }
  });

  console.log(myProducts);

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>
  }

  const handleDeleteProduct = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosSecure.delete(`/product/${id}`);
          await axiosSecure.delete(`/featured/${id}`);
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Product has been deleted.",
            icon: "success"
          });
        } catch (err) {
          console.log(err);
          Swal.fire({
            title: "Something went wrong",
            icon: "error"
          });
        }
      }
    });
  };


  return (
    <div>
      <h2 className="text-5xl text-center text-[#1A2634] font-bold my-4 dark:text-[#87CEEB]"> My Products </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="dark:text-[#87CEEB]">
              <th>Product Name</th>
              <th>Votes</th>
              <th>Status</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {
              myProducts.map(product => (
                <tr key={product._id}>
                  <th className="dark:text-[#87CEEB]"> {product.productName} </th>
                  <td className="dark:text-[#87CEEB]"> {product.upvotes} </td>

                  <td>
                    <span className={
                      product.status === "Accepted" ? "text-green-600 font-bold" :
                        product.status === "Rejected" ? "text-red-600 font-bold" : product.status === "Pending" ? "text-yellow-500 font-bold" : ""}>
                      {product.status}
                    </span>
                  </td>

                  <td> <Link to={`/dashboard/product/update/${product._id}`} className="bg-blue-400 px-2 md:px-5 py-2 rounded-xl font-bold dark:text-black"> Update </Link> </td>


                  <td> <button onClick={() => handleDeleteProduct(product._id)} className="bg-red-500 px-2 md:px-5 py-2 rounded-xl font-bold dark:text-black"> Delete </button> </td>

                  {/* Modal */}
                  {/* <UpdateModal
                    key={product._id}
                    product={product}
                  ></UpdateModal> */}

                </tr>


              ))
            }

          </tbody>
        </table>
      </div>


    </div>
  );
};

export default MyProducts;