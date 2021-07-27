import {
  FETCH_NEWANDRECOMMENDGOODSES_FAIL,
  FETCH_NEWANDRECOMMENDGOODSES_START,
  FETCH_NEWANDRECOMMENDGOODSES_SUCCESS,
  NewAndRecommendGoodsesAction,
} from "./fetchNewAndRecommendGoodsesActions";

export interface NewAndRecommendGoodsesState {
  newAndReGoodsesList: { data: [] };
  loading: boolean;
  error: string | null;
}

const defaultState: NewAndRecommendGoodsesState = {
  loading: true,
  error: null,
  newAndReGoodsesList: { data: [] },
};

export default (state = defaultState, action: NewAndRecommendGoodsesAction) => {
  switch (action.type) {
    case FETCH_NEWANDRECOMMENDGOODSES_START:
      return { ...state, loading: true };
    case FETCH_NEWANDRECOMMENDGOODSES_SUCCESS:
      return { ...state, loading: false, newAndReGoodsesList: action.payload };
    case FETCH_NEWANDRECOMMENDGOODSES_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
