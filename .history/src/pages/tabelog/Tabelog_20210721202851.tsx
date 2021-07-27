import React, { useEffect, useRef, useState } from "react";
import { DetailTitle } from "../../components/detailTitle/DetailTitle";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { RouteComponentProps, useParams } from "react-router-dom";
import "./tabelog1.css"
import "./tabelog2.css"
//import {detailTitleListSlice} from "../../redux/detailTitle/fetchDetailTitleListSlice"
// interface MatchParams {
//   id: string;
// }
export const Tabelog: React.FC= () => {
  // const { id } = useParams<MatchParams>();
  return (
    <div>
      <DetailTitle ></DetailTitle>
    </div>
  );
};
