import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

import "./Navbar.css";
import IconImg from "../../assets/unnamed.png";
import SearchImg from "../../assets/search.png";
import basketIconImg from "../../assets/basket-icon.jpg";

const Navbar = ({ setShowLogin, isLoggedIn, user, onLogout, onShowSignUp }) => {
  const [activeLink, setActiveLink] = useState("/");
  const { getTotalAmountCart } = useContext(StoreContext);

  const handleClick = (value) => setActiveLink(value);

  return (
    <div className="navbar">
      {/* Logo */}
      <NavLink to="/" onClick={() => handleClick("/")}>
        <img src={IconImg} alt="logo" className="navbar-logo" />
      </NavLink>

      {/* Menu */}
      <ul className="navbar-menu">
        <li>
          <NavLink
            to="/"
            className={activeLink === "/" ? "nav-link active" : "nav-link"}
            onClick={() => handleClick("/")}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/menu"
            className={activeLink === "/menu" ? "nav-link active" : "nav-link"}
            onClick={() => handleClick("/menu")}
          >
            Menu
          </NavLink>
        </li>

        <li>
          <a
            href="#About-Information"
            className={activeLink === "#About-Information" ? "nav-link active" : "nav-link"}
            onClick={() => handleClick("#About-Information")}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#Mobile-app-download"
            className={activeLink === "#Mobile-app-download" ? "nav-link active" : "nav-link"}
            onClick={() => handleClick("#Mobile-app-download")}
          >
            Mobile App
          </a>
        </li>

        <li>
          <a
            href="#footer"
            className={activeLink === "#footer" ? "nav-link active" : "nav-link"}
            onClick={() => handleClick("#footer")}
          >
            Contacts
          </a>
        </li>
      </ul>

      {/* Right Section */}
      <div className="navbar-right">
        <img src={SearchImg} alt="search" className="search-icon" />

        <NavLink to="/cart" className="cart-link">
          <img src={basketIconImg} alt="basket" className="basket-icon" />
          {getTotalAmountCart() > 0 && <div className="dot"></div>}
        </NavLink>

        {isLoggedIn ? (
          <div className="user-section">
            <span className="welcome-text">Welcome, {user?.name || "User"}</span>
            <button onClick={onLogout} className="logout-button">
              Logout
            </button>
          </div>
        ) : (
          <div className="auth-buttons">
            <button onClick={() => setShowLogin(true)} className="sign-in-button">
              Sign In
            </button>
            <button onClick={onShowSignUp} className="sign-up-button">
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
