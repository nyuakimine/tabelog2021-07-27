import React from "react";

interface ifProps {
  categoryName: string;
  idx: number;
  categoryId: number;
  goodsId: number;
}

export const EmComponent: React.FC<ifProps> = ({
  categoryName,
  idx,
  categoryId,
  goodsId
}) => {
  return (
    <div id="sub_banner">
      <div className="hot-image">
        <a href={`http://localhost:8081/goods/detail/goodsId=${goodsId}`}>
            
          <img
            src="${hotGoodses.goodsCoverImg}"
            alt="${hotGoodses.goodsName}"
          />
        </a>
      </div>
    </div>
  );
};
