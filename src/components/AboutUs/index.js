import AboutBox from "./AboutBox";
import { AboutUsData } from "./AboutUsData";

const AboutUs = () => {
  return (
    <section className="aboutus bg-black  w-full flex flex-col items-center text-white">
      <h1 className="text-3xl font-bold tracking-wide my-4 lg:text-4xl">
        About Us
      </h1>
      <div className="grid grid-cols-1 row-auto justify-items-center md:grid-cols-2 xl:w-[70%] 2xl:w-[50%]">
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
