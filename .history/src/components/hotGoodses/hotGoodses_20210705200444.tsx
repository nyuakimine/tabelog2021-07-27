import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { fetchHotGoodsesDataActionCreator } from "../../redux/shoppingMall/fetchHotGoodsesActions";
import "../../pages/shoppingMall/ShoppingMall.css";

interface ifProps {
  goods: string;
}
export const HotGoodses: React.FC<ifProps> = () => {
  let hotGoodses: any = useSelector((s: RootState) => s.hotGoodses);
  // let loading = hotGoodses.loading;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHotGoodsesDataActionCreator());
  }, []);

  return (
    <div id="sub_banner">
      {hotGoodses.hotGoodseList.data.map((goods) => {
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
