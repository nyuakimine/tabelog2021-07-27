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
    data: isProps[];
  }

  export const RecommendGoodses: React.FC<props2> = ({ data }) => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchNewAndRecommendGoodsesDataActionCreator());
    }, []);
  
    return (
      <div id="sub_banner">
        {data.map((goods) => {
          console.log(goods);
          return (
            <div className="hot-image">
              <a
                href={`http://localhost:8081/goods/detail/goodsId=${goods.goodsId}`}
              >               
                <img
                  src={`http://localhost:8081/${goods.goodsCoverImg}`}
                  alt={goods.goodsName}
                />
              </a>
            </div>
          );
        })}
      </div>
    );
  };
  