import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ReviewCard from "./ReviewCard";

const Reviews = ({product}) => {
    const axiosSecure = useAxiosSecure();

    const {data: reviews = [], isLoading, refetch} = useQuery({
        queryKey: ['review'],
        queryFn: async() => {
            const {data} = await axiosSecure.get(`/review/${product._id}`);
            return data;
        }
    });

    console.log(reviews);

    return (
        <div>
            <div>
                {
                    reviews.map(review => <ReviewCard
                        key={review._id}
                        review={review}
                        refetch={refetch}
                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;