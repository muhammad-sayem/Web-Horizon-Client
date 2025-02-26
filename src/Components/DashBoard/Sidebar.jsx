import useAuth from "../../Hooks/useAuth";
import { AiFillProduct } from "react-icons/ai";
import { FaUserCircle, FaUsersCog } from "react-icons/fa";
import { IoAddCircle } from "react-icons/io5";
import { MdHome, MdRateReview } from "react-icons/md";
import { TbMessageReportFilled } from "react-icons/tb";
import { BiSolidCoupon } from "react-icons/bi";
import UseRole from "../../Hooks/UseRole";
import { NavLink } from "react-router-dom";
import { IoStatsChartSharp } from "react-icons/io5";

const Sidebar = () => {
    const [role] = UseRole()
    const { user } = useAuth();
    return (
        <div className="text-[#87CEEB] mb-8">
            <h3 className="text-4xl text-center font-bold">Welcome </h3>
            <h3 className="text-3xl text-center font-semibold">{user?.displayName} </h3>
            <h3 className="text-3xl text-center font-semibold mb-20">({role}) </h3>

            {
                role === 'User' &&
                <div className='flex flex-col'>
                    {/* <h3 > User Related Links </h3> */}

                    <NavLink to='/dashboard/my-profile' className={({ isActive }) => `flex justify-center items-center gap-x-2 mb-4 py-2 rounded-xl w-11/12 mx-auto text-center text-xl font-bold ${isActive ? 'bg-[#1A2634] text-[#87CEEB]' : 'bg-[#87CEEB] text-[#1A2634]'}`}> <FaUserCircle size={25}></FaUserCircle> My Profile </NavLink>

                    <NavLink to='/dashboard/add-product' className={({ isActive }) => `flex justify-center items-center gap-x-2 mb-4 py-2 rounded-xl w-11/12 mx-auto text-center text-xl font-bold ${isActive ? 'bg-[#1A2634] text-[#87CEEB]' : 'bg-[#87CEEB] text-[#1A2634]'}`}> <IoAddCircle size={25}></IoAddCircle> Add Product </NavLink>

                    <NavLink to='/dashboard/my-products' className={({ isActive }) => `flex justify-center items-center gap-x-2 mb-4 py-2 rounded-xl w-11/12 mx-auto text-center text-xl font-bold ${isActive ? 'bg-[#1A2634] text-[#87CEEB]' : 'bg-[#87CEEB] text-[#1A2634]'}`}> <AiFillProduct size={25}></AiFillProduct> My Products </NavLink>
                </div>
            }

            {
                role === "Moderator" &&
                <div className='flex flex-col'>
                    {/* <h3 className='mt-6'> Moderator Related Links </h3> */}
                    <NavLink to='/dashboard/review-products' className={({ isActive }) => `flex justify-center items-center gap-x-2 mb-4 py-2 rounded-xl w-11/12 mx-auto text-center text-xl font-bold ${isActive ? 'bg-[#1A2634] text-[#87CEEB]' : 'bg-[#87CEEB] text-[#1A2634]'}`}> <MdRateReview size={25}></MdRateReview> Review Products </NavLink>

                    <NavLink to='/dashboard/reported-contents' className={({ isActive }) => `flex justify-center items-center gap-x-2 mb-4 py-2 rounded-xl w-11/12 mx-auto text-center text-[18px] font-bold ${isActive ? 'bg-[#1A2634] text-[#87CEEB]' : 'bg-[#87CEEB] text-[#1A2634]'}`}> <TbMessageReportFilled size={25}></TbMessageReportFilled> Reported Contents </NavLink>
                </div>
            }

            {
                role === "Admin" &&
                <div className='flex flex-col'>
                    {/* <h3 className='mt-6'> Admin Related Links </h3> */}

                    <NavLink to='/dashboard/manage-users' className={({ isActive }) => `flex justify-center items-center gap-x-2 mb-4 py-2 rounded-xl w-11/12 mx-auto text-center text-xl font-bold ${isActive ? 'bg-[#1A2634] text-[#87CEEB]' : 'bg-[#87CEEB] text-[#1A2634]'}`}> <FaUsersCog size={25}></FaUsersCog> Manage Users </NavLink>

                    <NavLink to='/dashboard/manage-coupons' className={({ isActive }) => `flex justify-center items-center gap-x-2 mb-4 py-2 rounded-xl w-11/12 mx-auto text-center text-xl font-bold ${isActive ? 'bg-[#1A2634] text-[#87CEEB]' : 'bg-[#87CEEB] text-[#1A2634]'}`}> <BiSolidCoupon size={25}></BiSolidCoupon> Manage Coupons </NavLink>

                    <NavLink to='/dashboard/statistics' className={({ isActive }) => `flex justify-center items-center gap-x-2 mb-4 py-2 rounded-xl w-11/12 mx-auto text-center text-xl font-bold ${isActive ? 'bg-[#1A2634] text-[#87CEEB]' : 'bg-[#87CEEB] text-[#1A2634]'}`}> <IoStatsChartSharp size={25}></IoStatsChartSharp> Statistics </NavLink>

                </div>
            }

            <NavLink to='/' className={({ isActive }) => `flex justify-center items-center gap-x-2 mb-4 py-2 rounded-xl w-11/12 mx-auto text-center text-xl font-bold ${isActive ? 'bg-[#1A2634] text-[#87CEEB]' : 'bg-[#87CEEB] text-[#1A2634]'}`}> <MdHome size={25}></MdHome> Back to Home </NavLink>

        </div>
    );
};

export default Sidebar;