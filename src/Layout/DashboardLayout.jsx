import React from 'react';

import { NavLink, Outlet } from 'react-router-dom';
import Sidebar from '../Components/Dashboard/Sidebar';
import UseRole from '../Hooks/UseRole';


const DashboardLayout = () => {
    const [role] = UseRole();

    return (
        <div className='flex'>
            <div className='w-1/6 bg-[#4F0202] min-h-screen'>
                <Sidebar></Sidebar>
            </div>
            

            <div className='border-2 w-full'>
                <Outlet></Outlet> 
            </div>

        </div>
    );
};

export default DashboardLayout;