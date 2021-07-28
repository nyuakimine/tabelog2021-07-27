import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DetailTitle } from "../../components/detailTitle/DetailTitle";
import { RestaurantDesc } from "../../components/restaurantDesc";

import "./tabelog1.css";
import "./tabelog2.css";
//import {detailTitleListSlice} from "../../redux/detailTitle/fetchDetailTitleListSlice"

export const Sidebar: React.FC = () => {

  return (
    <div id="container">
      <div>
        <div id="rstdtl-head" className="rstdtl-header-wrap">
          <div className="rstdtl-header">
            <section className="rdheader-info-wrap pillow-header">
              <div className="owner-badge">
                <p className="owner-badge__icon">公式</p>
                <div className="owner-badge__tooltip-frame">
                  <div className="c-tooltip-bordered c-tooltip-bordered--bottom owner-badge__ex">
                    <p>お店の営業情報は店舗関係者によって公開されています。</p>
                  </div>
                </div>
              </div>
              <div className="rdheader-go-hygiene">
                <a
                  className="rdheader-go-hygiene__text js-scroll-to-sanitation js-analytics"
                  data-analytics-btn="sanitations_information_icon"
                  href="#hygiene-data"
                >
                  感染症対策
                </a>
              </div>
              <DetailTitle></DetailTitle>
              <RestaurantDesc></RestaurantDesc>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
