import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import { fetchCarouselsDataActionCreator } from "../../redux/shoppingMall/fetchCarouselsActions";
import "./NewBeeCarousel.css";
import "../../pages/shoppingMall/ShoppingMall.css";
import { Image, Carousel as AntCarousel } from "antd";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

interface pIf {
 
 // idx3: any;
}

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export const Carousel: React.FC<pIf> = () => {
  let carousels: any = useSelector((s: RootState) => s.carousels);
  let loading = carousels.loading;
  const dispatch = useDispatch();
  useEffect(() => {
    //console.log("in shoppngMall.tsx file ");
    dispatch(fetchCarouselsDataActionCreator());
  }, []);
  return  carousels === undefined?(<h2>carousels</h2>):(
    <div className="swiper-container fl" >
      <Swiper

        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {carousels.carouselUrl.data.map((img,idxb) =>{
          console.log(img);
          return <SwiperSlide key={idxb}>
            <img src={img.carouselUrl} alt="" />
            
          </SwiperSlide>;
        })}

      </Swiper>
    </div>
  );
};
