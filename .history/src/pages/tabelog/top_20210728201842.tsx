import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DetailTitle } from "../../components/detailTitle/DetailTitle";
import { RestaurantDesc } from "../../components/restaurantDesc";

import "./tabelog1.css";
import "./tabelog2.css";

export const Top1: React.FC = () => {
  return (
    <div id="column-main" className="layout1-main">
      <div className="rstdtl-extra-info">
        <div id="extra-info" className="rstdtl-extra-info__link-target"></div>
        <div className="rstdtl-heading rstdtl-extra-info__title">
          お店からの大切なお知らせ
        </div>
        <input
          type="radio"
          id="rstdtl-extra-info-more"
          className="rstdtl-extra-info__input"
        />
        <label className="rstdtl-extra-info__label">
          <div className="rstdtl-extra-info__text">
            ◆ ご予約は、お一人様 LunchTime 1,000円以上、DinnerTime
            3,000円以上とさせて頂きます
            <br>◆ スンドゥブフェア 10月20日～ ランチタイム限定 開催 致します～！</br>
            <br>◆◇ 吾照里のコロナウィルス感染防止対策</br>
            <br>
              <br>新型コロナウィルス感染拡大防止中</br>
            </br>
            <br>席の間隔､</br>
            <span>...</span>
          </div>
          <p className="rstdtl-extra-info__more-trigger">もっと見る</p>
          <div className="rstdtl-extra-info__more-dtl remove-head-space">
            マスク着用､アルコール消毒等､お客様に安心、安全の中でお食事を楽しんで頂けるよう感染拡大防止策の徹底しております。
          </div>
        </label>
      </div>
    </div>
  );
};
