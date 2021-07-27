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

SwiperCore.use([Navigation, Thumbs]);

interface ifProps {
  goodsId: number;
  path: string;
}
interface pIf {
  data: ifProps[];
}


export const LeftImgF1: React.FC<pIf> = ({ data }) => {
  // const { goodsId } = useParams<MatchParams>();
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchDetailDataActionCreator(goodsId));
  // }, []);
  return data === undefined ? (
    <h2>path</h2>
  ) : (
    <div className="left fl" style={{ position: "relative" }}>
      <div className="swiper-container fl">
         
        <div className="container">
          {data.map((img, idx) => {
            <div className="mySlides" key={idx}>
              <div className="numbertext">1 / 3</div>          
              <img
                className="slgdemo"
                style={{ width: "100%" }}
                src={`http://localhost:8081/goods-img/4755f3e5-257c-424c-a5f4-63908061d6d9.jpg`}
                alt=""
              />
                            
            </div>;
          })}
                          
          <div className="caption-container">
            <p id="caption"></p>             
          </div>
                      
          <div className="row">
            {data.map((img, idx8) => {
              <div className="column" key={idx8}>
                  
                <img
                  className="demo cursor"
                  style={{ width: "100%" }}
                  src={`http://localhost:8081/goods-img/4755f3e5-257c-424c-a5f4-63908061d6d9.jpg`}
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
