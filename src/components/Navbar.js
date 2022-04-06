import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="navbar h-[6vh] flex justify-between items-center w-full px-3 relative font-Roboto text-white bg-lightBlack lg:px-0 lg:h-[10vh]">
      <h1 className="text-xl italic tracking-wide font-bold lg:ml-10 lg:text-2xl 2xl:text-4xl">
        ZA Sport
      </h1>
      <HiMenuAlt3
        onClick={() => setShowNav(!showNav)}
        className="cursor-pointer text-2xl lg:hidden"
      />
      <ul
        className={`absolute w-[100%] right-0 top-[100%] flex flex-col items-end pr-3 transform ${
          showNav ? "translate-x-[0]" : " translate-x-[100%]"
        } transition-transform bg-lightBlack text-white lg:static lg:flex-row lg:justify-end lg:items-center lg:translate-x-0 lg:w-auto`}
      >
        <li className="my-4 lg:my-0 mr-10 lg:p-4">About Us</li>
        <li className="my-4 lg:my-0 mr-10 lg:p-4">Services</li>
        <li className="my-4 lg:my-0 mr-10 lg:p-4">Memberships</li>
        <li className="my-4 lg:my-0 mr-10 lg:p-4">Gallery</li>
        <li className="my-4 lg:my-0 mr-10 lg:p-4">Reviews</li>
      </ul>
    </div>
  );
};

export default Navbar;
