import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#2A3439]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 md:pt-16 lg:pt-24 w-11/12 mx-auto">
        <div className="">
          <div className="flex items-center gap-x-4">
            <p> <img className="w-16 h-16" src={logo} alt="" /> </p>
            <h3 className="text-3xl font-bold mb-4 text-[#87CEEB]">  Tech Horizon </h3>
          </div>
          <p className="text-[#87CEEB] text-lg"> Exploring Innovation, discover, share, and elevate the latest in Web Apps, AI tools, Software, Games, and more. Join Tech Horizon to connect with innovators, upvote your favorites, and be part of the future of technology. Unlock premium features and shape the next wave of digital evolution with us! </p>
        </div>

        <div className="lg:mx-auto">
          <h3 className="text-3xl font-bold mb-4 text-[#87CEEB]"> Categories </h3>
          <ul className="text-lg text-[#87CEEB]">
            <li><a href="#" className=""> Web Applications </a></li>
            <li><a href="#" className=""> Mobile Applications </a></li>
            <li><a href="#" className=""> Artificial Inteligence </a></li>
            <li><a href="#" className=""> Machine Learning </a></li>
            <li><a href="#" className=""> Block Chaining </a></li>
          </ul>
        </div>

        <div className="lg:mx-auto">
          <h3 className="text-3xl font-bold mb-4 text-[#87CEEB]"> Informations </h3>
          <ul className="text-lg text-[#87CEEB]">
            <li><a href="#" className=""> About </a></li>
            <li><a href="#" className=""> History </a></li>
            <li><a href="#" className=""> Gallery </a></li>
            <li><a href="#" className=""> Events </a></li>
            <li><a href="#" className=""> Our Team </a></li>
          </ul>
        </div>

        <div className="lg:text-center mb-12">
          <h6 className="text-3xl font-bold text-[#87CEEB]"> Stay Connected</h6>
          <p className="text-xl mb-4 text-[#87CEEB]"> Stay Connected with us for more update </p>
          <div className="flex justify-around text-[#87CEEB]">
            <a href="https://www.facebook.com/"> <FaSquareFacebook size={35}></FaSquareFacebook> </a>

            <a href="https://www.x.com/"><FaInstagramSquare size={35}></FaInstagramSquare></a>

            <a href="https://www.x.com/"><FaXTwitter size={35}></FaXTwitter></a>

            <a href="https://www.linkedin.com/"><FaLinkedin size={35}></FaLinkedin></a>
          </div>
          <p className="text-lg mt-4 text-[#87CEEB]"> Call: +8801234567891 </p>
        </div>

      </div>

      <hr className="w-10/12 mx-auto border-t-2 border-[#87CEEB] mt-6" />
      <div>
        <p className="text-center text-xl font-bold mt-5 pb-12 text-[#87CEEB]"> &#169; All rights reserved to Tech Horizon 2025</p>
      </div>
    </div>
  );
};

export default Footer;