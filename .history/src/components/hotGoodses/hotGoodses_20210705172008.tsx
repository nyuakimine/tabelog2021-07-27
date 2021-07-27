import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { fetchHotGoodsesDataActionCreator } from "../../redux/shoppingMall/fetchHotGoodsesActions";
import "../../pages/shoppingMall/ShoppingMall.css";

interface ifProps {
    goods: string;
 
    }

export const HotGoodses: React.FC <ifProps>= () => {
  let hotGoodses: any = useSelector((s: RootState) => s.hotGoodses);
 // let loading = hotGoodses.loading;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHotGoodsesDataActionCreator());
  }, []);

  return (
    <div id="sub_banner">
      <div className="hot-image">
        {hotGoodses.hotGoodseList.data.map((goods) => {
          console.log(goods);
          return (
            <a href={`http://localhost:8081/goods/detail/goodsId=${goods.goodsId}`}>     
              <img src={goods.goodsCoverImg} alt={goods.goodsName} />
            </a>
          );
        })} 
      </div>
    </div>
  );
};
