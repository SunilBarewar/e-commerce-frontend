import React from "react";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../SectionHeading";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  return (
    <SectionWrapper>
      <SectionHeading title={"Featured"} heading={"New Arrival"} />
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-6">
        {featuredProducts.map((product) => (
          <Product key={product.name} {...product} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const Product = ({ route, name, desc, image, rowSpan, colSpan, descWidth }) => {
  return (
    <Link to={route} className={`${rowSpan} ${colSpan} relative`}>
      <div className="absolute z-10 text-white bottom-10 left-5 flex flex-col gap-2">
        <h2 className="text-2xl">{name}</h2>
        <p className={`text-sm text-white-2 w-[${descWidth}]`}>{desc}</p>
        <button className="w-fit">shop now</button>
      </div>
      <img src={image} alt={name} />
    </Link>
  );
};
const featuredProducts = [
  {
    route: "/product/659fc11cdf4175ac89e846a8",
    name: "Play Station 5",
    desc: "Black and White version of the PS5 coming out on sale.",
    image: "./image/gallery/gallery-1.png",
    colSpan: "col-span-2",
    rowSpan: "row-span-2",
    descWidth: "70%",
  },
  {
    name: "Women's Collection",
    desc: "Featured woman collections that give you another vibe.",
    image: "./image/gallery/gallery-2.png",
    colSpan: "col-span-2",
    rowSpan: "",
    descWidth: "70%",
  },
  {
    name: "Speakers",
    desc: "Amazon wireless speakers",
    image: "./image/gallery/gallery-3.png",
    colSpan: "",
    rowSpan: "",
    descWidth: "100%",
  },
  {
    name: "Perfumes",
    desc: "GUCCI INTENSE OUD EDP",
    image: "./image/gallery/gallery-4.png",
    colSpan: "",
    rowSpan: "",
    descWidth: "100%",
  },
];
export default FeaturedProducts;
