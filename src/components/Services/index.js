import ServiceCard from "./ServiceCard";
import { ServicesData } from "./ServicesData";

const Services = () => {
  return (
    <section className="bg-black flex flex-col items-center font-Roboto w-full">
      <h1 className="sub-header">Our Services</h1>
      <div className="grid grid-cols-1 row-auto justify-items-center mt-2 lg:grid-cols-3 xl:w-[70%] 2xl:w-[65%]">
        {ServicesData.map((service) => {
          return (
            <ServiceCard
              key={service.id}
              img={service.img}
              imgAlt={service.imgAlt}
              title={service.title}
              description={service.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Services;
