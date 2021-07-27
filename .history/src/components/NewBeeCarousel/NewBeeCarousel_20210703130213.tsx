import React, { useEffect,useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector,useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import { fetchCrouselsDataActionCreator } from "../../redux/shoppingMall/fetchCarouselsActions"
import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);

export const Carousel : React.FC = () => {
  let crousels: any = useSelector((s: RootState) => s.crousels);
  let loading = crousels.loading;
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("in shoppngMall.tsx file ");
    dispatch(fetchCrouselsDataActionCreator());
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
          <SwiperSlide><img src="https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/banner1.png" alt=""/></SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </>
    </div>
  )
}