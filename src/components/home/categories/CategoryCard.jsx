import React from "react";

const CategoryCard = ({ title, route, icon }) => {
  return (
    <div className="flex justify-center">
      <div className=" p-4 border border-gray-800 rounded-md flex flex-col justify-center w-[130px]">
        <div className="flex justify-center">
          <img src={icon} alt={title} />
        </div>
        <h3 className="text-center">{title}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
