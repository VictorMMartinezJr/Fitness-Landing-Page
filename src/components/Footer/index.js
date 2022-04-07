import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="footer bg-black text-white font-Roboto flex items-center justify-center">
      <div className="w-[90%] flex items-start justify-center lg:justify-between xl:w-[70%] 2xl:w-[65%]">
        <div className="flex flex-col items-center">
          <btn className="py-4 px-8 bg-myYellow font-bold text-3xl rounded-2xl mb-4 italic tracking-wide">
            ZA Sport
          </btn>
          <div className="mb-8 flex">
            <div className="h-8 w-8 bg-[#8a3ab9] flex justify-center items-center rounded-full">
              <AiOutlineInstagram className="text-2xl" />
            </div>
            <div className="h-8 w-8 bg-[#4267B2] flex justify-center items-center rounded-full mx-4">
              <FaFacebookF className="text-xl" />
            </div>
            <div className="h-8 w-8 bg-[#1DA1F2] flex justify-center items-center rounded-full">
              <BsTwitter className="text-xl" />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-col">
          <h1 className="font-bold">Schedule</h1>
          <p className="text-sm">Monday - Friday: 5:00 AM - 11:00 PM</p>
          <p className="text-sm">Saturday - Sunday: 8:00 AM - 7:00 PM</p>
        </div>
        <div className="hidden lg:flex flex-col">
          <h1 className="font-bold">Contacts</h1>
          <p className="text-sm">737 La Sierra Dr. East Elmhurst, NY 11370</p>
          <p className="text-sm">United States of America , New York</p>
        </div>
        <div className="hidden lg:flex flex-col">
          <h1 className="font-bold">Navigation</h1>
          <ul>
            <li className="text-sm">About Us</li>
            <li className="text-sm">Services</li>
            <li className="text-sm">Memberships</li>
            <li className="text-sm">Gallery</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
