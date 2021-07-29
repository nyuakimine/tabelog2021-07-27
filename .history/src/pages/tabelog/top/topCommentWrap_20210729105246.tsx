import React, { useEffect, useRef, useState } from "react";
import "../tabelog1.css";
import "../tabelog2.css";

export const TopCommentWrap: React.FC = () => {
  const showMoreReviewsBtn = () => {
    const showList = document.getElementsByClassName(
      "pr-comment__more js-pr-comment-more"
    )[0] as HTMLElement;
    showList.style.display = "none";
    const show = document.getElementsByClassName("hiddenSpan")[0] as HTMLElement;
    show.style.display = "none";

    const cshowList = document.getElementsByClassName("showMore")[0] as HTMLElement;
    cshowList.style.display = "block";
    cshowList.style.display = "inline";
  };

  return (
    <div className="pr-comment-wrap">
      <h3 className="pr-comment-title js-pr-title">
        東京駅地下１階 黒塀横丁内 唯一の｢80名の大宴会｣｢個室･半個室｣｢炭火焼肉｣｢低価格｣
      </h3>
      <div className="pr-comment">
        <p className="pr-comment__body js-pr-comment-body is-hidden">
          <span className="pr-comment__option">
            <span className="pr-comment__first">
              ｢薬食同源｣｢美食同源」健康にも美容にも良い韓国の家庭料理。上質の焼肉や本場韓国の家庭料理を心行くまでお楽しみ下さいませ。石焼ピビンパ･純豆腐チゲ･冷麺･チヂミ･チャプチェ･参鶏湯･サムギョプサル･ユッケジャン･コムタン･プルコギ･トッポッキ･ケランチム･蒸し鶏･ポッサム･プデチゲ･カムジャタン
              ◎ 宴会ご予約も承り中！ご予約はお早めに！～ 個室席・大宴会・早割サービス等
              スタッフまで御相談下さい
            </span>
            <span className="js-pr-comment-more pr-comment__more-icon">...</span>
            <button type="button" className="pr-comment__more js-pr-comment-more" onClick={showMoreReviewsBtn}>
              続きを読む
            </button>
            <span className="pr-comment__over js-pr-comment-over is-hidden">
              {" "}
              ～<br />
            </span>
          </span>
        </p>
      </div>
    </div>
  );
};
