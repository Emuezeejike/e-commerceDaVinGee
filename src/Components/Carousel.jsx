import React from 'react'
import image1 from '../assets/images/bg6.png';

const Carousel = () => {
  return (
    <div>
        <div className='w-[90%] m-auto p-8 family-poppins'>
            <h2 className='font-bold text-center text-2xl'>Our Shop</h2>
        </div>
        <div className='carousel w-[90%] m-auto p-8 family-poppins'>
            <div id='slide1' className='carousel-item relative w-full'>
            <img src={image1} alt='Slide 1' className='w-full h-fit object-cover' />
            <div className='absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white'>
                <h3 className='font-bold'>Product Name</h3>
                <p>Description of the product.</p>
                <p className='font-bold'>#70,000<span className='pl-4 line-through opacity-50'>#90,000</span></p>
            </div>
            <a href='#slide4' className='absolute top-1/2 left-0 transform -translate-y-1/2 btn btn-circle'>❮</a>
            <a href='#slide2' className='absolute top-1/2 right-0 transform -translate-y-1/2 btn btn-circle'>❯</a>
            </div>
            {/* Repeat for more slides */}
            <div id='slide2' className='carousel-item relative w-full'>
            <img src={image1} alt='Slide 2' className='w-full h-fit object-cover' />
            {/* Content for slide 2 */}
            </div>
            {/* Add more slides as needed */}
        </div>
    </div>
  )
}

export default Carousel