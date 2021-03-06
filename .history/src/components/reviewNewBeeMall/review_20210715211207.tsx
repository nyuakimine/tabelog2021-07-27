import "../../pages/newBeeMallDetail/newBeeMallDetail.css";
import React, { useEffect } from "react";
import { fetchOpenAndCloseDataActionCreator } from "../../redux/OpenCloseReviewSlice/openCloseReviewSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "../../redux/hooks";
import { RouteComponentProps, useParams } from "react-router-dom";
import { RootState } from "../../redux/store";
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
  const { goodsId } = useParams<MatchParams>();

  const initialList = useSelector(
    (state:RootState) => state.openCloseReviewSlice.initialList
  );

  const showMoreList = useSelector(
    (state:RootState) => state.openCloseReviewSlice.showMoreList
  );
 // let reviewList = initialList||showMoreList;

  console.log("showMoreListshowMoreList",showMoreList);
  // let idsx =useSelector((state) => state.openCloseReviewSlice.ids);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOpenAndCloseDataActionCreator({ goodsId }));
    //dispatch(fetchOpenAndCloseDataActionCreator(ids));
  }, []);

  const showMoreReviewsBtn = () => {
   // debugger;
    const ids = initialList.map((item) => item.id);
    // e.setState = {showMoreList: ids}
    console.log("idsidsidsidsids", ids);
    // console.log(" e.setStatev", e.setState);
    dispatch(fetchOpenAndCloseDataActionCreator({ goodsId, ids }));

 
  };
  if(showMoreList===null){
    const closeShow = document.getElementsByClassName("g-link displaymorereview")[0];
    closeShow[0].style.display = "none";  
  }
  return initialList === null ? (
    <h2>loading...</h2>
  ) : (
    <div>
      <div id="ZVCQAPost">
        <div className="zv-cqa-posting-rule">
          <p className="zv-cqa-posting-rule-title">?????????????????????</p>
          <ul>
            <li>
              ??????????????????Q&amp;A????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
            </li>
            <li>
              ????????????????????????????????????????????????
              <a
                className="g-link-u"
                href="https://www.nitori-net.jp/ec/input-inquiry/"
                target="_blank"
              >
                ?????????????????????????????????
              </a>
              ????????????????????????
            </li>
            <li>
              ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              <a
                className="g-link-u"
                href="https://www.nitori-net.jp/ec/userguide/nitorinet/#zv-cqa"
                target="_blank"
              >
                ???????????????Q&amp;A????????????
              </a>
              ???????????????????????????
            </li>
          </ul>
        </div>

        <input
          type="textbox"
          id="ZVQuestionTextarea"
          className="zv-textbox"
          placeholder="?????????????????????????????????????????????????????????????????????????????????"
        />
        <div
          id="ZVAskPostArea"
          data-customerqa-message-after-post-question="??????????????????????????????????????????????????????????????????????????????"
        >
          <p className="zv-error-message" id="ZVLoginErrorQuestion">
            ?????????????????????????????????????????????????????????
          </p>
          <p className="zv-error-message" id="ZVEmptyErrorQuestion">
            ????????????????????????????????????
          </p>
          <p className="zv-error-message" id="ZVSpamErrorQuestion">
            ?????????????????????????????????????????????????????????
          </p>
          <button type="button" id="ZVPostQuestionButton" className="zv-btn">
            ???????????????
          </button>
        </div>
      </div>

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
              <span>????????????</span>
            </h2>
            <div className="p-reviewScore">
              <p className="p-average">
                ????????????<span className="g-digit">4.7</span>
              </p>
              <p className="g-score">
                <span data-score="4.7"></span>
              </p>
              <p className="g-label-brand g-reviewList_label">
                ??????????????????????????????
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
                        ????????????:????????????????????????(??????????????? GR/MBR???)
                      </p>
                      <p className="g-reviewList_user">
                        {reviewList.nickName} ??????
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
                            ??????????????????: {reviewList.reviewNum}
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
                              <img src="/goods-img/star.jpg" />
                              <img src="/goods-img/star.jpg" />
                              <img src="/goods-img/star.jpg" />
                              <img src="/goods-img/star.jpg" />
                              <img src="/goods-img/star.jpg" />
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
                        ????????????:????????????????????????(??????????????? GR/MBR???)
                      </p>
                      <p className="g-reviewList_user">
                        {reviewList.nickName} ??????
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
                            ??????????????????: {reviewList.reviewNum}
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
                              <img src="/goods-img/star.jpg" />
                              <img src="/goods-img/star.jpg" />
                              <img src="/goods-img/star.jpg" />
                              <img src="/goods-img/star.jpg" />
                              <img src="/goods-img/star.jpg" />
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
              data-label="?????????"
              data-accordion='{"scroll":false}'
            >
              <i className="g-i g-i-arrow-d"></i>
              <span id="showMoreLabel" onClick={showMoreReviewsBtn}>
                ?????????????????????????????????3/
                <span id="js-reviews-more">4</span>???
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
              data-label="?????????"
              data-accordion='{"scroll":false}'
            >
              <span id="closeLabel">
                {/* onClick={() => dispatch(fetchReviewDataActionCreator(reviewLength))}     */}
                ?????????
              </span>
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};
