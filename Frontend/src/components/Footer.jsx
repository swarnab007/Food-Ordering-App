import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="text-white text-center">
      <div className="footer flex pt-10 p-[20px] bg-black text-white">
        <div className="footer-content grid gap-20 grid-cols-3 bg-black">
          <div className="footer-content-left flex flex-col pl-10 bg-black">
            <h1 className="bg-black text-3xl">Fooodyyy</h1>
            <p className="bg-black text-lg mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="footer-social-icons flex gap-6 ml-4 mt-4 bg-black">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
          </div>
          <div className="footer-content-center ml-52 items-start flex flex-col bg-black">
            <h2 className="bg-black ml-6">COMPANY</h2>
            <ul className="bg-black text-lg">
              <li className="bg-black mt-4">Home</li>
              <li className="bg-black mt-4">About us</li>
              <li className="bg-black mt-4">Delivery</li>
              <li className="bg-black mt-4">Privacy policy</li>
            </ul>
          </div>
          <div className="footer-content-right flex flex-col bg-black">
            <h2 className="bg-black text-2xl mb-6">GET IN TOUCH</h2>
            <ul className="bg-black text-lg">
              <li className="bg-black">+91-7863903386</li>
              <li className="bg-black">contact@fooodyy.com</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="footer-copyright mt-10 mb-10">
        Copyright 2024 © Fooodyyy.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
