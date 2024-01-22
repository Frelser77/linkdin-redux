import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	storage: storage,
};

const rootReducer = combineReducers({});

const persistedReducers = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducers,
});

export const persiStore = persistStore(store);
