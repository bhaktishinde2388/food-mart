import React from "react";
import logo from "../../assets/images/logo.png";

import userIcon from "../../assets/icons/user.png";
import likeIcon from "../../assets/icons/heart.png";
import addToCartIcon from "../../assets/icons/add-to-cart.png";
import searchIcon from "../../assets/icons/search-interface-symbol.png";

function Navbar() {
  return (
    // logo.................
    <div className="flex items-center justify-between px-6 py-3 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]">  
      <img src={logo} alt="LOGO" className="h-[45px] cursor-pointer" />

    {/* search bar */}
   
 <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full w-121 gap-15">
    <div>
        <select>
          <option value="All">All Categories</option>
          <option value="Groceries">Groceries</option>
          <option value="Drinks">Drinks</option>
          <option value="Chocolates">Chocolates</option>
        </select>
     </div>
 

    <div>
        <input
          type="text"
          placeholder="Search products..."
          className="bg-transparent outline-none w-full text-sm"
          onChange={(e) => onSearch(e.target.value)}
        />
        </div>

     <div>
        <img src={searchIcon} alt="search" className="h-4 mr-2 opacity-60" />
    </div>  
      </div>

      <div><h1>Apply for store <br></br><b style={{fontSize:"20px"}}>partner</b></h1></div>

{/* icons...... */}
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
