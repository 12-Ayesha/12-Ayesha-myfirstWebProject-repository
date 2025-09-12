import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import PlaceOrder from "./pages/PlaceOfOrder/PlaceOfOrder";
import ExploreMenu from "./components/ExploreMenu/ExploreMenu";
import FoodDisplay from "./components/FoodDisplay/FoodDisplay";
import SignUpFeature from "./components/SignUpFeature/SignUpFeature";
import LoginFeature from "./components/LoginFeature/LoginFeature";
import Footer from "./components/Footer/Footer";
import AboutInformation from "./components/AboutInformation/AboutInformation";
import MobileApp from "./components/MobileAppDownload/MobileAppDownload";
import Cart from "./pages/Cart/Cart"; // <-- Import Cart

const App = () => {
  const [category, setCategory] = useState("all");
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
    setShowLogin(false);
    setShowSignUp(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <div className="App">
      <Navbar
        isLoggedIn={isLoggedIn}
        user={user}
        onLogout={handleLogout}
        setShowLogin={setShowLogin}
        onShowSignUp={() => setShowSignUp(true)}
      />

      {/* SignUp & Login Modals */}
      {showSignUp && (
        <div className="modal-overlay">
          <SignUpFeature
            setShowSignUp={setShowSignUp}
            setShowLogin={setShowLogin}
            onSuccess={handleLogin}
          />
        </div>
      )}

      {showLogin && (
        <div className="modal-overlay">
          <LoginFeature
            setShowLogin={setShowLogin}
            setShowSignUp={setShowSignUp}
            onSuccess={handleLogin}
          />
        </div>
      )}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home category={category} setCategory={setCategory} />} />
        <Route
          path="/menu"
          element={
            <div className="menu-page">
              <ExploreMenu category={category} setCategory={setCategory} />
              <FoodDisplay category={category} />
            </div>
          }
        />
        <Route path="/order" element={<PlaceOrder isLoggedIn={isLoggedIn} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {/* Sections on Home Page */}
      <AboutInformation />
      <MobileApp />
      <Footer />
    </div>
  );
};

export default App;
