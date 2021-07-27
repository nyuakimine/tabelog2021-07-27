import React, { useState, useEffect } from "react";
import "./newBeeMallDetail.css";
import { Fragment } from "../../components/headerFragment";
import { NewBeeFooter } from "../../components/newBeeFooter";
import { NavFragment } from "../../components/fragment";
import { LeftImgF1 } from "../../components/leftImg/leftImg";
import { RightDetail } from "../../components/rightDetail";
import { GoodsDescDetail } from "../../components/goodsDescDetail";
import { RouteComponentProps, useParams } from "react-router-dom";
import { Spin } from "antd";
import {
  fetchDetailDataActionCreator,
  newBeeMallDetailSlice,
} from "../../redux/detailNewBeeMall/fetchDetailActions";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";

interface MatchParams {
  goodsId: string;
}
export const NewBeeMallDetail: React.FC<RouteComponentProps<MatchParams>> = () => {
  const { goodsId } = useParams<MatchParams>();
  const loading = useSelector((state) => state.detailNewBeeMall.loading);
  const error = useSelector((state) => state.detailNewBeeMall.error);
  const product = useSelector((state) => state.detailNewBeeMall.data.data);

  const dispatch = useDispatch();

  const jwt = useSelector((s) => s.user.token) as string;
  const shoppingCartLoading = useSelector((s) => s.shoppingCart.loading);

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
  return product === undefined ? (
    <h2>loading...</h2>
  ) : (
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
        <LeftImgF1 data={product}></LeftImgF1>
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
