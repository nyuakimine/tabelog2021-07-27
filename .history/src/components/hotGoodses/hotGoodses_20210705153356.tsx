import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { fetchHotGoodsesDataActionCreator } from "../../redux/shoppingMall/fetchHotGoodsesActions";
import "../../pages/shoppingMall/ShoppingMall.css";

interface Props {
  ids: any;
}

export const HotGoodses: React.FC<Props> = ({ ids }) => {
  let hotGoodses: any = useSelector((s: RootState) => s.hotGoodses);
  let loading = hotGoodses.loading;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHotGoodsesDataActionCreator());
  }, []);

  return (
    <div id="sub_banner" key={ids}>
      <div className="hot-image">
        {hotGoodses.hotGoodseList.data.map((goodsId) => {
          //console.log(img);
          return (
            <a href={`http://localhost:8081/goods/detail/goodsId=${goodsId}`}>
                
              <img src={goodsId.goodsCoverImg} alt={goodsId.goodsName} />
            </a>
          );
        })}
      </div>
    </div>
  );
};
