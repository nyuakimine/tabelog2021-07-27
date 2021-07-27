import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchHotGoodsesDataActionCreator } from "../../redux/shoppingMall/fetchHotGoodsesActions";
import "../../pages/shoppingMall/ShoppingMall.css";

interface ifProps {
  goodsId: number;
  goodsName: string;
  goodsIntro: string;
  goodsCoverImg: string;
  sellingPrice: BigInteger;
  tag: string;
}
interface pIf {
  data: ifProps[];
  idx6: number;
 // idx1:number;
}
export const HotGoodses: React.FC<pIf> = ({ data ,idx6}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHotGoodsesDataActionCreator());
  }, []);
  return data === undefined?(<h2>data</h2>): (
    <div id="sub_banner" key={idx6}>
      {data.map((goods,idxc) => {
        console.log(idxc);
        return (
          <div className="hot-image" key={idxc}>
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
