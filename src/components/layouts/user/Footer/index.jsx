import DownloadApp from "./DownloadApp";
import About from "./About";
import Support from "./Support";
import Account from "./Account";
import QuickLinks from "./QuickLinks";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-5 lg:py-10 px-[10px] lg:px-[80px] font-Inter">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 md:grid-cols-3 lg:grid-cols-5 gap-4 text-sm">
        <About />
        <Support />
        <Account />
        <QuickLinks />
        <DownloadApp />
      </div>
    </footer>
  );
};

export default Footer;
