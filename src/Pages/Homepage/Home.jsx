import React from 'react'
import { lazy, Suspense } from 'react';
import Warranty from '../../Components/Warranty'


const Home = ({onAddToCart}) => {
  const Section3 = lazy(() => import('./Section3'));
  const Caro = lazy(() => import('../../Components/Caro'));
  const CarouselComp = lazy(() => import('../../Components/CarouselComp'));
  const Section2 = lazy(() => import('./Section2'));
  const Section1 = lazy(() => import('./Section1'));
  
  return (
    <div className='bg-gray-100'>
        <Suspense fallback={<div>Loading...</div>}>
        <Section1 />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
        <Caro />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Section3 onAddToCart={onAddToCart} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
        <CarouselComp />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
        <Section2 />
        </Suspense>
        <Warranty />      
    </div>
  )
}

export default Home