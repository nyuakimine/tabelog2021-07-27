import React, { useEffect } from "react";
import "../../pages/newBeeMallDetail/newBeeMallDetail.css";
import { RootState } from "../../redux/store";
import { fetchDescDataActionCreator } from "../../redux/descSlice/fetchDescListSlice";
import { useSelector, useDispatch } from "react-redux";
import { RouteComponentProps, useParams } from "react-router-dom";
interface ifProps {
  goodsId: number;
  color: string;
  size: string;
  material: string;
  weight: string;
  warrantyYear: string;
  setDate: string;
  warpSize: string;
}
interface pIf {
  data: ifProps[];
}
// interface MatchParams {
//   goodsId: string;
// }
    export const GoodsDescDetail: React.FC<pIf> = ({data}) => {
  console.log("xxxxxxdata", data);

  
  //const desc = useSelector((state: RootState) => state.descSlice.data)[0] as ifProps;
//   const { goodsId } = useParams<MatchParams>();
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchDescDataActionCreator(goodsId));
//   }, []);
  return data === null ? (
    <h2>loading...</h2>
  ) : (
    <section className="g-block-sm p-spec" id="js-product-spec">
      <h2 className="g-h-2 g-h-i p-hd">
        <i className="g-s g-s-size" aria-hidden="true"></i>
        <span>仕様・サイズ</span>
      </h2>
      <div id="p-specMore" aria-hidden="false" data-accordion-more="">
        <ul className="g-flow-lg g-flow-half g-unit js-sku-manuals p-sku-manuals"></ul>
        <table className="g-table-a js-sku-specs">
          {/* {data.map((goods, idx) => { */}
          {/* //console.log(goods); */}
          {/* return (  */}
          <tbody>
            <tr>
              <th>商品コード</th>
              <td>{data[0].goodsId}</td>
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
          {/* );
            })}  */}
        </table>
      </div>

      <div
        className="g-foot-v g-foot-sm"
        style={{ "display: none": AnalyserNode } as React.CSSProperties}
      ></div>
    </section>
  );
};
