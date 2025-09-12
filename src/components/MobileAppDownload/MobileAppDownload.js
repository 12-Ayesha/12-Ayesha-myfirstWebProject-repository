import React from 'react'
import './MobileAppDownload.css'

const MobileApp = () => {
  return (
    <div className='mobile-app' id='Mobile-app-download'>
      <h2>Download Our Mobile App</h2>
      <div className="mobile-app-content">
        <div className="app-features">
          <h3>Get the best experience with our app</h3>
          <ul>
            <li>Order food with just a few taps</li>
            <li>Track your delivery in real-time</li>
            <li>Exclusive app-only discounts</li>
            <li>Save your favorite orders</li>
            <li>Quick reordering</li>
          </ul>
          <div className="app-download-buttons">
            <button className="app-store-btn">App Store</button>
            <button className="google-play-btn">Google Play</button>
          </div>
        </div>
        <div className="app-preview">
          <div className="phone-mockup">
            <div className="phone-screen">
              <img src="https://via.placeholder.com/200x400/fff/333?text=App+Preview" alt="App Preview" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileApp