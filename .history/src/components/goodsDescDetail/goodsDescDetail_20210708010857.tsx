import React from "react";
import "../../pages/newBeeMallDetail/newBeeMallDetail.css";


export const GoodsDescDetail: React.FC= () => {
 
  return (
    <section className="g-block-sm p-spec" id="js-product-spec">
    <h2 className="g-h-2 g-h-i p-hd"><i className="g-s g-s-size" aria-hidden="true"></i><span>仕様・サイズ</span></h2>
    <div id="p-specMore" aria-hidden="false" data-accordion-more="">
        <ul className="g-flow-lg g-flow-half g-unit js-sku-manuals p-sku-manuals">
        </ul>
        <table className="g-table-a js-sku-specs">
            <tbody>
                <tr>
                    <th>商品コード</th>
                    <td></td>
                </tr>
                <tr>
                    <th>カラー</th>
                    <td></td>
                </tr>
                <tr>
                    <th>サイズ</th>
                    <td></td>
                </tr>
                <tr>
                    <th>素材</th>
                    <td ></td>
                </tr>
                <tr>
                    <th>重量</th>
                    <td></td>
                </tr>
                <tr>
                    <th>保証年数</th>
                    <td></td>
                </tr>
                <tr>
                    <th>組立時間</th>
                    <td></td>
                </tr>
                <tr>
                    <th>梱包サイズ</th>
                    <td></td>
                </tr>
                <tr>
                    <th>原産国</th>
                    <td>中国</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div className="g-foot-v g-foot-sm" style={{'display: none':AnalyserNode}as React.CSSProperties}>
        <p className="g-align-tc">
            <a className="g-btn g-btn-w-md displaymorespec" href="#p-specMore" role="button"
                aria-expanded="true" aria-controls="p-specMore" data-label="閉じる"
                data-accordion="{&quot;scroll&quot;:false}">
                <span>仕様・サイズをもっと見る</span>
                <i className="g-i g-i-arrow-d" aria-hidden="true"></i>
            </a>
        </p>
    </div>

</section>
   
  )
};
