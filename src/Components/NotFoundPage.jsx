import React from 'react'
import { Link } from 'react-router-dom'
import notFoundImage from '../assets/images/pg.png';


const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
        <img src={notFoundImage} alt="Not Found" className="mb-4" />
        <h1 className='font-semibold text-2xl'>Ops!!! Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link className='mt-4 transition-opacity duration-200 bg-blue-300 text-black text-sm font-bold px-4 py-2 rounded shadow-lg hover:cursor-pointer text-center hover:bg-blue-500' to={'/'}>
            Go back to Home
        </Link>
    </div>
  )
}

export default NotFoundPage