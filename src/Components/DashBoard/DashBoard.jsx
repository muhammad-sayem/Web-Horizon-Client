import React from 'react';
import { NavLink } from 'react-router-dom';
import Statistics from './AdminDashBoard/Statistics'
import useAuth from '../../Hooks/useAuth';
import UseRole from '../../Hooks/UseRole';


const DashBoard = () => {
    const {user} = useAuth();
    const [role, isLoading] = UseRole();
    console.log(role);
    return (
        <div>
            <h3 > User Related Links </h3>
            <NavLink to='/dashboard/my-profile'> My Profile </NavLink>
            <NavLink to='/dashboard/add-product'> Add Product </NavLink>
            <NavLink to='/dashboard/my-products'> My Products </NavLink>

            <h3 className='mt-6'> Moderator Related Links </h3>
            <NavLink to='/dashboard/review-products'> Review Products </NavLink>
            <NavLink to='/dashboard/reported-contents'> Reported Contents </NavLink>

            <h3 className='mt-6'> Admin Related Links </h3>
            <Statistics></Statistics>
            <NavLink to='/dashboard/manage-users'> Manage Users </NavLink>
            <NavLink to='/dashboard/manage-coupons'> Manage Coupons </NavLink>
        </div>
    );
};

export default DashBoard;