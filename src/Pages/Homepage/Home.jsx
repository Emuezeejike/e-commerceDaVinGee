import React from 'react'
import Section1 from './Section1'

import Section3 from './Section3'
import CarouselComp from '../../Components/CarouselComp'
import Section2 from './Section2'
import Caro from '../../Components/Caro'
import Warranty from '../../Components/Warranty'


const Home = ({onAddToCart}) => {
  return (
    <div className='bg-gray-100'>
        <Section1 />
        <Caro />
        <Section3 onAddToCart={onAddToCart} />
        <CarouselComp />
        <Section2 />
        <Warranty />      
    </div>
  )
}

export default Home