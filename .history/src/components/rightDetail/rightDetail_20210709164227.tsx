import React from "react";
import "../../pages/newBeeMallDetail/newBeeMallDetail.css";

export const RightDetail: React.FC = () => {
  return (
    <div className="right fr">
      <div className="h3 ml20 mt20">荣耀8X 千元屏霸 91%屏占比 2000万AI双摄</div>
      <div className="sub_title mr40 ml20 mt10">
        4GB+64GB 魅焰红 移动联通电信4G全面屏手机 双卡双待
      </div>
      <div className="item_price mr40 ml20 mt10">
         999.00 元
        <del> 1399.00 元</del>
      </div>
      <div className="order">
        <input className="car" type="button" value="立即选购" />
        <input className="car" type="button" value="加入购物车" />
      </div>
      <div className="tb-extra ml20" id="J_tbExtra">
        <dl>
          <dt>承诺</dt>
          <dd>
            <a
              className="J_Cont"
              title="满足7天无理由退换货申请的前提下，包邮商品需要买家承担退货邮费，非包邮商品需要买家承担发货和退货邮费。"
              href="#"
              target="_blank"
            >
              <img src="http://localhost:8081/mall/image/7d.jpg" />
              7天无理由
            </a>
          </dd>
        </dl>
        <dl>
          <dt>支付</dt>
          <dd>
            <a href="##" target="_blank">
              <img src="@http://localhost:8081/mall/image/hua.png" />
              蚂蚁花呗
            </a>
            <a href="##" target="_blank">
              <img src="http://localhost:8081/mall/image/card.png" />
              信用卡支付
            </a>
            <a href="##" target="_blank">
              <img src="http://localhost:8081/mall/image/ji.png" />
              集分宝
            </a>
          </dd>
        </dl>
        <dl>
          <dt>支持</dt>
          <dd>
            折旧变现，买新更省钱。
            <a
              style={
                {
                  "float:none": "text-decoration: underline",
                } as React.CSSProperties
              }
              href="##"
            >
              详情
            </a>
          </dd>
        </dl>
      </div>
    </div>
  );
};
