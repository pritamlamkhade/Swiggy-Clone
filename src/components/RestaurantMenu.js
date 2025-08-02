import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Header from "../components/Header";
import { OFFER_LOGO, ONE_LOGO, RATING } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resData = useRestaurantMenu(resId);
  console.log(resData);

  return (
    <>
      <Header />
      <div className="mx-auto flex flex-col items-center my-28 w-[700px]">
        <h1 className="font-bold text-2xl m-4 p-2 w-[700px]">{resData.name}</h1>
        <div className="res-menu border border-gray rounded-2xl  p-4  w-[700px]">
          <div className="flex">
            <img src={RATING} alt="" className="h-5 w-5 m-[5px] " />
            <span className="res-rating font-bold p-[4px]">{`${resData?.rating} (${resData?.ratingCount} ratings) •  ${resData?.rateForTwo}`}</span>
          </div>
          <h3 className="text-[#ff5200] font-bold mx-2 text-sm underline">
            {resData.cuisine}
          </h3>

          <div className="flex">
            <div className="flex flex-col items-center mt-[15px] mx-4">
              <div className=" w-[7px] h-[7px] bg-[#c4c4c4] rounded-full"></div>
              <div className=" w-[1px] h-[23px] bg-[#c4c4c4]"></div>
              <div className=" w-[7px] h-[7px] bg-[#c4c4c4] rounded-full"></div>
            </div>

            <div>
              <h3 className=" my-2 text-[14px] font-bold ">
                Outllet{" "}
                <span className="text-gray-500">{resData.location}</span>
              </h3>
              <h3 className="text-[14px] font-bold ">
                {resData.slaString.toLowerCase()}
              </h3>
            </div>
          </div>

          <div className="border-t-[1px] border-gray-200 flex pt-3">
            <img
              src={ONE_LOGO}
              alt="one"
              className="w-[40px] h-[15px] mx-2"
            ></img>
            <p className="text-[#ff5200] text-sm font-bold ">
              Free delivery on orders above ₹199
            </p>
          </div>
        </div>

        <h1 className="font-bold text-xl mt-4 mx-2 p-2 w-[700px]">
          Deals for you
        </h1>

        <div className="flex">
          <div className="flex border border-gray-200 rounded-2xl  w-[328px] h-[76px] my-4 mx-2">
            <img
              className="h-[48px] w-[48px] my-4 mx-2"
              src={OFFER_LOGO}
              alt="offer"
            ></img>
            <div className="my-4">
              <h1 className="font-bold">60% Off Upto ₹110</h1>
              <h2 className="text-[#02060c73] font-bold">USE SWIGGYIT</h2>
            </div>
          </div>

          <div className="flex border border-gray-200 rounded-2xl  w-[328px] h-[76px] my-4 mx-2">
            <img
              className="h-[48px] w-[48px] my-4 mx-2"
              src={OFFER_LOGO}
              alt="offer"
            ></img>
            <div className="my-4">
              <h1 className="font-bold">60% Off Upto ₹110</h1>
              <h2 className="text-[#02060c73] font-bold">USE SWIGGYIT</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RestaurantMenu;
