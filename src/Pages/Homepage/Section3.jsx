import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import allProducts from "../../data/allProducts";
import html2canvas from "html2canvas";

const ProductPerPage = 4;

const Section3 = ({ onAddToCart }) => {
  const [visibleCount, setVisibleCount] = useState(ProductPerPage);

  const handleLoadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + ProductPerPage, allProducts.length)
    );
  };

  const detailRef = useRef(null);

  const handleCapture = async () => {
    if (detailRef.current) {
      const canvas = await html2canvas(detailRef.current);
      const link = document.createElement("a");
      link.download = "product-detail.png";
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  return (
    <div>
      <div>
        <h2 className="font-bold text-center font-berkshire text-2xl p-8">
          Our Products
        </h2>
      </div>
      <button
        className="bg-blue-400 text-white px-4 py-2 rounded m-4 hover:bg-blue-500 transition duration-200 hover:cursor-pointer"
        onClick={handleCapture}
      >
        Download Product Screenshot
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 w-[95%] mx-auto p-4 font-poppins">
        {allProducts.slice(0, visibleCount).map((product) => (
          <div
            className="bg-gray-200 shadow-lg flex flex-col h-full p-4 sm:p-4"
            key={product.id}
          >
            <div className="w-full h-48 sm:h-56 md:h-64 flex-shrink-0">
              <img
                src={product.img}
                alt="banner"
                loading="lazy"
                className="w-full h-full object-cover rounded-t"
              />
            </div>
            <div className="p-3 flex-1 flex flex-col">
              <h3 className="font-poppins font-bold text-lg mb-1">
                {product.name}
              </h3>
              <p className="mb-2 text-sm">{product.desc}</p>
              <p className="font-poppins font-bold mb-2 flex flex-wrap items-center gap-1">
                <span className="text-base sm:text-lg md:text-xl text-black">
                  {product.price}
                </span>
                <span className="font-bold line-through opacity-50 text-xs sm:text-sm md:text-base align-middle text-gray-500">
                  {product.oldPrice}
                </span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 mt-auto">
              <button
                className="bg-orange-300 text-black text-sm font-bold px-4 py-2 rounded shadow-lg hover:bg-orange-400 active:bg-orange-400 active:scale-95 transition"
                onClick={() => {
                  console.log("Button clicked", product);
                  onAddToCart && onAddToCart({ ...product, quantity: 1 });
                }}
                style={{ pointerEvents: "auto" }}
              >
                Add to Cart
              </button>
              <Link
                to={`/productdetail/${product.id}`}
                className="bg-blue-300 text-black text-sm font-bold px-4 py-2 rounded shadow-lg hover:bg-blue-500 active:bg-blue-600 active:scale-95 transition text-center"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      {visibleCount < allProducts.length && (
        <div className="flex justify-center my-4">
          <button
            className="bg-gray-300 text-black px-8 py-2 rounded-sm text-sm hover:bg-gray-500 transition"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default React.memo(Section3);
