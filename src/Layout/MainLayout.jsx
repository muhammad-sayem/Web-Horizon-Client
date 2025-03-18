import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const MainLayout = () => {
    const location = useLocation();
    // console.log(location);

    const loginPage = location.pathname.includes('login') || location.pathname.includes('signup');

    return (
        <div>
            {
                loginPage ||
                <div className='w-11/12 mx-auto'>
                    <Navbar></Navbar>
                </div>
            }
            <Outlet></Outlet>
            {loginPage || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;