import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import LoadingSpinner from '../../../Shared/LoadingSpinner';
import { useState } from 'react';
import { imageUpload } from '../../../api/utils';
import { WithContext as ReactTags } from "react-tag-input";
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AddProducts = () => {
    const { user, loading } = useAuth();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    const [uploadImageButtonText, setUploadImageButtonText] = useState('Upload Image');
    const [tags, setTags] = useState([]);

    const handleAddition = (tag) => {
        setTags([...tags, tag]);
    };

    const handleDelete = (i) => {
        setTags(tags.filter((tag, index) => index !== i));
    }

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
        const productDescription = form.productDescription.value;
        const productImage = form.image.files[0];
        const imageUrl = await imageUpload(productImage);
        const externalLink = form.externalLink.value;
        const createdAt = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });

        const tagValues = tags.map(tag => tag.text);

        const formData = {
            productName,
            productImage: imageUrl,
            productDescription,
            owner,
            externalLink,
            tags: tagValues,
            status: 'Pending',
            upvotes: parseInt(0),
            reported: false,
            featured: false,
            createdAt
        };

        try {
            await axiosSecure.post('/products', formData);
            Swal.fire({
                title: "Product added successfully!!",
                icon: "success"
            });
            navigate('/dashboard/my-products');
        } 
        catch (err) {
            Swal.fire({
                title: "Something went wrong!!",
                icon: "error"
            });
        }
    }

    return (
        <div className="bg-[#f97d5e] py-16 my-8 w-11/12 lg:w-10/12 mx-auto rounded-3xl">
            <h2 className="text-4xl text-center text-[#1A2634] font-bold mb-8"> Add a Product </h2>

            <form onSubmit={handleSubmit}>
                <div className="w-full px-6 lg-px-0 lg:w-4/5 mx-auto">
                    <div className="grid md:grid-cols-2 gap-x-4">

                        <div className="mb-6">
                            <p className='text-[#1A2634] text-lg font-bold'>Product Name</p>
                            <input
                                type="text"
                                name="productName"
                                placeholder="Product Name"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <p className='text-[#1A2634] text-lg font-bold'>Product Description</p>
                            <textarea
                                className="textarea textarea-bordered w-full"
                                name="productDescription"
                                placeholder="Description of the product"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <p className='text-[#1A2634] text-lg font-bold'>Owner Name</p>
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
                            <p className='text-[#1A2634] text-lg font-bold'>Owner Email</p>
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
                            <p className='text-[#1A2634] text-lg font-bold'>Owner Image</p>
                            <input
                                type="email"
                                name="ownerImage"
                                value={user.photoURL}
                                disabled
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <p className='text-[#1A2634] text-lg font-bold'>External Link</p>
                            <input
                                type="text"
                                name="externalLink"
                                placeholder="External Link"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <p className='text-[#1A2634] text-lg font-bold'> Tags </p>
                            <div className="w-full">
                                <ReactTags
                                    tags={tags}
                                    handleDelete={handleDelete}
                                    handleAddition={handleAddition}
                                    inputFieldPosition="inline"
                                    placeholder="Add new tag"
                                    classNames={{
                                        tag: "bg-[#1A2634] text-[#f97d5e] px-3 py-1 rounded mr-2 mb-2",
                                        remove: "text-[#f97d5e] ml-2 cursor-pointer font-bold"
                                    }}
                                />
                            </div>
                        </div>

                        <div className='flex flex-col w-max'>
                            <p className='text-[#1A2634] text-lg font-bold mb-2'> Upload Product Image </p>
                            <label>
                                <div className='bg-[#1A2634] text-[#f97d5e]  rounded font-semibold cursor-pointer py-1 px-12 hover:bg-[#1A2634] text-lg'>
                                    {uploadImageButtonText}
                                </div>
                                <input
                                    onChange={(e) => setUploadImageButtonText(e.target.files[0].name)}
                                    className='text-sm cursor-pointer w-36 hidden'
                                    type='file'
                                    name='image'
                                    id='image'
                                    accept='image/*'
                                    hidden
                                />
                            </label>
                        </div>

                    </div>

                </div>

                <div className="w-full px-6 lg:px-0 lg:w-4/5 mx-auto mt-4">
                    <button className="btn w-full bg-[#1A2634] text-white text-xl font-bold hover:text-[#1A2634] hover:border-2 hover:border-[#1A2634]"> Add Product </button>
                </div>
            </form>
        </div>
    );
};

export default AddProducts;
