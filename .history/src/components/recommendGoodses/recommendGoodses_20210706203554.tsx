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
}

export const RecommendGoodses: React.FC<props2> = ({ recommendGoodses }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNewAndRecommendGoodsesDataActionCreator());
  }, []);

  return recommendGoodses === undefined?(<h2>recommendGoodses</h2>):(
    <div id="recommend">
      <h2>为你推荐</h2>
      <a href="##" className="more">
        查看更多{">>"}
      </a>
      <ul>
        {recommendGoodses.map((goods) => {
          //console.log(goods);
          return (
            <li>
              <a
                href={`http://localhost:8081/goods/detail/goodsId=${goods.goodsId}`}
              >
                <div className="info discount">{goods.tag}</div>
                <img
                  src={`http://localhost:8081/${goods.goodsCoverImg}`}
                  alt={goods.goodsName}
                ></img>
                <p className="item_price">{goods.sellingPrice}</p>
                <p className="counter">{goods.goodsName}</p>
                {/* <p className="discount">{goods.goodsIntro}</p> */}
             
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
