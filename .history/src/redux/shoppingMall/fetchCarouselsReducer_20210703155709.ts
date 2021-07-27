import {
      FETCH_CAROUSELS_FAIL,
      FETCH_CAROUSELS_START,
      FETCH_CAROUSELS_SUCCESS,
      CarouselsAction,
    } from "./fetchCarouselsActions";
    
    export interface CarouselsState {
        carouselsUrl: {data:[]};
      loading: boolean;
      error: string | null;
    }
    
    const defaultState: CarouselsState = {
      loading: true,
      error: null,
    carouselsUrl: {data:[]},
    };
    
    export default (state = defaultState, action: CarouselsAction) => {
      switch (action.type) {
        case FETCH_CAROUSELS_START:
          return { ...state, loading: true };
        case FETCH_CAROUSELS_SUCCESS:
          return { ...state, loading: false, CarouselsList: action.payload };
        case FETCH_CAROUSELS_FAIL:
          return { ...state, loading: false, error: action.payload };
        default:
          return state;
      }
    };
    