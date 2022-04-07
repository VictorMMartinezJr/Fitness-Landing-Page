import map from "../../assets/maps.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineClockCircle, AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <section
      className="bg-black flex flex-col justify-center items-center font-Roboto text-white"
      id="contact"
    >
      <h1 className="sub-header">Contact</h1>
      <div className="grid grid-cols-1 justify-items-center grid-rows-2 w-[90%] mb-8 lg:grid-cols-3 lg:grid-rows-1 lg:justify-between xl:w-[70%] 2xl:w-[65%]">
        <div
          className="form-container w-[80%] mb-6 flex flex-col justify-center items-center rounded-2xl text-white font-Roboto lg:w-[95%] lg:mr-4"
          style={{ boxShadow: "inset 0 0px 30px #FFBD35" }}
        >
          <h1 className="font-bold my-8 text-2xl">Contact Us</h1>
          {/* form */}
          <form className="flex flex-col w-[80%]">
            <input
              type="text"
              placeholder="Email"
              className="w-full py-2 pl-1 rounded-2xl bg-gray-200"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full my-4 py-2 pl-1 rounded-2xl bg-gray-200"
            />
            <textarea
              type="text"
              placeholder="Message"
              className="w-full py-2 pl-1 rounded-2xl bg-gray-200"
            />
          </form>
          <button
            className="bg-myYellow py-3 px-12 rounded-full mt-4 mb-8 w-[80%] font-bold lg:py-2"
            style={{ boxShadow: "0 0 15px #FFBD35" }}
          >
            Send Message
          </button>
        </div>
        {/* Map image */}
        <div
          className="w-[80%] mb-8 relative lg:mb-6 myoutline rounded-2xl lg:w-full"
          style={{ backgroundImage: `url(${map})` }}
        >
          <FaMapMarkerAlt
            className="absolute z-[2] top-[50%] left-[90%] lg:left-[80%] text-4xl text-black"
            style={{ filter: "drop-shadow(0 0 2px #000)" }}
          />
        </div>
        {/* Contact info */}
        <div className="w-[80%] lg:w-[95%] lg:ml-4">
          <ul>
            {/* Address */}
            <li className="mb-4">
              <span className="flex items-center">
                <FiMapPin className="mr-2" />
                <p className="font-bold text-lg">Address</p>
              </span>
              <p className="text-sm">
                737 La Sierra Dr. East Elmhurst, NY 11370
              </p>
            </li>
            {/* Phone */}
            <li className="mb-4">
              <span className="flex items-center">
                <BsTelephone className="mr-2" />
                <p className="font-bold text-lg">Phone</p>
              </span>
              <p className="text-sm">+1 732 255 5649</p>
            </li>
          </ul>
          {/* Hours */}
          <ul>
            <li className="mb-4">
              <span className="flex items-center">
                <AiOutlineClockCircle className="mr-2" />
                <p className="font-bold text-lg">Working Hours</p>
              </span>
              <p className="text-sm">Mon-Fri: 5:00 AM - 11:00 PM</p>
              <p className="text-sm">Sat-Sun: 8:00 AM - 7:00 PM</p>
            </li>
            {/* Email */}
            <li className="mb-4">
              <span className="flex items-center">
                <AiOutlineMail className="mr-2" />
                <p className="font-bold text-lg">Email</p>
              </span>
              <p className="text-sm">zasportsgym@example.com</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
