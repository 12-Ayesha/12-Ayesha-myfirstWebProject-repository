import React, { useContext } from "react";
import "./FoodItem.css";
import star from "../../assets/rating_starts.png";
import addicon from "../../assets/add_icon_white.png";
import removeicon from "../../assets/remove_icon_red.png";
import addicongreen from "../../assets/add_icon_green.png";
import { StoreContext } from "../../Context/StoreContext";

const FoodItem = ({ id, image, name, description, price }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img className="food-item-image" src={image} alt={name} />
        {!cartItems[id] ? (
          <img className="add" onClick={() => addToCart(id)} src={addicon} alt=" " />
        ) : (
          <div className="food-item-counter">
            <img onClick={() => removeFromCart(id)} src={removeicon} alt=" " />
            <p>{cartItems[id]}</p>
            <img onClick={() => addToCart(id)} src={addicongreen} alt=" " />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-ratings">
          <p>{name}</p>
          <img src={star} alt="rating" className="star-icon" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">Tk {price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
