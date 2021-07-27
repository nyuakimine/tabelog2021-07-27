import React from "react";
import "../../pages/newBeeMallDetail/newBeeMallDetail.css";
import { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
interface ifProps {
    goodsId: number;
    path: string;
  }
  interface pIf {
    data: ifProps[];
  }


export const GoodsDescDetail: React.FC = () => {

    const desc = useSelector((state: RootState) => state.leftImg.counter);
    const dispatch = useDispatch();
  return (
    <section className="g-block-sm p-spec" id="js-product-spec">
      <h2 className="g-h-2 g-h-i p-hd">
        <i className="g-s g-s-size" aria-hidden="true"></i>
        <span>仕様・サイズ</span>
      </h2>
      <div id="p-specMore" aria-hidden="false" data-accordion-more="">
        <ul className="g-flow-lg g-flow-half g-unit js-sku-manuals p-sku-manuals"></ul>
        <table className="g-table-a js-sku-specs">
          <tbody>
            <tr>
              <th>商品コード</th>
              <td>10700</td>
            </tr>
            <tr>
              <th>カラー</th>
              <td>黑色</td>
            </tr>
            <tr>
              <th>サイズ</th>
              <td> 77.3mm*163.5mm*8.8mm</td>
            </tr>
            <tr>
              <th>素材</th>
              <td> LCD</td>
            </tr>
            <tr>
              <th>重量</th>
              <td> 196.8g</td>
            </tr>
            <tr>
              <th>保証年数</th>
              <td> 3年</td>
            </tr>
            <tr>
              <th>組立時間</th>
              <td> 3分</td>
            </tr>
            <tr>
              <th>梱包サイズ</th>
              <td>30cm*50cm</td>
            </tr>
            <tr>
              <th>原産国</th>
              <td>中国</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        className="g-foot-v g-foot-sm"
        style={{ "display: none": AnalyserNode } as React.CSSProperties}
      >
      </div>
    </section>
  );
};
