import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import allProducts from "../../data/allProducts";
import html2canvas from "html2canvas";

const ProductDetail = ({ onAddToCart }) => {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === Number(id));
  const detailRef = useRef(null);

  if (!product) {
    return (
      <div>
        <h1>Product not found</h1>
      </div>
    );
  }

  const handleCapture = async () => {
    if (detailRef.current) {
      const canvas = await html2canvas(detailRef.current);
      const link = document.createElement("a");
      link.download = "product-detail.png";
      link.href = canvas.toDataURL();
      link.click();
    } else {
      console.log("detailRef is null");
    }
  };

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({ ...product, quantity: 1 });
    }
  };

  return (
    <div>
      <button
        className="bg-blue-400 text-white px-4 py-2 rounded m-4 hover:bg-blue-500 transition duration-200 hover:cursor-pointer"
        onClick={handleCapture}
      >
        Screenshot
      </button>
      <div
        ref={detailRef}
        className="max-w-xl mx-auto mt-8 p-4 bg-white shadow rounded"
      >
        <img
          loading="lazy"
          crossOrigin="anonymous"
          src={product.img}
          alt={product.name}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="mb-2">{product.desc}</p>
        <p className="mb-2 font-semibold">Price: {product.price}</p>
        <p className="mb-2 line-through text-gray-500">
          Old Price: {product.oldPrice}
        </p>
        <button
          className="bg-orange-400 text-white px-4 py-2 rounded mt-4 hover:bg-orange-500 transition duration-200 hover:cursor-pointer"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
