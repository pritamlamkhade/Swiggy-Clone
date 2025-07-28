import { CDN_URL, RATING } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  return (
    <div className="res-card">
      <img src={CDN_URL + resData?.img} className="res-img" alt="res-img"></img>
      <div className="p-2">
        <h2 className="font-bold res-name">{resData?.name}</h2>
        <div className="flex">
          <img src={RATING} alt="" className="h-5 w-5 m-[3px] " />

          <span className="res-rating font-bold">{`${resData?.rating}  •  ${resData?.slaString}`}</span>
        </div>
        <span className="res-cuisines">{`${resData?.cuisine}`}</span>
        <span className="res-area">{resData?.areaName}</span>
      </div>
    </div>
  );
};

//HOC
export const SwiggyOneCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="one-card">
        <label className="one-card-label">one Free delivery</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
