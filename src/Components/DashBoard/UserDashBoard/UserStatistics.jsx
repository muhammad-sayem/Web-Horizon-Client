import { useQuery } from "@tanstack/react-query";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import LoadingSpinner from "../../../Shared/LoadingSpinner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const UserStatistics = () => {
    const axiosSecure = useAxiosSecure();

    const { data, isLoading, error } = useQuery({
        queryKey: ["user-stats"],
        queryFn: async () => {
            const { data } = await axiosSecure.get("user-stats");
            return data;
        },
    });

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    if (error) return <p>Error fetching data.</p>;

    const chartData = [
        { name: "Users", value: data.usersCount },
        { name: "Reviews", value: data.reviewsCount },
        { name: "Products", value: data.productsCount },
    ];

    return (
        <div className="w-full flex flex-col items-center">
            <h2 className="text-5xl text-center font-bold my-4 md:my-8 lg:my-12 text-[#f97d5e]"> User Statistics </h2>
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

export default UserStatistics;