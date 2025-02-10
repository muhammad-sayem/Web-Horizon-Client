import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../assets/images/logo.png"
import { AuthContext } from '../Providers/AuthProvider';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handeSignOut = () => {
        logOut();
        navigate('/login');
    }
    return (
        <div className='navbar bg-base-100 shadow-sm mx-auto'>
            <div className='flex-1'>
                <Link to='/' className='gap-2 items-center'>
                    <img className='w-12 h-12 mx-auto' src={logo} alt='' />
                    <span className='font-black text-md md:text-xl'>Tech Horizon</span>
                </Link>
            </div>
            <div className='flex-none'>
                <ul className='menu menu-horizontal px-1 text-md'>
                    <li>
                        <Link to='/' className='font-bold text-md'>Home</Link>
                    </li>
                    <li>
                        <Link to='/products' className='font-bold text-md'>Products</Link>
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
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                        >
                            <p className='p-3'> {user?.displayName} </p>

                            <li>
                                <Link to='/dashboard'>Dashboard</Link>
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
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar