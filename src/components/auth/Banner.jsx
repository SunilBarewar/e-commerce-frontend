import banner from "@/assets/auth-image.png";
const Banner = () => {
  return (
    <div className="hidden lg:block px-10 lg:w-[50%] rounded overflow-hidden">
      <img className="w-full" src={banner} alt="" />
    </div>
  );
};

export default Banner;
