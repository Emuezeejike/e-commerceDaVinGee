import React from 'react'
import NavBar from '../../Components/NavBar'
import '../../Components/ImageBg.css'
import { Link } from 'react-router-dom';


const Cart = ({ cartItems =[] }) => {
  console.log('Cart items:', cartItems);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + Number(item.price.replace(/[^0-9.-]+/g,"")),
    0
  );
  return (
    <div>
      <NavBar />
      <div className='imageBg h-[20%] flex flex-col justify-center items-center text-white'>
        <h1 className='font-bold text-3xl text-center text-black'>Cart</h1>
        <div className='flex gap-2 mt-4 text-sm'>
          <Link to={"/"} className='text-white font-semibold hover:text-orange-300 transition duration-200'>
            Home
          </Link>
          <p className='font-semibold '>{'>'}</p>
          <span className="text-sm ">Cart</span>
        </div>
      </div>
      <div>
      <ul>
        {cartItems.length === 0 ? (
      <li>No items in cart.</li>
      ) : (
        cartItems.map((item, idx) => (
      <li key={item.id || idx}>
        {item.name} - {item.price} x {item.quantity}
      </li>
      ))
    )}
</ul>
      <p>Total Price: #{totalPrice}</p>
    </div>
    </div>
  )
}

export default Cart