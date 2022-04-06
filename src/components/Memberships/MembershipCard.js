import { AiOutlineCheckCircle } from "react-icons/ai";

const MembershipCard = ({ title, price, days }) => {
  return (
    <div
      className="w-[90%] mb-6 flex flex-col justify-center items-center rounded-2xl text-white font-Roboto lg:w-full"
      style={{ boxShadow: "inset 0 0px 30px #FFBD35" }}
    >
      <h1 className="my-8 text-xl font-bold">{title}</h1>
      <p className="mb-8 font-bold">{price}</p>
      <ul>
        <li className="mb-4 flex justify-center items-center">
          <AiOutlineCheckCircle className="mr-2" />
          <p>Duration {days} days</p>
        </li>
        <li className="mb-4 flex justify-center items-center">
          <AiOutlineCheckCircle className="mr-2" />
          <p>Freezing for 30 days</p>
        </li>
        <li className="mb-4 flex justify-center items-center">
          <AiOutlineCheckCircle className="mr-2" />
          <p>Group trainings, gym</p>
        </li>
      </ul>
      <a
        href="#"
        className="bg-myYellow py-2 px-12 rounded-full mb-8 font-bold lg:py-2"
        style={{ boxShadow: "0 0 15px #FFBD35" }}
      >
        Buy
      </a>
    </div>
  );
};

export default MembershipCard;
