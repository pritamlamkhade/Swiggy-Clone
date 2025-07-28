import React from "react";
import { HEADER_LOGO, HOME_BG1, HOME_BG2 } from "../utils/constants";
import ServiceCard from "./ServiceCard";

const HomeHeader = () => {
  return (
    <div className="bg-[#ff5200] w-full">
      <div className="flex mx-8 py-8 justify-between">
        <div className="ml-20">
          <img
            src={HEADER_LOGO}
            alt="logo"
            className="h-[48px] min-w-[160px]"
          ></img>
        </div>
        <div className="mr-8">
          <ul className="flex items-center gap-8 mx-2 mr-10">
            <li className="home-header-btn">Swiggy Corporate</li>
            <li className="home-header-btn">Partner with us</li>
            <li className="home-header-btn border border-white rounded-xl p-[12px] w-[130px] text-center">
              Get the App
            </li>
            <li className="home-header-btn  border border-black rounded-xl p-[12px] bg-black w-[130px] text-center">
              Sign in
            </li>
          </ul>
        </div>
      </div>

      <div className=" flex  my-8 m-auto ">
        <div>
          <img
            className="h-[400px] w-[200px] absolute top-[100px] left-0"
            src={HOME_BG1}
            alt="side img"
          />
        </div>
        <div className=" flex flex-col items-center m-auto">
          <p className="font-bold text-white text-center m-auto py-4 text-4xl w-[60%] ">
            Order food & groceries. Discover best restaurants. Swiggy it!
          </p>
          <div className="flex">
            <input
              type="text"
              className="w-[300px] h-[58px] px-4 py-2 m-4 mx-2 rounded-2xl placeholder-[#02060c73] placeholder:font-[600] "
              placeholder="Enter your delivery location"
            ></input>
            <input
              type="text"
              className="w-[484px] h-[58px] px-4 py-2 m-4 mx-2 rounded-2xl placeholder-[#02060c73] placeholder:font-[600] "
              placeholder="Search for restaurant, item or more"
            ></input>
          </div>
        </div>
        <div>
          <img
            className="h-[400px] w-[200px] absolute top-[100px] right-0"
            src={HOME_BG2}
            alt="side img"
          />
        </div>
      </div>

      <div className="flex mx-32 pb-8 gap-8 justify-center">
        <ServiceCard type="foodDelivery" />
        <ServiceCard type="instamart" />
        <ServiceCard type="dineout" />
      </div>
    </div>
  );
};

export default HomeHeader;
