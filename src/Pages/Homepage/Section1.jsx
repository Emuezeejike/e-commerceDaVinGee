import React from 'react'
import './Section1.css'; // Assuming you have a CSS file for styles
import { Link } from 'react-router-dom';
// import SectionBg from '../../assets/images/big.png'; // Replace with your actual image path

const Section1 = () => {
  return (
    <div  className="backgroundImage flex items-center justify-left text-white family-poppins flex-col md:flex-row">
      {/* <div className='pl-8'>
        <img src={SectionBg} alt='Section Background' className='' />
      </div> */}
      <div className='text-left p-8 bg-gray-800 bg-opacity-50 w-[50%] rounded-lg flex flex-col items-start m-8 shadow-2xl md:w-[40%]'>
        <p className='text-sm pt-4'>New Arrival</p>
        <h2 className='text-2xl font-extrabold text-orange-700'>Discover Our</h2>
        <h2 className='text-2xl font-extrabold text-orange-700'>New Collection</h2>
        <Link className="hover:cursor-pointer bg-gray-300 text-black p-2 rounded-sm text-sm hover:gray-500" to={'/product'}>Shop Now</Link>  
      </div>
        
    </div>
  )
}

export default Section1