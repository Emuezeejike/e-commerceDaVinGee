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



function App() {

   const [cart, setCart] = useState(() => {
    // Try to load cart from localStorage, or use empty array
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    console.log('Cart state:', cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    console.log('Adding to cart:', product);
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

  return (
    <> 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart cartItems={cart}/>} />
          <Route path="products" element={<Products onAddToCart={handleAddToCart} />} />
          <Route path="productdetail/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="contact" element={<Contact />} />
        </Route>   
      </Routes>      
    </>
  );
}

export default App
