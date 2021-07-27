import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDetailTitleDataActionCreator } from "../../redux/detailTitle/fetchDetailTitleListSlice";
import "../../pages/tabelog/tabelog1.css";
import "../../pages/tabelog/tabelog2.css";
import { RootState } from "../../redux/store";

export const RestaurantDesc: React.FC = () => {
  const restaurantDesc = useSelector(
    (state: RootState) => state.restaurantDescSlice.data
  );

  const onMouseOverHandler = (e) => {
    debugger;
    console.log(e.currentTarget);

    const sortList = document.getElementsByClassName("linktree")[0]as HTMLElement;
    const sLTop = sortList.getBoundingClientRect().top;
    const targetTop = e.currentTarget.getBoundingClientRect().top;
    // let itemList = Array.prototype.filter.call(
    //   e.currentTarget.childNodes,
    //   (node) => node.className === "linktree__childlist-item"
    // );
    const itemList = document.getElementsByClassName("linktree__childlist-item")[0]as HTMLElement;
    itemList.style.display = "block";
    itemList.style.top = targetTop - sLTop + "px";
  };

  const onMouseOutHandler = (e) => {
    console.log(e.currentTarget);
    debugger;
    // let itemList = Array.prototype.filter.call(
    //   e.currentTarget.childNodes,
    //   (node) => node.className === "linktree__childlist-item"
    // );
    let itemList = document.getElementsByClassName("linktree__childlist-item")[0]as HTMLElement;
    itemList.style.display = "none";
  };

  return restaurantDesc === null ? (
    <h2>loading...</h2>
  ) : (
    <div className="rdheader-data">
      <div className="rdheader-info-box">
        <div className="rdheader-subinfo">
          <dl className="rdheader-subinfo__item rdheader-subinfo__item--station">
            <dt className="rdheader-subinfo__item-title">最寄り駅：</dt>
            <dd className="rdheader-subinfo__item-text">
              <div
                className="linktree"
                onMouseOver={onMouseOverHandler}
                onMouseOut={onMouseOutHandler}
              >
                {/* onMouseOver={this.handleBoxToggle} onmouseout="this.className='linktree';"  */}
                <div className="linktree__parent">
                  <a
                    href="https://tabelog.com/tokyo/A1302/A130201/R6586/rstLst/"
                    className="linktree__parent-target"
                  >
                    <span className="linktree__parent-target-text">
                      {restaurantDesc[0].nearbyStation}
                    </span>
                  </a>
                </div>
                <div className="linktree__childbox">
                  <div className="c-balloon c-balloon--top linktree__childbaloon">
                    <ul className="linktree__childlist">
                      <li className="linktree__childlist-item">
                        <a href="https://tabelog.com/tokyo/A1302/A130201/R6586/rstLst/RC040101/">
                          東京駅×韓国料理
                        </a>
                      </li>
                      <li className="linktree__childlist-item">
                        <a href="https://tabelog.com/tokyo/A1302/A130201/R6586/rstLst/yakiniku/">
                          東京駅×焼肉
                        </a>
                      </li>
                      <li className="linktree__childlist-item">
                        <a href="https://tabelog.com/tokyo/A1302/A130201/R6586/rstLst/izakaya/">
                          東京駅×居酒屋
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </dd>
          </dl>
          <div className="rdheader-subinfo__item">
            <div
              className="linktree"
              onMouseOver={onMouseOverHandler}
              onMouseOut={onMouseOutHandler}
            >
              {/* onMouseOver={this.handleBoxToggle} onmouseout="this.className='linktree';"  */}
              <div className="linktree__parent">
                [
                <a
                  href="https://tabelog.com/tokyo/"
                  className="linktree__parent-target"
                >
                  <span className="linktree__parent-target-text">東京</span>
                </a>
                ]
              </div>
              <div className="linktree__childbox">
                <div className="c-balloon c-balloon--top linktree__childbaloon">
                  <ul className="linktree__childlist">
                    <li className="linktree__childlist-item">
                      <a href="https://tabelog.com/tokyo/rstLst/RC040101/">
                        東京×韓国料理
                      </a>
                    </li>
                    <li className="linktree__childlist-item">
                      <a href="https://tabelog.com/tokyo/rstLst/yakiniku/">
                        東京×焼肉
                      </a>
                    </li>
                    <li className="linktree__childlist-item">
                      <a href="https://tabelog.com/tokyo/rstLst/izakaya/">
                        東京×居酒屋
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <dl className="rdheader-subinfo__item">
            <dt className="rdheader-subinfo__item-title">ジャンル：</dt>
            <dd className="rdheader-subinfo__item-text">
              <div
                className="linktree"
                onMouseOver={onMouseOverHandler}
                onMouseOut={onMouseOutHandler}
              >
                {/* onMouseOver={this.handleBoxToggle} onmouseout="this.className='linktree';"  */}
                <div className="linktree__parent">
                  <a
                    href="https://tabelog.com/rstLst/RC040101/"
                    className="linktree__parent-target"
                  >
                    <span className="linktree__parent-target-text">
                      韓国料理
                    </span>
                  </a>
                </div>
                <div className="linktree__childbox">
                  <div className="c-balloon c-balloon--top linktree__childbaloon">
                    <ul className="linktree__childlist">
                      <li className="linktree__childlist-item">
                        <a href="https://tabelog.com/tokyo/A1302/A130201/rstLst/RC040101/">
                          韓国料理×丸の内・大手町
                        </a>
                      </li>
                      <li className="linktree__childlist-item">
                        <a href="https://tabelog.com/tokyo/A1302/rstLst/RC040101/">
                          韓国料理×東京・日本橋
                        </a>
                      </li>
                      <li className="linktree__childlist-item">
                        <a href="https://tabelog.com/tokyo/rstLst/RC040101/">
                          韓国料理×東京
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="linktree"
                onMouseOver={onMouseOverHandler}
                onMouseOut={onMouseOutHandler}
              >
                {/* onMouseOver={this.handleBoxToggle} onmouseout="this.className='linktree';"  */}
                <div className="linktree__parent">
                  <a
                    href="https://tabelog.com/rstLst/yakiniku/"
                    className="linktree__parent-target"
                  >
                    <span className="linktree__parent-target-text">焼肉</span>
                  </a>
                </div>
                <div className="linktree__childbox">
                  <div className="c-balloon c-balloon--top linktree__childbaloon">
                    <ul className="linktree__childlist">
                      <li className="linktree__childlist-item">
                        <a href="https://tabelog.com/tokyo/A1302/A130201/rstLst/yakiniku/">
                          焼肉×丸の内・大手町
                        </a>
                      </li>
                      <li className="linktree__childlist-item">
                        <a href="https://tabelog.com/tokyo/A1302/rstLst/yakiniku/">
                          焼肉×東京・日本橋
                        </a>
                      </li>
                      <li className="linktree__childlist-item">
                        <a href="https://tabelog.com/tokyo/rstLst/yakiniku/">
                          焼肉×東京
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="linktree"
                onMouseOver={onMouseOverHandler}
                onMouseOut={onMouseOutHandler}
              >
                {/* onMouseOver={this.handleBoxToggle} onmouseout="this.className='linktree';"  */}
                <div className="linktree__parent">
                  <a
                    href="https://tabelog.com/rstLst/izakaya/"
                    className="linktree__parent-target"
                  >
                    <span className="linktree__parent-target-text">居酒屋</span>
                  </a>
                </div>
                <div className="linktree__childbox">
                  <div className="c-balloon c-balloon--top linktree__childbaloon">
                    <ul className="linktree__childlist">
                      <li className="linktree__childlist-item">
                        <a href="https://tabelog.com/tokyo/A1302/A130201/rstLst/izakaya/">
                          居酒屋×丸の内・大手町
                        </a>
                      </li>
                      <li className="linktree__childlist-item">
                        <a href="https://tabelog.com/tokyo/A1302/rstLst/izakaya/">
                          居酒屋×東京・日本橋
                        </a>
                      </li>
                      <li className="linktree__childlist-item">
                        <a href="https://tabelog.com/tokyo/rstLst/izakaya/">
                          居酒屋×東京
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </dd>
          </dl>
        </div>
        <div className="rdheader-subinfo">
          <dl className="rdheader-subinfo__item">
            <dt className="rdheader-subinfo__item-title">予算：</dt>
            <dd className="rdheader-subinfo__item-text">
              <div className="rdheader-budget">
                <p className="rdheader-budget__icon rdheader-budget__icon--dinner">
                  <i>夜の予算</i>
                  <span className="rdheader-budget__price">
                    <a
                      href="https://tabelog.com/tokyo/A1302/A130201/13019285/dtlratings/#price-range"
                      className="rdheader-budget__price-target"
                    >
                      {restaurantDesc[0].nightBudget}
                    </a>
                  </span>
                </p>
                <p className="rdheader-budget__icon rdheader-budget__icon--lunch">
                  <i>昼の予算</i>
                  <span className="rdheader-budget__price">
                    <a
                      href="https://tabelog.com/tokyo/A1302/A130201/13019285/dtlratings/#price-range"
                      className="rdheader-budget__price-target"
                    >
                      {restaurantDesc[0].dayBudget}
                    </a>
                  </span>
                </p>
              </div>
            </dd>
          </dl>
          <dl className="rdheader-subinfo__item">
            <dt id="js-closed-label" className="rdheader-subinfo__item-title">
              定休日：
            </dt>
            <dd id="short-comment" className="rdheader-subinfo__closed-text">
              {restaurantDesc[0].restDay}{" "}
            </dd>
          </dl>
        </div>

        <div className="rdheader-subinfo">
          <div className="rdheader-gte">
            <a
              target="_blank"
              rel="noopener"
              className="js-analytics rdheader-gte__target"
              data-analytics-btn=":gotoeat_icon"
              data-analytics-add-page-prefix="true"
              href="https://tabelog.com/go-to-eat/"
            >
              {" "}
              <img
                alt="Go To Eat"
                width="47"
                height="12"
                className="rdheader-gte__img loading"
                src="https://tblg.k-img.com/images/restaurant/icon/badge_gotoeat_logo.png"
                data-was-processed="true"
              />
              <span className="rdheader-gte__txt">ポイント使える</span>
            </a>{" "}
          </div>
        </div>

        <div className="rdheader-go-rstinfo">
          <a className="js-go-rstinfo" href="#title-rstdata">
            店舗情報（詳細）
          </a>
        </div>
      </div>
    </div>
  );
};
