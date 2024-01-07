const Heading = ({ icon, title }) => {
  return (
    <div className="flex items-center gap-x-3 flex-shrink-0 mb-2">
      <img src={icon} alt="" />
      <h3 className="text-xl font-medium">{title}</h3>
    </div>
  );
};

export default Heading;
