import { createStore, applyMiddleware } from 'redux';
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";
import thunk from "redux-thunk";
import { actionLog } from "./middlewares/actionLog";
import { productDetailSlice } from "./productDetail/slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productSearchSlice } from "./productSearch/slice";
import { userSlice } from "./user/slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { shoppingCartSlice } from "./shoppingCart/slice";
import { orderSlice } from "./order/slice";
import  fetchCategoriesReducer  from "./shoppingMall/fetchCategoriesReducer";
import  fetchCarouselsReducer  from "./shoppingMall/fetchCarouselsReducer";
import  fetchHotGoodsesReducer  from "./shoppingMall/fetchHotGoodsesReducer";
import fetchnewAndRecommendGoodsesReducer from "./shoppingMall/fetchnewAndRecommendGoodsesReducer"
import {newBeeMallDetailSlice} from "./detailNewBeeMall/fetchDetailActions"
import {slice} from '../components/leftImg/leftImgSlice'
import {newBeeMallDescSlice} from './descSlice/fetchDescListSlice'
import {newBeeMallQaSlice} from './qaListSlice/fetchQaListSlice'
import {newBeeMallReviewSlice} from './reviewListSlice/fetchReviewListSlice'
import {newBeeMallQaPagingSlice} from './qaPageSlice/fetchQaPageSlice'
import {newBeeMallOpenAndCloseSlice} from './OpenCloseReviewSlice/openCloseReviewSlice'
import {newBeeMallQaInsertSlice} from './qaInsertSlice/fetchQaInsertSlice'
//import {newBeeMallHelpNumSlice} from './reviewHelpNumListSlice/fetchHeleNumSlice'
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"]
}
// https://github.com/nyuakimine/crousele
const rootReducer = combineReducers({
    language: languageReducer,
    recommendProducts: recommendProductsReducer,
    productDetail: productDetailSlice.reducer,
    productSearch: productSearchSlice.reducer,
    user: userSlice.reducer,
    shoppingCart: shoppingCartSlice.reducer,
    order: orderSlice.reducer,
    categories: fetchCategoriesReducer,
    carousels: fetchCarouselsReducer,
    hotGoodses: fetchHotGoodsesReducer, 
    newAndRecommendGoodses: fetchnewAndRecommendGoodsesReducer,
    detailNewBeeMall: newBeeMallDetailSlice.reducer,
    leftImg: slice.reducer,
    descSlice: newBeeMallDescSlice.reducer,
    qaListSlice: newBeeMallQaSlice.reducer,
    reviewListSlice: newBeeMallReviewSlice.reducer,
    qaPageSlice: newBeeMallQaPagingSlice.reducer,
    openCloseReviewSlice: newBeeMallOpenAndCloseSlice.reducer,
    qaInsertSlice: newBeeMallQaInsertSlice.reducer,
   // helpNumReviewSlice: newBeeMallHelpNumSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = createStore(rootReducer, applyMiddleware(thunk, actionLog));
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), actionLog],
  devTools: true,
});

const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export default { store, persistor };