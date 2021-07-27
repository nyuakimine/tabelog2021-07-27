    
    
    import { ThunkAction } from "redux-thunk";
    import { RootState } from "../store";
    import axios from "axios";
    
    // FETCH_HOTGOODSES_START 用来显示loading的icon
    // 加载中时显示loading
    export const FETCH_HOTGOODSES_START = "FETCH_HOTGOODSES_START"; // 正在调用推荐信息api
    
    export const FETCH_HOTGOODSES_SUCCESS = "FETCH_HOTGOODSES_SUCCESS"; // 推荐信息api调用成功
    export const FETCH_HOTGOODSES_FAIL = "FETCH_HOTGOODSES_FAIL"; // 推荐信息api调用失败
    
    interface FetchHotGoodsesSuccessAction {
      type: typeof FETCH_HOTGOODSES_SUCCESS;
      payload: any;
    }
    
    interface FetchHotGoodsesFailAction {
      type: typeof FETCH_HOTGOODSES_FAIL;
      payload: any;
    }
    
    interface FetchHotGoodsesStartAction {
      type: typeof FETCH_HOTGOODSES_START;
    }
    
    export const fetchHotGoodsesStartActionCreator =
      (): FetchHotGoodsesStartAction => {
        return {
          type: FETCH_HOTGOODSES_START,
        };
      };
    
    export const fetchHotGoodsesSuccessActionCreator = (
      data
    ): FetchHotGoodsesSuccessAction => {
      return {
        type: FETCH_HOTGOODSES_SUCCESS,
        payload: data,
      };
    };
    
    export const fetchHotGoodsesFailActionCreator = (
      error
    ): FetchHotGoodsesFailAction => {
      return {
        type: FETCH_HOTGOODSES_FAIL,
        payload: error,
      };
    };
    export type HotGoodsesAction =
      | FetchHotGoodsesStartAction
      | FetchHotGoodsesSuccessAction
      | FetchHotGoodsesFailAction; 
    
    
    // thunk 可以返回一个函数，而不一定是js对象
    // 在一个thunk action中可以完成一些列连续的action操作
    // 并且可以处理异步逻辑
    // 业务逻辑可以从ui层面挪到这里，代码分层会更清晰
    export const fetchHotGoodsesDataActionCreator = (): ThunkAction<
      void,
      RootState,
      unknown,
      HotGoodsesAction
    > => async (dispatch, getState) => {
      dispatch(fetchHotGoodsesStartActionCreator());
      try {
        const { data } = await axios.post(
          "http://localhost:8081/hotGoodses"
        );
        dispatch(fetchHotGoodsesSuccessActionCreator(data));
      } catch (error) {
        dispatch(fetchHotGoodsesFailActionCreator(error.message));
      }
    };