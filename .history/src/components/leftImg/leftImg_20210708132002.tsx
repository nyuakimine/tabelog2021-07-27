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

export const LeftImgF1: React.FC = () => {
  return (
    <div className="left fl" style={{ position: "relative" }}>
      <div className="swiper-container fl">
         
        <div className="container">
          {data.map((goods, idxc) => {
            <div className="mySlides">
                              <div className="numbertext">1 / 3</div>
                              
              <img
                className="slgdemo"
                src="http://localhost:8081/goods-img/4755f3e5-257c-424c-a5f4-63908061d6d9.jpg"
                style={{ width: "100%" }}
              />
                        
            </div>;
          })}
                          
          <div className="caption-container">
                            <p id="caption"></p>
                        
          </div>
                      
          <div className="row">
            {data.map((goods, idxc) => {
              <div className="column">
                                
                <img
                  className="demo cursor"
                  src="/goods-img/6a160b96-9b4a-4844-b335-feb31b1f5d8c.jpg"
                  style={{ width: "100%" }}
                  alt="The Woods"
                />                             
              </div>;
            })}                                            
          </div>     
        </div>
      </div>
    </div>
  );
};
