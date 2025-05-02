import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import logo2 from '../assets/images/logo 2.png';
import { AuthContext } from '../Providers/AuthProvider';
import LoadingSpinner from './LoadingSpinner';
import UseRole from '../hooks/useRole';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [role, isLoading] = UseRole();
  const [menuOpen, setMenuOpen] = useState(false);

  const handeSignOut = () => {
    logOut();
    navigate('/login');
  };

  const location = useLocation();
  const isHome = location.pathname === '/';
  const textColor = isHome ? "text-[#d6c6ff]" : "text-[#5A45CE]";

  return (
    <div className={`navbar fixed top-0 z-10 w-full px-4 md:px-6 lg:px-16  py-2 ${isHome ? 'bg-[#200C3C]' : 'bg-[#F3EFFD]'}`}>
      <div className='flex justify-between items-center w-full'>
        <Link to='/' className='flex items-center gap-2'>
          <img className='w-12 h-12' src={`${isHome ? logo : logo2}`} alt='Logo' />
          <span className={`text-sm md:text-xl font-semibold ${textColor}`}>
            Web Horizon
          </span>
        </Link>

        <div className='flex items-center space-x-4 md:hidden'>
          {user && (
            <div className='dropdown dropdown-end z-50'>
              <div tabIndex={0} role='button' className='btn btn-ghost btn-circle avatar'>
                <div title={user?.displayName} className='w-10 rounded-full'>
                  <img referrerPolicy='no-referrer' alt='User Profile Photo' src={user?.photoURL} />
                </div>
              </div>
              {isLoading ? (
                <LoadingSpinner />
              ) : (
                <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
                  <p className='p-3'>{user?.displayName}</p>
                  <li>
                    <Link
                      to={
                        role === 'User'
                          ? '/dashboard/my-profile'
                          : role === 'Moderator'
                            ? '/dashboard/moderator/my-profile'
                            : role === 'Admin'
                              ? '/dashboard/admin/my-profile'
                              : '/'
                      }
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li className='mt-2'>
                    <button onClick={handeSignOut} className='bg-gray-200 block text-center'>
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          )}

          <button onClick={() => setMenuOpen(!menuOpen)} className='text-4xl text-[#d6c6ff]'>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <div className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
          <div className='w-64 bg-base-100 h-full shadow-lg p-5'>
            <button onClick={() => setMenuOpen(false)} className='text-4xl text-[#d6c6ff] absolute top-4 right-4'>
              <FiX />
            </button>
            <ul className='mt-10 space-y-4'>
              <li>
                <Link to='/' className={`text-sm text-[#5A45CE] ${textColor}`} onClick={() => setMenuOpen(false)}>
                  HOME
                </Link>
              </li>
              <li>
                <Link to='/products' className={`text-sm text-[#5A45CE] ${textColor}`} onClick={() => setMenuOpen(false)}>
                  WEBSITES
                </Link>
              </li>
              <li>
                <Link to='/about-us' className={`text-sm text-[#5A45CE] ${textColor}`}>
                  ABOUT US
                </Link>
              </li>
              {!user && (
                <li>
                  <Link to='/login' className={`text-sm text-[#5A45CE] ${textColor}`} onClick={() => setMenuOpen(false)}>
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className='hidden md:flex items-center space-x-4'>
          <ul className='flex space-x-4'>
            <li>
              <Link to='/' className={`text-sm text-[#5A45CE] ${textColor}`}>
                HOME
              </Link>
            </li>
            <li>
              <Link to='/products' className={`text-sm text-[#5A45CE] ${textColor}`}>
                WEBSITES
              </Link>
            </li>
            <li>
              <Link to='/about-us' className={`text-sm text-[#5A45CE] ${textColor}`}>
                ABOUT US
              </Link>
            </li>
            {!user && (
              <li>
                <Link to='/login' className={`text-sm text-[#5A45CE] ${textColor}`}>
                  LOGIN
                </Link>
              </li>
            )}
            {
              user && (
                <Link className={`text-sm mt-1 ${textColor}`} to={role === 'User' ? '/dashboard/my-profile'
                  : role === 'Moderator' ? '/dashboard/moderator/my-profile'
                    : role === 'Admin' ? '/dashboard/admin/my-profile' : '/'}
                > DASHBOARD </Link>
              )
            }
          </ul>

          {user && (
            <div className='dropdown dropdown-end z-50'>
              <div tabIndex={0} role='button' className='btn btn-ghost btn-circle avatar'>
                <div title={user?.displayName} className='w-10 rounded-full'>
                  <img referrerPolicy='no-referrer' alt='User Profile Photo' src={user?.photoURL} />
                </div>
              </div>
              {isLoading ? (
                <LoadingSpinner />
              ) : (
                <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
                  <p className='p-3'>{user?.displayName}</p>
                  <li>
                    <Link
                      to={
                        role === 'User'
                          ? '/dashboard/my-profile'
                          : role === 'Moderator'
                            ? '/dashboard/moderator/my-profile'
                            : role === 'Admin'
                              ? '/dashboard/admin/my-profile'
                              : '/'
                      }
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li className='mt-2'>
                    <button onClick={handeSignOut} className='bg-gray-200 block text-center'>
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
