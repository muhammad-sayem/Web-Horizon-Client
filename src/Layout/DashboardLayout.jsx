import React from 'react';
import DashBoard from '../Components/Dashboard/DashBoard';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className=''>
            <DashBoard></DashBoard>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;