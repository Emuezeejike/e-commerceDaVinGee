import { useState, useEffect } from 'react'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Homepage/Home'
import Cart from './Pages/CartPage/Cart'
import ProductDetail from './Pages/ProductDetailsPage/ProductDetail'
import NotFoundPage from './Components/NotFoundPage'
import Products from './Pages/ShopPage/Products'
import Layout from './routes/Layout'
import Contact from './Pages/ContactPage/Contact'
import CheckOut from './Pages/CheckoutPage/CheckOut'



function App() {

   const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
  setCart((prev) => {
  const found = prev.find((item) => item.id === product.id);
  if (found) {
    return prev.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...prev, { ...product, quantity: 1 }];
});
};

  const handleDeleteFromCart = (id) => {
  setCart((prev) => prev.filter(item => item.id !== id));
};

  return (
    <> 
      <Routes>
        <Route path="/" element={<Layout cart={cart}/>}>
          <Route index element={<Home onAddToCart={handleAddToCart} />} />
          <Route path="cart" element={<Cart cartItems={cart} onDelete={handleDeleteFromCart} />} />
          <Route path="products" element={<Products onAddToCart={handleAddToCart} />} />
          <Route path="productdetail/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="checkout" element={<CheckOut cartItems={cart} />} />
        </Route>   
      </Routes>      
    </>
  );
}

export default App
