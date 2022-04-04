import "./hero.css";
import Navbar from "../Navbar";

const Hero = () => {
  return (
    <div className="main h-[100vh] flex flex-col overflow-x-hidden font-Roboto font-normal">
      <Navbar />
      <div className="flex-1 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl mb-6">
          Trial training with
          <br />a coach <span className="font-bold">for free</span>
        </h1>
        <a
          href="#"
          className="bg-myYellow py-2 px-5 rounded-full shadow-2xl shadow-myYellow font-bold"
        >
          GET STARTED
        </a>
      </div>
    </div>
  );
};

export default Hero;
