import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Sidebar from '../Components/Dashboard/Sidebar';
import UseRole from '../Hooks/UseRole';

const DashboardLayout = () => {
    const [role] = UseRole();

    return (
        <div className='flex flex-col lg:flex-row'>
            
            <div className='w-full lg:w-1/6 bg-[#4F0202] min-h-screen'>
                <Sidebar />
            </div>

            
            <div className='w-full lg:w-5/6'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;