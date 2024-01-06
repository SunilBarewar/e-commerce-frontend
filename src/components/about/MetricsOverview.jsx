import { stats } from "../../constants/stats";

const MetricsOverview = () => {
  return (
    <div className="mt-5 md:mt-10">
      <h1 className="text-3xl text-center md:text-5xl font-bold mb-8">
        Our Statistics
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-5 gap-y-4">
        {stats.map((stat) => {
          return <MetricsCard key={stat.desc} {...stat} />;
        })}
      </div>
    </div>
  );
};

const MetricsCard = ({ icon, desc, count }) => {
  return (
    <div className="flex justify-center ">
      <div className="p-5 border w-[270px] flex flex-col justify-center items-center">
        <div>
          <img src={icon} alt="" />
        </div>

        <h1 className="text-3xl font-bold mt-4 mb-2">{count}K</h1>
        <p className="text-center">{desc}</p>
      </div>
    </div>
  );
};
export default MetricsOverview;
