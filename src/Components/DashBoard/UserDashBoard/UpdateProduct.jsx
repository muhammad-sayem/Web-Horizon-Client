import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';
import LoadingSpinner from '../../../Shared/LoadingSpinner';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useEffect, useState } from 'react';
import { imageUpload } from '../../../api/utils';
import { WithContext as ReactTags } from "react-tag-input";
import { useQuery } from '@tanstack/react-query';

const UpdateProduct = () => {
  const { id } = useParams();
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const { data: product = {}, isLoading, refetch } = useQuery({
    queryKey: ['update-product', id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/product/${id}`);
      return data;
    },
    enabled: !!id,
  });

  const [tags, setTags] = useState([]);
  const [productImage, setProductImage] = useState('');
  const [uploadImageButtonText, setUploadImageButtonText] = useState('Upload Image');

  useEffect(() => {
    if (product.tags && Array.isArray(product.tags)) {
      setTags(product.tags.map(tag => ({ id: tag, text: tag })));
    }
    if (product.productImage) {
      setProductImage(product.productImage);
    }
  }, [product]);

  if (loading || isLoading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <div>No user found</div>;
  }

  const owner = {
    name: user?.displayName,
    email: user?.email,
    image: user?.photoURL
  };

  const handleAddition = (tag) => setTags([...tags, tag]);
  const handleDelete = (i) => setTags(tags.filter((tag, index) => index !== i));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const productName = form.productName.value;
    const productDescription = form.productDescription.value;
    const tagValues = tags.map(tag => tag.text);
    const externalLink = form.externalLink.value;

    const selectedImage = form.image.files[0];

    let updatedProductImage = productImage;
    if (selectedImage) {
      updatedProductImage = await imageUpload(selectedImage);
    }

    const updatedData = {
      productName,
      productImage: updatedProductImage,
      productDescription,
      owner,
      externalLink,
      tags: tagValues,
    };

    try {
      await axiosSecure.put(`/product/update/${id}`, updatedData);
      await axiosSecure.put(`/featured/update/${id}`, updatedData);
      refetch();
      Swal.fire({
        title: "Product Updated successfully!!",
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
    <div className="bg-[#87CEEB] py-16 my-8 w-10/12 mx-auto rounded-3xl">
      <h2 className="text-4xl text-center text-[#1A2634] font-bold mb-8"> Update Product </h2>
      <form onSubmit={handleSubmit}>
        <div className="w-4/5 mx-auto">
          <div className="grid md:grid-cols-2 gap-x-4">
            <div className="mb-6">
              <p className='text-[#1A2634] text-lg font-bold'>Product Name</p>
              <input type="text" name="productName" className="input input-bordered w-full" required defaultValue={product.productName} />
            </div>

            <div className="mb-6">
              <p className='text-[#1A2634] text-lg font-bold'>Product Description</p>
              <textarea className="textarea textarea-bordered w-full" name="productDescription" required defaultValue={product.productDescription} />
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
              <input type="text" name="externalLink" className="input input-bordered w-full" required defaultValue={product.externalLink} />
            </div>

            <div className="mb-6">
              <p className='text-[#1A2634] text-lg font-bold'> Tags </p>
              <ReactTags classNames={{
                tag: "bg-[#1A2634] text-[#87CEEB] px-3 py-1 rounded mr-2 mb-2",
                remove: "text-[#87CEEB] ml-2 cursor-pointer font-bold"
              }}
                tags={tags} handleDelete={handleDelete} handleAddition={handleAddition} inputFieldPosition="inline" placeholder="Add new tag" />
            </div>

            <div className='flex flex-col w-max'>
              <p className='text-[#1A2634] text-lg font-bold mb-2'> Upload Product Image </p>
              <label>
                <div className='bg-[#1A2634] text-[#87CEEB] rounded font-semibold cursor-pointer py-1 px-12 hover:bg-[#1A2634] text-lg'>
                  {uploadImageButtonText}
                </div>
                <input
                  onChange={(e) => setUploadImageButtonText(e.target.files[0]?.name || 'Upload Image')}
                  className='hidden'
                  type='file'
                  name='image'
                  accept='image/*'
                />
              </label>
              {productImage && (
                <img src={productImage} alt="Current Product" className="mt-4 w-32 h-32 rounded-lg" />
              )}
            </div>

          </div>
        </div>
        <div className="w-4/5 mx-auto mt-4">
          <button className="btn w-full bg-[#1A2634] text-white text-xl font-bold"> Update </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;