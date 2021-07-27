import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import axios from "axios";

// FETCH_CAROUSELS_START 用来显示loading的icon
// 加载中时显示loading
export const FETCH_CAROUSELS_START = "FETCH_CAROUSELS_START"; // 正在调用推荐信息api

export const FETCH_CAROUSELS_SUCCESS = "FETCH_CAROUSELS_SUCCESS"; // 推荐信息api调用成功
export const FETCH_CAROUSELS_FAIL = "FETCH_CAROUSELS_FAIL"; // 推荐信息api调用失败

interface FetchCarouselsSuccessAction {
  type: typeof FETCH_CAROUSELS_SUCCESS;
  payload: any;
}

interface FetchCarouselsFailAction {
  type: typeof FETCH_CAROUSELS_FAIL;
  payload: any;
}

interface FetchCarouselsStartAction {
  type: typeof FETCH_CAROUSELS_START;
}

export const fetchCarouselsStartActionCreator =
  (): FetchCarouselsStartAction => {
    return {
      type: FETCH_CAROUSELS_START,
    };
  };

export const fetchCarouselsSuccessActionCreator = (
  data
): FetchCarouselsSuccessAction => {
  return {
    type: FETCH_CAROUSELS_SUCCESS,
    payload: data,
  };
};

export const fetchCarouselsFailActionCreator = (
  error
): FetchCarouselsFailAction => {
  return {
    type: FETCH_CAROUSELS_FAIL,
    payload: error,
  };
};
export type CarouselsAction =
  | FetchCarouselsStartAction
  | FetchCarouselsSuccessAction
  | FetchCarouselsFailAction; 


// thunk 可以返回一个函数，而不一定是js对象
// 在一个thunk action中可以完成一些列连续的action操作
// 并且可以处理异步逻辑
// 业务逻辑可以从ui层面挪到这里，代码分层会更清晰
export const fetchCarouselsDataActionCreator = (): ThunkAction<
  void,
  RootState,
  unknown,
  CarouselsAction
> => async (dispatch, getState) => {
  dispatch(fetchCarouselsStartActionCreator());
  try {
    const { data } = await axios.post(
      "http://localhost:8081/carousels"
    );
    dispatch(fetchCarouselsSuccessActionCreator(data));
  } catch (error) {
    dispatch(fetchCarouselsFailActionCreator(error.message));
  }
};