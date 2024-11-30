import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SearchProvider } from './assets/Navs/Searchcontext';  // Import the SearchProvider
import Home from './assets/Home';
import Navbar from './assets/Navs/Navbar';
import Profile from './assets/Profile';
import Create from './assets/Create';
import './App.css';
import Cart from './assets/cart';
import ProductDetails from './assets/ProductsDetails';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchProvider>  {/* Wrap your app with the SearchProvider */}
      <Router>
        <Navbar /> {/* Your navbar where you use search context */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<Create />} />
          <Route path="/product/:name" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />











        </Routes>
      </Router>
    </SearchProvider>
  </StrictMode>
);
