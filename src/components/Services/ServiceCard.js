import { LazyLoadImage } from "react-lazy-load-image-component";

const ServiceCard = ({ img, imgAlt, title, description }) => {
  return (
    <div className="grid row-auto grid-cols-1 justify-items-center text-white text-center font-Roboto mb-6 w-[90%] lg:w-full">
      <LazyLoadImage
        src={img}
        alt={imgAlt}
        className="rounded-3xl w-[90%] md:w-[80%]"
      />
      <h1 className="font-bold tracking-wide mt-4 text-xl">{title}</h1>
      <p className="text-sm w-[90%] md:w-[80%] my-2">{description}</p>
    </div>
  );
};

export default ServiceCard;
