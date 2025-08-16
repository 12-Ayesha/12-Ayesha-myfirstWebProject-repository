import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOfOrder from './pages/PlaceOfOrder/PlaceOfOrder';
import ExploreMenu from './components/ExploreMenu/ExploreMenu';
import OrderMenu from './pages/orderMenu';
const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<ExploreMenu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/place-order" element={<PlaceOfOrder />} />
        <Route path="/order-menu" element={<OrderMenu />} />
      </Routes>
    </div>
  );
};

export default App;