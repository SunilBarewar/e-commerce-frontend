import Banner from "../../assets/about/banner.png";
const OurStory = () => {
  return (
    <div className="flex gap-7 items-center flex-wrap justify-center md:flex-nowrap">
      <div className="md:w-[50%] pl-4">
        <article className="max-w-[525px] text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-8">Our Story</h1>

          <p className="mb-5">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </article>
      </div>
      <div className="flex justify-center overflow-hidden rounded-md">
        <img src={Banner} alt="" className="w-[80%]" />
      </div>
    </div>
  );
};

export default OurStory;
