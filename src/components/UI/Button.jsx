const Button = ({ onClick, width = "", title }) => {
  return (
    <button
      className={`w-[${width}] px-5 py-2 rounded text-white bg-primary `}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
