import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import CategoriesPage from './pages/CategoriesPage';
import Promo from './pages/Promo';
import Register from './pages/Register';
import Login from './pages/Login';
import WatchVideo from './pages/WatchVideo';
import ProductDetails from './pages/ProductDetails';
import CategoryDetail from './pages/CategoryDetail';
import { CartProvider } from './context/CartContext';
import './index.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const scrollRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smartphone: {
        smooth: true
      },
      tablet: {
        smooth: true
      }
    });

    // Update scroll on route change after a small delay to allow DOM updates
    setTimeout(() => {
      scroll.update();
    }, 100);

    return () => {
      if (scroll) scroll.destroy();
    }
  }, [location.pathname]); // Re-init or update on route change

  return (
    <div ref={scrollRef} className="main-container bg-[#fcfcfc] min-h-screen font-sans text-[#333]" data-scroll-container>
      <ScrollToTop />
      <Preloader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/:categoryName" element={<CategoryDetail />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/watch-video" element={<WatchVideo />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </Router>
  );
}

export default App;
