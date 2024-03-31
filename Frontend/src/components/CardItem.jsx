import React from "react";
import { assets } from "../assets/assets";

const CardItem = ({ id, name, image, price, desc }) => {
  const [itemCount, setItemCount] = React.useState(0);

  return (
    <div className="carditem flex flex-col max-w-sm shadow-black bg-white">
      <div className="image-container bg-white relative">
        <img className="w-full" src={image} alt="" />
        {!itemCount ? (
          <div className="counter absolute w-10 h-10 bg-white bottom-[15px] right-[15px]">
            <img
              className="bg-white rounded-full"
              onClick={() => setItemCount((prev) => prev + 1)}
              src={assets.add_icon_white}
            />
          </div>
        ) : (
          <div>
            <div className="counter bg-white flex absolute bottom-[15px] right-[15px]">
              <img
                className="bg-white rounded-full"
                onClick={() => setItemCount((prev) => prev + 1)}
                src={assets.add_icon_green}
              />
              <span className="bg-white text-md font-bold p-2">{itemCount}</span>
              <img
                className="bg-white rounded-full"
                onClick={() => setItemCount((prev) => prev - 1)}
                src={assets.remove_icon_red}
              />
            </div>
          </div>
        )}
      </div>
      <div className="card-content px-6 py-4 bg-gray-300">
        <div className="rating flex justify-between bg-gray-300">
          <h2 className="bg-gray-300 font-bold text-4xl mb-4">{name}</h2>
          <img className="h-5 bg-slate-300" src={assets.rating_starts} alt="" />
        </div>
        <p className="bg-gray-300 mb-3">{desc}</p>
        <span className="bg-orange-300 text-red-900 font-bold rounded-full py-1 px-4 text-xl">
          {price}$
        </span>
      </div>
    </div>
  );
};

export default CardItem;
