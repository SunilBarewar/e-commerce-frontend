import { Link } from "react-router-dom";
import Product from "../../assets/speaker-banner.png";
const TrendingProduct = () => {
  return (
    <Link to={"/product/659fc3fadf4175ac89e846b1"} className="my-7">
      <img src={Product} alt="" />
    </Link>
  );
};

export default TrendingProduct;
