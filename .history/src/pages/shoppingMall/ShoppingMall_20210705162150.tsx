import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchCategoriesDataActionCreator } from "../../redux/shoppingMall/fetchCategoriesActions";
import { fetchHotGoodsesDataActionCreator } from "../../redux/shoppingMall/fetchHotGoodsesActions";
import { RootState } from "../../redux/store";
//import { CategoriesState } from "../../redux/shoppingMall/fetchCategoriesReducer";
import "./ShoppingMall.css";
import { FirstComponent } from "./FirstComponent";
import { Carousel } from "../../components/NewBeeCarousel";
import { HotGoodses} from "../../components/hotGoodses";

export const ShoppingMall: React.FC = () => {
  let categories: any = useSelector((s: RootState) => s.categories);
  let loading = categories.loading;
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("in shoppngMall.tsx file ");
    dispatch(fetchCategoriesDataActionCreator());
  }, []);

  let hotGoodses: any = useSelector((s: RootState) => s.hotGoodses);
  //let loading = hotGoodses.loading;
  const dispatch1 = useDispatch();
  useEffect(() => {
    dispatch1(fetchHotGoodsesDataActionCreator());
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
    <div id="content">
      <div id="banner">
        <div className="all-sort-list">
          {categories.error != null
            ? "error"
            : categories.categoryList.data.map((category, index) => {
                return (
                  <FirstComponent
                    onMouseOverHandler={onMouseOverHandler}
                    onMouseOutHandler={onMouseOutHandler}
                    category={category}
                    index={index}
                  ></FirstComponent>
                );
              })}
        </div>
        <Carousel></Carousel>
      </div>
     <HotGoodses>
         {/* {hotGoodses.hotGoodseList.data.map((goodsId) => {
          //console.log(img);
          return (
            <a href={`http://localhost:8081/goods/detail/goodsId=${goodsId}`}>     
              <img src={goodsId.goodsCoverImg} alt={goodsId.goodsName} />
            </a>
          );
        })} */}
     </HotGoodses>
    </div>
  );
};
