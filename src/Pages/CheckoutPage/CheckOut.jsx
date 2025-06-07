import React from 'react'
import '../../Components/ImageBg.css'
import { Link } from 'react-router-dom';

const CheckOut = () => {
  return (
    <div className='family-poppins bg-gray-100'>
        <div className='imageBg h-[20%] flex flex-col justify-center items-center text-white'>
            <h1 className='font-bold text-3xl text-center text-black'>Checkout</h1>
            <div className='flex gap-2 mt-4 text-sm'>
            <Link to={"/"} className='text-white font-semibold hover:text-orange-300 transition duration-200'>
            Home
            </Link>
            <p className='font-semibold '>{'>'}</p>
            <span className="text-sm ">Checkout</span>
        </div>
      </div>
    <div className='flex  justify-between m-auto p-8 w-[80%] min-h-screen bg-gray-100'>
        
        <div className='p-4 w-[60%] bg-white shadow rounded mt-8'>
            <form action="POST">
              <div className='flex flex-col gap-2'>
                <label className='text-sm' htmlFor="First Name">First Name</label>
                <input className='border text-sm rounded-sm border-gray-400 p-2' type="text" id="First Name" name="First Name" placeholder="John" autoComplete='name' required />
                <label className='text-sm' htmlFor="Last Name">Last Name</label>
                <input className='border text-sm rounded-sm border-gray-400 p-2' type="text" id="Last Name" name="Last Name" placeholder="Benson" autoComplete='name' required />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='mt-4 text-sm' htmlFor="email">Email address</label>
                <input className='border text-sm border-gray-400 p-2 rounded-sm' type="email" id="email" name="email" placeholder="example@email.com" autoComplete='email' required />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='mt-4 text-sm' htmlFor="Street Address">Street Address</label>
                <input className='border text-sm border-gray-400 p-2 rounded-sm' type="text" id="Street Address" name="Street Address" placeholder="Street" autoComplete='Street Address' required />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='mt-4 text-sm' htmlFor="Town">Town/City</label>
                <input className='border text-sm border-gray-400 p-2 rounded-sm' type="text" id="Town" name="Town" placeholder="Optional" autoComplete='Town' required/>
              </div>
              <div className='flex flex-col gap-2'>
                <label className='mt-4 text-sm' htmlFor="Number">Phone Number</label>
                <input className='border text-sm border-gray-400 p-2 rounded-sm' type="text" id="Number" name="Number" placeholder="+234" autoComplete='Number' required />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='mt-4 text-sm' htmlFor="Info">Additional Information</label>
                <input className='border text-sm border-gray-400 p-2 rounded-sm' type="text" id="Info" name="Info" placeholder="Optional" autoComplete='Number' />
              </div>
                
            </form>
        </div>
        <div>
            <div className='flex flex-col gap-2'>
                    <label className='mt-4 text-sm' htmlFor="Payment">Payment Method</label>
                    <select className='border text-sm border-gray-400 p-2 rounded-sm' id="Payment" name="Payment" required>
                    <option value="Credit Card">Credit Card</option>
                    <option value="PayPal">PayPal</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                    </select>
                </div>
        </div>
    </div>
    </div>
    
  )
}

export default CheckOut