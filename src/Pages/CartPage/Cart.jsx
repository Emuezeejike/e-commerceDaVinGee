import React from "react";
import "../../Components/ImageBg.css";
import { Link } from "react-router-dom";
import DeleteImage from "../../assets/images/delete.svg";
import Warranty from "../../Components/Warranty";

const Cart = ({ cartItems = [], onDelete }) => {
  console.log("Cart items:", cartItems);

  const totalPrice = cartItems.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    return sum + price * (item.quantity || 1);
  }, 0);
  return (
    <div className="family-poppins bg-gray-100 ">
      <div className="imageBg h-[20%] flex flex-col justify-center items-center text-white">
        <h1 className="font-bold text-3xl text-center text-black">Cart</h1>
        <div className="flex gap-2 mt-4 text-sm">
          <Link
            to={"/"}
            className="text-white font-semibold hover:text-orange-300 transition duration-200"
          >
            Home
          </Link>
          <p className="font-semibold ">{">"}</p>
          <span className="text-sm ">Cart</span>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row flex-wrap m-auto p-4 md:p-8 family-poppins justify-between gap-6">
        <div className="flex flex-col items-center justify-center mt-4 bg-gray-200 p-6 rounded-lg shadow-md w-full md:w-2/5">
          <p className="font-bold text-center pb-4">
            Total Price: #{totalPrice.toLocaleString()}
          </p>
          {cartItems.length > 0 && (
            <Link
              to={"/checkout"}
              className="bg-gray-400 hover:bg-gray-500 hover:cursor-pointer text-white font-bold py-2 px-6 rounded transition"
            >
              Check Out
            </Link>
          )}
        </div>
        <div className="w-full md:w-3/5 bg-white p-4 md:p-6 rounded-lg shadow-md">
          <h2 className="font-bold text-2xl text-center mb-4">Cart Items</h2>
          <div className="flex justify-between font-semibold gap-2 bg-gray-200 px-2 py-1">
            <span>Item Name</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Action</span>
          </div>
          <ul className="mt-4 flex flex-col family-poppins overflow-x-auto">
            {cartItems.length === 0 ? (
              <li>No items in cart.</li>
            ) : (
              cartItems.map((item, idx) => (
                <div
                  className="flex font-semibold family-poppins items-center justify-between m-2"
                  key={item.id || idx}
                >
                  <div>
                    <h3 className="text-center">{item.name}</h3>
                  </div>
                  <div>
                    <h3 className="text-left">#{item.price}</h3>
                  </div>
                  <div>
                    <h3 className="text-center">{item.quantity}</h3>
                  </div>
                  <div>
                    <img
                      className="hover:cursor-pointer"
                      onClick={() => onDelete && onDelete(item.id)}
                      src={DeleteImage}
                      alt="delete"
                    />
                  </div>
                </div>
              ))
            )}
          </ul>
        </div>
      </div>
      <Warranty />
    </div>
  );
};

export default Cart;
