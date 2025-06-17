import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#200C3C] text-[#d6c6ff]">
      <div className="w-11/12 mx-auto py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        <div className="space-y-4 text-center lg:text-left">
          <div className="flex flex-col items-center lg:flex-row lg:items-start gap-3">
            <img className="w-14 h-14" src={logo} alt="Logo" />
            <h3 className="text-2xl font-bold">Web Horizon</h3>
          </div>
          <p className="text-base">
            Exploring the Web, discover, share, and elevate the latest in websites, web apps, portfolios, blogs, and more. Join Web Horizon to connect with creators, upvote your favorites, and shape the future of the web.
          </p>
        </div>



        <div className="text-center md:text-left md:flex md:flex-col md:items-center space-y-3">
          <h2 className="text-2xl font-bold">Quick Links</h2>
          <ul className="space-y-1">
            <li><Link to="/faq" className="hover:underline text-lg">FAQ</Link></li>
            <li><Link to="/about-us" className="hover:underline text-lg">About Us</Link></li>
            <li><Link to="/why-choose-us" className="hover:underline text-lg">Why Choose Us</Link></li>
          </ul>
        </div>

        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Stay Connected</h2>
          <p className="text-base">Stay connected with us for more updates</p>
          <div className="flex justify-center gap-6">
            <a href="https://www.facebook.com/shahrulislam.sayem/" target="_blank" rel="noreferrer">
              <FaSquareFacebook size={32} className="hover:scale-110 transition" />
            </a>
            <a href="https://www.instagram.com/_muhammad_sayem/" target="_blank" rel="noreferrer">
              <FaInstagramSquare size={32} className="hover:scale-110 transition" />
            </a>
            <a href="https://www.x.com/" target="_blank" rel="noreferrer">
              <FaXTwitter size={32} className="hover:scale-110 transition" />
            </a>
            <a href="https://www.linkedin.com/in/md-shahrul-islam-sayem/" target="_blank" rel="noreferrer">
              <FaLinkedin size={32} className="hover:scale-110 transition" />
            </a>
          </div>
        </div>
      </div>

      <hr className="w-10/12 mx-auto border-t border-[#d6c6ff]" />
      <p className="text-center text-sm md:text-base font-medium mt-4 pb-8">
        &#169; All rights reserved to Web Horizon 2025
      </p>
    </div>
  );
};

export default Footer;
