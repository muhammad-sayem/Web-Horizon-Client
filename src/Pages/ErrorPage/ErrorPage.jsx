import { Link } from "react-router-dom";
import errorImage from "../../assets/images/error image.jpg";

const ErrorPage = () => {
    return (
        <div >
            <div className="flex justify-center mt-24 mb-4">
                <img src={errorImage} className="w-[480px] h-[480px]" alt="" />
            </div>

            <div className="text-center">
                <Link to='/' className="btn bg-[#1A2634] text-[#f97d5e] text-xl font-bold hover:text-black"> Back to Home </Link>
            </div>
        </div>
    );
};

export default ErrorPage;