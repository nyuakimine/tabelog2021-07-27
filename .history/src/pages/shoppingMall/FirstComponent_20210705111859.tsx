import React from "react";
import { SecondComponent } from "./SecondComponent";
interface ifProps {
  onMouseOverHandler: any;
  onMouseOutHandler: any;
  category: any;
  index: string;
}

export const FirstComponent: React.FC<ifProps> = ({
  index,
  onMouseOverHandler,
  onMouseOutHandler,
  category,
}) => {
  return (
    <div
      key={index}
      className="item"
      onMouseOver={onMouseOverHandler}
      onMouseOut={onMouseOutHandler}
    >
      <h3>
        <span>·</span>
        <a href="##">{category.categoryName}</a>
      </h3>
      <div className="item-list">
        <div className="subitem">
          {category.secondLevelCategoryVOS.map((vos2, secondIdx) => {
            return (
              <SecondComponent
                Idx={secondIdx}
                categoryName={vos2.categoryName}
                vos2={vos2}
              ></SecondComponent>
            );
          })}
        </div>
      </div>
    </div>
  );
};
