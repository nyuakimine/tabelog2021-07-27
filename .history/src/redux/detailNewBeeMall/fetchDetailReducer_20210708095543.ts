// import {
//       FETCH_DETAIL_FAIL,
//       FETCH_DETAIL_START,
//       FETCH_DETAIL_SUCCESS,
//       DetailAction,
//     } from "./fetchDetailActions";
    
//     export interface DetailState {
//       detailUrl: {data:[]};
//       loading: boolean;
//       error: string | null;
//     }
    
//     const defaultState: DetailState = {
//       loading: true,
//       error: null,
//    detailUrl: {data:[]},
//     };
    
//     export default (state = defaultState, action: DetailAction) => {
//       switch (action.type) {
//         case FETCH_DETAIL_START:
//           return { ...state, loading: true };
//         case FETCH_DETAIL_SUCCESS:
//           return { ...state, loading: false,detailUrl: action.payload };
//         case FETCH_DETAIL_FAIL:
//           return { ...state, loading: false, error: action.payload };
//         default:
//           return state;
//       }
//     };
    