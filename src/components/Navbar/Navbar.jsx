import React from "react";
import logo from "../../assets/images/logo.png";

import userIcon from "../../assets/icons/user.png";
import likeIcon from "../../assets/icons/heart.png";
import addToCartIcon from "../../assets/icons/add-to-cart.png";
import searchIcon from "../../assets/icons/search-interface-symbol.png";

function Navbar() {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]">  
      <img src={logo} alt="LOGO" className="h-[45px] cursor-pointer" />


      <div className="flex items-center gap-5">        
        <div className="p-[10px] bg-[#e8e6e6] rounded-full cursor-pointer">
          <img src={userIcon} alt="user" className="h-[21px] w-[21px]" />
        </div>

        <div className="p-[10px] bg-[#e8e6e6] rounded-full cursor-pointer">
          <img src={likeIcon} alt="like" className="h-[21px] w-[21px]" />
        </div>

        <div className="p-[10px] bg-[#e8e6e6] rounded-full cursor-pointer">
          <img src={addToCartIcon} alt="add to cart" className="h-[21px] w-[21px]" />
        </div>

        <div className="p-[10px] bg-[#e8e6e6] rounded-full cursor-pointer">
          <img src={searchIcon} alt="search" className="h-[21px] w-[21px]" />
        </div>

      </div>
    </div>
  );
}

export default Navbar;
