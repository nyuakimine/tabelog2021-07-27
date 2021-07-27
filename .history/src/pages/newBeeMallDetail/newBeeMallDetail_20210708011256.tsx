import React from "react";
import "./newBeeMallDetail.css";
import { Fragment } from "../../components/headerFragment";
import { NewBeeFooter } from "../../components/newBeeFooter";
import { NavFragment } from "../../components/fragment";
import { LeftImgF1 } from "../../components/leftImg/leftImg";
import { RightDetail } from "../../components/rightDetail";
import { GoodsDescDetail } from "../../components/goodsDescDetail";

export const NewBeeMallDetail: React.FC = () => {
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
        {/* <LeftImgF1></LeftImgF1> */}
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
