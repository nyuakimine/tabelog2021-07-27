import React, { useEffect, useRef, useState } from "react";
import "../tabelog1.css";
import "../tabelog2.css";
import "./img.css";
import { Spin } from "antd";
import { decrement, increment } from "./imgSlice";
import { RootState } from "../../../redux/store";
import { useSelector, useDispatch } from "react-redux";

interface ifProps {
    id: number;
    imgPath: string;
  }
  interface pIf {
    data: ifProps[];
  }

export const TopImg: React.FC<pIf> = (data) => {
    const count = useSelector((state: RootState) => state.topImgSlice.data);
    const loading = useSelector((state:RootState) => state.topNoticeCommentSlice.loading);
    const error = useSelector((state:RootState) => state.topNoticeCommentSlice.error);
   
    console.log("topImgtopImgtopImg",topImg);

  const imgLength = useSelector((state: RootState) => state.topImgSlice.data.data.length);
 console.log("imgLengthimgLengthimgLength",imgLength);
    const currentBigImage = topImg.filter(
      (num, index) => index === count
    )[0] as ifProps;
  console.log("currentBigImagecurrentBigImagecurrentBigImage",currentBigImage);
    const dispatch = useDispatch();

    if (loading) {
        return (
          <Spin
            size="large"
            style={{
              marginTop: 200,
              marginBottom: 200,
              marginLeft: "auto",
              marginRight: "auto",
              width: "100%",
            }}
          />
        );
      }
      if (error) {
        return <div>网站出错：{error}</div>;
      }
  return data === null ? (
    <h2>loading...</h2>
  ) :  (
    <div className="p-main-photos js-main-photos rstdtl-top-main-photos">
      <div className="p-main-photos__view">
        <div className="bx-wrapper">
          <div className="bx-viewport">
            <ul className="js-mainphoto-slider p-main-photos__slider">
              <li className="p-main-photos__slider-item js-mainphoto-box">
                <img
                  alt="吾照里 - メイン写真:"
                  className="p-main-photos__slider-image js-mainphoto-image loading"
                //   src="https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/138831/138831205.jpg?token=fafbba3&amp;api=v2"
                  data-was-processed="true"

                    src={`${data.imgPath}`}
                />
              </li>
              {/* <li className="p-main-photos__slider-item js-mainphoto-box">
                <img
                  alt="吾照里 - メイン写真:"
                  className="p-main-photos__slider-image js-mainphoto-image loading"
                  src="https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/133548/133548352.jpg?token=abae45b&amp;api=v2"
                  data-was-processed="true"
                />
              </li>
              <li className="p-main-photos__slider-item js-mainphoto-box">
                <img
                  alt="吾照里 - メイン写真:"
                  className="p-main-photos__slider-image js-mainphoto-image loading"
                  src="https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/95941/95941975.jpg?token=97aee13&amp;api=v2"
                  data-was-processed="true"
                />
              </li>
              <li className="p-main-photos__slider-item js-mainphoto-box">
                <img
                  alt="吾照里 - メイン写真:"
                  className="p-main-photos__slider-image js-mainphoto-image loading"
                  src="https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/63962/63962332.jpg?token=86659e9&amp;api=v2"
                  data-was-processed="true"
                />
              </li>
              <li className="p-main-photos__slider-item js-mainphoto-box">
                <img
                  alt="吾照里 - メイン写真:"
                  className="p-main-photos__slider-image js-mainphoto-image loading"
                  src="https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/79476/79476670.jpg?token=5163963&amp;api=v2"
                  data-was-processed="true"
                />
              </li>
              <li className="p-main-photos__slider-item js-mainphoto-box">
                <img
                  alt="吾照里 - メイン写真:"
                  className="p-main-photos__slider-image js-mainphoto-image loading"
                  src="https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/63962/63962334.jpg?token=9bfc464&amp;api=v2"
                  data-was-processed="true"
                />
              </li>
              <li className="p-main-photos__slider-item js-mainphoto-box">
                <img
                  alt="吾照里 - メイン写真:"
                  className="p-main-photos__slider-image js-mainphoto-image loading"
                  src="https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/79476/79476716.jpg?token=2439ab6&amp;api=v2"
                  data-was-processed="true"
                />
              </li>
              <li className="p-main-photos__slider-item js-mainphoto-box">
                <img
                  alt="吾照里 - メイン写真:"
                  className="p-main-photos__slider-image js-mainphoto-image loading"
                  src="https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/79476/79476909.jpg?token=abfa63c&amp;api=v2"
                  data-was-processed="true"
                />
              </li>
              <li className="p-main-photos__slider-item js-mainphoto-box">
                <img
                  alt="吾照里 - メイン写真:"
                  className="p-main-photos__slider-image js-mainphoto-image loading"
                  src="https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/79476/79476914.jpg?token=7090da0&amp;api=v2"
                  data-was-processed="true"
                />
              </li>
              <li
                className="p-main-photos__slider-item js-mainphoto-box"
                id="p-main-photos-nnnnn"
              >
                <img
                  alt="吾照里 - メイン写真:"
                  className="p-main-photos__slider-image js-mainphoto-image loading"
                  src="https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/134693/134693895.jpg?token=b8d8942&amp;api=v2"
                  data-was-processed="true"
                />
              </li> */}
            </ul>
          </div>
          <div className="bx-controls bx-has-controls-direction">
            <div className="bx-controls-direction">
              <a className="bx-prev" href=""  onClick={() => dispatch(increment(0))}>
                Prev
              </a>
              <a className="bx-next" href=""  onClick={() => dispatch(decrement(0))}>
                Next
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="js-switch-photo p-main-photos__switch-photo-wrap">
        <ul className="p-main-photos__switch-photo-list">
          <li className="p-main-photos__switch-photo">
            <a
              href="#"
              className="js-hoverring-switch-photo p-main-photos__switch-photo-target js-main-photos__switch-photo-target"
              data-slide-index="0"
            >
              <img
                alt="吾照里 - メイン写真:"
                width="60"
                height="60"
                src="https://tblg.k-img.com/resize/100x100c/restaurant/images/Rvw/138831/138831205.jpg?token=d4a9fce&amp;api=v2"
                className="loading"
                data-was-processed="true"
              />
            </a>
          </li>
          <li className="p-main-photos__switch-photo">
            <a
              href="#"
              className="js-hoverring-switch-photo p-main-photos__switch-photo-target js-main-photos__switch-photo-target"
              data-slide-index="1"
            >
              <img
                alt="吾照里 - メイン写真:"
                width="60"
                height="60"
                src="https://tblg.k-img.com/resize/100x100c/restaurant/images/Rvw/133548/133548352.jpg?token=72776b4&amp;api=v2"
                className="loading"
                data-was-processed="true"
              />
            </a>
          </li>
          <li className="p-main-photos__switch-photo">
            <a
              href="#"
              className="js-hoverring-switch-photo p-main-photos__switch-photo-target js-main-photos__switch-photo-target"
              data-slide-index="2"
            >
              <img
                alt="吾照里 - メイン写真:"
                width="60"
                height="60"
                src="https://tblg.k-img.com/resize/100x100c/restaurant/images/Rvw/95941/95941975.jpg?token=243abf7&amp;api=v2"
                className="loading"
                data-was-processed="true"
              />
            </a>
          </li>
          <li className="p-main-photos__switch-photo">
            <a
              href="#"
              className="js-hoverring-switch-photo p-main-photos__switch-photo-target js-main-photos__switch-photo-target"
              data-slide-index="3"
            >
              <img
                alt="吾照里 - メイン写真:"
                width="60"
                height="60"
                src="https://tblg.k-img.com/resize/100x100c/restaurant/images/Rvw/63962/63962332.jpg?token=cd969d7&amp;api=v2"
                className="loading"
                data-was-processed="true"
              />
            </a>
          </li>
          <li className="p-main-photos__switch-photo">
            <a
              href="#"
              className="js-hoverring-switch-photo p-main-photos__switch-photo-target js-main-photos__switch-photo-target"
              data-slide-index="4"
            >
              <img
                alt="吾照里 - メイン写真:"
                width="60"
                height="60"
                src="https://tblg.k-img.com/resize/100x100c/restaurant/images/Rvw/79476/79476670.jpg?token=f9b0fbf&amp;api=v2"
                className="loading"
                data-was-processed="true"
              />
            </a>
          </li>
          <li className="p-main-photos__switch-photo">
            <a
              href="#"
              className="js-hoverring-switch-photo p-main-photos__switch-photo-target js-main-photos__switch-photo-target"
              data-slide-index="5"
            >
              <img
                alt="吾照里 - メイン写真:"
                width="60"
                height="60"
                src="https://tblg.k-img.com/resize/100x100c/restaurant/images/Rvw/63962/63962334.jpg?token=dab64c0&amp;api=v2"
                className="loading"
                data-was-processed="true"
              />
            </a>
          </li>
          <li className="p-main-photos__switch-photo">
            <a
              href="#"
              className="js-hoverring-switch-photo p-main-photos__switch-photo-target js-main-photos__switch-photo-target"
              data-slide-index="6"
            >
              <img
                alt="吾照里 - メイン写真:"
                width="60"
                height="60"
                src="https://tblg.k-img.com/resize/100x100c/restaurant/images/Rvw/79476/79476716.jpg?token=9f32786&amp;api=v2"
                className="loading"
                data-was-processed="true"
              />
            </a>
          </li>
          <li className="p-main-photos__switch-photo">
            <a
              href="#"
              className="js-hoverring-switch-photo p-main-photos__switch-photo-target js-main-photos__switch-photo-target"
              data-slide-index="7"
            >
              <img
                alt="吾照里 - メイン写真:"
                width="60"
                height="60"
                src="https://tblg.k-img.com/resize/100x100c/restaurant/images/Rvw/79476/79476909.jpg?token=55ecbec&amp;api=v2"
                className="loading"
                data-was-processed="true"
              />
            </a>
          </li>
          <li className="p-main-photos__switch-photo">
            <a
              href="#"
              className="js-hoverring-switch-photo p-main-photos__switch-photo-target js-main-photos__switch-photo-target"
              data-slide-index="8"
            >
              <img
                alt="吾照里 - メイン写真:"
                width="60"
                height="60"
                src="https://tblg.k-img.com/resize/100x100c/restaurant/images/Rvw/79476/79476914.jpg?token=830cdaf&amp;api=v2"
                className="loading"
                data-was-processed="true"
              />
            </a>
          </li>
          <li className="p-main-photos__switch-photo">
            <a
              href="#"
              className="js-hoverring-switch-photo p-main-photos__switch-photo-target js-main-photos__switch-photo-target active"
              data-slide-index="9"
            >
              <img
                alt="吾照里 - メイン写真:"
                width="60"
                height="60"
                src="https://tblg.k-img.com/resize/100x100c/restaurant/images/Rvw/134693/134693895.jpg?token=9107c26&amp;api=v2"
                className="loading"
                data-was-processed="true"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
