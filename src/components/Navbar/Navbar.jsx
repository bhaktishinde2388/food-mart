import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import userIcon from "../../assets/icons/user.png";
import likeIcon from "../../assets/icons/heart.png";
import addToCartIcon from "../../assets/icons/add-to-cart.png";
import searchIcon from "../../assets/icons/search-interface-symbol.png";
import closeIcon from "../../assets/icons/close.png";

function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState([]); 
  const [cartItems, setCartItems] = useState([]); 

  // Fetch products from API.........
  useEffect(() => {
    fetch("https://api.khusindia.com/rest/api/product")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("API fetch error:", err));
  }, []);

  // Toggle cart panel
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  // Add product to cart,..,,
  const addToCart = (product) => {
    const existing = cartItems.find((item) => item.id === product.id);
    if (existing) return; 
    setCartItems([...cartItems, product]);
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-3 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <img src={logo} alt="LOGO" className="h-[45px] cursor-pointer" />

          {/* Mobile icons */}
          <div className="md:hidden flex items-center gap-4">
            <img src={userIcon} alt="user" className="h-6 w-6" />
            <img src={likeIcon} alt="like" className="h-6 w-6" />
            <div className="relative" onClick={toggleCart}>
              <img src={addToCartIcon} alt="cart" className="h-6 w-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="flex items-center w-full md:w-[500px] mt-3 md:mt-0 gap-3">
          {/* Full search bar on large screens */}
          <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-full w-full gap-3">
            <select className="bg-transparent outline-none text-sm cursor-pointer">
              <option value="All">All Categories</option>
              <option value="Groceries">Groceries</option>
              <option value="Drinks">Drinks</option>
              <option value="Chocolates">Chocolates</option>
            </select>
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none w-full text-sm"
            />
            <img src={searchIcon} alt="search" className="h-4 opacity-60" />
          </div>

          {/* Only search icon on mobile */}
          <div className="flex md:hidden items-center justify-center p-2 bg-gray-100 rounded-full cursor-pointer">
            <img src={searchIcon} alt="search" className="h-5 w-5" />
          </div>
        </div>

        {/* Large screen actions */}
        <div className="hidden md:flex items-center gap-6">
          <div className="text-right">
            <p className="text-sm">Apply for store</p>
            <b className="text-lg">Partner</b>
          </div>

          <div className="p-2 bg-gray-100 rounded-full cursor-pointer">
            <img src={userIcon} alt="user" className="h-6 w-6" />
          </div>

          <div className="p-2 bg-gray-100 rounded-full cursor-pointer">
            <img src={likeIcon} alt="like" className="h-6 w-6" />
          </div>

          {/* Add to cart */}
          <div
            className="flex items-center gap-3 p-2 rounded-full cursor-pointer relative"
            onClick={toggleCart}
          >
            <img src={addToCartIcon} alt="cart" className="h-6 w-6" />
            <span className="hidden md:inline text-yellow-500">
              Your Cart ${totalPrice}
            </span>
            <span className="ml-1 text-xs">&#9662;</span>
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Sliding Cart Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-2">
          <button
            className="flex items-center justify-center w-8 h-8 hover:bg-gray-200 rounded-full"
            onClick={toggleCart}
          >
            <img src={closeIcon} alt="Close" className="h-4 w-4" />
          </button>
        </div>

        {/* Cart header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-yellow-500">Your Cart</h2>
          <span className="bg-yellow-500 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full">
            {cartItems.length}
          </span>
        </div>

        {/* Cart items */}
        <div className="p-4 overflow-y-auto h-[calc(100%-160px)]">
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center py-2 border-b border-gray-200"
              >
                <span>{item.name}</span>
                <span>${item.price}</span>
                <button
                  className="text-red-500 text-sm ml-2"
                  onClick={() =>
                    setCartItems(cartItems.filter((i) => i.id !== item.id))
                  }
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* Checkout */}
        <div className="p-4 border-t border-gray-200">
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
