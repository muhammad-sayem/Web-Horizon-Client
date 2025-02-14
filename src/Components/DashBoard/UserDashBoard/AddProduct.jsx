import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';
import LoadingSpinner from '../../../Shared/LoadingSpinner';

const AddProducts = () => {
    const { user, loading } = useAuth();
    const navigate = useNavigate();

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if (!user) {
        return <div> No user found </div>
    }

    const owner = {
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const productName = form.productName.value;
        const productImage = form.productImage.value;
        const productDescription = form.productDescription.value;
        const createdAt = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });

        const formData = {
            productName,
            productImage,
            productDescription,
            owner,
            createdAt
            
        }
        console.log(formData);

        // try {
            
        // }
        // catch (err) {
        //     Swal.fire({
        //         title: "Something went wrong!!",
        //         icon: "error"
        //     });
        // }
    }

    return (
        <div className="bg-[#FFF5D1] py-16 my-8 w-10/12 mx-auto rounded-3xl">
            <h2 className="text-4xl text-center text-[#6D1212] font-bold mb-8"> Add a Product </h2>

            <form onSubmit={handleSubmit}>
                <div className="w-4/5 mx-auto">
                    <div className="grid md:grid-cols-2 gap-x-4">


                        <div className="mb-6">
                            <p className='text-[#6D1212] text-lg font-bold'>Product Name</p>
                            <input
                                type="text"
                                name="productName"
                                placeholder="Product Name"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>


                        <div className="mb-6">
                            <p className='text-[#6D1212] text-lg font-bold'>Product Image</p>
                            <input
                                type="text"
                                name="productImage"
                                placeholder="Product Image"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <p className='text-[#6D1212] text-lg font-bold'>Product Description</p>
                            <textarea
                                className="textarea textarea-bordered w-full"
                                name="productDescription"
                                placeholder="Description of the product"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <p className='text-[#6D1212] text-lg font-bold'>Owner Name</p>
                            <input
                                type="text"
                                name="ownerName"
                                value={user.displayName}
                                disabled
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <p className='text-[#6D1212] text-lg font-bold'>Owner Email</p>
                            <input
                                type="email"
                                name="ownerEmail"
                                value={user.email}
                                disabled
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <p className='text-[#6D1212] text-lg font-bold'>Owner Image</p>
                            <input
                                type="email"
                                name="ownerImage"
                                value={user.photoURL}
                                disabled
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                    </div>
                </div>


                <div className="w-4/5 mx-auto">
                    <button className="btn w-full bg-[#6D1212] text-white text-xl font-bold"> Add Product </button>
                </div>
            </form>
        </div>
    );
};

export default AddProducts;