import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { TbFidgetSpinner } from 'react-icons/tb'
import LoadingSpinner from '../../Shared/LoadingSpinner'
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';

const Login = () => {
  const axiosPublic = useAxiosPublic();
  const { signIn, googleSignIn, loading, user } = useAuth()
  const navigate = useNavigate();
  const location = useLocation();
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const from = location?.state?.from?.pathname || '/';
  if (loading) {
    return <LoadingSpinner />
  }

  if (user) {
    return <Navigate to={from} replace={true} />
  }

  // form submit handler
  const handleSubmit = async event => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value

    try {
      //User Login
      await signIn(email, password)

      navigate(from, { replace: true })

    } catch (err) {
      console.log(err)
    }
  }

  // Handle Google Signin
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(res => {
        console.log("From Login page", res.user);
        const userInfo = {
          name: res?.user?.displayName,
          email: res?.user?.email,
        }

        axiosPublic.post('/users', userInfo)
          .then(res => {
            console.log(res.data);
            navigate('/');
          })
      })
  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-white'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold text-[#1A2634]'>Log In</h1>
          <p className='text-sm text-gray-400'>
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm text-[#1A2634] font-bold'>
                Email address
              </label>
              <input
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2 text-[#1A2634] font-bold'>
                  Password
                </label>
              </div>
              <input
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                type='password'
                name='password'
                autoComplete='current-password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-[#1A2634] w-full rounded-md py-3 text-white'
            >
              {loading ? (
                <TbFidgetSpinner className='animate-spin m-auto' />
              ) : (
                'Continue'
              )}
            </button>
          </div>
        </form>
        <div className='space-y-1'>
          <button className='text-xs hover:underline hover:text-lime-500 text-gray-400'>
            Forgot password?
          </button>
        </div>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Login with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div
          onClick={handleGoogleSignIn}
          className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
        >
          <FcGoogle size={32} />

          <p className='text-[#1A2634] font-bold'>Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Don&apos;t have an account yet?{' '}
          <Link
            to='/signup'
            className='hover:underline hover:text-[#1A2634] font-bold text-gray-600'
          >
            Sign up
          </Link>
          .
        </p>

        <div className='flex justify-center gap-x-2 mt-4'>
          <button onClick={() => {
            setEmailInput('admin1@gmail.com');
            setPasswordInput('123456Aa')
          }} className='btn bg-[#1A2634] text-white'> Login as Admin
          </button>


          <button onClick={() => {
            setEmailInput('moderator1@gmail.com');
            setPasswordInput('123456Aa')
          }} className='btn bg-[#1A2634] text-white'> Login as Moderator </button>

          <button onClick={() => {
            setEmailInput('tester1@gmail.com');
            setPasswordInput('123456Aa')
          }} className='btn bg-[#1A2634] text-white'> Login as User </button>
        </div>
      </div>
    </div>
  )
}

export default Login