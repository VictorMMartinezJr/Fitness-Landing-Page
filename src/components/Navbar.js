import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="navbar h-[6vh] flex justify-between items-center w-full px-3 relative font-Roboto text-white bg-lightBlack">
      <h1 className="text-xl italic tracking-wide font-bold">ZA Sport</h1>
      <HiMenuAlt3
        onClick={() => setShowNav(!showNav)}
        className="cursor-pointer text-2xl"
      />
      <ul
        className={`absolute w-[100%] right-0 top-[100%] flex flex-col items-end pr-3 transform ${
          showNav ? "translate-x-[0]" : " translate-x-[100%]"
        } transition-transform bg-lightBlack text-white`}
      >
        <li className="my-4">About Us</li>
        <li className="my-4">Membership</li>
        <li className="my-4">Services</li>
        <li className="my-4">Gallery</li>
        <li className="my-4">Reviews</li>
      </ul>
    </div>
  );
};

export default Navbar;
