import AboutBox from "./AboutBox";
import { AboutUsData } from "./AboutUsData";

const AboutUs = () => {
  return (
    <section
      className="bg-black  w-full flex flex-col items-center text-white"
      id="aboutus"
    >
      <h1 className="sub-header">About Us</h1>
      <div className="grid grid-cols-1 row-auto justify-items-center mt-2 md:grid-cols-2 xl:w-[70%] 2xl:w-[65%]">
        {AboutUsData.map((data) => {
          return (
            <AboutBox
              key={data.id}
              img={data.img}
              h1={data.title}
              description={data.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default AboutUs;
