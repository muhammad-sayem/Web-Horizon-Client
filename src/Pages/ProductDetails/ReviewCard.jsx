import { FaRegStar } from "react-icons/fa";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ review }) => {
    const { reviewerName, reviewerImage, reviewDescription, rating } = review;
    return (
        <div className="shadow-[4px_4px_10px_rgba(0,0,0,0.35)] rounded-xl flex flex-col sm:flex-row items-center p-4 gap-4 mb-6">
            
            <div className="w-full sm:w-1/4 flex flex-col items-center text-center">
                <img src={reviewerImage} className="w-16 h-16 rounded-full mb-2" alt="" />
                <h2 className="text-md sm:text-lg font-bold">{reviewerName}</h2>
                <div className="mt-2">
                    <Rating
                        initialRating={rating}
                        emptySymbol={<FaRegStar className="text-gray-400" size={18} />}
                        fullSymbol={<FaStar className="text-orange-500" size={18} />}
                        fractions={2}
                        readonly
                    />
                </div>
            </div>
            <div className="w-full sm:w-3/4">
                <p className="text-sm sm:text-base">{reviewDescription}</p>
            </div>
        </div>
    );
};

export default ReviewCard;
