import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './Pages/Homepage/Home.jsx';
import Cart from './Pages/CartPage/Cart.jsx';
import ProductDetail from './Pages/ProductDetailsPage/ProductDetail.jsx';
import NotFoundPage from './Components/NotFoundPage.jsx';
import Contact from './Pages/ContactPage/Contact.jsx';
import Products from './Pages/ShopPage/Products.jsx';

const router = createBrowserRouter([
  {path: '/', element: <App />, errorElement: <NotFoundPage />},
  {path: '/home', element: <Home />},
  {path: '/cart', element: <Cart />},
  {path: '/products', element: <Products />},
  {path: '/Productdetail/:id', element: <ProductDetail />},
  {path: '/contact', element: <Contact />},
  {path: '*', element: <NotFoundPage />},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
