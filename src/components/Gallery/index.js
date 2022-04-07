import dumbbellRack from "../../assets/dumbell-rack.webp";
import OHPress from "../../assets/oh-press.jpeg";
import treadmill from "../../assets/treadmill.webp";
import rope from "../../assets/rope.jpeg";
import pushup from "../../assets/pushup.webp";
import rougePlate from "../../assets/rouge.webp";
import highFive from "../../assets/clap.webp";
import deadlift from "../../assets/deadlift.jpeg";

const Gallery = () => {
  return (
    <section
      className="hidden lg:bg-black lg:flex lg:flex-col lg:justify-center lg:items-center"
      id="gallery"
    >
      <h1 className="sub-header">Gallery</h1>
      <div className="h-[60vh] grid w-[90%] mx-auto grid-cols-4 grid-rows-3 gap-2 mt-2 mb-6 xl:w-[70%] 2xl:w-[65%]">
        <span
          className="bg-center bg-cover rounded-lg"
          style={{ backgroundImage: `url(${rougePlate})` }}
        />
        <span
          className="col-start-2 col-end-3 row-start-1 row-end-3 bg-center bg-cover rounded-lg"
          style={{ backgroundImage: `url(${rope})` }}
        />
        <span
          className="bg-center bg-cover rounded-lg"
          style={{ backgroundImage: `url(${deadlift})` }}
        />
        <span
          className="col-start-4 col-end-5 row-start-1 row-end-3 bg-center bg-cover rounded-lg"
          style={{ backgroundImage: `url(${dumbbellRack})` }}
        />
        <span
          className="row-start-2 row-end-4 bg-center bg-cover rounded-lg"
          style={{ backgroundImage: `url(${OHPress})` }}
        />
        <span
          className="row-start-3 row-end-4 bg-center bg-cover rounded-lg"
          style={{ backgroundImage: `url(${treadmill})` }}
        />
        <span
          className="row-start-2 row-end-4 bg-center bg-cover rounded-lg"
          style={{ backgroundImage: `url(${pushup})` }}
        />
        <span
          className="bg-center bg-cover rounded-lg"
          style={{ backgroundImage: `url(${highFive})` }}
        />
      </div>
    </section>
  );
};

export default Gallery;
