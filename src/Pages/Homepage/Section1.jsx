import React from 'react'
import './Section1.css'; // Assuming you have a CSS file for styles
import { Link } from 'react-router-dom';

const Section1 = () => {
  return (
    <div  className="backgroundImage h-[60%] flex items-center justify-left text-white family-poppins flex-col md:flex-row">
      <div className='text-left p-8 bg-black bg-opacity-30 w-[70%] rounded-lg flex flex-col items-start m-8 shadow-2xl md:w-[40%]'>
        <p className='text-sm pt-4'>New Arrival</p>
        <h2 className='text-2xl font-extrabold text-orange-300'>Discover Our</h2>
        <h2 className='text-2xl font-extrabold text-orange-300'>New Collection</h2>
        <p className='text-sm pb-8 pt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus voluptate, velit iste similique esse fuga aut hic veniam veritatis saepe nobis sunt?</p>
        <Link className="hover:cursor-pointer bg-orange-300 text-black p-2 rounded-sm text-sm hover:bg-orange-500" to={'/shop'}>Shop Now</Link>  
      </div>
        
    </div>
  )
}

export default Section1