import { LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="fixed w-full h-[80px] bg-white flex justify-between shadow shadow-gray-300 top-0 z-[1000]">
      <div className="flex items-center">
        <img src={LOGO} alt="logo" className="h-[80px] min-w-[132px]"></img>
        <div className="header-btn address min-w-[50px]">Home</div>
        <span className="address-span">Kharadi, Pune</span>
      </div>
      <ul className="flex items-center gap-12 mx-4 mr-10">
        <li className="header-btn">Search</li>
        <li className="header-btn">Offers</li>
        <li className="header-btn">Help</li>
        <li className="header-btn">User</li>
        <li className="header-btn">Cart</li>
      </ul>
    </div>
  );
};

export default Header;
