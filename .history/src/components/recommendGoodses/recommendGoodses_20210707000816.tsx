import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchNewAndRecommendGoodsesDataActionCreator } from "../../redux/shoppingMall/fetchNewAndRecommendGoodsesActions";
import "../../pages/shoppingMall/ShoppingMall.css";

interface isProps {
  goodsId: number;
  goodsName: string;
  goodsIntro: string;
  goodsCoverImg: string;
  sellingPrice: BigInteger;
  tag: string;
}
interface props2 {
  recommendGoodses: isProps[];
  //idxza: number;
}

export const RecommendGoodses: React.FC<props2> = ({
  recommendGoodses,
  //idxza,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNewAndRecommendGoodsesDataActionCreator());
  }, []);

  return recommendGoodses === undefined ? (
    <h2>recommendGoodses</h2>
  ) : (
    <div id="recommend" >
      <h2>为你推荐</h2>
      <a href="##" className="more">
        查看更多{">>"}
      </a>
      <ul>
        {recommendGoodses.map((goods, idxza) => {
          //console.log(goods);
          return (
            <li key={idxza}>
              <a
                href={`http://localhost:8081/goods/detail/goodsId=${goods.goodsId}`}
              >
                <div className="info discount">{goods.tag}</div>
                <img
                  src={`http://localhost:8081/${goods.goodsCoverImg}`}
                  alt={goods.goodsName}
                ></img>
                <p className="name">{goods.goodsName}</p>
                <p className="item_price">{goods.sellingPrice}</p>
                <p className="counter">猜你喜欢</p>
                <div className="comment">
                  <p>新蜂精选</p>
                  <p>好物也可以不贵</p>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
