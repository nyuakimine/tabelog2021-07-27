import React, { useEffect,useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector,useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import { fetchCarouselsDataActionCreator } from "../../redux/shoppingMall/fetchCarouselsActions"
import "./NewBeeCarousel.css";
import "../../pages/shoppingMall/ShoppingMall.css"


// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);

export const Carousel : React.FC = () => {
  let carousels: any = useSelector((s: RootState) => s.carousels);
  let loading = carousels.loading;
  const dispatch = useDispatch();
  useEffect(() => {
    //console.log("in shoppngMall.tsx file ");
    dispatch(fetchCarouselsDataActionCreator());
  }, []);
  return (
  <div className="swiper-container fl">
      <>
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
          {
          carousels.carouselsUrl.data.map(img=>{
            <SwiperSlide><img src="{img}" alt=""/></SwiperSlide>
          })
          }     
        </Swiper>
      </>
    </div>
  )
}