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
import Products from "../Pages/Products/Products";
import UpdateProduct from "../Components/DashBoard/UserDashBoard/UpdateProduct";
import Statistics from "../Components/DashBoard/AdminDashBoard/Statistics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import ModeratorRoute from "./ModeratorRoute";
import AdminRoute from "./AdminRoute";
import ModeratorMyProfile from "../Components/DashBoard/ModeratorDashBoard/ModeratorMyProfile";
import AdminMyProfile from "../Components/DashBoard/AdminDashBoard/AdminMyProfile";
import ModeratorStatistics from "../Components/DashBoard/ModeratorDashBoard/ModeratorStatistics";
import UserStatistics from "../Components/DashBoard/UserDashBoard/UserStatistics";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Faq from "../Pages/Faq/Faq";
import WhyChooseUs from "../Pages/WhyChooseUs/WhyChooseUs";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/product/:id',
                element: <ProductDetails></ProductDetails>
            },
            {
                path: '/about-us',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/why-choose-us',
                element: <WhyChooseUs></WhyChooseUs>
            }
        ]
    },

    {
        path: "dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [

            // user related routes 
            {
                path: 'my-profile',
                element: <PrivateRoute>
                    <MyProfile></MyProfile>
                </PrivateRoute>
            },
            {
                path: 'add-product',
                element: <PrivateRoute>
                    <AddProduct></AddProduct>
                </PrivateRoute>
            },
            {
                path: 'my-products',
                element: <PrivateRoute>
                    <MyProducts></MyProducts>
                </PrivateRoute>
            },
            {
                path: 'product/update/:id',
                element: <PrivateRoute>
                    <UpdateProduct></UpdateProduct>
                </PrivateRoute>
            },
            {
                path: 'user-statistics',
                element: <PrivateRoute>
                    <UserStatistics></UserStatistics>
                </PrivateRoute>
            },

            // Moderator Related Routes //
            {
                path: 'moderator/my-profile',
                element: <PrivateRoute>
                    <ModeratorRoute>
                        <ModeratorMyProfile></ModeratorMyProfile>
                    </ModeratorRoute>
                </PrivateRoute>
            },
            {
                path: 'moderator-statistics',
                element: <PrivateRoute>
                    <ModeratorRoute>
                        <ModeratorStatistics></ModeratorStatistics>
                    </ModeratorRoute>
                </PrivateRoute>
            },
            {
                path: 'review-products',
                element: <PrivateRoute>
                    <ModeratorRoute>
                        <ReviewProducts></ReviewProducts>
                    </ModeratorRoute>
                </PrivateRoute>
            },
            {
                path: 'reported-contents',
                element: <PrivateRoute>
                    <ModeratorRoute>
                        <ReportedContents></ReportedContents>
                    </ModeratorRoute>
                </PrivateRoute>
            },

            // Admin Related Routes //
            {
                path: 'admin/my-profile',
                element: <PrivateRoute>
                    <AdminRoute>
                        <AdminMyProfile></AdminMyProfile>
                    </AdminRoute>
                </PrivateRoute>
            },
            {
                path: 'statistics',
                element: <PrivateRoute>
                    <AdminRoute>
                        <Statistics></Statistics>
                    </AdminRoute>
                </PrivateRoute>
            },
            {
                path: 'manage-users',
                element: <PrivateRoute>
                    <AdminRoute>
                        <ManageUsers></ManageUsers>
                    </AdminRoute>
                </PrivateRoute>
            },
            {
                path: 'manage-coupons',
                element: <PrivateRoute>
                    <AdminRoute>
                        <ManageCoupons></ManageCoupons>
                    </AdminRoute>
                </PrivateRoute>
            },
        ]
    }


]);