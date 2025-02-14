import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";
import MyProfile from "../Components/DashBoard/UserDashBoard/MyProfile";
import AddProduct from "../Components/DashBoard/UserDashBoard/AddProduct";
import MyProducts from "../Components/DashBoard/UserDashBoard/MyProducts";
import ReviewProducts from "../Components/DashBoard/ModeratorDashBoard/ReviewProducts";
import ReportedContents from "../Components/DashBoard/ModeratorDashBoard/ReportedContents";
import ManageUsers from "../Components/DashBoard/AdminDashBoard/ManageUsers";
import ManageCoupons from "../Components/DashBoard/AdminDashBoard/ManageCoupons";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/product/:id',
                element: <ProductDetails></ProductDetails>
            },
        ]
    },

    {
        path: "dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            
            // user related routes 
            {
                path: 'my-profile',
                element: <MyProfile></MyProfile>
            },
            {
                path: 'add-product',
                element: <AddProduct></AddProduct>
            },
            {
                path: 'my-products',
                element: <MyProducts></MyProducts>
            },
            
            // Moderator Related Routes //
            {
                path: 'review-products',
                element: <ReviewProducts></ReviewProducts>
            },
            {
                path: 'reported-contents',
                element: <ReportedContents></ReportedContents>
            },
            
            // Admin Related Routes //
            {
                path: 'manage-users',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'manage-coupons',
                element: <ManageCoupons></ManageCoupons>
            },
            

        ]
    }

   
]);