const AboutBox = ({ img, h1, description }) => {
  return (
    <div
      className="w-[90%] my-4 flex flex-col justify-center items-center rounded-2xl"
      style={{ boxShadow: "inset 0 0px 30px #FFBD35" }}
    >
      <img
        src={img}
        className="mt-5 h-14"
        style={{ filter: "drop-shadow(0 0 10px #fff)" }}
      />
      <div className="my-4 text-center flex flex-col items-center">
        <h1 className="font-bold">{h1}</h1>
        <p className="text-sm w-[90%] my-2">{description}</p>
      </div>
    </div>
  );
};

export default AboutBox;
