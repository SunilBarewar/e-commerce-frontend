import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const ProductCardSkeleton = () => {
  return (
    <div className="w-[95%] xs:w-[90%] lg:w-[270px] rounded shadow p-2 relative overflow-hidden">
      <Skeleton height={250} />
      <Skeleton height={20} />
      <Skeleton width={"50%"} />
      <Skeleton width={"70%"} />
    </div>
  );
};

export default ProductCardSkeleton;
