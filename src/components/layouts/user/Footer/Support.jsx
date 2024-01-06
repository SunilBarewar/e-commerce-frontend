import { support } from "../../../../constants/footer";
import Title from "./Title";

const Support = () => {
  return (
    <div>
      <Title>Support</Title>

      <div className="flex flex-col gap-3">
        {support.map((s) => {
          return <p key={s}>{s}</p>;
        })}
      </div>
    </div>
  );
};
export default Support;
