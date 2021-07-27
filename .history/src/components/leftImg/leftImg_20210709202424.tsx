import React from "react";
import "../../pages/newBeeMallDetail/newBeeMallDetail.css";
import "./leftImg.css";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";
// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs } from "swiper/core";
// install Swiper modules
import { RootState } from "../../redux/store";
import { decrement, increment } from "./leftImgSlice";
import { useSelector, useDispatch } from "react-redux";

SwiperCore.use([Navigation, Thumbs]);

interface ifProps {
  goodsId: number;
  path: string;
}
interface pIf {
  data: ifProps[];
}

export const LeftImgF1: React.FC<pIf> = ({ data }) => {
  const count = useSelector((state: RootState) => state.leftImg.counter);
  const currentBigImage = data.filter(
    (num, index) => index === count
  )[0] as ifProps;

  const dispatch = useDispatch();
  return data === undefined ? (
    <h2>loading...</h2>
  ) : (
    <div className="container">
      {/* {currentBigImage((img, idx) => { */}
      <div className="mySlides">
        <div className="numbertext">1 / 3</div>          
        <img
          className="slgdemo"
          style={{ width: "100%" }}
          src={`http://localhost:8081${currentBigImage.path}`}
          alt=""
        />
                      
      </div>
      {/* })} */}
                      
      <div className="caption-container">
        <p id="caption"></p>             
      </div>
                  
      <div className="row">
        <button className="next" onClick={() => dispatch(decrement(2))}>
          ❮
        </button>
        {data.map((img, idx) => {
          return (
            <div className="column" key={idx}>
                
              <img
             
                className="demo cursor"
                style={{ width: "100%" }}
                // src={`http://localhost:8081/goods-img/4755f3e5-257c-424c-a5f4-63908061d6d9.jpg`}
                src={`http://localhost:8081${img.path}`}
                alt="The Woods"
                // onClick={() => dispatch(clickImg())}
              />
                                                   
            </div>
          );
        })}
                 
        <button className="prev" onClick={() => dispatch(increment(3))}>
          ❯
        </button>
                                
      </div>
         
    </div>
  );
};
