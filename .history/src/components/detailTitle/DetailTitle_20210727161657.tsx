import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDetailTitleDataActionCreator } from "../../redux/detailTitle/fetchDetailTitleListSlice";
import "../../pages/tabelog/tabelog1.css";
import "../../pages/tabelog/tabelog2.css";
import "./star.css";
import { RootState } from "../../redux/store";

export const DetailTitle: React.FC = () => {
  const tabelog = useSelector(
    (state: RootState) => state.detailTitleListSlice.data
  );

  useEffect(() => {

    const ratings = {
      hotel_a: 2,
    };
   // console.log("starstarstar", ratings);

    // total number of stars
    const starTotal = 5;

    for (const rating in ratings) {
      debugger;
      const starPercentage = (ratings[rating] / starTotal) * 100;
      const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
      // const formRef = useRef(null as HTMLElement | null);
      const showStar = document.querySelector(
        `.${rating} .stars-inner`
      ) as HTMLElement;
      showStar.style.width = starPercentageRounded;
    }
  }, [tabelog]);
    
  // function Star({ marked, starId }) {
  //   return (
  //     <span star-id={starId} style={{ color: "#ff9933" }} role="button">
  //       {/* 空星，实星 */}
  //       {marked ? "\u2605" : "\u2606"}
  //     </span>
  //   );
  // }
  // function StarRating(props) {
  //   const HandleOptionChange = (event: React.MouseEvent<HTMLLIElement>) => {
  //     const el = event.target as HTMLLIElement;
  //     return setRating(el.getAttribute("star-id") || rating);
  //   };
  //   // 分数显示
  //   const [rating, setRating] = React.useState(
  //     typeof props.rating == "number" ? props.rating : 0
  //   );
  //   // 鼠标移入效果
  //   const [selection, setSelection] = React.useState(0);
    // const hoverOver = (event) => {
    //   let val = 0;
    //   if (event && event.target && event.target.getAttribute("star-id"))
    //     val = event.target.getAttribute("star-id");
    //   setSelection(val);
    // };

    // 鼠标移入效果
    // onMouseOut={() => hoverOver(null)}
    // // 点击选中分数
    // onClick={() => HandleOptionChange}
    // //onClick={() => this.fetchData("dfd")}
    // onMouseOver={hoverOver}
  //   return (
  //     <div>
  //       {/* 创建5个组件 */}
  //       {Array.from({ length: 5 }, (v, i) => (
  //         <Star
  //           starId={i + 1}
  //           key={`star_${i + 0.5} `}
  //           marked={selection ? selection >= i + 0.5 : rating >= i + 0.5}
  //         />
  //       ))}
  //     </div>
  //   );
  // }

  return tabelog === null ? (
    <h2>loading...</h2>
  ) : (
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
            <span>{tabelog[0].name}</span>
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
                <i>

                   <table>
                    <tbody>
                      <tr className="hotel_a">
                        <td>
                          <div className="stars-outer">
                            <div className="stars-inner"></div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <a className="attribution" href="http://fontawesome.io/">
                    <i className="fa fa-font-awesome"></i> fontawesome.io
                  </a>
                  {/* <StarRating rating={tabelog[0].score} /> */}
                </i>
                <b className="c-rating__val rdheader-rating__score-val">
                  {/* rel="v:rating" */}
                  <span className="rdheader-rating__score-val-dtl">
                    {tabelog[0].score}
                  </span>
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
                  <i>口コミ</i> <em className="num">{tabelog[0].commentNum}</em>{" "}
                  <span className="unit">件</span>
                </a>{" "}
              </span>
            </span>
          </li>
          <li className="rdheader-counts__item">
            <span className="rdheader-rating__hozon">
              <span className="rdheader-rating__hozon-target">
                <i>保存</i> <em className="num">{tabelog[0].saveNum}</em>{" "}
                <span className="unit">件</span>{" "}
              </span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
