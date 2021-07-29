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

export const TopImg: React.FC<pIf> = ({ data }) => {
  console.log("datadatadata", data);
  const loading = useSelector((state: RootState) => state.topNoticeCommentSlice.loading);
  const error = useSelector((state: RootState) => state.topNoticeCommentSlice.error);

  const count = useSelector((state: RootState) => state.topImg.counter);

  const imgLength = useSelector((state: RootState) => state.topImgSlice.data.data.length);
  console.log("imgLengthimgLengthimgLength", imgLength);
  debugger;

  useEffect(() => {
    const currentBigImage = data.filter((num, index) => index === count)[0] as ifProps;
    console.log("currentBigImagecurrentBigImagecurrentBigImage", currentBigImage);
  }, []);
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
  return data === undefined ? (
    <h2>loading...</h2>
  ) : (
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
                  src={`${currentBigImage.imgPath}`}
                />
              </li>
            </ul>
          </div>
          <div className="bx-controls bx-has-controls-direction">
            <div className="bx-controls-direction">
              <a
                className="bx-prev"
                href=""
                onClick={() => dispatch(increment(imgLength))}
              >
                Prev
              </a>
              <a
                className="bx-next"
                href=""
                onClick={() => dispatch(decrement(imgLength))}
              >
                Next
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="js-switch-photo p-main-photos__switch-photo-wrap">
        <ul className="p-main-photos__switch-photo-list">
          {data.map((img, idx) => {
            return (
              <li className="p-main-photos__switch-photo" key={idx}>
                <a
                  href="#"
                  className="js-hoverring-switch-photo p-main-photos__switch-photo-target js-main-photos__switch-photo-target"
                  data-slide-index="0"
                >
                  <img
                    alt="吾照里 - メイン写真:"
                    width="60"
                    height="60"
                    className="loading"
                    data-was-processed="true"
                    src={`${img.imgPath}`}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
