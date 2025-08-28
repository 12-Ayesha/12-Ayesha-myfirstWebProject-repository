import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';
import searchIcon from '../../assets/search-icon.png';
import basketIcon from '../../assets/basket-icon.jpg';

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/order-menu" },
    { name: "Mobile App", path: "/app" },
    { name: "Contact Us", path: "/contact" }
  ];

  return (
    <div className="navbar">
      <img src={logo} alt="Restaurant Logo" className="logo" />

      <ul className="navbar-menu">
        {navItems.map((item) => (
          <li key={item.name}>
            <NavLink 
              to={item.path}
              className={({ isActive }) => isActive ? "active" : ""}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="navbar-right">
        <img src={searchIcon} alt="Search" className="icon" />
        <div className="cart-icon">
          <img src={basketIcon} alt="Cart" />
          <div className="cart-dot"></div>
        </div>
        <button className="sign-in-btn">Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;