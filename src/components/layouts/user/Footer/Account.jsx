import { Link } from "react-router-dom";
import Title from "./Title";
import { accountLinks } from "../../../../constants/footer";

const Account = () => {
  return (
    <div>
      <Title>Account</Title>
      <div className="flex flex-col gap-3">
        {accountLinks.map((link) => {
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
export default Account;
