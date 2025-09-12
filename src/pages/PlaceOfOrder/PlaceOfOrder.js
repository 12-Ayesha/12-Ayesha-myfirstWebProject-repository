import React, { useContext, useState } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import bkashIcon from '../../assets/bkash.png';
import creditCardIcon from '../../assets/credit-card.jpeg';
import nagadIcon from '../../assets/nagad.png';
import './PlaceOfOrder.css';

const PlaceOfOrder = () => {
  const { getTotalAmountCart } = useContext(StoreContext);
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleProceedPayment = (e) => {
    e.preventDefault();

    if (!paymentMethod) {
      alert('Please select a payment method!');
      return;
    }

    if (paymentMethod === 'bkash') {
      window.open('https://www.bkash.com', '_blank'); // open Bkash official page
    } else if (paymentMethod === 'creditCard') {
      window.open('https://www.visa.com', '_blank'); // open Credit Card official page (example)
    } else if (paymentMethod === 'nagad') {
      window.open('https://www.nagad.com.bd', '_blank'); // open Nagad official page
    }
  };

  return (
    <form className="order-place">
      {/* Left Side: Delivery Info */}
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Street Address" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>

      {/* Right Side: Cart Totals + Payment */}
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>{getTotalAmountCart()} Tk</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>{getTotalAmountCart() === 0 ? 0 : 2} Tk</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>{getTotalAmountCart() === 0 ? 0 : getTotalAmountCart() + 2} Tk</b>
          </div>
        </div>

        {/* Payment Options */}
        <div className="payment-options">
          <p className="title">Select Payment Method</p>

          {/* Bkash */}
          <div
            className={`payment-option ${paymentMethod === 'bkash' ? 'selected' : ''}`}
            onClick={() => setPaymentMethod('bkash')}
          >
            <img src={bkashIcon} alt="Bkash" /> Bkash
          </div>

          {/* Credit Card */}
          <div
            className={`payment-option ${paymentMethod === 'creditCard' ? 'selected' : ''}`}
            onClick={() => setPaymentMethod('creditCard')}
          >
            <img src={creditCardIcon} alt="Credit Card" /> Credit Card
          </div>

          {/* Nagad */}
          <div
            className={`payment-option ${paymentMethod === 'nagad' ? 'selected' : ''}`}
            onClick={() => setPaymentMethod('nagad')}
          >
            <img src={nagadIcon} alt="Nagad" /> Nagad
          </div>
        </div>

        <button type="submit" onClick={handleProceedPayment}>
          Proceed to Payment
        </button>
      </div>
    </form>
  );
};

export default PlaceOfOrder;
