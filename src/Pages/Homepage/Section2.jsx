import React from 'react'
import Slide1 from '../../assets/images/slide1.png'
import Slide2 from '../../assets/images/slide2.png'
import Slide3 from '../../assets/images/slide3.png'
import Slide4 from '../../assets/images/slide4.png'

const Section2 = () => {
  return (
    <div className='bg-gray-100 family-poppins'>
        <div className=' flex items-center justify-center text-black family-poppins flex-col'>
            <p className='text-sm'>Share your style with</p>
            <h2 className='font-bold tracking-wider text-2xl'>#DaVinGee</h2>
        </div>
        <div className='m-auto grid grid-cols-6 gap-2 p-4 family-poppins w-[90%]'>
            <div className='col-span-2 row-span-1'>
                <img src={Slide4} alt='Instagram Post' className='w-full h-full object-cover' />
            </div>
            <div className=' col-span-2 row-span-1'>
                <img src={Slide2} alt='Instagram Post' className='w-full h-full object-cover' />
            </div>
            <div className='col-span-2'>
                <img src={Slide3} alt='Instagram Post' className='w-full h-full object-cover' />
            </div>     
        </div>
        <div className='m-auto grid grid-cols-6 gap-2 p-4 family-poppins w-[90%]'>
            <div className='col-span-2 row-span-1'>
                <img src={Slide2} alt='Instagram Post' className='w-full h-full object-cover' />
            </div>
            <div className='col-span-2 row-span-1'>
                <img src={Slide4} alt='Instagram Post' className='w-full h-full object-cover' />
            </div>
            <div className='col-span-2'>
                <img src={Slide1} alt='Instagram Post' className='w-full h-full object-cover' />
            </div>
        </div>   
    </div>
  )
}

export default Section2