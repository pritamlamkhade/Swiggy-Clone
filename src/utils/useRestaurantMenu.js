import { useEffect, useState } from "react";
import resObj from "./swiggyData";

const useRestaurantMenu = (resId) => {
  const [resData, SetResData] = useState(resObj[resId - 1]);

  useEffect(() => {
    SetResData(resObj[resId - 1]);
  }, []);

  return resData;
};

export default useRestaurantMenu;
