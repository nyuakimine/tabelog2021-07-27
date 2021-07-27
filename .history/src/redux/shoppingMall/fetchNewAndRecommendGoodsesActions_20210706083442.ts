    
    
    import { ThunkAction } from "redux-thunk";
    import { RootState } from "../store";
    import axios from "axios";
    
    // FETCH_NEWANDRECOMMENDGOODSES_START 用来显示loading的icon
    // 加载中时显示loading
    export const FETCH_NEWANDRECOMMENDGOODSES_START = "FETCH_NEWANDRECOMMENDGOODSES_START"; // 正在调用推荐信息api
    
    export const FETCH_NEWANDRECOMMENDGOODSES_SUCCESS = "FETCH_NEWANDRECOMMENDGOODSES_SUCCESS"; // 推荐信息api调用成功
    export const FETCH_NEWANDRECOMMENDGOODSES_FAIL = "FETCH_NEWANDRECOMMENDGOODSES_FAIL"; // 推荐信息api调用失败
    
    interface FetchNewAndRecommendGoodsesSuccessAction {
      type: typeof FETCH_NEWANDRECOMMENDGOODSES_SUCCESS;
      payload: any;
    }
    
    interface FetchNewAndRecommendGoodsesFailAction {
      type: typeof FETCH_NEWANDRECOMMENDGOODSES_FAIL;
      payload: any;
    }
    
    interface FetchNewAndRecommendGoodsesStartAction {
      type: typeof FETCH_NEWANDRECOMMENDGOODSES_START;
    }
    
    export const fetchNewAndRecommendGoodsesStartActionCreator =
      (): FetchNewAndRecommendGoodsesStartAction => {
        return {
          type: FETCH_NEWANDRECOMMENDGOODSES_START,
        };
      };
    
    export const fetchNewAndRecommendGoodsesSuccessActionCreator = (
      data
    ): FetchNewAndRecommendGoodsesSuccessAction => {
      return {
        type: FETCH_NEWANDRECOMMENDGOODSES_SUCCESS,
        payload: data,
      };
    };
    
    export const fetchNewAndRecommendGoodsesFailActionCreator = (
      error
    ): FetchNewAndRecommendGoodsesFailAction => {
      return {
        type: FETCH_NEWANDRECOMMENDGOODSES_FAIL,
        payload: error,
      };
    };
    export type NewAndRecommendGoodsesAction =
      | FetchNewAndRecommendGoodsesStartAction
      | FetchNewAndRecommendGoodsesSuccessAction
      | FetchNewAndRecommendGoodsesFailAction; 
    
    
    // thunk 可以返回一个函数，而不一定是js对象
    // 在一个thunk action中可以完成一些列连续的action操作
    // 并且可以处理异步逻辑
    // 业务逻辑可以从ui层面挪到这里，代码分层会更清晰
    export const fetchNewAndRecommendGoodsesDataActionCreator = (): ThunkAction<
      void,
      RootState,
      unknown,
      NewAndRecommendGoodsesAction
    > => async (dispatch, getState) => {
      dispatch(fetchNewAndRecommendGoodsesStartActionCreator());
      try {
        const { data } = await axios.post(
          "http://localhost:8081/newAndRecommendGoodses"
        );
        dispatch(fetchNewAndRecommendGoodsesSuccessActionCreator(data));
      } catch (error) {
        dispatch(fetchNewAndRecommendGoodsesFailActionCreator(error.message));
      }
    };