import React from "react";
import { EmComponent } from "./EmComponent";
interface ifProps {
  categoryName: string;
  Idx: number;
  vos2: any;
}

export const SecondComponent: React.FC<ifProps> = ({ categoryName, Idx ,vos2}) => {
  return (
    <dl className="fore1" key={Idx}>
      <dt>{categoryName}</dt>
      <dd>
        {vos2.thirdLevelCategoryVOS.map((vos3, thirdIdx,index3) => {
          return (
            <EmComponent
          key={index3}
              idx={thirdIdx}
              categoryId={vos3.categoryId}
              categoryName={vos3.categoryName}
            ></EmComponent>
          );
        })}
      </dd>
    </dl>
  );
};
