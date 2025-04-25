import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#2A3439]">
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-8 pt-12 md:pt-16 w-11/12 mx-auto">

        <div className="">
          <div className="flex items-center gap-x-4">
            <p> <img className="w-16 h-16" src={logo} alt="" /> </p>
            <h3 className="text-3xl font-bold mb-4 text-[#f97d5e]"> Web Horizon </h3>
          </div>
          <p className="text-[#f97d5e] text-lg"> Exploring the Web, discover, share, and elevate the latest in websites, web apps, portfolios, blogs, e-commerce platforms, and more. Join Web Horizon to connect with creators, upvote your favorites, and be part of the future of the web. Unlock premium features and shape the next wave of online innovation with us! </p>
        </div>

        <div className="text-[#f97d5e] text-center">
          <h2 className="text-3xl font-bold mb-2"> Quick Links </h2>
          <div>
            <p className="text-xl font-bold"> <Link to='/faq'>FAQ</Link> </p>
            <p className="text-xl font-bold"> <Link to='/about-us'>About Us</Link> </p>
            <p className="text-xl font-bold"> <Link to='/why-choose-us'>Why Choose Us</Link> </p>
          </div>
        </div>

        <div className="lg:text-center mb-12">
          <h6 className="text-3xl font-bold text-[#f97d5e]"> Stay Connected</h6>
          <p className="text-xl mb-4 text-[#f97d5e]"> Stay Connected with us for more update </p>
          <div className="flex justify-center gap-x-8 text-[#f97d5e]">
            <a href="https://www.facebook.com/shahrulislam.sayem/"> <FaSquareFacebook size={35}></FaSquareFacebook> </a>

            <a href="https://www.instagram.com/_muhammad_sayem/"><FaInstagramSquare size={35}></FaInstagramSquare></a>

            <a href="https://www.x.com/"><FaXTwitter size={35}></FaXTwitter></a>

            <a href="https://www.linkedin.com/in/md-shahrul-islam-sayem/"><FaLinkedin size={35}></FaLinkedin></a>
          </div>
        </div>

      </div>

      <hr className="w-10/12 mx-auto border-t-2 border-[#f97d5e] mt-6" />
      <div>
        <p className="text-center text-xl font-bold mt-5 pb-12 text-[#f97d5e]"> &#169; All rights reserved to Web Horizon 2025</p>
      </div>
    </div>
  );
};

export default Footer;