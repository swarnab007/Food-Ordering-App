import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="header min-w-40 flex flex-wrap justify-center items-center mt-[100px]
    animate-[fadeIn 3s]">
      <div className="header-left flex-wrap lg:mr-36 text-white">
        <h1 className="text-[36px] lg:text-[54px]">
          Order food anytime,<br />
          anywhere
        </h1>
        <p className="mt-9 w-full text-[16px] lg:text-[18px] text-gray-400 lg:w-[600px]">
          Browse from our list of specials to place your order and have food
          delivered to you in no time. Affordable, tasty and fast!
        </p>
      </div>
      <div className="header-right lg:flex">
        <img
          className="w-full h-auto max-h-[400px]"
          src={assets.Pooding}
          alt="Pooding"
        />
      </div>
    </div>
  );
};

export default Header;
