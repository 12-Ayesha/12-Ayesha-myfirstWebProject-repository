import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";



const FoodDisplay = ({ category }) => {
  const { foodlist } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <hr />
      <br />
      <h2>Best Dishes near you</h2>
      <div className="food-display-list">
        {foodlist
          .filter(
            (item) =>
              category === "all" || category === "All" || item.category === category
          )
          .map((item, index) => (
            <FoodItem
              key={index}
              id={item.id}
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
            />
          ))}
      </div>
     
    </div>
  );
};

export default FoodDisplay;
