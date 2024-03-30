import React, { useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

   return (
    <div className="navbar flex justify-between items-center pt-6 pl-8 text-3xl">
      <div className="logo text-orange-500 ">
        Fooodd<span className="text-green-400">yyy</span>
      </div>
      <ul className="navbar-menu cursor-pointer flex gap-10 text-white text-2xl">
        <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""} >Home</li>
        <li onClick={() => setMenu("items")} className={menu === "items" ? "active" : ""} >items</li>
        <li onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""} >Contact us</li>
      </ul>
      <div className="navbar-right flex justify-between gap-12 mr-20">
        <img className="cursor-pointer" src={assets.search_icon} alt="" />
        <div className="navbar-search-icon relative">
          <img className="cursor-pointer" src={assets.basket_icon} alt="" />
          <div className="dot absolute min-w-3 min-h-3 "></div>
        </div>
        <button className="bg-custom-yellow rounded-lg p-2 text-sm hover:bg-yellow-400 cursor-pointer">
          sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
