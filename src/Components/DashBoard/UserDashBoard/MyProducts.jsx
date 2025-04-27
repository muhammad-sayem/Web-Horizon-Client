import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import LoadingSpinner from "../../../Shared/LoadingSpinner";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

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

  if (isLoading) {
    return <LoadingSpinner />;
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
          Swal.fire({
            title: "Something went wrong",
            icon: "error"
          });
        }
      }
    });
  };

  return (
    <div className="max-w-full w-full px-2 overflow-hidden">
      <h2 className="text-3xl md:text-5xl text-center text-[#f97d5e] font-bold my-12">
        My Products
      </h2>

      <div className="overflow-x-auto w-full">
        <table className="table table-zebra w-full min-w-max table-fixed border border-gray-300">
          {/* Table Header */}
          <thead>
            <tr className="bg-gray-200 text-sm md:text-md">
              <th className="px-2 py-2">Product Name</th>
              <th className="px-2 py-2">Likes</th>
              <th className="px-2 py-2">Status</th>
              <th className="px-2 py-2">Update</th>
              <th className="px-2 py-2">Delete</th>
            </tr>
          </thead>

          <tbody>
            {myProducts.map(product => (
              <tr key={product._id} className="border border-gray-300">
                <td className="px-2 py-2 text-sm md:text-md">{product.productName}</td>
                <td className="px-2 py-2 text-sm md:text-md">{product.upvotes}</td>

                <td className="px-2 py-2 text-sm md:text-md">
                  <span className={
                    product.status === "Accepted" ? "text-green-600 font-bold" :
                      product.status === "Rejected" ? "text-red-600 font-bold" :
                        product.status === "Pending" ? "text-yellow-500 font-bold" : ""
                  }>
                    {product.status}
                  </span>
                </td>

                <td className="px-2 py-2">
                  <Link
                    to={`/dashboard/product/update/${product._id}`}
                    className="bg-blue-500 text-white text-sm lg:text-md font-semibold px-3 md:px-4 py-1 md:py-2 rounded-xl block w-full max-w-[150px] text-center"
                  >
                    Update
                  </Link>
                </td>

                <td className="px-2 py-2">
                  <button
                    onClick={() => handleDeleteProduct(product._id)}
                    className="bg-red-500 hover:bg-red-600 text-white text-sm lg:text-md font-semibold px-3 md:px-4 py-1 md:py-2 rounded-xl block w-full max-w-[150px] text-center"
                  >
                    Delete
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

export default MyProducts;
