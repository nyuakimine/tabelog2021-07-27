import "../../pages/newBeeMallDetail/newBeeMallDetail.css";
import React, { useEffect } from "react";
import { fetchReviewDataActionCreator } from "../../redux/reviewListSlice/fetchReviewListSlice";
import {  useDispatch } from "react-redux";
import {  useParams } from "react-router-dom";
import { useSelector } from "../../redux/hooks";
//import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
interface ifProps {
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

export const ReviewNewBeeMall: React.FC<pIf> = ({ data }) => {
  //const reviewLength = useSelector((state: RootState) => state.reviewListSlice.data.length);

  //console.log("xxxxxxReviewLength", reviewLength);
  const { goodsId } = useParams<MatchParams>();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReviewDataActionCreator(goodsId));
  }, []);
  return data === null ? (
    <h2>loading...</h2>
  ) : (
    <div>
      <div id="ZVCQAPost">
        <div className="zv-cqa-posting-rule">
          <p className="zv-cqa-posting-rule-title">ご注意ください</p>
          <ul>
            <li>
              「ニトリ商品Q&amp;A」は、お客様のご質問とニトリの回答を、他のお客様に参考にしていただくためのサービスです。
            </li>
            <li>
              回答を要するご質問やお急ぎの方は
              <a
                className="g-link-u"
                href="https://www.nitori-net.jp/ec/input-inquiry/"
                target="_blank"
              >
                お問い合わせフォームへ
              </a>
              ご連絡ください。
            </li>
            <li>
              ニトリが不適切と判断した際、後日投稿を削除する場合がございます。詳細はご利用ガイドの
              <a
                className="g-link-u"
                href="https://www.nitori-net.jp/ec/userguide/nitorinet/#zv-cqa"
                target="_blank"
              >
                ニトリ商品Q&amp;Aについて
              </a>
              をご確認ください。
            </li>
          </ul>
        </div>

        <input
          type="textbox"
          id="ZVQuestionTextarea"
          className="zv-textbox"
          placeholder="不明な点を質問（例：この製品には耐久性がありますか？）"
        />
        <div
          id="ZVAskPostArea"
          data-customerqa-message-after-post-question="送信しました。回答があるまでしばらくお待ちください。"
        >
          <p className="zv-error-message" id="ZVLoginErrorQuestion">
            質問を投稿するにはログインが必要です。
          </p>
          <p className="zv-error-message" id="ZVEmptyErrorQuestion">
            質問を入力してください。
          </p>
          <p className="zv-error-message" id="ZVSpamErrorQuestion">
            しばらく時間をおいて投稿してください。
          </p>
          <button type="button" id="ZVPostQuestionButton" className="zv-btn">
            質問を投稿
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
            {data.map((reviewList, idx) => {
          return (
              <div key={idx}>
              <li className="g-reviewList_item" >
               

                <div className="g-lg-flow-sm">
                  <p className="g-score">
                    <span data-score="5.0">
                      <span className="g-clip">text.product.review.Rating</span>
                    </span>
                  </p>
                </div>

                <p className="g-reviewList_info">
                  購入商品:カジュアルソファ(パトレック GR/MBR）)
                </p>
                <p className="g-reviewList_user">
                 {reviewList.nickName} さん<span className="g-clip">{reviewList.commentDate}</span>
                </p>
                <p className="g-reviewList_h">title:{reviewList.title}</p>
                <p>content:{reviewList.content}
                  
                </p>
                <p className="g-reviewList_like">
                  <a
                    className="g-link reviewLike0"
                    id="js-hitLike"
                    data-count="0"
                  >
                    <i className="g-s g-s-like-g" aria-hidden="true"></i>
                    <span className="helpNumSpan">参考になった: {reviewList.reviewNum}</span>
                    <span className="hidSpForRevId"> </span>
                  </a>
                </p>
              </li>
              <li className="g-reviewList_item">
                <div className="g-lg-flow-sm">
                  <p className="g-score">
                    <span data-score="5.0">
                      <span className="g-clip">text.product.review.Rating</span>
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
              data-label="閉じる"
              data-accordion='{"scroll":false}'
            >
              <i className="g-i g-i-arrow-d"></i>
              <span id="showMoreLabel"
             
              >
                 {/* onClick={() => dispatch(fetchReviewDataActionCreator(reviewLength))}   */}
                レビューをもっと見る（3/
                <span id="js-reviews-more">4</span>）
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
              <span id="closeLabel"    
              
              >
                {/* onClick={() => dispatch(fetchReviewDataActionCreator(reviewLength))}     */}
         閉じる</span>
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};
