import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom'
import CaroImage2 from '../assets/images/n7.png'
import CaroImage3 from '../assets/images/n12.png'
import CaroImage4 from '../assets/images/n21.png'
import CaroImage5 from '../assets/images/n25.png'
import '../../src/index.css';

const Caro = () => {
  return (
    <div className='bg-gray-200'>
    <h2 className='text-black text-center font-berkshire text-6xl font-bold m-8 pt-3'>Always a Step Ahead</h2>
      <div className='bg-gray-200  flex justify-center items-center m-auto p-8'>
      
        <div className='w-[10%] flex justify-center items-center p-4'>
            <Carousel className='m-auto'
                showArrows={true}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={5000}
                transitionTime={900}
              >
                <div className='flex w-[90%] m-auto justify-between items-center gap-8'>
                  <img loading='lazy' className='rounded-4xl'  src={CaroImage2} alt="Slide 1" />
                  <div className='m-8'>
                    <p className='text-sm'>Maranini 1998</p>
                    <h2 className='text-3xl font-bold font-pacifico '>Moccasin</h2>
                    <p className='text-justify'>With the finest of touch and the purest of materials comes the most sorted for designs. </p>
                    <Link to={'/products'} className='bg-gray-300 text-black px-12 rounded-2xl text-sm hover:bg-gray-500 mt-4'>Explore More</Link>
                  </div>
                </div>
                <div loading='lazy' className='flex w-[90%] m-auto justify-between items-center gap-4'>
                  <img className='rounded-4xl' src={CaroImage3} alt="Slide 1" />
                  <div>
                    <p className='text-sm'>British 1994</p>
                    <h2 className='text-3xl font-bold font-pacifico'>Brogue</h2>
                    <p className='text-justify'>That gentleman style that suits your awesome personality awaits you. </p>
                    <Link to={'/products'} className='bg-gray-300 text-black px-12 rounded-2xl text-sm hover:bg-gray-500 mt-4'>Explore More</Link>
                  </div>
                </div>
                <div loading='lazy' className='flex w-[90%] m-auto justify-between items-center gap-4'>
                  <img className='rounded-4xl' src={CaroImage4} alt="Slide 1" />
                  <div>
                    <p className='text-sm'>Jantamata 1999</p>
                    <h2 className='text-3xl font-bold font-pacifico'>Chelsea Boot</h2>
                    <p className='text-justify'>Pulling up in a family reunion and winning the best dressed with this finest touch.</p>
                    <Link to={'/products'} className='bg-gray-300 text-black px-12 rounded-2xl text-sm hover:bg-gray-500 mt-4'>Explore More</Link>
                  </div>
                </div>
                <div loading='lazy' className='flex w-[90%] m-auto justify-between items-center gap-4'>
                  <img className='rounded-4xl' src={CaroImage5} alt="Slide 1" />
                  <div>
                    <p className='text-sm'>Pintiny 1947</p>
                    <h2 className='text-3xl font-bold font-pacifico'>Straw Hat</h2>
                    <p className='text-justify'>Ever considered to be the ladies man just with the immeasurable way you step out. </p>
                    <Link to={'/products'} className='bg-gray-300 text-black px-12 rounded-2xl text-sm hover:bg-gray-500 mt-4'>Explore More</Link>
                  </div>
                </div>
              </Carousel>
        </div>
        
    </div>
    </div>
    
  )
}

export default Caro