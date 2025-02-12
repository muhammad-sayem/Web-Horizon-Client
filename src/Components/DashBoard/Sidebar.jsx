import useAuth from "../../Hooks/useAuth";

const Sidebar = () => {
    const {user} = useAuth();
    return (
        <div className="text-[#FFF5D1] mb-8">
            <h3 className="text-4xl text-center font-bold">Welcome </h3>
            <h3 className="text-3xl text-center font-semibold">{user?.displayName} </h3>
        </div>
    );
};

export default Sidebar;