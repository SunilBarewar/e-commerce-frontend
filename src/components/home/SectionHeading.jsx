import React from "react";

const SectionHeading = ({ title, heading }) => {
  return (
    <div className="flex flex-col gap-5 mb-8">
      <div className="flex flex-shrink-0 text-primary font-semibold ">
        <span className="w-3 bg-primary mr-3 rounded"></span>
        {title}
      </div>
      <div className="text-3xl font-semibold">{heading}</div>
    </div>
  );
};

export default SectionHeading;
