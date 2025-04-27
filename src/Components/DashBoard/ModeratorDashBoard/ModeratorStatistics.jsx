import { useQuery } from "@tanstack/react-query";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import LoadingSpinner from "../../../Shared/LoadingSpinner";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const ModeratorStatistics = () => {
    const axiosPublic = useAxiosPublic();

    // const { data, isLoading, error } = useQuery({
    //     queryKey: ["admin-stats"],
    //     queryFn: async () => {
    //         const { data } = await axiosSecure.get("admin-stats");
    //         return data;
    //     },
    // });

    const { data: TotalUsers, isLoading } = useQuery({
        queryKey: ['totalUsers'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/users/count');
            return data.count;
        }
    });

    const { data: subscribedUsers } = useQuery({
        queryKey: ['subscribedUsers'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/users/subscribed');
            return data.count;
        }
    });

    let normalUsers = TotalUsers - subscribedUsers;

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    // if (error) return <p>Error fetching data.</p>;

    // Prepare data for PieChart
    const chartData = [
        { name: "Total Users", value: TotalUsers },
        { name: "Exclusive Users", value: subscribedUsers },
        { name: "Normal Users", value: normalUsers },
    ];

    return (
        <div className="w-full flex flex-col items-center">
            <h2 className="text-5xl text-center text-[#1A2634] font-bold my-4 md:my-8 lg:my-12"> Moderator Statistics </h2>
            <ResponsiveContainer width="50%" height={300}>
                <PieChart>
                    <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}`}
                    >
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ModeratorStatistics;
