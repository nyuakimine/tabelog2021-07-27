import React,{ useEffect, useRef, useState } from "react";
import "./newBeeMallDetail.css";
import { Fragment } from "../../components/headerFragment";
import { NewBeeFooter } from "../../components/newBeeFooter";
import { NavFragment } from "../../components/fragment";
import { LeftImgF1 } from "../../components/leftImg/leftImg";
import { RightDetail } from "../../components/rightDetail";
import { GoodsDescDetail } from "../../components/goodsDescDetail";
import { RouteComponentProps, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { fetchDetailDataActionCreator } from "../../redux/detailNewBeeMall/fetchDetailActions";
import { RootState } from "../../redux/store";


interface MatchParams {
    goodsId: string;
  }
  
//   export const NewBeeMallDetail: React.FC<RouteComponentProps<MatchParams>> = () => {
//     const { goodsId } = useParams<MatchParams>();
//     let detailLeftImg: any = useSelector((s: RootState) => s.fetchDetailDataActionCreator);
//     //let loading = detailLeftImg.loading;
//     const dispatch = useDispatch();
//     useEffect(() => {
//       //console.log("in shoppngMall.tsx file ");
//       dispatch(fetchDetailDataActionCreator(goodsId));
//     }, []);
//     return (
//         <div>
//           <Fragment></Fragment>
//           <div id="detail">
//             <NavFragment></NavFragment>
//             <div className="dc">
//               <div className="content w">
//                 <div className="title fl">商品详情</div>
//                 <div className="clear"></div>
//               </div>
//             </div>
//           </div>
//           <div className="intro mt20 w clearfix">
//             <LeftImgF1></LeftImgF1>
//             <RightDetail></RightDetail>
//             <div className="clear"></div>
//           </div>
//           <div id="sizeQAContainer">
//             <div id="innerSizeQAContainer">
//               <GoodsDescDetail></GoodsDescDetail>
//             </div>
//           </div>
//           <NewBeeFooter></NewBeeFooter>
//         </div>
//       );


//   }

  export const NewBeeMallDetail: React.FC<RouteComponentProps<MatchParams>> = () => {
    const { goodsId } = useParams<MatchParams>();
    // const [loading, setLoading] = useState<boolean>(true);
    // const [product, setProduct] = useState<any>(null);
    // const [error, setError] = useState<string | null>(null);
  
    //const loading = useSelector((state) => state.fetchDetailDataActionCreator.loading);
    const error = useSelector((state) => state.detailNewBeeMall.error);
    const product = useSelector((state) => state.detailNewBeeMall.data);
  
    const dispatch = useDispatch();
  
    const jwt = useSelector(s => s.user.token) as string
    const shoppingCartLoading = useSelector(s => s.shoppingCart.loading)
  
    useEffect(() => {
      dispatch(fetchDetailDataActionCreator(goodsId));
    }, []);
  
    if (error) {
      return <div>网站出错：{error}</div>;
    }
    return (
        <div>
        <Fragment></Fragment>
        <div id="detail">
          <NavFragment></NavFragment>
          <div className="dc">
            <div className="content w">
              <div className="title fl">商品详情</div>
              <div className="clear"></div>
            </div>
          </div>
        </div>
        <div className="intro mt20 w clearfix">
          <LeftImgF1></LeftImgF1>
          <RightDetail></RightDetail>
          <div className="clear"></div>
        </div>
        <div id="sizeQAContainer">
          <div id="innerSizeQAContainer">
            <GoodsDescDetail></GoodsDescDetail>
          </div>
        </div>
        <NewBeeFooter></NewBeeFooter>
      </div>
   
    );
  };
  

// export const NewBeeMallDetail: React.FC = () => {
//   return (
//     <div>
//       <Fragment></Fragment>
//       <div id="detail">
//         <NavFragment></NavFragment>
//         <div className="dc">
//           <div className="content w">
//             <div className="title fl">商品详情</div>
//             <div className="clear"></div>
//           </div>
//         </div>
//       </div>
//       <div className="intro mt20 w clearfix">
//         <LeftImgF1></LeftImgF1>
//         <RightDetail></RightDetail>
//         <div className="clear"></div>
//       </div>
//       <div id="sizeQAContainer">
//         <div id="innerSizeQAContainer">
//           <GoodsDescDetail></GoodsDescDetail>
//         </div>
//       </div>
//       <NewBeeFooter></NewBeeFooter>
//     </div>
//   );
// };
