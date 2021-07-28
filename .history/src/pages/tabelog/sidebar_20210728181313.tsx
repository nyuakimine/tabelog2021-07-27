import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DetailTitle } from "../../components/detailTitle/DetailTitle";
import { RestaurantDesc } from "../../components/restaurantDesc";

import "./tabelog1.css";
import "./tabelog2.css";

export const Sidebar: React.FC = () => {

  return (
    <div id="rstdtl-navi-wrap" className="js-floating-rstdtl-navi rstdtl-navi">
  <div className="rstdtl-navi__wrap">
    <div className="rstdtl-navi__position-set rstdtl-navi__position-set--top">
      <div className="rstdtl-navi__inner">
        <ul id="rdnavi-list" className="rstdtl-navi__list rstdtl-navi__list--top rdnavi-catalyst-top">
          <li id="rdnavi-top" className="rstdtl-navi__list-item is-selected js-rstdtl-navi-list-item">
            <a href="https://tabelog.com/tokyo/A1302/A130201/13019285/" className="mainnavi">
              <span>トップ</span>
            </a>
          </li>

            <li id="rdnavi-table" className="rstdtl-navi__list-item js-rstdtl-navi-list-item">
              <a href="https://tabelog.com/tokyo/A1302/A130201/13019285/table/" className="mainnavi">
                <span>座席</span>
              </a>
            </li>

          <li id="rdnavi-menu" className="rstdtl-navi__list-item js-rstdtl-navi-list-item">
            <div className="rstdtl-navi__list-item-inner">
              <a className="mainnavi" href="https://tabelog.com/tokyo/A1302/A130201/13019285/party/"><span>メニュー・コース</span></a>
              <ol className="js-rstdtl-navi-sublist rstdtl-navi__sublist party-menu">
                <li className="rstdtl-navi__sublist-item">
                    <a href="https://tabelog.com/tokyo/A1302/A130201/13019285/party/"><span className="rstdtl-navi__sublist-item-genre"> コース<span className="rstdtl-navi__sublist-item-count">(<em>4</em>)</span></span></a>
                </li>
                <li className="rstdtl-navi__sublist-item">
                    <a href="https://tabelog.com/tokyo/A1302/A130201/13019285/dtlmenu/">
                      <span className="rstdtl-navi__sublist-item-genre">料理<span className="rstdtl-navi__sublist-item-count">(<em>100</em>)</span></span>                    </a>
                </li>
                <li className="rstdtl-navi__sublist-item">
                    <div className="rstdtl-navi__sub-nolink">
                      <span className="rstdtl-navi__sublist-item-genre">ドリンク<span className="rstdtl-navi__sublist-item-count">(<em>0</em>)</span></span>                    </div>
                </li>
                <li className="rstdtl-navi__sublist-item">
                    <a href="https://tabelog.com/tokyo/A1302/A130201/13019285/dtlmenu/lunch/">
                      <span className="rstdtl-navi__sublist-item-genre">ランチ<span className="rstdtl-navi__sublist-item-count">(<em>44</em>)</span></span>                    </a>
                </li>
                <li className="rstdtl-navi__sublist-item">
                    <a href="https://tabelog.com/tokyo/A1302/A130201/13019285/dtlmenu/photo/">
                      <span className="rstdtl-navi__sublist-item-genre">写真<span className="rstdtl-navi__sublist-item-count">(<em>71</em>)</span></span>                    </a>
                </li>
              </ol>
            </div>
          </li>

          <li id="rdnavi-photo" className="rstdtl-navi__list-item js-rstdtl-navi-list-item">
            <div className="rstdtl-navi__list-item-inner">
              <a className="mainnavi" href="https://tabelog.com/tokyo/A1302/A130201/13019285/dtlphotolst/smp2/"><span>写真</span><span className="rstdtl-navi__total-count"><strong>518</strong></span></a>
              <ol className="js-rstdtl-navi-sublist rstdtl-navi__sublist">
                <li className="rstdtl-navi__sublist-item">
                    <a href="https://tabelog.com/tokyo/A1302/A130201/13019285/dtlphotolst/smp2/" id="photo-except-other">
                      <span className="rstdtl-navi__sublist-item-genre">すべて<span className="rstdtl-navi__sublist-item-count">(<em>518</em>)</span></span>                    </a>
                </li>
                <li className="rstdtl-navi__sublist-item">
                    <a href="https://tabelog.com/tokyo/A1302/A130201/13019285/dtlphotolst/1/smp2/" id="food-photo">
                      <span className="rstdtl-navi__sublist-item-genre">料理<span className="rstdtl-navi__sublist-item-count">(<em>419</em>)</span></span>                    </a>
                </li>
                <li className="rstdtl-navi__sublist-item">
                    <a href="https://tabelog.com/tokyo/A1302/A130201/13019285/dtlphotolst/7/smp2/">
                      <span className="rstdtl-navi__sublist-item-genre">ドリンク<span className="rstdtl-navi__sublist-item-count">(<em>23</em>)</span></span>                    </a>
                </li>
                <li className="rstdtl-navi__sublist-item">
                    <a href="https://tabelog.com/tokyo/A1302/A130201/13019285/dtlphotolst/3/smp2/">
                      <span className="rstdtl-navi__sublist-item-genre">内観<span className="rstdtl-navi__sublist-item-count">(<em>18</em>)</span></span>                    </a>
                </li>
                <li className="rstdtl-navi__sublist-item">
                    <a href="https://tabelog.com/tokyo/A1302/A130201/13019285/dtlphotolst/4/smp2/" id="exterior-photo">
                      <span className="rstdtl-navi__sublist-item-genre">外観<span className="rstdtl-navi__sublist-item-count">(<em>33</em>)</span></span>                    </a>
                </li>
                <li className="rstdtl-navi__sublist-item">
                    <a href="https://tabelog.com/tokyo/A1302/A130201/13019285/dtlphotolst/5/smp2/" id="other-photo">
                      <span className="rstdtl-navi__sublist-item-genre">その他</span>                    </a>
                </li>
              </ol>
            </div>
          </li>

          <li id="rdnavi-review" className="rstdtl-navi__list-item js-rstdtl-navi-list-item">
            <div className="rstdtl-navi__list-item-inner">
              <a className="mainnavi" href="https://tabelog.com/tokyo/A1302/A130201/13019285/dtlrvwlst/"><span>口コミ</span><span className="rstdtl-navi__total-count"><em>125</em></span></a>
              <ol className="js-rstdtl-navi-sublist rstdtl-navi__sublist">
                <li className="rstdtl-navi__sublist-item">
                    <a href="https://tabelog.com/tokyo/A1302/A130201/13019285/dtlrvwlst/" id="review">
                      <span className="rstdtl-navi__sublist-item-genre">口コミ<span className="rstdtl-navi__sublist-item-count">(<em>125</em>)</span></span>                    </a>
                </li>
                  <li className="rstdtl-navi__sublist-item">
                    <a href="https://tabelog.com/tokyo/A1302/A130201/13019285/dtlratings/" id="rating">
                      <span className="rstdtl-navi__sublist-item-genre">評価</span>
                    </a>
                  </li>
              </ol>
            </div>
          </li>



          <li id="rdnavi-coupon" className="rstdtl-navi__list-item js-rstdtl-navi-list-item">
            <div className="rstdtl-navi__list-item-inner">
              <div className="rstdtl-navi__ribbon"></div>
              <a data-analytics-alliance="" className="mainnavi js-analytics" href="https://tabelog.com/tokyo/A1302/A130201/13019285/dtlmap/"><span>クーポン・地図</span></a>
              <ol className="js-rstdtl-navi-sublist rstdtl-navi__sublist">
                <li className="rstdtl-navi__sublist-item">
                  <a data-analytics-alliance="" href="https://tabelog.com/tokyo/A1302/A130201/13019285/dtlmap/"> <span className="rstdtl-navi__sublist-item-genre"><span className="new-window">クーポン・地図</span></span></a>
                </li>
                  <li className="rstdtl-navi__sublist-item">
                      <a href="https://tabelog.com/tokyo/A1302/A130201/13019285/peripheral_map/">
                        <span className="rstdtl-navi__sublist-item-genre">周辺のお店</span>
                      </a>
                  </li>
              </ol>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
  );
};
