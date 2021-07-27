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
import "./NewBeeCarousel.css";
import "../../pages/shoppingMall/ShoppingMall.css"


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
    //console.log("in shoppngMall.tsx file ");
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
          {
          crousels.crouselsList.data.map(img=>{
            <SwiperSlide><img src="{img}" alt=""/></SwiperSlide>
          })
          }
       
      
        </Swiper>
      </>
    </div>
  )
}

// interface ifProps {
//       categoryName: string;
//       idx: number;
//       categoryId: number;
//   }
  
//   export const EmComponent: React.FC<ifProps> = ({categoryName, idx, categoryId}) => {
//       return (
//           <em key={idx}>
//               <a href={`http://localhost:8081/search?goodsCategoryId=${categoryId}`}>{categoryName}</ a>
//           </em>
//       );
//   };
//    "http://localhost:8081/crousels"