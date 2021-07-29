import React, { useEffect, useRef, useState } from "react";
import { RootState } from "../../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import "../tabelog1.css";
import "../tabelog2.css";


export const TopNotice: React.FC = () => {

  const topNotice = useSelector((state: RootState) => state.topNoticeCommentSlice.data);

  const showMoreReviewsBtn = () => {
    const showList = document.getElementsByClassName(
      "rstdtl-extra-info__more-trigger"
    )[0] as HTMLElement;
    showList.style.display = "none";
    const show = document.getElementsByClassName(
        "hiddenSpan"
      )[0] as HTMLElement;
      show.style.display = "none";

    const cshowList = document.getElementsByClassName("showMore")[0] as HTMLElement;
    cshowList.style.display = "block";
    cshowList.style.display = "inline";
  };

  return topNotice === null ? (
    <h2>loading...</h2>
  ) :  (
    <div className="rstdtl-extra-info">
      <div id="extra-info" className="rstdtl-extra-info__link-target"></div>
      <div className="rstdtl-heading rstdtl-extra-info__title">
        {topNotice.topNoticeTitle}
      </div>
      <input
        type="radio"
        id="rstdtl-extra-info-more"
        className="rstdtl-extra-info__input"
      />
      <label className="rstdtl-extra-info__label">
        <div className="rstdtl-extra-info__text">
          {topNotice.topNoticecol1}
          <br />
          <br />{topNotice.topNoticecol2}
          <br />
          <br />
          {topNotice.topNoticecol3}
          <br />
          <br />
          {topNotice.topNoticecol4}
          <br />
          {topNotice.topNoticecol5}
          <span className="hiddenSpan" onClick={showMoreReviewsBtn}>
            ...
          </span>
        </div>
        <p className="rstdtl-extra-info__more-trigger"  onClick={showMoreReviewsBtn}>
          もっと見る
        </p>
        <div className="showMore" style={{display: "none" }}>
        {topNotice.topNoticecol6}
        </div>
      </label>
    </div>
  );
};