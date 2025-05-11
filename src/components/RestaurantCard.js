import { CDN_URL } from "../utils/constants";

const RestaurantCard =( resData) => {
    
    const {
      cloudinaryImageId,
      name,
      cuisines,
      sla,
      
      costForTwo,
      avgRating,
    } = resData;


    return (
      <div className="res-card">
        <img
          className="res-logo"
          src={CDN_URL+ cloudinaryImageId }
        />
        <div className="resDetails">
          <h3>{name}</h3>
          <h4>{cuisines.join(" , ")}</h4>
          <h4>{costForTwo}</h4>

          <h4>
             {sla?.deliveryTime} minutes
          </h4>
          <h4> {avgRating} ⭐ </h4>
        </div>
      </div>
    );
  };
  export default RestaurantCard;