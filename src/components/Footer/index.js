import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import Copyright from "./Copyright";

const Footer = () => {
  const scrollToTop = () => {
    window.scroll(0, 0);
  };

  return (
    <footer className="bg-black text-white font-Roboto flex flex-col">
      <div className="flex items-center justify-center">
        <div className="w-[90%] flex items-start justify-center mb-8 lg:justify-between xl:w-[70%] 2xl:w-[65%]">
          <div className="flex flex-col items-center">
            <button
              className="py-4 px-8 bg-myYellow font-bold text-3xl rounded-2xl mb-4 italic tracking-wide"
              onClick={scrollToTop}
            >
              ZA Sport
            </button>
            <div className="mb-8 flex">
              <div className="h-8 w-8 bg-[#8a3ab9] flex justify-center items-center rounded-full">
                <AiOutlineInstagram className="text-2xl cursor-pointer" />
              </div>
              <div className="h-8 w-8 bg-[#4267B2] flex justify-center items-center rounded-full mx-4">
                <FaFacebookF className="text-xl cursor-pointer" />
              </div>
              <div className="h-8 w-8 bg-[#1DA1F2] flex justify-center items-center rounded-full">
                <BsTwitter className="text-xl cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col">
            <h1 className="font-bold mb-2">Schedule</h1>
            <p className="text-sm">Monday - Friday: 5:00 AM - 11:00 PM</p>
            <p className="text-sm">Saturday - Sunday: 8:00 AM - 7:00 PM</p>
          </div>
          <div className="hidden lg:flex flex-col">
            <h1 className="font-bold mb-2">Contacts</h1>
            <p className="text-sm">737 La Sierra Dr. East Elmhurst, NY 11370</p>
            <p className="text-sm">United States of America , New York</p>
          </div>
          <div className="hidden lg:flex flex-col">
            <h1 className="font-bold mb-2">Navigation</h1>
            <ul>
              <li className="text-sm mb-2">
                <a href="#aboutus">About Us</a>
              </li>
              <li className="text-sm mb-2">
                <a href="#services">Services</a>
              </li>
              <li className="text-sm mb-2">
                <a href="#memberships">Memberships</a>
              </li>
              <li className="text-sm mb-2">
                <a href="#gallery">Gallery</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="self-center mb-4">
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
