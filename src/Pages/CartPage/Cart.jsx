import React from 'react'
import '../../Components/ImageBg.css'
import { Link } from 'react-router-dom';


const Cart = ({ cartItems =[], onDelete }) => {
  console.log('Cart items:', cartItems);

  const totalPrice = cartItems.reduce(
  (sum, item) => {
    const price = Number(item.price) || 0;
    return sum + price * (item.quantity || 1);
  },
  0
);
  return (
    <div className='family-poppins bg-gray-100'>
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
      <div className='w-[60%] m-auto p-8 family-poppins'>
      <h1 className='text-center font-bold mt-4 text-2xl family-poppins'>Your Items</h1>
      <ul className='mt-4 flex flex-col family-poppins'>
        {cartItems.length === 0 ? (
      <li>No items in cart.</li>
      ) : (
        cartItems.map((item, idx) => (
      <div className='flex font-semibold family-poppins items-center justify-evenly' key={item.id || idx}>
        <h3>{item.name}</h3>-
        <h3>#{item.price}</h3>x 
        <h3>{item.quantity}</h3>
        <button
                  className="m-2 bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded"
                  onClick={() => onDelete && onDelete(item.id)}
                >
                  Delete
                </button>
      </div>
      ))
      )}
      </ul>
      <p className='font-bold text-center pb-4 text-2xl'>Total Price: #{totalPrice.toLocaleString()}</p>
      {cartItems.length > 0 && (
        <Link
          to={"/checkout"}
          className=" bg-orange-400 hover:bg-orange-600 hover:cursor-pointer text-white font-bold py-2 px-6 rounded transition"
        >
          Check Out
        </Link>
      )}
    </div>
    </div>
  )
}

export default Cart