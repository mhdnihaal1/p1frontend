import React from "react";
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
            <img src="../../public/Facebook.png" alt="" />
            <img src="../../public/Vector.png" alt="" />
            <img src="../../public/Instagram.png" alt="" />
          </div>
        </div>
        <div className="Navbar2">
          <div>
            <img
              className="home-image1"
              src="../../public/image 16.png"
              alt="../../public/image 16.png"
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