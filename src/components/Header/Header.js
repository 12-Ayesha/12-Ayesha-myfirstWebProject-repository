import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  
  const handleViewMenuClick = () => {
    navigate('/menu'); // Navigate to the menu page
  };

  return (
    <div className='header'>
      <div className="header-content">
        <h2>Feeling Hungry? We Got You</h2>
        <p>
          <b>
            Pick what you're craving and we'll bring it hot and fresh - right to
            your doorstep. From light bites to comfort food, everything's made
            with care, just the way you like.
          </b>
        </p>
        <p>
          <b>No fuss, no stress. Just good food and a happy belly.</b>
        </p>

        <button className="view-menu-btn" onClick={handleViewMenuClick}>
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;