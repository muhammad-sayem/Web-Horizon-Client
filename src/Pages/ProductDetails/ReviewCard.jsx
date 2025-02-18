import Rating from "react-rating";

const ReviewCard = ({ review, refetch }) => {
    const { reviewerName, reviewerImage, reviewDescription, rating } = review;
    return (
        <div className="shadow-2xl flex items-center p-6 gap-x-8 my-4">
            <div className="w-1/6">
                <div className="flex justify-center">
                    <img src={reviewerImage} className="w-16 h-16 mb-4 rounded-full" alt="" />
                </div>
                <h2 className="mb-0 text-center text-xl"> {reviewerName} </h2>

                <p className="mt-2 text-lg text-center font-bold">Rating: {rating} / 5</p>
            </div>

            <div className="w-5/6">
                <p> {reviewDescription} </p>
            </div>
        </div>
    );
};

export default ReviewCard;