import React, { useEffect, useRef, useState } from "react";
import { DetailTitle } from "../../components/detailTitle/DetailTitle";
import "./tabelog1.css"
import "./tabelog2.css"
//import {detailTitleListSlice} from "../../redux/detailTitle/fetchDetailTitleListSlice"
interface MatchParams {
  id: string;
}
export const Tabelog: React.FC<RouteComponentProps<MatchParams>> = () => {
  //const tabelog = useSelector((state:RootState) => state.detailTitleListSlice.data);
   const { id } = useParams<MatchParams>();
  return (
    <div>
      <DetailTitle></DetailTitle>
    </div>
  );
};
