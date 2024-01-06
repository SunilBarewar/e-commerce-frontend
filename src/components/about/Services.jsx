import { services } from "../../constants/services";

const Services = () => {
  return (
    <div className="flex gap-4 flex-col justify-center items-center mt-8 mb-12">
      <h1 className="text-3xl md:text-5xl font-bold mb-8">Our Services</h1>
      <div className="flex gap-12 flex-wrap justify-center items-center">
        {services.map((service) => (
          <Service key={service.title} {...service} />
        ))}
      </div>
    </div>
  );
};

const Service = ({ icon, title, desc }) => {
  return (
    <div className="flex flex-col justify-center items-center flex-shrink-0 p-3">
      <div className="mb-6">
        <img src={icon} alt={title} />
      </div>

      <h3 className="text-xl">{title}</h3>
      <span className="text-sm">{desc}</span>
    </div>
  );
};
export default Services;
