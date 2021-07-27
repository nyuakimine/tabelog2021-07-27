import React from "react";
import "./newBeeMallDetail.css";
import { Fragment } from "../../components/headerFragment";
import { NewBeeFooter } from "../../components/newBeeFooter";
import { NavFragment } from "../../components/fragment";
//import { newBeeMallDetailDc } from "../../components/newBeeMallDc";

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
      <NewBeeFooter></NewBeeFooter>
    </div>
  );
};
