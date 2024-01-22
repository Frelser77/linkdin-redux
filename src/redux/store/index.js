import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import fetchProfileReducer from "../slice/fetchProfileReducer";
import queryParamReducer from "../slice/queryParamReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  fetchProfile: fetchProfileReducer,
  queryParam: queryParamReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persiStore = persistStore(store);
