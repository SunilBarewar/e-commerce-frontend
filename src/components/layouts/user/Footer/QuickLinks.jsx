import { Link } from "react-router-dom";
import Title from "./Title";
import { quickLinks } from "../../../../constants/footer";

const QuickLinks = () => {
  return (
    <div>
      <Title>QuickLinks</Title>
      <div className="flex flex-col gap-3">
        {quickLinks.map((link) => {
          return (
            <Link to={link.route} key={link.title}>
              {link.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default QuickLinks;
