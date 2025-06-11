import React, { useState } from 'react'
import '../../Components/ImageBg.css'
import { Link } from 'react-router-dom';
import Warranty from '../../Components/Warranty';

const CheckOut = ({ cartItems = [] }) => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    town: '',
    number: '',
    info: '',
    payment: '',
  });

  const totalPrice = cartItems.reduce(
    (sum, item) => {
      const price = Number(item.price);
      return sum + price * (item.quantity || 1);
    },
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation: check required fields
    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.street ||
      !form.town ||
      !form.number ||
      !form.payment
    ) {
      alert('Please fill in all required fields.');
      return;
    }
    alert('Your Order Has Been Placed, and it is being processed');
  };

  return (
    <div className='family-poppins bg-gray-100'>
      <div className='imageBg flex flex-col justify-center items-center text-white'>
        <h1 className='font-bold text-3xl text-center text-black'>Checkout</h1>
        <div className='flex gap-2 mt-4 text-sm'>
          <Link to={"/"} className='text-white font-semibold hover:text-orange-300 transition duration-200'>
            Home
          </Link>
          <p className='font-semibold '>{'>'}</p>
          <span className="text-sm ">Checkout</span>
        </div>
      </div>
      <div className='flex justify-between m-auto p-8 w-[80%] min-h-screen bg-gray-100'>
        <form
          className='p-4 w-[50%] bg-white shadow rounded mt-8'
          onSubmit={handleSubmit}
        >
          <div className='flex flex-col gap-2'>
            <label className='text-sm' htmlFor="firstName">First Name</label>
            <input className='border text-sm rounded-sm border-gray-400 p-2' type="text" id="firstName" name="firstName" placeholder="John" autoComplete='given-name' required value={form.firstName} onChange={handleChange} />
            <label className='text-sm' htmlFor="lastName">Last Name</label>
            <input className='border text-sm rounded-sm border-gray-400 p-2' type="text" id="lastName" name="lastName" placeholder="Benson" autoComplete='family-name' required value={form.lastName} onChange={handleChange} />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='mt-4 text-sm' htmlFor="email">Email address</label>
            <input className='border text-sm border-gray-400 p-2 rounded-sm' type="email" id="email" name="email" placeholder="example@email.com" autoComplete='email' required value={form.email} onChange={handleChange} />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='mt-4 text-sm' htmlFor="street">Street Address</label>
            <input className='border text-sm border-gray-400 p-2 rounded-sm' type="text" id="street" name="street" placeholder="Street" autoComplete='street-address' required value={form.street} onChange={handleChange} />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='mt-4 text-sm' htmlFor="town">Town/City</label>
            <input className='border text-sm border-gray-400 p-2 rounded-sm' type="text" id="town" name="town" placeholder="Optional" autoComplete='address-level2' required value={form.town} onChange={handleChange} />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='mt-4 text-sm' htmlFor="number">Phone Number</label>
            <input className='border text-sm border-gray-400 p-2 rounded-sm' type="text" id="number" name="number" placeholder="+234" autoComplete='tel' required value={form.number} onChange={handleChange} />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='mt-4 text-sm' htmlFor="info">Additional Information</label>
            <input className='border text-sm border-gray-400 p-2 rounded-sm' type="text" id="info" name="info" placeholder="Optional" value={form.info} onChange={handleChange} />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='mt-4 text-sm' htmlFor="payment">Payment Method</label>
            <select className='border text-sm border-gray-400 p-2 rounded-sm' id="payment" name="payment" required value={form.payment} onChange={handleChange}>
              <option value="">Select Payment Method</option>
              <option value="Credit Card">Credit Card</option>
              <option value="PayPal">PayPal</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
            <p className='text-xs'>For Bank Transfer, Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
          </div>
          <button
            type="submit"
            className='bg-gray-400 hover:bg-gray-600 hover:cursor-pointer text-black font-bold py-2 px-6 rounded transition mt-4'
          >
            Place Order
          </button>
        </form>
        <div className='flex flex-col gap-2 w-[40%] bg-white shadow rounded p-4 mt-8'>
          <div>
            <p className="font-bold text-lg mt-4">
              Order Total: #{totalPrice.toLocaleString()}
            </p>
            <hr />
            <p className="font-semibold text-sm mt-2">
              Please review your order before proceeding to payment.
            </p>
          </div>
          <div>
            <p className='text-sm mt-4 text-gray-600'>
              <strong>NB: </strong>
              By placing your order, you agree to our <Link to="/terms" className='text-blue-500 hover:underline'>Terms and Conditions</Link> and <Link to="/privacy" className='text-blue-500 hover:underline'>Privacy Policy</Link>.
              Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
            </p>
          </div>
        </div>
      </div>
      <Warranty />
    </div>
  )
}

export default CheckOut