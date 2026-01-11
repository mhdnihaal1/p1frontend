import React from "react";
import "../style/Navbar.css";
import { FiSearch } from "react-icons/fi"; 

const Navbar = () =>{
return(
<div className="Navbar">
        <div className="Navbar1">
          <div className="navbar12">
            Welcome to Wonky online eCommerce store
          </div>
          <div className="nav-links">
            <span className="span1">Follow us:</span>
            <img src=" /Facebook.png" alt="" />
            <img src=" /Vector.png" alt="" />
            <img src=" /Instagram.png" alt="" />
          </div>
        </div>
        <div className="Navbar2">
          <div>
            <img
              className="home-image1"
              src=" /image16.png"
              alt=" /image16.png123"
            />{" "}
          </div>
         <div className="search">
  <FiSearch className="search-icon" />
  <input className="inp1" type="text" placeholder="Search here" />
</div>

        </div>
      </div>
    )
}
export default Navbar;