import React from 'react'
import { Link } from 'react-router-dom'
import cart from '../assets/images/cart.svg'
import search from '../assets/images/search.svg'

const NavBar = () => {
  return (
    <div className='w-full bg-orange-200 shadow-md'>
        <nav className="bg-orange-200 p-4 flex items-center justify-between">
            <div>
                <h1 className='font-bold text-2xl'>DaVinGee</h1>
                <p className='text-sm text-center'>Collections</p>
            </div>
            <div className="flex items-center justify-between">
                <ul className="flex space-x-4 text-black">
                    <li className="">
                        <Link className="font-semibold hover:cursor-pointer hover:text-orange-500" to="/">Home</Link>
                    </li>
                    <li className="">
                        <Link className="font-semibold hover:cursor-pointer hover:text-orange-500" to="/products">Products</Link>
                    </li>
                    <li className="">
                        <Link className="font-semibold hover:cursor-pointer hover:text-orange-500" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="flex items-center justify-between">
                <ul className="flex space-x-4 text-white">
                    <li className="">
                        <Link className="hover:bg-orange-500" to="/cart"><img src={cart} alt="cart logo" /></Link>
                    </li>
                    <li className="">
                        <Link className="hover:bg-orange-500" to="/products"><img src={search} alt="search logo" /></Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default NavBar