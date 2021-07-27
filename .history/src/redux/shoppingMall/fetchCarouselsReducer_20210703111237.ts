import {
      FETCH_CROUSELS_FAIL,
      FETCH_CROUSELS_START,
      FETCH_CROUSELS_SUCCESS,
      CrouselsAction,
    } from "./fetchCarouselsActions";
    
    export interface CrouselsState {
      categoryList: {data:[]};
      loading: boolean;
      error: string | null;
    }
    
    const defaultState: CrouselsState = {
      loading: true,
      error: null,
      categoryList: {data:[]},
    };
    
    export default (state = defaultState, action: CrouselsAction) => {
      switch (action.type) {
        case FETCH_CROUSELS_START:
          return { ...state, loading: true };
        case FETCH_CROUSELS_SUCCESS:
          return { ...state, loading: false, CrouselsList: action.payload };
        case FETCH_CROUSELS_FAIL:
          return { ...state, loading: false, error: action.payload };
        default:
          return state;
      }
    };
    