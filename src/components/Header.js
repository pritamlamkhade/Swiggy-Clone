import { useDispatch, useSelector } from "react-redux";
import { signOutUser } from "../auth/auth";
import { removeUser } from "../redux/userSlice";
import { LOGO } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes/routes";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const HandleSignOut = async () => {
    try {
      await signOutUser();
      dispatch(removeUser());
      navigate(ROUTES.HOME);
    } catch (error) {
      navigate(ROUTES.ERROR);
    }
  };

  const HandleSearchClick = () => {
    navigate(ROUTES.SEARCH);
  };

  return (
    <div className="fixed w-full h-[80px] bg-white flex justify-between shadow shadow-gray-300 top-0 z-[1000]">
      <div className="flex items-center">
        <img src={LOGO} alt="logo" className="h-[80px] min-w-[132px]"></img>
        <div className="header-btn address min-w-[50px]">Home</div>
        <span className="address-span">Kharadi, Pune</span>
      </div>
      <ul className="flex items-center gap-12 mx-4 mr-10">
        <li className="header-btn" onClick={HandleSearchClick}>
          Search
        </li>
        <li className="header-btn">Offers</li>
        <li className="header-btn">Help</li>
        <li className="header-btn">Cart</li>
        <li className="header-btn"> {user?.displayName}</li>
        <li className="header-btn" onClick={HandleSignOut}>
          Sign Out
        </li>
      </ul>
    </div>
  );
};

export default Header;
