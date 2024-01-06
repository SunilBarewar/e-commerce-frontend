import { leaders } from "../../constants/leadership";

const LeadershipBio = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-3 md:mt-10">
      <h1 className="text-3xl md:text-5xl font-bold mb-8">Our Leadership</h1>
      <div className="flex justify-center items-center md:justify-between gap-4 flex-wrap">
        {leaders.map((leader) => (
          <Leader key={leader.name} {...leader} />
        ))}
      </div>
    </div>
  );
};

const Leader = ({ name, photo, designation }) => {
  return (
    <div className="w-[320px] flex flex-col flex-shrink-0 justify-center">
      <div className="bg-white-2 h-[430px] flex justify-center">
        <img
          src={photo}
          alt={designation}
          style={{ height: "inherit" }}
          className="text-base object-contain"
        />
      </div>
      <h3 className="text-2xl mt-2">{name}</h3>
      <span className="text-gray-500">{designation}</span>
    </div>
  );
};

export default LeadershipBio;
