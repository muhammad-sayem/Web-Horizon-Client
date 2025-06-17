import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { AuthContext } from '../Providers/AuthProvider';
import LoadingSpinner from './LoadingSpinner';
import UseRole from '../hooks/useRole';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [role, isLoading] = UseRole();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSignOut = () => {
    logOut();
    navigate('/login');
  };

  return (
    <div className="navbar fixed top-0 z-10 w-full px-4 md:px-6 lg:px-16 py-2 bg-[#200C3C]">
      <div className="flex justify-between items-center w-full">
        <Link to="/" className="flex items-center gap-2">
          <img className="w-12 h-12" src={logo} alt="Logo" />
          <span className="text-sm md:text-xl font-semibold text-[#D6C6FF]">Web Horizon</span>
        </Link>

        <div className="flex items-center space-x-4 md:hidden">
          {user && (
            <div className="dropdown dropdown-end z-50">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div title={user?.displayName} className="w-10 rounded-full">
                  <img referrerPolicy="no-referrer" alt="User Profile" src={user?.photoURL} />
                </div>
              </div>
              {isLoading ? (
                <LoadingSpinner />
              ) : (
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  <p className="p-3 text-sm">{user?.displayName}</p>
                  <li>
                    <Link to={
                      role === 'User' ? '/dashboard/my-profile'
                        : role === 'Moderator' ? '/dashboard/moderator/my-profile'
                        : role === 'Admin' ? '/dashboard/admin/my-profile' : '/'
                    }>
                      Dashboard
                    </Link>
                  </li>
                  <li className="mt-2">
                    <button onClick={handleSignOut} className="bg-gray-200 text-sm block text-center">Logout</button>
                  </li>
                </ul>
              )}
            </div>
          )}

          <button onClick={() => setMenuOpen(!menuOpen)} className="text-4xl text-[#D6C6FF]">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
          <div className="w-64 bg-[#200C3C] h-full shadow-lg p-5">
            <button onClick={() => setMenuOpen(false)} className="text-4xl text-[#D6C6FF] absolute top-4 right-4">
              <FiX />
            </button>
            <ul className="mt-10 space-y-4 text-[#D6C6FF] text-sm">
              <li><Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link></li>
              <li><Link to="/products" onClick={() => setMenuOpen(false)}>WEBSITES</Link></li>
              <li><Link to="/about-us" onClick={() => setMenuOpen(false)}>ABOUT US</Link></li>
              {!user && <li><Link to="/login" onClick={() => setMenuOpen(false)}>LOGIN</Link></li>}
            </ul>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <ul className="flex space-x-4 text-sm text-[#D6C6FF]">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/products">WEBSITES</Link></li>
            <li><Link to="/about-us">ABOUT US</Link></li>
            {!user && <li><Link to="/login">LOGIN</Link></li>}
            {user && (
              <li>
                <Link to={
                  role === 'User' ? '/dashboard/my-profile'
                    : role === 'Moderator' ? '/dashboard/moderator/my-profile'
                    : role === 'Admin' ? '/dashboard/admin/my-profile' : '/'
                }>
                  DASHBOARD
                </Link>
              </li>
            )}
          </ul>

          {user && (
            <div className="dropdown dropdown-end z-50">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div title={user?.displayName} className="w-10 rounded-full">
                  <img referrerPolicy="no-referrer" alt="User Profile" src={user?.photoURL} />
                </div>
              </div>
              {isLoading ? (
                <LoadingSpinner />
              ) : (
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  <p className="p-3 text-sm">{user?.displayName}</p>
                  <li>
                    <Link to={
                      role === 'User' ? '/dashboard/my-profile'
                        : role === 'Moderator' ? '/dashboard/moderator/my-profile'
                        : role === 'Admin' ? '/dashboard/admin/my-profile' : '/'
                    }>
                      Dashboard
                    </Link>
                  </li>
                  <li className="mt-2">
                    <button onClick={handleSignOut} className="bg-gray-200 text-sm block text-center">Logout</button>
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