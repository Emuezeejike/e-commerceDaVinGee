import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import cart from "../assets/images/cart.svg";
import searchImage from "../assets/images/search.svg";
import HomeIcon from "../assets/images/home.svg";
import ContactIcon from "../assets/images/contact.svg";
import StoreIcon from "../assets/images/store.svg";
import "../../src/index.css";

const NavBar = ({ cartCount }) => {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/products?search=${encodeURIComponent(search)}`);
    setSearch("");
  };


  // this line of codes handles the badge displaying the cart count on the hambuger 
  const handleHamburgerClick = () => {
    setMenuOpen((prev) => {
      const newState = !prev;
      return newState;
    });
  };

  return (
    <div className="w-full shadow-md sticky top-0 z-50">
      <nav className="bg-gray-200 w-full shadow-lg shadow-blue-300 p-4 flex items-center justify-between">
        <div>
          <h1 className="font-bold text-2xl font-pacifico">DaVinGee</h1>
          <p className="text-sm text-center">Collections</p>
        </div>
        {/* Hamburger Icon */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={handleHamburgerClick}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center justify-between">
          <ul className="flex space-x-4 text-black">
            <li>
              <Link
                className="font-semibold hover:cursor-pointer hover:text-orange-500 flex flex-col justify-center items-center"
                to="/"
              >
                <img src={HomeIcon} alt="home logo" className="w-7 h-7" />
                Home
              </Link>
            </li>
            <li>
              <Link
                className="font-semibold hover:cursor-pointer hover:text-orange-500 flex flex-col justify-center items-center"
                to="/products"
              >
                <img src={StoreIcon} alt="store logo" className="w-7 h-7" />
                Products
              </Link>
            </li>
            <li>
              <Link
                className="font-semibold hover:cursor-pointer flex flex-col justify-center items-center hover:text-orange-500"
                to="/contact"
              >
                <img src={ContactIcon} alt="contact logo" className="w-7 h-7" />
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Link
                className="hover:text-orange-500 hover:cursor-pointer gap-1 flex flex-col justify-center items-center font-semibold"
                to="/cart"
              >
                <img className="" src={cart} alt="cart logo" />
                Cart
                {cartCount > 0 && (
                  <span className="absolute top-5 bg-red-700 text-white text-xs font-bold rounded-full px-2 py-0.5">
                    {cartCount}
                  </span>
                )}
          </Link>
        </div>
        <div className="hidden sm:block">
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border-b-2 py-1 text-black focus:outline-none focus:border-black transition duration-200"
            />
            <button
              type="submit"
              className="text-black px-3 py-1 rounded hover:cursor-pointer"
            >
              <img src={searchImage} alt="search logo" />
            </button>
          </form>
        </div>
        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-gray-100 shadow-md flex flex-col items-center md:hidden z-50">
            <ul className="flex flex-col space-y-2 py-4 w-full items-center">
              <li>
                <Link
                  className="font-semibold hover:text-orange-500"
                  to="/"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="font-semibold hover:text-orange-500"
                  to="/products"
                  onClick={() => setMenuOpen(false)}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  className="font-semibold hover:text-orange-500"
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <form
                  onSubmit={handleSubmit}
                  className="flex items-center gap-2 mt-2"
                >
                  <button
                    type="submit"
                    className="text-black px-3 py-1 rounded "
                  >
                    <img src={searchImage} alt="search logo" />
                  </button>
                  <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border-b-2 py-1 text-black focus:outline-none focus:border-black transition duration-200"
                  />
                </form>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
