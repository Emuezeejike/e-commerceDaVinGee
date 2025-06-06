import React from 'react'
import image1 from '../../Assets/images/3.png';
import image2 from '../../Assets/images/f2.png';
import image3 from '../../Assets/images/c5.png';

const Section2 = () => {
  return (
    <div>
        <h2 className='text-black text-center font-bold text-2xl pt-3'>Browse The Range</h2>
        <p className='text-black text-center'>Check out our exclusive shoe catalogue made from the finest of materials <br /> that gives your feet the comfort it needs to step into the world</p>
        <div className='flex md:flex-row justify-between text-center w-[90%] m-auto items-center text-black gap-4 p-8 family-poppins'>
            <div>
                <img className='rounded-lg' src={image1} alt='men' />
                <h3 className='family-poppins font-bold '>Men Wears</h3>
            </div>
            <div>
                <img className='rounded-lg' src={image2} alt='men' />
                <h3 className='family-poppins font-bold '>Women Wears</h3>
            </div>
            <div>
                <img className='rounded-lg' src={image3} alt='men' />
                <h3 className='family-poppins font-bold '>Kiddies Wears</h3>
            </div>
        </div>
    </div>
  )
}

export default Section2