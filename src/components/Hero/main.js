import "./hero.css";
import Navbar from "../Navbar";
import bgMain from "../../assets/main-bg.jpg";

const Hero = () => {
  return (
    <div
      className="main h-[100vh] overflow-x-hidden"
      style={{
        background: `url(${bgMain})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
    </div>
  );
};

export default Hero;
