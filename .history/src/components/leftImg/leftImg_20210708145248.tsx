import React, { useEffect, useRef, useState } from "react";
import { RouteComponentProps, useParams } from "react-router-dom";
import "../../pages/newBeeMallDetail/newBeeMallDetail.css";
import "./leftImg.css";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchDetailDataActionCreator,
  newBeeMallDetailSlice,
} from "../../redux/detailNewBeeMall/fetchDetailActions";
import { RootState } from "../../redux/store";
// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs } from "swiper/core";
// install Swiper modules

SwiperCore.use([Navigation, Thumbs]);

interface ifProps {
  goodsId: number;
  path: string;
}
interface pIf {
  data: ifProps[];
  idx7: number;
}

// interface MatchParams {
//   goodsId: string;
// }


export const LeftImgF1: React.FC<pIf> = ({ data, idx7 }) => {
  // const { goodsId } = useParams<MatchParams>();
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchDetailDataActionCreator(goodsId));
  // }, []);
  return data === undefined ? (
    <h2>path</h2>
  ) : (
    <div className="left fl" style={{ position: "relative" }} key={idx7}>
      <div className="swiper-container fl">
         
        <div className="container">
          {data.map((img, idx8) => {
            <div className="mySlides" key={idx8}>
              <div className="numbertext">1 / 3</div>          
              <img
                className="slgdemo"
                style={{ width: "100%" }}
                src={img.path}
                alt=""
              />
                            
            </div>;
          })}{" "}
                          
          <div className="caption-container">
            <p id="caption"></p>             
          </div>{" "}
                      
          <div className="row">
            {path.map((img, idx9) => {
              <div className="column" key={idx9}>
                {" "}
                  
                <img
                  className="demo cursor"
                  style={{ width: "100%" }}
                  src={img.path}
                  alt="The Woods"
                />
                                                     
              </div>;
            })}{" "}
                                            
          </div>{" "}
               
        </div>
      </div>
    </div>
  );
};
