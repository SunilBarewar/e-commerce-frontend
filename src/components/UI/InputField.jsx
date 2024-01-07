const InputField = ({ label, className, inputClass, ...props }) => {
  return (
    <div className={className}>
      {label && (
        <label className="block mb-2 text-sm md:text-base font-medium text-gray-900 dark:text-white ">
          {label}
        </label>
      )}

      <input
        {...props}
        type="text"
        className={` bg-white-2 border-none  text-gray-900 text-base rounded-md  block w-full h-full p-2.5 focus:outline-1 focus:outline-gray-300 ${inputClass}`}
      />
    </div>
  );
};

export default InputField;
