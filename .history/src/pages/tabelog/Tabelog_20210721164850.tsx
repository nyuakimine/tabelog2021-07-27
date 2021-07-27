import React, { useEffect, useRef, useState } from "react";
import { DetailTitle } from "../../components/detailTitle/DetailTitle";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import "./tabelog1.css"
import "./tabelog2.css"
//import {detailTitleListSlice} from "../../redux/detailTitle/fetchDetailTitleListSlice"

export const Tabelog: React.FC = () => {
    //const tabelog = useSelector((state) => state.detailTitleListSlice.data);
  return (
    <body>
      <DetailTitle></DetailTitle>
    </body>
  );
};
