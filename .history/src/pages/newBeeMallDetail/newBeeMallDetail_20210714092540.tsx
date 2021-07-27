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
import { fetchDetailDataActionCreator } from "../../redux/detailNewBeeMall/fetchDetailActions";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { QaNewBeeMall } from "../../components/qaNewBeeMall";
import { ReviewNewBeeMall } from "../../components/reviewNewBeeMall/review";
interface MatchParams {
  goodsId: string;
}

export const NewBeeMallDetail: React.FC<RouteComponentProps<MatchParams>> =
  () => {
    const { goodsId } = useParams<MatchParams>();
    const loading = useSelector((state) => state.detailNewBeeMall.loading);
    const error = useSelector((state) => state.detailNewBeeMall.error);
    const product = useSelector((state) => state.detailNewBeeMall.data.data);
    const desc = useSelector((state) => state.descSlice.data);
   // const reviewList = useSelector((state) => state.reviewListSlice.data);
    const openAndClose = useSelector((state) => state.openCloseReviewSlice.data);
    const qaPage = useSelector((state) => state.qaPageSlice.data.list)
    console.log("qaPagexxxxxxxxxxx", qaPage);

    const dispatch = useDispatch();
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

          <div className="intro mt20 w clearfix">
            <div className="left fl" style={{ position: "relative" }}>
              <div className="swiper-container fl">
                <LeftImgF1 data={product}></LeftImgF1>
              </div>
            </div>
            <RightDetail></RightDetail>
            <div id="sizeQAContainer">
              <div id="innerSizeQAContainer">
                <GoodsDescDetail data={desc}></GoodsDescDetail>
                <section className="g-grid_item g-sm-block-sm">
                  <QaNewBeeMall data={qaPage}></QaNewBeeMall>
                  <ReviewNewBeeMall data={openAndClose}></ReviewNewBeeMall>
                </section>
              </div>
            </div>
          </div>
        </div>
        <NewBeeFooter></NewBeeFooter>
        <div className="goods mt20 w clearfix"></div>
      </div>
    );
  };
