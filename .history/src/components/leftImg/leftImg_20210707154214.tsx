import React from "react";

import "../../pages/newBeeMallDetail/newBeeMallDetail.css";

export const LeftImgF1: React.FC = () => {
  return (
    <div className="left fl" style={{ position: "relative" }}>
      <div className="swiper-container fl">
        <img src="@{${goodsDetail.goodsCoverImg}}" />
      </div>
    </div>
  );
};
