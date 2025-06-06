import React from 'react'
import { useParams } from 'react-router-dom'
import allProducts from '../../data/allProducts';


const ProductDetail = () => {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div>
        <h1>Product not found</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-xl mx-auto mt-8 p-4 bg-white shadow rounded">
        <img src={product.img} alt={product.name} className="w-full h-64 object-cover rounded mb-4" />
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="mb-2">{product.desc}</p>
        <p className="mb-2 font-semibold">Price: {product.price}</p>
        <p className="mb-2 line-through text-gray-500">Old Price: {product.oldPrice}</p>
      </div>
    </div>
  );
};

export default ProductDetail