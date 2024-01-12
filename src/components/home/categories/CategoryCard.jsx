import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ title, route, icon }) => {
  return (
    <Link to={`/products?category=${title}`} className="flex justify-center">
      <div className=" p-4 border border-gray-800 rounded-md flex flex-col justify-center w-[130px]">
        <div className="flex justify-center">
          <img src={icon} alt={title} />
        </div>
        <h3 className="text-center">{title}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
