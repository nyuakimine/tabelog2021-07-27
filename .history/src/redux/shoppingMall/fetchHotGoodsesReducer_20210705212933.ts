import {
  FETCH_HOTGOODSES_FAIL,
  FETCH_HOTGOODSES_START,
  FETCH_HOTGOODSES_SUCCESS,
  HotGoodsesAction,
} from "./fetchHotGoodsesActions";

export interface HotGoodsesState {
  hotGoodseList: { data: [] };
  loading: boolean;
  error: string | null;
}

const defaultState: HotGoodsesState = {
  loading: true,
  error: null,
  hotGoodseList: { data: [] },
};

export default (state = defaultState, action: HotGoodsesAction) => {
  switch (action.type) {
    case FETCH_HOTGOODSES_START:
      return { ...state, loading: true };
    case FETCH_HOTGOODSES_SUCCESS:
      return { ...state, loading: false, hotGoodseList: action.payload };
      case FETCH_HOTGOODSES_SUCCESS:
        return { ...state, loading: false, ifProps: action.payload };
    case FETCH_HOTGOODSES_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
