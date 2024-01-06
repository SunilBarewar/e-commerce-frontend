import Androind from "@/assets/android.png";
import IOS from "@/assets/ios.png";
import Facebook from "@/assets/Icon-Facebook.png";
import Instagram from "@/assets/icon-instagram.png";
import Twitter from "@/assets/Icon-Twitter.png";
import Linkedin from "@/assets/Icon-Linkedin.png";
import Title from "./Title";

const DownloadApp = () => {
  return (
    <div>
      <Title>DownloadApp</Title>
      <div className="flex flex-col gap-3">
        <p>Get our mobile app</p>
        <div>
          <div>
            <img src={Androind} alt="" />
          </div>
          <div>
            <img src={IOS} alt="" />
          </div>
        </div>

        <div className="flex gap-4">
          <img src={Facebook} alt="" />
          <img src={Instagram} alt="" />
          <img src={Twitter} alt="" />
          <img src={Linkedin} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
