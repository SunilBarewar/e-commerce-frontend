import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductPageSkeleton = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-normal mt-12 gap-7 lg:gap-[50px] mb-14">
      <div className="w-[100%]">
        <Skeleton height={450} width="100%" />
      </div>
      <div className="w-full flex flex-col gap-4">
        <Skeleton height={50} width="95%" />
        <div className="w-full flex gap-4 ">
          <div className="w-[40%]">
            <Skeleton height={50} />
          </div>
          <div className="w-[20%]">
            <Skeleton height={50} />
          </div>
        </div>
        <Skeleton height={15} count={5} borderRadius={5} width="100%" />
        <div className="w-full flex gap-3">
          <div className="w-[20%]">
            <Skeleton height={50} />
          </div>
          <div className="w-[20%]">
            <Skeleton height={50} />
          </div>
          <div className="w-[20%]">
            <Skeleton height={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageSkeleton;
