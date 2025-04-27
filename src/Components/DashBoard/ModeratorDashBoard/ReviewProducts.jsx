import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ReviewProducts = () => {
  const axiosSecure = useAxiosSecure();
  const featuredAt = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });

  const { data: products = [], refetch } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data } = await axiosSecure.get('/all-products');
      return data;
    }
  });

  const handleAccept = async (id) => {
    try {
      await axiosSecure.patch(`/product/accept-status/${id}`);
      refetch();
      Swal.fire({
        title: "Product Accepted by a moderator",
        icon: "success"
      });
    } catch (err) {
      Swal.fire({
        title: "Something Wrong",
        icon: "error"
      });
    }
  };

  const handleReject = async (id) => {
    try {
      await axiosSecure.patch(`/product/reject-status/${id}`);
      refetch();
      Swal.fire({
        title: "Product Rejected by a moderator",
        icon: "success"
      });
    } catch (err) {
      Swal.fire({
        title: "Something Wrong",
        icon: "error"
      });
    }
  };

  const handleMakeFeatured = async (product) => {
    try {
      await axiosSecure.post('/featured', { ...product, featuredAt });
      await axiosSecure.patch(`/product/feature-true/${product._id}`);
      refetch();
      Swal.fire({
        title: "Product Featured",
        icon: "success"
      });
    } catch (err) {
      console.log(err);
      Swal.fire({
        title: "Something Wrong",
        icon: "error"
      });
    }
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (a.status === "Pending" && b.status !== "Pending") return -1;
    if (a.status !== "Pending" && b.status === "Pending") return 1;
    return 0;
  });

  return (
    <div className="max-w-full w-full px-2 overflow-hidden">
      <h2 className="text-3xl md:text-5xl text-center text-[#1A2634] font-bold my-4">
        Review Products
      </h2>
      <div className="overflow-x-auto w-full">
        <table className="table table-zebra w-full min-w-max table-fixed border border-gray-300">

          {/* Table Header */}
          <thead>
            <tr className="bg-gray-200 text-sm md:text-md">
              <th className="px-2 py-2">Product Name</th>
              <th className="px-2 py-2">Details</th>
              <th className="px-2 py-2">Feature</th>
              <th className="px-2 py-2">Accept</th>
              <th className="px-2 py-2">Reject</th>
            </tr>
          </thead>

          <tbody>
            {sortedProducts.map(product => (
              <tr key={product._id} className="border border-gray-300">
                <td className="px-2 py-2 text-sm md:text-md">{product.productName}</td>


                <td className="px-2 py-2">
                  <Link
                    to={`/product/${product._id}`}
                    className="bg-blue-500 text-white text-sm lg:text-md font-semibold px-3 md:px-4 py-1 md:py-2 rounded-xl block w-full max-w-[150px] text-center"
                  >
                    View Details
                  </Link>
                </td>


                <td className="px-2 py-2">
                  <button
                    disabled={product.featured === true}
                    onClick={() => handleMakeFeatured(product)}
                    className={`text-white text-sm lg:text-md font-semibold px-3 md:px-4 py-1 md:py-2 rounded-xl block w-full max-w-[150px] text-center ${product.featured ? "bg-yellow-900 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-600"
                      }`}
                  >
                    Make Featured
                  </button>
                </td>


                <td className="px-2 py-2">
                  <button
                    disabled={product.status === "Accepted"}
                    onClick={() => handleAccept(product._id)}
                    className={`text-white text-sm lg:text-md font-semibold px-3 md:px-4 py-1 md:py-2 rounded-xl block w-full max-w-[150px] text-center ${product.status === "Accepted" ? "bg-green-900 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
                      }`}
                  >
                    Accept
                  </button>
                </td>


                <td className="px-2 py-2">
                  <button
                    disabled={product.status === "Rejected"}
                    onClick={() => handleReject(product._id)}
                    className={`text-white text-sm lg:text-md font-semibold px-3 md:px-4 py-1 md:py-2 rounded-xl block w-full max-w-[150px] text-center ${product.status === "Rejected" ? "bg-red-900 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"
                      }`}
                  >
                    Reject
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

export default ReviewProducts;
