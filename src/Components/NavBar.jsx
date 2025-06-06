import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import cart from '../assets/images/cart.svg'
import searchImage from '../assets/images/search.svg'

const NavBar = () => {
  const [search, setSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/products?search=${encodeURIComponent(search)}`);
    setSearch('');
  };

  return (
    <div className='w-full bg-orange-200 shadow-md'>
      <nav className="bg-orange-200 p-4 flex items-center justify-between">
        <div>
          <h1 className='font-bold text-2xl'>DaVinGee</h1>
          <p className='text-sm text-center'>Collections</p>
        </div>
        {/* Hamburger Icon */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center justify-between">
          <ul className="flex space-x-4 text-black">
            <li>
              <Link className="font-semibold hover:cursor-pointer hover:text-orange-500" to="/">Home</Link>
            </li>
            <li>
              <Link className="font-semibold hover:cursor-pointer hover:text-orange-500" to="/products">Products</Link>
            </li>
            <li>
              <Link className="font-semibold hover:cursor-pointer hover:text-orange-500" to="/contact">Contact</Link>
            </li>
            <li>
              <Link className="hover:bg-orange-500" to="/cart"><img src={cart} alt="cart logo" /></Link>
            </li>
          </ul>
        </div>
        <div className='hidden sm:block'>
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <button
              type="submit"
              className="text-black px-3 py-1 rounded hover:bg-orange-400"
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
        </div>
        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-orange-100 shadow-md flex flex-col items-center md:hidden z-50">
            <ul className="flex flex-col space-y-2 py-4 w-full items-center">
              <li>
                <Link className="font-semibold hover:text-orange-500" to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              </li>
              <li>
                <Link className="font-semibold hover:text-orange-500" to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
              </li>
              <li>
                <Link className="font-semibold hover:text-orange-500" to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
              </li>
              <li>
                <Link className="hover:bg-orange-500" to="/cart" onClick={() => setMenuOpen(false)}><img src={cart} alt="cart logo" /></Link>
              </li>
              <li>
                <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-2">
                  <button
                    type="submit"
                    className="text-black px-3 py-1 rounded hover:bg-orange-400"
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
  )
}

export default NavBar;