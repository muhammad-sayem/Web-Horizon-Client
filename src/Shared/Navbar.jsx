import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../assets/images/logo.png"
import { AuthContext } from '../Providers/AuthProvider';
import LoadingSpinner from './LoadingSpinner';
import UseRole from '../hooks/useRole';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [role, isLoading] = UseRole();
  console.log("Navbar page theke role bolchi", role);
  console.log("Navbar page theke isLoading bolchi", isLoading);

  const handeSignOut = () => {
    logOut();
    navigate('/login');
  }

  return (
    <div className='navbar bg-base-100 shadow-sm mx-auto p-0 mb-12'>
      <div className='flex-1'>
        <Link to='/' className='gap-2 items-center'>
          <img className='w-12 h-12 mx-auto' src={logo} alt='' />
          <span className='font-black text-md text-[#1A2634] md:text-xl'>Tech Horizon</span>
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1 text-md'>
          <li>
            <Link to='/' className='font-bold text-[16px] text-[#1A2634] '>Home</Link>
          </li>
          <li>
            <Link to='/products' className='font-bold text-[16px] text-[#1A2634] '>Products</Link>
          </li>

          {!user && (
            <li>
              <Link to='/login'>Login</Link>
            </li>
          )}
        </ul>

        {user && (
          <div className='dropdown dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div title={user?.displayName} className='w-10 rounded-full'>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
            </div>
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
              >
                <p className='p-3'> {user?.displayName} </p>

                <li>
                  <Link to={
                    role === "User" ? "/dashboard/my-profile" :
                      role === "Moderator" ? "/dashboard/review-products" :
                        role === "Admin" ? "/dashboard/manage-users" : "/"
                  }>
                    Dashboard
                  </Link>
                </li>
                <li className='mt-2'>
                  <button
                    onClick={handeSignOut}
                    className='bg-gray-200 block text-center'
                  >
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
