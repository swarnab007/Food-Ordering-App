import React from "react";
import { menu_list } from "../assets/assets";
import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const FoodList = () => {
  return (
    <div className="foodlist flex p-10 flex-col mt-20">
      <div className="foodlist-text flex flex-col justify-center items-center text-center">
        <h1 className="text-white text-[30px]">Special Meals of the day!</h1>
        <p className="w-[609px] h-[77px] mt-8 text-white text-lg">
          Check our sepecials of the day and get discounts on all our meals and
          swift delivery to what ever location within Ilorin.
        </p>
      </div>
      <div className="foodlist-items flex flex-col gap-[40px] mt-10 m-auto">
        <Swiper
          slidesPerView={6}
          spaceBetween={60}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {menu_list.map((item, index) => {
            return (
              <SwiperSlide>
                <div key={index} className="foodlist-item text-center">
                  <img src={item.menu_image} alt="food" />
                  <p className="text-white text-[16px] mt-2">
                    {item.menu_name}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default FoodList;
