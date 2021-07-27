import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchCategoriesDataActionCreator } from "../../redux/shoppingMall/fetchCategoriesAstions";
import { RootState } from "../../redux/store";
import { CategoriesState } from "../../redux/shoppingMall/fetchCategoriesReducer";
import "./ShoppingMall.css";
import { EmComponent } from "./EmComponent";
import { Col } from "antd";
//import { Carousel } from "../../components/NewBeeCarousel";

export const ShoppingMall: React.FC = () => {
  let categories: any = useSelector((s: RootState) => s.categories);
  let loading = categories.loading;
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("in shoppngMall.tsx file ");
    dispatch(fetchCategoriesDataActionCreator());
  }, []);

  const onMouseOverHandler = (e) => {
    console.log(e.currentTarget);

    const sortList = document.getElementsByClassName("all-sort-list")[0];
    const sLTop = sortList.getBoundingClientRect().top;
    const targetTop = e.currentTarget.getBoundingClientRect().top;
    let itemList = Array.prototype.filter.call(
      e.currentTarget.childNodes,
      (node) => node.className === "item-list"
    ); //filter(node => node.className ==="item-list");
    itemList[0].style.display = "block";
    itemList[0].style.top = targetTop - sLTop + "px";
  };

  const onMouseOutHandler = (e) => {
    console.log(e.currentTarget);
    //if(e.target.className === e.currentTarget.className){
    let itemList = Array.prototype.filter.call(
      e.currentTarget.childNodes,
      (node) => node.className === "item-list"
    );
    itemList[0].style.display = "none";
  };

  return categories.loading === true ? (
    <h1>"loading"</h1>
  ) : (
    <div>
      <div id="banner">
        <div className="all-sort-list">
          {categories.error != null
            ? "error"
            : categories.categoryList.data.map((category, index) => {
                return (
                  <div
                    key={index}
                    className="item"
                    onMouseOver={onMouseOverHandler}
                    onMouseOut={onMouseOutHandler}
                  >
                    <h3>
                      <span>·</span>
                      <a href="##">{category.categoryName}</a>
                    </h3>
                    <div className="item-list">
                      <div className="subitem">
                        {category.secondLevelCategoryVOS.map(
                          (vos2, secondIdx) => {
                            return (
                              <dl className="fore1" key={secondIdx}>
                                <dt>{vos2.categoryName}</dt>
                                <dd>
                                  {vos2.thirdLevelCategoryVOS.map(
                                    (vos3, thirdIdx) => {
                                      return (
                                        <EmComponent
                                          idx={thirdIdx}
                                          categoryId={vos3.categoryId}
                                          categoryName={vos3.categoryName}
                                        ></EmComponent>
                                      );
                                    }
                                  )}
                                </dd>
                              </dl>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
        {/* <div className="swiper-slide">
          <Col span={18}>
            <Carousel />
          </Col>
        </div> */}
      </div>
    </div>
  );
};
{
  /* <div className="swiper-container fl">
<div className="swiper-wrapper">
    <!-- 配置了轮播图则显示后台配置的轮播图 -->
   
            <div className="swiper-slide">
                <a th:href="@{${carousel.redirectUrl}}">
                    <img th:src="@{${carousel.carouselUrl}}" alt="">
                </a>
            </div> 
    <!-- 未配置轮播图则显示默认的三张轮播图 -->  
        <div className="swiper-slide">
            <img src="./mall/image/swiper/banner01.jpg" alt="">
        </div>
        <div className="swiper-slide">
            <img src="./mall/image/swiper/banner02.jpg" alt="">
        </div>
        <div className="swiper-slide">
            <img src="./mall/image/swiper/banner03.jpg" alt="">
        </div> 
</div>
<div className="swiper-pagination"></div>
<div className="swiper-button-prev"></div>
<div className="swiper-button-next"></div>
</div> */
}
