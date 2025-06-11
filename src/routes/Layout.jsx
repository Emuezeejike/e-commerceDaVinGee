import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';



const Layout = ({cart}) => (
  <>
    <NavBar  cartCount={cart.length}/>
    <Outlet />
    <Footer />
    
  </>
);

export default Layout;