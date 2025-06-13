import React, { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import allProducts from "../../data/allProducts";
import html2canvas from "html2canvas";

const ProductDetail = ({ onAddToCart }) => {
  const snapshotRef = useRef(null);

  useEffect(() => {
    // Check for browser support
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript
        .trim()
        .toLowerCase();
      if (
        transcript.includes("take snapshot") ||
        transcript.includes("take screenshot")
      ) {
        handleSnapshot();
      }
    };

    recognition.start();

    // Cleanup
    return () => recognition.stop();
  }, []);

  const handleSnapshot = async () => {
    if (snapshotRef.current) {
      const canvas = await html2canvas(snapshotRef.current);
      const link = document.createElement("a");
      link.download = "snapshot.png";
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  const { id } = useParams();
  const product = allProducts.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div>
        <h1>Product not found</h1>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({ ...product, quantity: 1 });
    }
  };

  return (
    <div ref={snapshotRef}>
      <h2 className="font-semibold">
        Say <span className="font-croissant">"take snapshot"</span> or{" "}
        <span className="font-croissant">"take screenshot"</span> to capture
        this area!
      </h2>
      <div className="max-w-xl mx-auto mt-8 p-4 bg-white shadow rounded">
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
          className="bg-orange-400 text-white px-4 py-2 rounded mt-4 hover:bg-orange-500 active:bg-orange-600 active:scale-95 transition duration-200 hover:cursor-pointer"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
