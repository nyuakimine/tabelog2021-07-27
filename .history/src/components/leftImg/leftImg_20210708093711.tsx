import React, { useEffect, useRef, useState } from "react";
import { RouteComponentProps, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../pages/newBeeMallDetail/newBeeMallDetail.css";
import "./leftImg.css";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";
import { useSelector, useDispatch } from "react-redux";

import { fetchDetailDataActionCreator } from "../../redux/detailNewBeeMall/fetchDetailActions";
import { RootState } from "../../redux/store";
// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs } from "swiper/core";
// install Swiper modules

SwiperCore.use([Navigation, Thumbs]);


// export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = () => {
//   const { touristRouteId } = useParams<MatchParams>();
interface MatchParams {
  goodsId: string;
}

export const LeftImgF1: React.FC<RouteComponentProps<MatchParams>> = () => {
  const { goodsId } = useParams<MatchParams>();
  let detailLeftImg: any = useSelector((s: RootState) => s.detailLeftImg);
  //let loading = detailLeftImg.loading;
  const dispatch = useDispatch();
  useEffect(() => {
    //console.log("in shoppngMall.tsx file ");
    dispatch(fetchDetailDataActionCreator(goodsId));
  }, []);
  //const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return detailLeftImg === undefined ? (
    <h2>detailLeftImg</h2>
  ) : (
    <div className="left fl" style={{ position: "relative" }}>
      <div className="swiper-container fl">
 

        {/* <img src="@{${goodsDetail.goodsCoverImg}}" /> */}
      </div>
    </div>
  );
};
