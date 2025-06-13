import { useState, useEffect, useCallback, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Homepage/Home";
import Layout from "./routes/Layout";

const Cart = lazy(() => import("./Pages/CartPage/Cart"));
const ProductDetail = lazy(() =>
  import("./Pages/ProductDetailsPage/ProductDetail")
);
const NotFoundPage = lazy(() => import("./Components/NotFoundPage"));
const Products = lazy(() => import("./Pages/ShopPage/Products"));
const Contact = lazy(() => import("./Pages/ContactPage/Contact"));
const CheckOut = lazy(() => import("./Pages/CheckoutPage/CheckOut"));

function App() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = useCallback((product) => {
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
  }, []);

  const handleDeleteFromCart = useCallback((id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }, []);
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout cart={cart} />}>
            <Route index element={<Home onAddToCart={handleAddToCart} />} />
            <Route
              path="cart"
              element={
                <Cart cartItems={cart} onDelete={handleDeleteFromCart} />
              }
            />
            <Route
              path="products"
              element={<Products onAddToCart={handleAddToCart} />}
            />
            <Route
              path="productdetail/:id"
              element={<ProductDetail onAddToCart={handleAddToCart} />}
            />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="checkout" element={<CheckOut cartItems={cart} />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
