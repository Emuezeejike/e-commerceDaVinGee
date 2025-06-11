import React from 'react'
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import SlideImg from '../assets/images/bgg2.png'
import SlideImg1 from '../assets/images/bgg3.png'
import SlideImg2 from '../assets/images/bgg4.png'
import SlideImg3 from '../assets/images/bgg5.png'
import SlideImg4 from '../assets/images/bgg6.png'
import SlideImg5 from '../assets/images/bgg7.png'
import SlideImg6 from '../assets/images/bgg8.png'
import SlideImg7 from '../assets/images/bgg9.png'
import SlideImg8 from '../assets/images/bgg11.png'
import SlideImg9 from '../assets/images/bgg12.png'
import SlideImg11 from '../assets/images/bgg13.png'
import SlideImg12 from '../assets/images/bgg14.png'
import SlideImg13 from '../assets/images/bgg15.png'

const CarouselComp = () => {
  return (
    <div className='bg-gray-100 w-[90%] flex justify-center items-center m-auto p-8 family-poppins'>
      <div className='w-[50%] m-auto flex flex-col justify-center items-center p-4'>
        <h2 className='text-black text-left font-bold pt-3'>Browse The Range</h2>
        <p className='text-black text-justify text-sm'>Check out our exclusive shoe catalogue made from the finest of materials <br /> that gives your feet the comfort it needs to step into the world</p>
        <Link to={'/products'} className='bg-gray-300 text-black p-2 rounded-sm text-sm hover:bg-gray-500 mt-4'>Explore More</Link>
      </div>
      <Carousel className='w-[50%] m-auto family-poppins'
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        transitionTime={900}
      >
        <div className=''>
          <img className='w-fit rounded-lg'  src={SlideImg} alt="Slide 1" />
        </div>
        <div className=''>
          <img className='w-fit rounded-lg' src={SlideImg1} alt="Slide 1" />
          
        </div>
        <div className=''>
          <img className='w-fit rounded-lg' src={SlideImg2} alt="Slide 1" />
          
        </div>
        <div className=''>
          <img className='w-fit rounded-lg' src={SlideImg3} alt="Slide 1" />
          
        </div>
        <div className=''>
          <img className='w-fit rounded-lg' src={SlideImg4} alt="Slide 1" />
          
        </div>
        <div className=''>
          <img className='w-fit rounded-lg' src={SlideImg5} alt="Slide 1" />
          
        </div>
        <div className=''>
          <img className='w-fit rounded-lg' src={SlideImg6} alt="Slide 1" />
          
        </div>
        <div className=''>
          <img className='w-fit rounded-lg' src={SlideImg7} alt="Slide 1" />
          
        </div>
        <div className=''>
          <img className='w-fit rounded-lg' src={SlideImg8} alt="Slide 1" />
          
        </div>
        <div className=''>
          <img className='w-fit rounded-lg' src={SlideImg9} alt="Slide 1" />
          
        </div>
        <div className=''>
          <img className='w-fit rounded-lg' src={SlideImg11} alt="Slide 1" />
          
        </div>
        <div className=''>
          <img className='w-fit rounded-lg' src={SlideImg12} alt="Slide 1" />
          
        </div>
        <div className=''>
          <img className='w-fit rounded-lg' src={SlideImg13} alt="Slide 1" />
          
        </div>
      </Carousel>
    </div>
  )
}

export default CarouselComp