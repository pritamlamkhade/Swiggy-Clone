import React from "react";
import {
  DINEOUT_IMG,
  FOOD_DELIVERY_IMG,
  INSTAMART_IMG,
} from "../utils/constants";

const services = {
  foodDelivery: FOOD_DELIVERY_IMG,
  instamart: INSTAMART_IMG,
  dineout: DINEOUT_IMG,
};

const ServiceCard = ({ type }) => {
  return (
    <div className="w-[380px] h-[350px]">
      <img src={services[type]} alt="food delivery"></img>
    </div>
  );
};

export default ServiceCard;
