import React from "react";

const Heading = ({ heading, subheading }) => {
  return (
    <div className="mb-4">
      <h1 className="text-3xl opa font-semibold">{heading}</h1>
      <p className="opacity-80 mt-2">{subheading}</p>
    </div>
  );
};

export default Heading;
