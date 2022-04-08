import "./hero.css";
import Navbar from "../Navbar";

const Hero = () => {
  return (
    <div className="main h-[100vh] flex flex-col overflow-x-hidden font-Roboto font-normal">
      <Navbar />
      <div className="flex-1 flex flex-col justify-center items-center text-white lg:items-start lg:ml-20">
        <h1 className="text-4xl mb-6 lg:text-5xl">
          Trial training with
          <br />a coach <span className="font-bold">for free</span>
        </h1>
        <a
          href="#"
          className="bg-myBlue py-2 px-5 rounded-full font-bold lg:py-3 lg:px-10 btn"
          style={{ boxShadow: "0 0 15px #3075d6" }}
        >
          GET STARTED
        </a>
      </div>
    </div>
  );
};

export default Hero;
