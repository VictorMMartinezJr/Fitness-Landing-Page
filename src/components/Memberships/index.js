import MembershipCard from "./MembershipCard";
import { MembershipCardData } from "./MembershipCardData";

const Memberships = () => {
  return (
    <div
      className="bg-black myoutline flex flex-col justify-center items-center"
      id="memberships"
    >
      <h1 className="sub-header">Memberships</h1>
      <div className="grid grid-cols-1 row-auto w-[90%] justify-items-center lg:grid-cols-3 lg:gap-x-4 xl:w-[70%] 2xl:w-[65%]">
        {MembershipCardData.map((card) => {
          return (
            <MembershipCard
              key={card.id}
              title={card.title}
              price={card.price}
              days={card.days}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Memberships;
