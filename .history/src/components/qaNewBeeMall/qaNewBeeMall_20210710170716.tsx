import "../../pages/newBeeMallDetail/newBeeMallDetail.css";
import React, { useEffect } from "react";
import { RootState } from "../../redux/store";
import { fetchQaDataActionCreator } from "../../redux/qaListSlice/fetchQaListSlice";
import { useSelector, useDispatch } from "react-redux";
import { RouteComponentProps, useParams } from "react-router-dom";
interface ifProps {
  goodsId: number;
  id: number;
  question: string;
  submitDate: Date;
  answer: string;
  answerDate: Date;
  helpedNum: string;
}
interface pIf {
  data: ifProps[];
}
interface MatchParams {
  goodsId: string;
}

export const QaNewBeeMall: React.FC<pIf> = ({data}) => {

  console.log("xxxxxxQadata", data);
  const { goodsId } = useParams<MatchParams>();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQaDataActionCreator(goodsId));
  }, []);
  return data === null ? (
    <h2>loading...</h2>
  ) :  (
    <section className="g-grid_item g-sm-block-sm" id="js-product-qa">
      <h2 className="g-h-2 g-h-i p-hd">
        <i className="g-s g-s-comment" aria-hidden="true"></i>
        <span>商品Q&amp;A</span>
      </h2>
      <div
        id="ZVCQA"
        data-site-id="21f1714d-68e4-49b8-bc66-fed761ce701a"
        data-item-group-id="1141058s"
        data-needs-login="1"
        data-login-url=""
        data-user-id=""
        data-default-sort-key="created_at"
      >
        <img
          data-src="https://tag.voice.zetacx.net/__zv_action_log.gif?user_id=bb509976-7f7d-481c-aa65-93b0650c7380&amp;session_key=4541238c-b398-4e25-84b9-a1c1ac5b2d1f&amp;at=2021-04-15T00:07:27.877Z&amp;path=https%3A%2F%2Fwww.nitori-net.jp%2Fec%2Fproduct%2F1141058s%2F%3Frc%3Dset&amp;merchant=21f1714d-68e4-49b8-bc66-fed761ce701a&amp;needs_login=1&amp;user=&amp;page=1&amp;order_by=desc&amp;item_group_id=1141058s&amp;sort=created_at"
          id="zv-helpful-log-gif"
          style={{ display: "none" }}
        />
        <img
          data-src="https://tag.voice.zetacx.net/__zv_action_log.gif?user_id=bb509976-7f7d-481c-aa65-93b0650c7380&amp;session_key=4541238c-b398-4e25-84b9-a1c1ac5b2d1f&amp;at=2021-04-15T00:07:27.877Z&amp;path=https%3A%2F%2Fwww.nitori-net.jp%2Fec%2Fproduct%2F1141058s%2F%3Frc%3Dset&amp;merchant=21f1714d-68e4-49b8-bc66-fed761ce701a&amp;needs_login=1&amp;user=&amp;page=1&amp;order_by=desc&amp;item_group_id=1141058s&amp;sort=created_at"
          id="zv-viewing-log-gif"
          style={{ display: "none" }}
          src="https://tag.voice.zetacx.net/__zv_action_log.gif?user_id=bb509976-7f7d-481c-aa65-93b0650c7380&amp;session_key=4541238c-b398-4e25-84b9-a1c1ac5b2d1f&amp;at=2021-04-15T00:07:27.877Z&amp;path=https%3A%2F%2Fwww.nitori-net.jp%2Fec%2Fproduct%2F1141058s%2F%3Frc%3Dset&amp;merchant=21f1714d-68e4-49b8-bc66-fed761ce701a&amp;needs_login=1&amp;user=&amp;page=1&amp;order_by=desc&amp;item_group_id=1141058s&amp;sort=created_at&amp;type=detail_view&amp;view_at=2021-04-15T00:20:02.152Z&amp;view_count=3"
        />
        <img
          data-src="https://tag.voice.zetacx.net/__zv_action_log.gif?user_id=bb509976-7f7d-481c-aa65-93b0650c7380&amp;session_key=4541238c-b398-4e25-84b9-a1c1ac5b2d1f&amp;at=2021-04-15T00:07:27.877Z&amp;path=https%3A%2F%2Fwww.nitori-net.jp%2Fec%2Fproduct%2F1141058s%2F%3Frc%3Dset&amp;merchant=21f1714d-68e4-49b8-bc66-fed761ce701a&amp;needs_login=1&amp;user=&amp;page=1&amp;order_by=desc&amp;item_group_id=1141058s&amp;sort=created_at"
          id="zv-action-log-gif"
          style={{ display: "none" }}
          src="https://tag.voice.zetacx.net/__zv_action_log.gif?user_id=bb509976-7f7d-481c-aa65-93b0650c7380&amp;session_key=4541238c-b398-4e25-84b9-a1c1ac5b2d1f&amp;at=2021-04-15T00:07:27.877Z&amp;path=https%3A%2F%2Fwww.nitori-net.jp%2Fec%2Fproduct%2F1141058s%2F%3Frc%3Dset&amp;merchant=21f1714d-68e4-49b8-bc66-fed761ce701a&amp;needs_login=1&amp;user=&amp;page=1&amp;order_by=desc&amp;item_group_id=1141058s&amp;sort=created_at&amp;type=detail"
        />
        <p className="zv-heading">カスタマーQ&amp;A</p>
        <div id="ZVCQuestionsArea"></div>
      </div>

      <div>
        <div className="zv-cqa">
          <div className="zv-cqa-step">
            <div className="zv-cqa-step-link">
           
              <span className="previousPage">前ページ</span>
              <span>全2件</span>
              <span>
                ページ<span id="currentPageNo">1</span>/5
              </span>
              <span className="nextPage">次ページ</span>
            </div>
            <div className="zv-select-wrap">
              <select id="zv-cqa-select-sort" className="zv-select" name="sort">
                <option value="total_yes">トップ評価</option>
                <option value="created_at">新しい順</option>
              </select>
            </div>
          </div>
          {data.map((qaList, idx) => {
          return (
          <div className="zv-cqa delete"key={idx} >

            <div className="zv-cqa-question">
              <span className="zv-space">Q. {qaList.id} </span>
              <span className="zv-cqa-step">
              {qaList.question}
                
              </span>
            </div>
            <div className="zv-cqa-q-info">
              <span className="zv-cqa-q-reviewer">投稿者&nbsp; </span>
              <span className="zv-cqa-step">{qaList.submitDate}</span>
            </div>

            <div className="zv-cqa-answers">
              <div className="zv-cqa-answer zv-cqa-answer-first">
                <span className="zv-space">A. </span>
                <div className="zv-cqa-a-content">
                  <div className="zv-cqa-a-text">
                    <p className="zv-cqa-step">{qaList.answer}
                      
                    </p>
                  </div>

                  <div className="zv-cqa-a-info">
                    <span className="zv-space"></span>
                    <span className="zv-cqa-a-reviewer">
                      
                    </span>
                    <span className="zv-cqa-step">{qaList.answerDate}
                      
                    </span>
                  </div>
                  <div className="zv-helpful-form" data-answer-id="58746">
                    <span className="zv-space"></span>
                    <span
                      className="zv-error-message"
                      id="ZVLoginErrorHelpful-58746"
                    >
                      「参考になった/参考にならなかった」を投稿するにはログインが必要です。
                    </span>
                    <span className="zv-helpful-col">
                      <span
                        className="zv-helpful zv-helpful-wrapper zv-helpful-wrapper-yes-58746"
                        data-count="58746"
                        data-clickable=""
                        data-answer-id="58746"
                      >
                        <i className="zv-helpful zv-helpful-yes-i"></i>
                        <span
                          className="zv-helpful zv-helpful-yes zv-helpful-yes-58746"
                          data-count="58746"
                          id="ZVHelpfulYes-58746"
                        >
                          参考になった
                        </span>
                        <span className="zv-cqa-step">{qaList.helpedNum}</span>
                      </span>
                    </span>
                    <span className="zv-helpful-col">
                      <span
                        className="zv-helpful zv-helpful-wrapper zv-helpful-wrapper-no-58746"
                        data-count="58746"
                        data-clickable=""
                        data-answer-id="58746"
                      >
                        <i className="zv-helpful  zv-helpful-no-i"></i>
                        <span
                          className="zv-helpful zv-helpful-no zv-helpful-no-58746"
                          data-count="58746"
                          id="ZVHelpfulNo-58746"
                        >
                          参考にならなかった
                        </span>
                        <span
                          className="zv-helpful zv-helpful-num zv-helpful-no-num zv-helpful-no-num-58746"
                          data-count="58746"
                          id="ZVHelpfulNoNum-58746"
                        >
                          (0人)
                        </span>
                      </span>
                    </span>
                    <span className="zv-separator">|</span>
                    <div className="zv-popupModal1">
                      <input type="radio" name="modalPop" id="pop1158746" />
                      <label>違反を報告</label>
                      <input type="radio" name="modalPop" id="pop1258746" />
                      <label>CLOSE</label>
                      <input type="radio" name="modalPop" id="pop1358746" />
                      <label>×</label>
                      <div className="zv-modalPopup2">
                        <div className="zv-modalPopup3">
                          <h2 className="zv-modalTitle">違反を報告</h2>
                          <div className="zv-modalMain">
                            <p>
                              このコンテンツは不適切であり、削除する必要があると思われる場合は、下のボタンをクリックしてお知らせください。
                            </p>
                            <div
                              className="zv-report zv-btn"
                              data-post-type="answer"
                              data-target-id="58746"
                            >
                              違反を報告する
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="zv-cqa-comment">
                    <div className="zv-cqa-comment-actions">
                      <p
                        className="zv-error-message"
                        id="ZVLoginErrorComment-58746"
                      >
                        コメントを記入するにはログインが必要です。
                      </p>
                    </div>
                    <div className="zv-cqa-comment-list-body zv-hide"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

           );
        })} 
        </div>
      </div>
      <div id="ZVCQAPost">
        <div className="zv-cqa-posting-rule">
          <p className="zv-cqa-posting-rule-title">ご注意ください</p>
          <ul>
            <li>
              「ニトリ商品Q&amp;A」は、お客様のご質問とニトリの回答を、他のお客様に参考にしていただくためのサービスです。
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
    </section>
  );
};
