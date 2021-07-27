import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchDetailTitleDataActionCreator} from "../../redux/detailTitle/fetchDetailTitleListSlice"
import "../../pages/tabelog/tabelog1.css"
import "../../pages/tabelog/tabelog2.css"


interface ifProps {
  id: number;
  name: string;
  star: string;
  score: string;
  commentNum: string;
  answerDate: string;
  saveNum: string;
}
interface pIf {
  data: ifProps;
}


export const DetailTitle: React.FC<pIf> = (data) => {

    const dispatch = useDispatch();
    useEffect(() => {
    
      dispatch(fetchDetailTitleDataActionCreator({id:1}));
    }, []);
  return  data === null ? (
    <h2>loading...</h2>
  ) :(
    <div className="rdheader-title-data">
      <div className="rdheader-rstname-wrap">
        <div className="rdheader-rstname">
          <a
            href="https://tabelog.com/tokyo/A1302/A130201/13019285/"
            property=""
          >
            <span className="pillow-word">韓国家庭料理</span>
          </a>
          <h2 className="display-name">
            <span>{data.data.name}</span>
          </h2>
          <span className="alias">（オジョリ）</span>
          <div className="rdheader-official-info">
            <div id="js-rdhead-group" className="group-badge">
              <p className="group-badge__icon">関連店舗</p>
              <div
                id="js-group_search"
                className="group-badge__search"
                style={{ display: "none" }}
              >
                <div className="c-balloon c-balloon--top group-badge__search-box">
                  <dl className="rdhead-grouplink">
                    <dt className="rdhead-grouplink__title">
                      東京駅　改札外内の他の店舗を探す
                    </dt>
                    <dd className="rdhead-grouplink__item">
                      <ul className="rdhead-grouplink__item-list">
                        <li className="rdhead-grouplink__item-link">
                          <a href="/tokyo/P055549/premiseLst/">
                            東京駅　改札外内のレストラン一覧
                          </a>
                        </li>
                      </ul>
                    </dd>
                    <dt className="rdhead-grouplink__title">
                      吾照里の他の店舗を探す
                    </dt>
                    <dd className="rdhead-grouplink__item">
                      <ul className="rdhead-grouplink__item-list">
                        <li className="rdhead-grouplink__item-link">
                          <a href="/grouplst/G00470/">全国の吾照里</a>
                        </li>
                        <li className="rdhead-grouplink__item-link">
                          <a href="/grouplst/G00470/tokyo/">東京の吾照里</a>
                        </li>
                      </ul>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="js-header-rating" className="rdheader-counts-wrap">
        <ul className="rdheader-counts">
          <li className="rdheader-counts__item">
            <div className="rdheader-rating__score" id="js-detail-score-open">
              <p className="c-rating c-rating--val30 c-rating--xxl">
                <i className="c-rating__star rdheader-rating__score-star"></i>
                <b className="c-rating__val rdheader-rating__score-val">
                  {/* rel="v:rating" */}
                  <span className="rdheader-rating__score-val-dtl">3.25</span>
                </b>
              </p>
            </div>
          </li>
          <li className="rdheader-counts__item">
            <span className="rdheader-rating__review">
              <span className="rdheader-rating__review-target">
                <a
                  property=""
                  href="https://tabelog.com/tokyo/A1302/A130201/13019285/dtlrvwlst/"
                >
                  <i>口コミ</i> <em className="num">{data.data.commentNum}</em>{" "}
                  <span className="unit">件</span>
                </a>{" "}
              </span>
            </span>
          </li>
          <li className="rdheader-counts__item">
            <span className="rdheader-rating__hozon">
              <span className="rdheader-rating__hozon-target">
                <i>保存</i> <em className="num">{data.data.saveNum}</em>{" "}
                <span className="unit">件</span>{" "}
              </span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
