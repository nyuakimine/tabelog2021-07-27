import React, { useEffect, useRef, useState } from "react";
import "./tabelog1.css";
import "./tabelog2.css";

export const Top1: React.FC = () => {
  const showMoreReviewsBtn = (e) => {
    const showList = document.getElementsByClassName(
      "rstdtl-extra-info__more-trigger"
    )[0] as HTMLElement;
    showList.style.display = "none";

    const cshowList = document.getElementById("showMore") as HTMLElement;
    cshowList[0].style.display = "block";
  };

  return (
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
          <br />
          <br />◆ スンドゥブフェア 10月20日～ ランチタイム限定 開催 致します～！
          <br />
          <br />
          ◆◇ 吾照里のコロナウィルス感染防止対策
          <br />
          <br />
          新型コロナウィルス感染拡大防止中
          <br />
          席の間隔､
          <span className="hiddenSpan" onClick={showMoreReviewsBtn}>
            ...
          </span>
        </div>
        <p className="rstdtl-extra-info__more-trigger" onClick={showMoreReviewsBtn}>
          もっと見る
        </p>
        <div id="showMore" className="rstdtl-extra-info__more-dtl remove-head-space">
          マスク着用､アルコール消毒等､お客様に安心、安全の中でお食事を楽しんで頂けるよう感染拡大防止策の徹底しております。
        </div>
      </label>
    </div>
  );
};
