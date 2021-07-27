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
interface props {
    newGoodses: isProps[];
}

export const NewGoods: React.FC<props> = ({ newGoodses }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNewAndRecommendGoodsesDataActionCreator());
  }, []);
  return newGoodses === undefined?(<h2>newGoodses</h2>):(
    <div id="flash">
      <h2>新品上线</h2>
      <ul>
        {newGoodses.map((goods) => {
          return (
            <li className="liDisplaynone">
              <a
                href={`http://localhost:8081/goods/detail/goodsId=${goods.goodsId}`}
              >
                <img
                  src={`http://localhost:8081/${goods.goodsCoverImg}`}
                  alt={goods.goodsName}
                ></img>
                <p className="name">{goods.goodsName}</p>
                <p className="discount">{goods.goodsIntro}</p>
                <p className="item_price">{goods.sellingPrice}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
