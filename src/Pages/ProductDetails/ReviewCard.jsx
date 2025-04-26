import { FaRegStar } from "react-icons/fa";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ review, refetch }) => {
    const { reviewerName, reviewerImage, reviewDescription, rating } = review;
    return (
        <div className="shadow-2xl flex items-center p-6 gap-x-8 my-4">
            <div className="w-1/6">
                <div className="flex justify-center">
                    <img src={reviewerImage} className="w-16 h-16 mb-4 rounded-full" alt="" />
                </div>
                <h2 className="text-center text-xl font-bold"> {reviewerName} </h2>

                <div className="flex justify-center mt-2">
                    <Rating
                        initialRating={rating}
                        emptySymbol={<FaRegStar className="text-gray-400" size={20} />}
                        fullSymbol={<FaStar className="text-orange-500" size={20} />}
                        fractions={2}
                        readonly
                    />
                </div>
            </div>

            <div className="w-5/6">
                <p className=""> {reviewDescription} </p>
            </div>
        </div>
    );
};

export default ReviewCard;