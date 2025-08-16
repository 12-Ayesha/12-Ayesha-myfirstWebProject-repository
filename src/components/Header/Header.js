import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  // Navigate to OrderMenu page when button clicked
  const goToOrderMenu = () => {
    navigate('/order-menu');
  };

  return (
    <div className="header">
      <div className="header-contents">
        <h2>Welcome to Our Store</h2>
        <p>Explore our wide range of products</p>
        <button className="view-menu-btn" onClick={goToOrderMenu}>
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;