import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-orange-200 w-full h-[40%] flex flex-col'>
      <div className=' text-black h-[30%] flex justify-between p-6 family-poppins flex-wrap md:flex-nowrap gap-4'>
      <div className='flex flex-col'>
        <h2 className='font-bold family-poppins'>DaVinGee.</h2>
        <div className='family-poppins text-sm pt-8'>
          <p>400 Osho Drive, Suite 200 Coral </p>
          <p>Lagos,</p>
          <p>PO 10011 Nigeria</p>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <h1 className='opacity-50 family-poppins'>Links</h1>
        <ul className='flex flex-col gap-2 family-poppins '>
          <li><Link to={'/'} >Home</Link></li>
          <li><Link to={'/shop'} >Shop</Link></li>
          <li><Link to={'/contact'} >Contact</Link></li>
        </ul>
      </div>
      <div className='flex flex-col gap-4'>
        <h1 className='opacity-50 family-poppins'>Newsletter</h1>
        <div className='flex gap-2'>
          <label htmlFor="email"></label>
          <input className='border-b-4 border-black' type="text" placeholder='Enter Your Email Address' />
          <button>Subscribe</button>
        </div>       
      </div>
      
      </div>
      <div>
        <hr />
        <p className='text-sm text-black pl-6'>2023 DaVinGee. All rights reverved</p>
      </div>
    </div>

  )
}

export default Footer