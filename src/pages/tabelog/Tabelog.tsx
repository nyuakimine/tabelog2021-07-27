import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DetailTitle } from "../../components/detailTitle/DetailTitle";
import {RestaurantDesc} from "../../components/restaurantDesc"
import { RouteComponentProps, useParams } from "react-router-dom";
import {fetchDetailTitleDataActionCreator} from "../../redux/detailTitle/fetchDetailTitleListSlice"
import {fetchRestaurantDescDataActionCreator} from "../../redux/restaurantDesc/restaurantDesc"
import "./tabelog1.css"
import "./tabelog2.css"
//import {detailTitleListSlice} from "../../redux/detailTitle/fetchDetailTitleListSlice"
interface MatchParams {
  id: string;
}
export const Tabelog: React.FC<RouteComponentProps<MatchParams>> = () => {
   const { id } = useParams<MatchParams>();
   const dispatch = useDispatch();
   useEffect(() => {
     dispatch(fetchDetailTitleDataActionCreator({ id: id}));
     dispatch(fetchRestaurantDescDataActionCreator({ id: id}));

   }, []);
  return (
    <div>
      <DetailTitle></DetailTitle>
      <RestaurantDesc></RestaurantDesc>
    </div>
  );
};
