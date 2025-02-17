import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const MyProducts = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: myProducts = [], refetch } = useQuery({
    queryKey: ["myProducts"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/products/${user?.email}`);
      return data;
    }
  });

  console.log(myProducts);

  const handleDeleteProduct = async (id) => {
    try {
      await axiosSecure.delete(`/product/${id}`);
      await axiosSecure.delete(`/featured/${id}`);
      refetch();
      Swal.fire({
        title: "Product Deleted Successfully",
        icon: "success"
      });
    }
    catch (err) {
      console.log(err);
      Swal.fire({
        title: "Something Wrong",
        icon: "error"
      });
    }
  }

  return (
    <div>
      <h2 className="text-5xl text-center text-[#6D1212] font-bold my-4"> My Products </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
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
                  <th> {product.productName} </th>
                  <td> {product.upvotes} </td>

                  <td>
                    <span className={
                      product.status === "Accepted" ? "text-green-600 font-bold" :
                        product.status === "Rejected" ? "text-red-600 font-bold" : product.status === "Pending" ? "text-yellow-500 font-bold" : ""}>
                      {product.status}
                    </span>
                  </td>

                  <td> <button onClick={() => document.getElementById(`my_modal_${product._id}`).showModal()} className="bg-blue-400 px-5 py-2 rounded-xl font-bold"> Update </button> </td>

                  <td> <button onClick={() => handleDeleteProduct(product._id)} className="bg-red-500 px-5 py-2 rounded-xl font-bold"> Delete </button> </td>

                  {/* Modal */}
                  <dialog id={`my_modal_${product._id}`} className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg"> {product.productName} </h3>
                      <p className="py-4">Press ESC key or click the button below to close</p>
                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>

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