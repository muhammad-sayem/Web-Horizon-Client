import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin";

const SignUp = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const userInfo = {
              name: data.name,
              email: data.email
            }

            axiosPublic.post('/users', userInfo)
              .then(res => {
                if (res.data.insertedId) {
                  reset();
                  Swal.fire({
                    title: "Registration Successful",
                    icon: "success"
                  });
                  navigate('/');
                }
              })
          })
          .catch(err => {
            console.log(err);
          })
      })
  };

  return (
    <>
      <Helmet>
        <title> Tech Horizon | Sign Up </title>
      </Helmet>

      <div className='flex justify-center items-center min-h-screen bg-white'>
        <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
          <div className='mb-8 text-center'>
            <h1 className='my-3 text-4xl font-bold text-[#1A2634]'>Sign Up</h1>
            <p className='text-sm text-gray-400'>
              Create an account to explore all the amazing features!
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            <div className='space-y-4'>
              <div>
                <label htmlFor='name' className='block mb-2 text-sm text-[#1A2634] font-bold'>
                  Name
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Enter your name'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900'
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <span className="text-red-500">{errors.name.message}</span>}
              </div>
              <div>
                <label htmlFor='photoURL' className='block mb-2 text-sm text-[#1A2634] font-bold'>
                  Photo URL
                </label>
                <input
                  type='text'
                  name='photoURL'
                  id='photoURL'
                  placeholder='Enter your photo URL'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900'
                  {...register("photoURL", { required: "Photo URL is required" })}
                />
                {errors.photoURL && <span className="text-red-500">{errors.photoURL.message}</span>}
              </div>
              <div>
                <label htmlFor='email' className='block mb-2 text-sm text-[#1A2634] font-bold'>
                  Email address
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  required
                  placeholder='Enter your email here'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900'
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
              </div>
              <div>
                <label htmlFor='password' className='block mb-2 text-sm text-[#1A2634] font-bold'>
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  autoComplete='current-password'
                  id='password'
                  required
                  placeholder='Enter your password'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900'
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Password must be at least 6 characters long" },
                    maxLength: { value: 20, message: "Password can't be more than 20 characters" },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])/,
                      message: "Password must include at least 1 uppercase letter, 1 lowercase letter, and 1 number."
                    }
                  })}
                />
                {errors.password && <span className="text-red-500">{errors.password.message}</span>}
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='bg-[#1A2634] w-full rounded-md py-3 text-white'
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className='flex items-center pt-4 space-x-1'>
            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
            <p className='px-3 text-sm dark:text-gray-400'>
              Or sign up with a social account
            </p>
            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          </div>

          <SocialLogin />

          <p className='px-6 text-sm text-center text-gray-400'>
            Already have an account?{' '}
            <Link
              to='/login'
              className='hover:underline hover:text-[#1A2634] font-bold text-gray-600'
            >
              Login
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
