import AboutBox from "./AboutBox";
import { AboutUsData } from "./AboutUsData";

const AboutUs = () => {
  return (
    <section className="aboutus bg-black  w-full flex flex-col items-center text-white">
      <h1 className="text-3xl font-bold tracking-wide my-4">About Us</h1>
      <div className="grid grid-cols-1 row-auto justify-items-center">
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
