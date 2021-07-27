//import React,{ useEffect, useRef, useState } from "react";
import "./newBeeMallDetail.css";
import { Fragment } from "../../components/headerFragment";
import { NewBeeFooter } from "../../components/newBeeFooter";
import { NavFragment } from "../../components/fragment";
import { LeftImgF1 } from "../../components/leftImg/leftImg";
import { RightDetail } from "../../components/rightDetail";
import { GoodsDescDetail } from "../../components/goodsDescDetail";
//import { RouteComponentProps, useParams } from "react-router-dom";
//import { useSelector, useDispatch } from "react-redux";

//import { fetchDetailDataActionCreator } from "../../redux/detailNewBeeMall/fetchDetailActions";
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

import React, { useState, useEffect } from "react";
import { RouteComponentProps, useParams } from "react-router-dom";
import axios from "axios";
import { Spin, Row, Col, Divider, Typography, Anchor, Menu } from "antd";
import styles from "./DetailPage.module.css";
import {
  Header,
  Footer,
  ProductIntro,
  ProductComments,
} from "../../components";
import { DatePicker, Space, Button } from "antd";
//import { commentMockData } from "./mockup";
import {
    fetchDetailDataActionCreator,
    newBeeMallDetailSlice,
} from "../../redux/detailNewBeeMall/fetchDetailActions";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { MainLayout } from "../../layouts/mainLayout";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { addShoppingCartItem } from "../../redux/shoppingCart/slice";

const { RangePicker } = DatePicker;

interface MatchParams {
  goodsId: string;
}

export const NewBeeMallDetail: React.FC<RouteComponentProps<MatchParams>> = () => {
  const { goodsId } = useParams<MatchParams>();
  // const [loading, setLoading] = useState<boolean>(true);
  // const [product, setProduct] = useState<any>(null);
  // const [error, setError] = useState<string | null>(null);

  const loading = useSelector((state) => state.productDetail.loading);
  const error = useSelector((state) => state.productDetail.error);
  const product = useSelector((state) => state.productDetail.data);

  const dispatch = useDispatch();

  const jwt = useSelector(s => s.user.token) as string
  const shoppingCartLoading = useSelector(s => s.shoppingCart.loading)

  useEffect(() => {
    dispatch(fetchDetailDataActionCreator(goodsId));
  }, []);
  if (loading) {
    return (
      <Spin
        size="large"
        style={{
          marginTop: 200,
          marginBottom: 200,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
        }}
      />
    );
  }
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
