import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import axios from "axios";

// FETCH_DETAIL_START 用来显示loading的icon
// 加载中时显示loading
export const FETCH_DETAIL_START = "FETCH_DETAIL_START"; // 正在调用推荐信息api

export const FETCH_DETAIL_SUCCESS = "FETCH_DETAIL_SUCCESS"; // 推荐信息api调用成功
export const FETCH_DETAIL_FAIL = "FETCH_DETAIL_FAIL"; // 推荐信息api调用失败

interface FetchDetailSuccessAction {
  type: typeof FETCH_DETAIL_SUCCESS;
  payload: any;
}

interface FetchDetailFailAction {
  type: typeof FETCH_DETAIL_FAIL;
  payload: any;
}

interface FetchDetailStartAction {
  type: typeof FETCH_DETAIL_START;
}

export const fetchDetailStartActionCreator =
  (): FetchDetailStartAction => {
    return {
      type: FETCH_DETAIL_START,
    };
  };

export const fetchDetailSuccessActionCreator = (
  data
): FetchDetailSuccessAction => {
  return {
    type: FETCH_DETAIL_SUCCESS,
    payload: data,
  };
};

export const fetchDetailFailActionCreator = (
  error
): FetchDetailFailAction => {
  return {
    type: FETCH_DETAIL_FAIL,
    payload: error,
  };
};
export type DetailAction =
  | FetchDetailStartAction
  | FetchDetailSuccessAction
  | FetchDetailFailAction; 


// thunk 可以返回一个函数，而不一定是js对象
// 在一个thunk action中可以完成一些列连续的action操作
// 并且可以处理异步逻辑
// 业务逻辑可以从ui层面挪到这里，代码分层会更清晰
export const fetchDetailDataActionCreator = (): ThunkAction<
  void,
  RootState,
  unknown,
  DetailAction
> => async (dispatch, getState) => {
  dispatch(fetchDetailStartActionCreator());
  try {
    const { data } = await axios.post(
      "http://localhost:8081/detailLeftImg{goodsId}"
    );
    dispatch(fetchDetailSuccessActionCreator(data));
  } catch (error) {
    dispatch(fetchDetailFailActionCreator(error.message));
  }
};