import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
 
const Cart = () => {
  const { cartItems, foodlist, removeFromCart,getTotalAmountCart } = useContext(StoreContext);
const navigate = useNavigate();
  const getTotalPrice = (itemId) => {
    const item = foodlist.find((food) => food.id === itemId);
    return item ? item.cost * cartItems[itemId] : 0;
  };

  const totalCartPrice = Object.keys(cartItems).reduce(
    (acc, itemId) => acc + getTotalPrice(itemId),
    0
  );

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total Price</p>
          <p>Remove</p>
        </div>
<br />
<hr />
<br />
{foodlist.map((item) => {
  if (cartItems[item.id]>0) {
    return (
      <div className="cart-item-title cart-items-item" key={item.id}>
        <p><img src={item.image} alt={item.name} className="cart-item-img" /></p>
        <p>{item.name}</p>
        <p>{item.price}Tk</p>
        <p>{cartItems[item.id]}</p>
        <p>{item.price * cartItems[item.id]}Tk</p>
        <p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </p>
      </div>
    );
  }
  return null;
     })}

    </div>
      <hr />
      <div className="cart-bottom">
        <div className="cart-total">
         
         <h2> Cart Totals </h2>
         <div className="cart-total-details">

          <p>Subtotal</p>
          <p>{getTotalAmountCart()}Tk</p>
            </div>
            <hr />
          <div className="cart-total-details">
          <p>Delivery Fee</p>
          <p>{getTotalAmountCart()===0 ? 0 : 2}Tk</p>
          </div>
          <hr />

          <div className="cart-total-details">
          <b>Total</b>
          <b>{getTotalAmountCart()===0 ? 0 :getTotalAmountCart() + 2}Tk</b>
          </div>
          
      </div>
      <button onClick={() => navigate("/order")}>Proceed to Checkout</button>
      </div>
      <div className="cart-note">

      </div>
      <br />
      <div className="cart-promocode">
        <p>Have a promo code? Enter it here </p>
        <input type="text" placeholder="Enter promo code" />
        <button>Apply</button>
      </div>
    </div>
  );
  
};

export default Cart;
