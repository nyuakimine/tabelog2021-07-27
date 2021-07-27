import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import axios from "axios";

// FETCH_CROUSELS_START 用来显示loading的icon
// 加载中时显示loading
export const FETCH_CROUSELS_START = "FETCH_CROUSELS_START"; // 正在调用推荐信息api

export const FETCH_CROUSELS_SUCCESS = "FETCH_CROUSELS_SUCCESS"; // 推荐信息api调用成功
export const FETCH_CROUSELS_FAIL = "FETCH_CROUSELS_FAIL"; // 推荐信息api调用失败

interface FetchCrouselsSuccessAction {
  type: typeof FETCH_CROUSELS_SUCCESS;
  payload: any;
}

interface FetchCrouselsFailAction {
  type: typeof FETCH_CROUSELS_FAIL;
  payload: any;
}

interface FetchCrouselsStartAction {
  type: typeof FETCH_CROUSELS_START;
}

export const fetchCrouselsStartActionCreator =
  (): FetchCrouselsStartAction => {
    return {
      type: FETCH_CROUSELS_START,
    };
  };

export const fetchCrouselsSuccessActionCreator = (
  data
): FetchCrouselsSuccessAction => {
  return {
    type: FETCH_CROUSELS_SUCCESS,
    payload: data,
  };
};

export const fetchCrouselsFailActionCreator = (
  error
): FetchCrouselsFailAction => {
  return {
    type: FETCH_CROUSELS_FAIL,
    payload: error,
  };
};
export type CrouselsAction =
  | FetchCrouselsStartAction
  | FetchCrouselsSuccessAction
  | FetchCrouselsFailAction; 


// thunk 可以返回一个函数，而不一定是js对象
// 在一个thunk action中可以完成一些列连续的action操作
// 并且可以处理异步逻辑
// 业务逻辑可以从ui层面挪到这里，代码分层会更清晰
export const fetchCrouselsDataActionCreator = (): ThunkAction<
  void,
  RootState,
  unknown,
  CrouselsAction
> => async (dispatch, getState) => {
  dispatch(fetchCrouselsStartActionCreator());
  try {
    const { data } = await axios.post(
      "http://localhost:8081/crousels"
    );
    dispatch(fetchCrouselsSuccessActionCreator(data));
  } catch (error) {
    dispatch(fetchCrouselsFailActionCreator(error.message));
  }
};