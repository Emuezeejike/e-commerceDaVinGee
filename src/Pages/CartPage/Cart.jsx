import React from "react";
import "../../Components/ImageBg.css";
import { Link } from "react-router-dom";
import DeleteImage from "../../assets/images/delete.svg";

const Cart = ({ cartItems = [], onDelete }) => {
  console.log("Cart items:", cartItems);

  const totalPrice = cartItems.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    return sum + price * (item.quantity || 1);
  }, 0);
  return (
    <div className="family-poppins bg-gray-100">
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
      <div className="w-[80%] m-auto p-8 family-poppins flex justify-between">
        <div className="flex flex-col items-center justify-center mt-4 bg-orange-100 p-18 rounded-lg shadow-md">
          <p className="font-bold text-center pb-4">
            Total Price: #{totalPrice.toLocaleString()}
          </p>
          {cartItems.length > 0 && (
            <Link
              to={"/checkout"}
              className=" bg-orange-400 hover:bg-orange-600 hover:cursor-pointer text-white font-bold py-2 px-6 rounded transition"
            >
              Check Out
            </Link>
          )}
        </div>
        <div className="w-[60%] bg-white p-6 rounded-lg shadow-md">
          <h2 className="font-bold text-2xl text-center mb-4">Cart Items</h2>
          <div className="flex justify-between font-semibold gap-2 bg-orange-100">
            <span className="">Item Name</span>
            <span className="">Price</span>
            <span className="">Quantity</span>
            <span className="">Action</span>
          </div>
          <ul className="mt-4 flex flex-col family-poppins">
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
    </div>
  );
};

export default Cart;
