import React, { useEffect, useRef, useState } from "react";
import { RootState } from "../../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import "../tabelog1.css";
import "../tabelog2.css";

export const TopCommentWrap: React.FC = () => {
    const topComment = useSelector((state: RootState) => state.topNoticeCommentSlice.data);

  const showMoreReviewsBtn = () => {
    const showList = document.getElementsByClassName(
      "pr-comment__more"
    )[0] as HTMLElement;
    showList.style.display = "none";
    const show = document.getElementsByClassName("pr-comment__more-icon")[0] as HTMLElement;
    show.style.display = "none";

    const cshowList = document.getElementsByClassName("pr-comment__over")[0] as HTMLElement;
    cshowList.style.display = "block";
    cshowList.style.display = "inline";
  };

  return topComment === null ? (
    <h2>loading...</h2>
  ) : (
    <div className="pr-comment-wrap">
      <h3 className="pr-comment-title js-pr-title">
        {topComment.topComment1}
      </h3>
      <div className="pr-comment">
        <p className="pr-comment__body js-pr-comment-body is-hidden">
          <span className="pr-comment__option">
            <span className="pr-comment__first">
            {topComment.topComment2}
            </span>
            <span className="js-pr-comment-more pr-comment__more-icon" onClick={showMoreReviewsBtn}>...</span>
            <button type="button" className="pr-comment__more js-pr-comment-more" onClick={showMoreReviewsBtn}>
              続きを読む
            </button>
            <span className="pr-comment__over js-pr-comment-over is-hidden">
              {" "}
              {topComment.topComment3}<br />
            </span>
          </span>
        </p>
      </div>
    </div>
  );
};
