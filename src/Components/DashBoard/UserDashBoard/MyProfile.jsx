import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../../Shared/LoadingSpinner";

const MyProfile = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const {data: allUsers = [], isLoading, refetch} = useQuery({
        queryKey: ['allUsers'],
        queryFn: async()=> {
            const {data} = await axiosSecure.get('/users');
            return data;
        }   
    });

    if(isLoading){
        return <LoadingSpinner></LoadingSpinner>
    }

    const currUser = allUsers.filter(singleUser => singleUser?.email === user?.email);
    console.log(currUser[0]);

    return (
        <div className="w-4/5 mx-auto flex items-center justify-between my-12 shadow-2xl p-5">
            <div className="flex items-center gap-x-6">
                <img src={user?.photoURL} className="w-40 h-40 rounded-full" alt="" />
                <div>
                    <h2 className="text-2xl font-bold"> {user?.displayName} </h2>
                    <p className="text-2xl font-bold"> {user?.email} </p>
                </div>
            </div>

            <div>
                {
                    currUser[0].subscribed ? 
                    <div>
                        <button className="bg-[#6D1212] px-8 py-2 text-white text-xl font-bold"> Buy Subscription <br /> $70 </button>
                    </div>
                    : "No"
                }
            </div>
        </div>
    );
};

export default MyProfile;