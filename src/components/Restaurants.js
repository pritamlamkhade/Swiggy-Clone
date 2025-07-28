import React from "react";
import { useEffect } from "react";
import FilterWidget from "./FilterWidget";
import { SwiggyOneCard } from "./RestaurantCard";
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerCard from "./ShimmerCard";
import resObj from "../utils/swiggyData";

const Restaurants = () => {
  const [listRestaurants, setListRestaurants] = useState([]);
  const SwiggyCard = SwiggyOneCard(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // try {
    //   const data = await fetch(
    //     "https://api.allorigins.win/raw?url=" +
    //       encodeURIComponent(
    //         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5565916&lng=73.9425309&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    //       )
    //   );

    //   const swiggyData = await data.json();
    //   setListRestaurants(
    //     swiggyData.data.cards[4].card.card.gridElements.infoWithStyle
    //       .restaurants
    //   );
    // } catch (error) {
    //   console.error("Fetch error:", error);
    // }
    setListRestaurants(resObj);
  };

  return (
    <div className="top-20 absolute">
      <h1 className="m-4 mx-[124px] font-bold text-2xl">
        Restaurants with online food delivery in Pune
      </h1>

      <FilterWidget />
      {listRestaurants.length === 0 ? (
        <ShimmerCard />
      ) : (
        <div className="flex flex-wrap gap-6 ml-[124px] my-[10px]">
          {listRestaurants.map((res) =>
            res?.type === "F" ? (
              <SwiggyCard key={res?.id} resData={res} />
            ) : (
              <RestaurantCard key={res?.id} resData={res} />
            )
          )}
        </div>
      )}
    </div>
  );
};
export default Restaurants;
