import React, { useState } from 'react'
import allProducts from '../../data/allProducts';
import Warranty from '../../Components/Warranty';
import { Link } from 'react-router-dom'
import '../../Components/ImageBg.css'



const ProductPerPage = 4;

const Products = ({ onAddToCart }) => {
  const [visibleCount, setVisibleCount] = useState(ProductPerPage);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + ProductPerPage, allProducts.length));
  };

  return (
    <div>
      <div className='imageBg h-[20%] flex flex-col justify-center items-center text-white'>
        <h1 className='font-bold text-3xl text-center text-black'>Our Products</h1>
        <div className='flex gap-2 mt-4 text-sm'>
          <Link to={'/'} className='text-white font-semibold hover:text-orange-300 transition duration-200'>Home</Link>
            <p className='font-semibold '>{'>'}</p>
            <span className="text-sm ">Our Products</span>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-[90%] m-auto p-8 family-poppins'>
        {allProducts.slice(0, visibleCount).map((product) => (
          <div
            className='bg-gray-200 shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-2xl relative group overflow-hidden'
            key={product.id}
          >
            {/* Add to Cart button overlay */}
            <button
              className="absolute top-8 left-1/2 -translate-x-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-orange-300 text-black text-sm font-bold px-4 py-2 rounded shadow-lg hover:cursor-pointer  hover:bg-orange-500"
              onClick={() => {console.log('Button clicked', product);
              onAddToCart && onAddToCart({...product, quantity: 1})}}
              style={{ pointerEvents: 'auto' }} // Ensure button is clickable
            >
              Add to Cart
            </button>
            <Link to={`/productdetail/${product.id}`}
            className="absolute top-20 left-1/2 -translate-x-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-blue-300 text-black text-sm font-bold px-4 py-2 rounded shadow-lg hover:cursor-pointer text-center hover:bg-blue-500">
              View Details
            </Link>
            <div className='w-full h-[70%]'>
              <img
                src={product.img}
                alt='banner'
                className='w-full h-fit object-cover transition duration-200 group-hover:blur-[2px]'
              />
            </div>
            <div className="m-0 p-2 transition duration-200 group-hover:blur-[2px]">
              <h3 className='family-poppins font-bold'>{product.name}</h3>
              <p>{product.desc}</p>
              <p className='family-poppins font-bold'>
                {product.price}
                <span className='font-bold pl-22 line-through opacity-50'>{product.oldPrice}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      {visibleCount < allProducts.length && (
        <div className="flex justify-center my-4">
          <button
            className="bg-orange-300 text-black px-8 py-2 rounded-sm text-sm hover:bg-orange-400 transition"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      )}
      <Warranty />
    </div>
  )
}

export default Products