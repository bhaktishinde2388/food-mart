import React from "react";
import logo from "../../assets/images/logo.png";

import userIcon from "../../assets/icons/user.png";
import likeIcon from "../../assets/icons/heart.png";
import addToCartIcon from "../../assets/icons/add-to-cart.png";
import searchIcon from "../../assets/icons/search-interface-symbol.png";

function Navbar() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-3 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]">

      {/* Logo */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <img src={logo} alt="LOGO" className="h-[45px] cursor-pointer" />

        {/* Hamburger menu for mobile */}
        <div className="md:hidden flex items-center gap-4">
          <img src={userIcon} alt="user" className="h-6 w-6" />
          <img src={likeIcon} alt="like" className="h-6 w-6" />
          <img src={addToCartIcon} alt="cart" className="h-6 w-6" />
        </div>
      </div>

      {/* Search bar */}
      <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full w-full md:w-[500px] mt-3 md:mt-0 gap-3">
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

      <div className="hidden md:flex items-center gap-6">
  <div className="text-right">
    <p className="text-sm">Apply for store</p>
    <b className="text-lg">Partner</b>
  </div>

  <div className="flex items-center gap-3 p-2 rounded-full cursor-pointer">
    <img src={addToCartIcon} alt="cart" className="h-6 w-6 block" />
    <span className="hidden md:inline">Your Cart $1290</span>
  </div>

  <div className="p-2 bg-gray-100 rounded-full cursor-pointer">
    <img src={userIcon} alt="user" className="h-6 w-6" />
  </div>

  <div className="p-2 bg-gray-100 rounded-full cursor-pointer">
    <img src={likeIcon} alt="like" className="h-6 w-6" />
  </div>
</div>

    </div>
  );
}

export default Navbar;
