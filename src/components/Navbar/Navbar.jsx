import React from 'react'
import logo from "../../assets/images/logo.png"

import userIcon from "../../assets/icons/user.png"
import likeIcon from "../../assets/icons/heart.png"
import addToCartIcon from "../../assets/icons/add-to-cart.png"
import searchIcon from "../../assets/icons/search-interface-symbol.png"
import "./Navbar.css"

function Navbar() {
  return (
    <div className="navbar">
    <img src={logo} alt="LOGO" className='nav-logo'/>

    <div className='nav-icon-container'>
      <img className='nav-iconsgit' src={userIcon} alt="user" />
      <img className='nav-icons' src={likeIcon} alt="like" />
      <img className='nav-icons' src={addToCartIcon} alt="add to cart" />
      <img className='nav-icons' src={searchIcon} alt="search" />
    </div>
    </div>
  )
}

export default Navbar