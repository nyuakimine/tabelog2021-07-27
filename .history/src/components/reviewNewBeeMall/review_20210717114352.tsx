import "../../pages/newBeeMallDetail/newBeeMallDetail.css";
import React, { useEffect, useState } from "react";
import {
  fetchOpenAndCloseDataActionCreator,
  closeShowList,
} from "../../redux/OpenCloseReviewSlice/openCloseReviewSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "../../redux/hooks";
import { RouteComponentProps, useParams } from "react-router-dom";
import { RootState } from "../../redux/store";
import {fetchHelpNumDataActionCreator} from "../../redux/reviewHelpNumSlice/reviewHelpNumSlice"
interface ifProps {
  id: any;
  goodsId: number;
  star: string;
  reviewNum: number;
  commentDate: string;
  title: string;
  content: string;
  picture: string;
  nickName: string;
  goodsName: string;
}

interface pIf {
  data: ifProps[];
}
interface MatchParams {
  goodsId: string;
}

export const ReviewNewBeeMall: React.FC<pIf> = () => {
  let input = React.createRef<HTMLInputElement>();
  const { goodsId } = useParams<MatchParams>();

  const initialList = useSelector(
    (state: RootState) => state.openCloseReviewSlice.initialList
  );

  const showMoreList = useSelector(
    (state: RootState) => state.openCloseReviewSlice.showMoreList
  );

  console.log("showMoreListshowMoreList", showMoreList);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOpenAndCloseDataActionCreator({ goodsId }));
  }, []);

  const ids = initialList.map((item) => item.id);
  const showMoreReviewsBtn = () => {
    dispatch(fetchOpenAndCloseDataActionCreator({ goodsId, ids }));
   // if (ids != null) {
     // debugger;
      const showList = document.getElementsByClassName( "closeShowLists")[0] as HTMLElement;
      showList.style.display = "none";
      const cshowList = document.getElementsByClassName( "closeCloseBtn")[0] as HTMLElement;
      cshowList.style.display = "block";
    //}
  };

  const closeShowMoreReviewsBtn = () => {
    dispatch(closeShowList());
   // if (ids != null) {
      const cshowList = document.getElementsByClassName("closeCloseBtn")[0] as HTMLElement;
      cshowList.style.display = "none";
      const showList = document.getElementsByClassName("closeShowLists")[0] as HTMLElement;
      showList.style.display = "block";
   // }
  };
   const helpNumFun = () => {
    let reviewId = input.current?.value;
    input.current!.value = "";
    dispatch(fetchHelpNumDataActionCreator(reviewId));
  };

  return initialList === null ? (
    <h2>loading...</h2>
  ) : (
    <div>
      <section
        className="g-grid_item g-sm-block-sm"
        id="js-product-reviews"
        aria-hidden="false"
      >
        <div id="js-replace">
          <input type="hidden" name="productCodePost" value="" />
          <div id="normal-productreview">
            <h2 className="g-h-2 g-h-i p-hd">
              <i className="g-s g-s-comment" aria-hidden="true"></i>
              <span>レビュー</span>
            </h2>
            <div className="p-reviewScore">
              <p className="p-average">
                平均評価<span className="g-digit">4.7</span>
              </p>
              <p className="g-score">
                <span data-score="4.7"></span>
              </p>
              <p className="g-label-brand g-reviewList_label">
                ピックアップレビュー
              </p>
            </div>

            <ul className="g-reviewList">
              {initialList.map((reviewList, idx) => {
                return (
                  <div key={idx}>
                    <li className="g-reviewList_item">
                      <div className="g-lg-flow-sm">
                        <p className="g-score">
                          <span data-score="5.0">
                            <span className="g-clip">
                              text.product.review.Rating
                            </span>
                          </span>
                        </p>
                      </div>

                      <p className="g-reviewList_info">
                        購入商品:カジュアルソファ(パトレック GR/MBR）)
                      </p>
                      <p className="g-reviewList_user">
                        {reviewList.nickName} さん
                        <span className="g-clip">{reviewList.commentDate}</span>
                      </p>
                      <p className="g-reviewList_h">title:{reviewList.title}</p>
                      <p>content:{reviewList.content}</p>
                      <p className="g-reviewList_like">
                        <a
                          className="g-link reviewLike0"
                          id="js-hitLike"
                          data-count="0"
                        >
                          <i className="g-s g-s-like-g" aria-hidden="true"></i>
                          <span className="helpNumSpan" onClick={helpNumFun} ref={input}>
                            参考になった: {reviewList.reviewNum}
                          </span>
                          <span className="hidSpForRevId"> </span>
                        </a>
                      </p>
                    </li>
                    <li className="g-reviewList_item">
                      <div className="g-lg-flow-sm">
                        <p className="g-score">
                          <span data-score="5.0">
                            <span className="g-clip">
                              text.product.review.Rating
                            </span>
                            <span className="g-clip">
                              <img src="http://localhost:8081/goods-img/star.jpg" />
                              <img src="http://localhost:8081/goods-img/star.jpg" />
                              <img src="http://localhost:8081/goods-img/star.jpg" />
                              <img src="http://localhost:8081/goods-img/star.jpg" />
                              <img src="http://localhost:8081/goods-img/star.jpg" />
                            </span>
                          </span>
                        </p>
                      </div>
                    </li>
                  </div>
                );
              })}

              {showMoreList.map((reviewList, idx) => {
                return (
                  <div className="closeShowMore" key={idx}>
                    <li className="g-reviewList_item">
                      <div className="g-lg-flow-sm">
                        <p className="g-score">
                          <span data-score="5.0">
                            <span className="g-clip">
                              text.product.review.Rating
                            </span>
                          </span>
                        </p>
                      </div>

                      <p className="g-reviewList_info">
                        購入商品:カジュアルソファ(パトレック GR/MBR）)
                      </p>
                      <p className="g-reviewList_user">
                        {reviewList.nickName} さん
                        <span className="g-clip">{reviewList.commentDate}</span>
                      </p>
                      <p className="g-reviewList_h">title:{reviewList.title}</p>
                      <p>content:{reviewList.content}</p>
                      <p className="g-reviewList_like">
                        <a
                          className="g-link reviewLike0"
                          id="js-hitLike"
                          data-count="0"
                        >
                          <i className="g-s g-s-like-g" aria-hidden="true"></i>
                          <span className="helpNumSpan">
                            参考になった: {reviewList.reviewNum}
                          </span>
                          <span className="hidSpForRevId"> </span>
                        </a>
                      </p>
                    </li>
                    <li className="g-reviewList_item">
                      <div className="g-lg-flow-sm">
                        <p className="g-score">
                          <span data-score="5.0">
                            <span className="g-clip">
                              text.product.review.Rating
                            </span>
                            <span className="g-clip">
                              <img src="http://localhost:8081/goods-img/star.jpg" />
                              <img src="http://localhost:8081/goods-img/star.jpg" />
                              <img src="http://localhost:8081/goods-img/star.jpg" />
                              <img src="http://localhost:8081/goods-img/star.jpg" />
                              <img src="http://localhost:8081/goods-img/star.jpg" />
                            </span>
                          </span>
                        </p>
                      </div>
                    </li>
                  </div>
                );
              })}
            </ul>
            <div id="p-reviewMore" aria-hidden="true"></div>
          </div>
        </div>
        <div
          className="g-foot-v g-foot-sm"
          id="js-review-more"
          aria-hidden="false"
        >
          <p className="g-align-tc" id="showMoreReviewsBtn">
            <a
              className="g-link displaymorereview"
              href="#p-reviewMore"
              role="button"
              aria-expanded="false"
              aria-controls="p-reviewMore"
              data-label="閉じる"
              data-accordion='{"scroll":false}'
            >
              <i className="g-i g-i-arrow-d"></i>
              <span
                className="closeShowLists"
                id="showMoreLabel"
                onClick={showMoreReviewsBtn}
              >
                レビューをもっと見る
                <span id="js-reviews-more"></span>
              </span>
            </a>
          </p>

          <p className="g-align-tc" id="closeBtn">
            <a
              className="g-link displaymorereview"
              href="#p-reviewMore"
              role="button"
              aria-expanded="false"
              aria-controls="p-reviewMore"
              data-label="閉じる"
              data-accordion='{"scroll":false}'
            >
              <span
                className="closeCloseBtn"
                id="closeLabel"
                onClick={closeShowMoreReviewsBtn}
              >
                閉じる
              </span>
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};
